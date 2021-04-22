import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'

import {
    setFindRecordingFileFilter,
    setAllFilesChecked,
    getRecordingListFromServer,
    downloadRecordItems,
    deleteRecordItems
} from './ducks'

import { ActiveRadio } from './constants'

import ManageRecordingsPresenter from './presenter'

const ManageRecordingsContainer = () => {
    const { t } = useTranslation()
    const dispatch = useDispatch()

    const {
        recordingList,
        isCheckedAll,
    } = useSelector(state => state['features/usee/Pages/ManageRecordings'], [])
    const modalInfo = useSelector(state => state['features/usee/Modal'], [])

    const [ startDate, setStartDate ] = useState('')
    const [ endDate, setEndDate ] = useState('')
    const [ fileName, setFileName ]= useState('')

    const [ activeRadio, setActiveRadio ] = useState(ActiveRadio.BASIC)

    const startDateInput = useRef()
    const endDateInput = useRef()
    const fileNameInput = useRef()

    const _handleFileNameChanged = useCallback((event) => {
        setFileName(event.target.value)
    }, [fileName])

    const _handleFindFileBtnClicked = useCallback((event) => {
        dispatch(setFindRecordingFileFilter(startDate, endDate, fileName))

        event.preventDefault()
    }, [startDate, endDate, fileName])

    const _handleOptionBtnClicked = useCallback((event) => {
        const target = event.currentTarget

        target.name === 'selectAll'
            ? dispatch(setAllFilesChecked())
            : target.name === 'delete'
                ? dispatch(deleteRecordItems(t))
                : target.name === 'download'
                    ? dispatch(downloadRecordItems(t))
                    : null
    }, [])

    const _handleActiveRadioClicked = useCallback((event) => {
        const _activeRadio = event.target.value

        if (_activeRadio !== activeRadio) {
            setActiveRadio(_activeRadio)
        }
    }, [activeRadio])

    useEffect(() => {
        dispatch(getRecordingListFromServer())
    }, [])

    return (
        <ManageRecordingsPresenter
            startDate = { startDate }
            endDate = { endDate }
            fileName = { fileName }
            startDateInput = { startDateInput }
            endDateInput = { endDateInput }
            fileNameInput = { fileNameInput }
            activeRadio = { activeRadio }
            recordingList = { recordingList }
            isCheckedAll = { isCheckedAll }
            ModalInfo = { modalInfo }
            setStartDate = { date => setStartDate(date) }
            setEndDate = { date => setEndDate(date) }
            fileNameChanged = { _handleFileNameChanged }
            findFileBtnClicked = { _handleFindFileBtnClicked }
            handleOptionBtnClicked = { _handleOptionBtnClicked }
            activeRadioClicked = { _handleActiveRadioClicked } />
    );
};

export default ManageRecordingsContainer;