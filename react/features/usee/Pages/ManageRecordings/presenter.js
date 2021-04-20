import React from 'react';
import { useTranslation } from 'react-i18next'
import { Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

import {
    LANG_PREFIX,
    ActiveRadio
} from './constants'

import RecordingFilters from './components/RecordingFilters'
import RecordingLists from './components/RecordingLists'

import { UserStatus } from '../Login/constants'
import {
    LOGIN_ROUTE_PATH,
    MANAGE_RECORDINGS_ROUTE_PATH
 } from '../../usee_config'

const ManageRecordingsPresenter = (props) => {
    const {
        startDate,
        endDate,
        fileName,
        startDateInput,
        endDateInput,
        fileNameInput,
        activeRadio,
        recordingList,
        isCheckedAll,
        setStartDate,
        setEndDate,
        fileNameChanged,
        findFileBtnClicked,
        checkedAllBtnClicked,
        deleteBtnClicked,
        downloadBtnClicked,
        activeRadioClicked
    } = props

    const { t } = useTranslation()
    const loginState = useSelector(state => state['features/usee/Pages/Login'], [])

    return (
        <>
        {
            loginState.userStatus === UserStatus.MEMBER
                ? (
                    <div className = 'common-wrapper mr-wrapper'>
                        <h1>{ t(`${LANG_PREFIX}.title`) }</h1>
                            <RecordingFilters
                                startDate = { startDate }
                                endDate = { endDate }
                                fileName = { fileName }
                                startDateInput = { startDateInput }
                                endDateInput = { endDateInput }
                                fileNameInput = { fileNameInput }
                                setStartDate = { setStartDate }
                                setEndDate = { setEndDate }
                                fileNameChanged = { fileNameChanged }
                                findFileBtnClicked = { findFileBtnClicked }
                                checkedAllBtnClicked = { checkedAllBtnClicked }
                                deleteBtnClicked = { deleteBtnClicked }
                                downloadBtnClicked = { downloadBtnClicked } />
                            <div className = 'mr-filter-btn-radio-wrapper'>
                                <ul>
                                    <li>
                                        <button
                                            className = 'mr-filter-option-btn'
                                            id = 'select-all-btn'
                                            type = 'submit'
                                            onClick = { checkedAllBtnClicked }>
                                            {
                                                isCheckedAll
                                                ? t(`${LANG_PREFIX}.unSelectAll`)
                                                : t(`${LANG_PREFIX}.selectAll`)
                                            }
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            className = 'mr-filter-option-btn'
                                            id = 'delete-btn'
                                            type = 'submit'
                                            onClick = { deleteBtnClicked }>
                                                { t(`${LANG_PREFIX}.delete`) }
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            className = 'mr-filter-option-btn'
                                            id = 'download-btn'
                                            type = 'submit'
                                            onClick = { downloadBtnClicked }>
                                                { t(`${LANG_PREFIX}.download`) }
                                        </button>
                                    </li>
                                </ul>

                                <div className = 'check-basic-detail'>
                                    <p>보기 선택</p>
                                    <input
                                        type = 'radio'
                                        id = { ActiveRadio.BASIC }
                                        name = 'basic-detail'
                                        checked = { activeRadio === ActiveRadio.BASIC }
                                        value = { ActiveRadio.BASIC }
                                        onChange = { activeRadioClicked } />
                                    <label htmlFor = { ActiveRadio.BASIC }>
                                        일반
                                    </label>
                                    <input
                                        type = 'radio'
                                        id = { ActiveRadio.DETAIL }
                                        name = 'basic-detail'
                                        checked = { activeRadio === ActiveRadio.DETAIL }
                                        value = { ActiveRadio.DETAIL }
                                        onChange = { activeRadioClicked } />
                                    <label htmlFor = { ActiveRadio.DETAIL}>
                                        자세히
                                    </label>
                                </div>
                            </div>
                        <RecordingLists
                            activeRadio = { activeRadio } />
                    </div>
                )
                : (
                    <Redirect to = {`${LOGIN_ROUTE_PATH}?from=${MANAGE_RECORDINGS_ROUTE_PATH }`}/>
                )
        }
        </>
    );
};

export default ManageRecordingsPresenter;