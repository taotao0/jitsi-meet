import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { setCheckedFiles } from '../../ducks'

import { LANG_PREFIX } from '../../constants'

const withCard = (WrappedComponent) => {
    return (props) => {
        const dispatch = useDispatch()

        const { 
            filterList, 
            checkedFiles,
        } = useSelector(state => state['features/usee/Pages/ManageRecordings'], [])
        const { t } = useTranslation()

        const _handleCheckStateChanged = useCallback((event, path) => {

            dispatch(setCheckedFiles(path))
        }, [])

        const _isChecked = (path) => {
            const result = checkedFiles.find(elem => elem ===  path)
        
            return result === undefined ? false : true
        }

        return (
            <>
            {
                filterList.length > 0
                    ? (
                        filterList.map((elem, index) => {
                            return <WrappedComponent
                                        key = { index }
                                        { ...elem }
                                        checked = { _isChecked(elem.path) }
                                        checkStateChanged = { _handleCheckStateChanged } />
            
                        })
                    )
                    : <div>{ t(`${LANG_PREFIX}.emptyRecordList`) }</div> 
            }
            </>
        )
    }
};

export default withCard;