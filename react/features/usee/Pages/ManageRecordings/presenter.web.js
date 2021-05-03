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
        isCheckedAll,
        ModalInfo,
        setStartDate,
        setEndDate,
        fileNameChanged,
        findFileBtnClicked,
        handleOptionBtnClicked,
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
                                findFileBtnClicked = { findFileBtnClicked } />
                            <div className = 'mr-filter-btn-radio-wrapper'>
                                <ul>
                                    <li>
                                        <button
                                            className = 'mr-filter-option-btn'
                                            name = 'selectAll'
                                            type = 'submit'
                                            onClick = { handleOptionBtnClicked }>
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
                                            name = 'delete'
                                            type = 'submit'
                                            onClick = { handleOptionBtnClicked }>
                                                { t(`${LANG_PREFIX}.delete`) }
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            className = 'mr-filter-option-btn'
                                            name = 'download'
                                            type = 'submit'
                                            onClick = { handleOptionBtnClicked }>
                                                { t(`${LANG_PREFIX}.download`) }
                                        </button>
                                    </li>
                                </ul>

                                <div className = 'check-basic-detail'>
                                    <p>{ t(`${LANG_PREFIX}.selectView`) }</p>
                                    <input
                                        type = 'radio'
                                        id = { ActiveRadio.BASIC }
                                        name = 'basic-detail'
                                        checked = { activeRadio === ActiveRadio.BASIC }
                                        value = { ActiveRadio.BASIC }
                                        onChange = { activeRadioClicked } />
                                    <label htmlFor = { ActiveRadio.BASIC }>
                                        { t(`${LANG_PREFIX}.basicView`) }
                                    </label>
                                    <input
                                        type = 'radio'
                                        id = { ActiveRadio.DETAIL }
                                        name = 'basic-detail'
                                        checked = { activeRadio === ActiveRadio.DETAIL }
                                        value = { ActiveRadio.DETAIL }
                                        onChange = { activeRadioClicked } />
                                    <label htmlFor = { ActiveRadio.DETAIL}>
                                        { t(`${LANG_PREFIX}.detailView`) }
                                    </label>
                                </div>
                            </div>
                            <RecordingLists
                                activeRadio = { activeRadio } />
                        {
                            ModalInfo && ModalInfo.modalComponent && 
                                ModalInfo.modalComponent(ModalInfo.modalComponentProps)
                        }
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