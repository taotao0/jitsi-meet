import React from 'react';
import { useTranslation } from 'react-i18next'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { LANG_PREFIX } from '../constants'

const RecordingFilters = (props) => {
    const { t } = useTranslation()

    const {
        startDate,
        endDate,
        fileName,
        startDateInput,
        endDateInput,
        fileNameInput,
        setStartDate,
        setEndDate,
        fileNameChanged,
        findFileBtnClicked,
    } = props

    return (
        <form className = 'mr-filter-form'>
            <div>
                <p>{ t(`${LANG_PREFIX}.selectDate`) }</p>
                <div className = 'mr-filter-datepicker-range'>
                    <DatePicker
                        selected = { startDate }
                        onChange = { setStartDate }
                        startDate =  { startDate }
                        endDate = { endDate }
                        maxDate = { new Date() }
                        placeholder = 'start date'
                        dateFormat = "yyyy-MM-dd"
                        ref = { startDateInput } />
                        <span>~</span>
                    <DatePicker
                        selected = { endDate }
                        onChange = { setEndDate }
                        startDate = { startDate }
                        endDate = { endDate }
                        maxDate = { new Date() }
                        placeholder = 'end date'
                        dateFormat = "yyyy-MM-dd"
                        ref = { endDateInput } />
                </div>
            </div>
            <div>
                <p>{ t(`${LANG_PREFIX}.fileName`) }</p>
                <div className = 'mr-filter-filename-input'>
                    <input
                        className = 'mr-filter-input'
                        type = 'text'
                        ref = { fileNameInput }
                        onChange = { fileNameChanged }
                        value = { fileName } />
                    <button
                        type = 'submit'
                        onClick = { findFileBtnClicked }>
                        <FontAwesomeIcon
                            icon = { faSearch }
                            size = '1.8x' />
                    </button>
                </div>
            </div>
        </form>
    );
};

export default RecordingFilters;