import axios from 'axios'
import queryString from 'query-string'

import { ReducerRegistry } from '../../../base/redux'
import { RecordStatus } from './constants'
import { USEE_LS_LOGIN_KEY } from '../../usee_config'

export const SET_FIND_RECORDING_FILE_FILTER = 'SET_FIND_RECORDING_FILE_FILTER'
export const SET_DELETE_RECORDING_ITEMS = 'SET_DELETE_RECORDING_ITEMS'
export const SET_DOWNLOAD_RECORDING_ITEMS = 'SET_DOWNLOAD_RECORDING_ITEMS'
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

export const setDeleteRecordingItems = () => {
    return {
        type: SET_DELETE_RECORDING_ITEMS,
    }
}

export const setDownloadRecordingItems = () => {
    return {
        type : SET_DOWNLOAD_RECORDING_ITEMS,
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

            case SET_DELETE_RECORDING_ITEMS : {
                return {
                    ...state,
                    checkedFiles: state.checkedFiles
                }
            }

            case SET_DOWNLOAD_RECORDING_ITEMS : {
                return {
                    ...state,
                    checkedFiles: state.checkedFiles
                }
            }

            case SET_ALL_FILES_CHECKED : {
                let checkedFiles = []

                if (!state.isCheckedAll) {
                    checkedFiles = state.filterList.map((elem) => {
                        const { uid, path } = elem

                        return { uid, path }
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
                    return elem.uid === checkItem.uid
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