import axios from 'axios'
import queryString from 'query-string'

import { ReducerRegistry } from '../../../base/redux'

import { openModal, closeModal } from '../../Modal/ducks'
import NoticeModal from '../../Modal/components/NoticeModal'

import { RecordStatus, LANG_PREFIX } from './constants'
import { USEE_LS_LOGIN_KEY } from '../../usee_config'

export const SET_FIND_RECORDING_FILE_FILTER = 'SET_FIND_RECORDING_FILE_FILTER'
export const SET_ALL_FILES_CHECKED = 'SET_ALL_FILES_CHECKED'
export const SET_CHECKED_FILES = 'SET_CHECKED_FILES'
export const SET_RECORDING_LIST = 'SET_RECORDING_LIST'

export const setFindRecordingFileFilter = (startDate, endDate, fileName) => {
    return {
        type: SET_FIND_RECORDING_FILE_FILTER,
        startDate,
        endDate,
        fileName
    }
}

export const downloadRecordItems = (t) => {
    return (dispatch, getState) => {
        const loginState = getState()[USEE_LS_LOGIN_KEY]
        const recordState = getState()['features/usee/Pages/ManageRecordings']

        if (recordState.checkedFiles.length === 1) {
            let jsonObj = new Object()

            jsonObj.path = recordState.checkedFiles
            jsonObj = queryString.stringify(jsonObj)

            axios({
                url: '/api/v1/RecordHistory/DownloadLinkList',
                method: 'post',
                headers: {
                    'Authorization': loginState?.loginUserInfo?.session_token,
                },
                data: jsonObj
            }).then(res => {
                const { status } = res.data

                if (status === RecordStatus.SUCCESSED) {
                    window.location.href = res.data.uri                    
                }
            }).catch((err => {
                console.log("RecordHistory", err)
            }))
        } else {
            _handleErrMsg('DOWNLOAD', dispatch, getState, t)
        }
    }
}

export const deleteRecordItems = (t) => {
    return (dispatch, getState) => {
        const loginState = getState()[USEE_LS_LOGIN_KEY]
        const recordState = getState()['features/usee/Pages/ManageRecordings']

        if (recordState.checkedFiles.length > 0) {
            let jsonObj = new Object()

            jsonObj.path = recordState.checkedFiles
            jsonObj = queryString.stringify(jsonObj)

            axios({
                url: '/api/v1/RecordHistory/DeleteList',
                method: 'post',
                headers: {
                    'Authorization': loginState?.loginUserInfo?.session_token,
                },
                data: jsonObj
            }).then(res => {
                const { status } = res.data

                if (status === RecordStatus.SUCCESSED) {
                    return dispatch(getRecordingListFromServer())
                }
            }).catch((err => {
                console.log("RecordHistory", err)
            }))
        } else {
            _handleErrMsg('DELETE', dispatch, getState, t)
        }
    }
}

export const setAllFilesChecked = () => {
    return {
        type : SET_ALL_FILES_CHECKED,
    }
}

export const setCheckedFiles = (checkItem) => {
    return {
        type: SET_CHECKED_FILES,
        checkItem
    }
}

export const getRecordingListFromServer = () => {
    return (dispatch, getState) => {
        const loginState = getState()[USEE_LS_LOGIN_KEY]

        axios({
            url: '/api/v1/RecordHistory/ListAll',
            headers: {
                'Authorization': loginState?.loginUserInfo?.session_token,
            }
        }).then(res => {
            const { status } = res.data

            if (status === RecordStatus.SUCCESSED) {
                return dispatch(setRecordingList(res.data.recordList))
            }
        }).catch((err => {
            console.log("RecordHistory", err)
        }))
    }
}

const setRecordingList = (recordingList) => {
    return {
        type: SET_RECORDING_LIST,
        recordingList
    }
}


const defaultState = {
    isCheckedAll: false,
    recordingList: [],
    checkedFiles: [],
    filterList: [],
}

ReducerRegistry.register('features/usee/Pages/ManageRecordings',
    (state = defaultState, action) => {
        switch (action.type) {
            case SET_FIND_RECORDING_FILE_FILTER : {
                const { startDate, endDate, fileName } = action
                const _filterList = []

                let range = {
                    start: Number.MIN_SAFE_INTEGER,
                    end: Number.MAX_SAFE_INTEGER
                }

                if (!startDate && endDate) {
                    let _endDate = new Date(endDate)

                    range.end = _endDate.setDate(_endDate.getDate() + 1)
                } else if (startDate && !endDate) {
                    range.start =  startDate
                } else if (startDate && endDate) {
                    range.start = startDate

                    let _endDate = new Date(endDate)

                    range.end = _endDate.setDate(_endDate.getDate() + 1)
                }

                for (const elem of state.recordingList) {
                    const _recordDate = new Number(new Date(elem.recordDate))

                    if (Number(range.start) <= _recordDate && Number(range.end) >= _recordDate) {
                        if (fileName !== '') {
                            if (elem.uid.includes(fileName)) {
                                _filterList.push(elem)
                            }
                        } else {
                            _filterList.push(elem)
                        }
                    }
                }

                return {
                    ...state,
                    filterList: _filterList
                }
            }

            case SET_ALL_FILES_CHECKED : {
                let checkedFiles = []

                if (!state.isCheckedAll) {
                    checkedFiles = state.filterList.map((elem) => {
                        const { path } = elem

                        return path
                    })
                }

                return {
                    ...state,
                    isCheckedAll: !state.isCheckedAll,
                    checkedFiles: checkedFiles
                }
            }

            case SET_CHECKED_FILES : {
                const { checkItem } = action

                const checkedFiles = state.checkedFiles.slice()

                const idx = checkedFiles.findIndex((elem) => {
                    return elem === checkItem.path
                })

                idx === -1
                    ? checkedFiles.push(checkItem)
                    : checkedFiles.splice(idx, 1)

                return {
                    ...state,
                    checkedFiles,
                }
            }

            case SET_RECORDING_LIST : {
                const { recordingList } = action

                return {
                    ...state,
                    recordingList,
                    filterList: recordingList
                }
            }
            default: {
                return state
            }
        }
    }
)

const _handleErrMsg = (type, dispatch, getState, t) => {
    let noticeMsg = t(`${LANG_PREFIX}.errEmptyMsg`)

    if (type === 'DOWNLOAD') {
        const { checkedFiles } = getState()['features/usee/Pages/ManageRecordings']

        if (checkedFiles.length > 1) {
            noticeMsg = t(`${LANG_PREFIX}.errSelectMsg`)
        }
    }

    dispatch(openModal(NoticeModal, { noticeMsg, onSubmit: () => { dispatch(closeModal())}}))
}