import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import {
    setCheckedFiles
} from '../../ducks'

const withCard = (WrappedComponent) => {
    return (props) => {
        const dispatch = useDispatch()

        const { 
            filterList, 
            checkedFiles,
        } = useSelector(state => state['features/usee/Pages/ManageRecordings'], [])

        const [ checkState, setCheckState ] = useState(false)

        const _handleCheckStateChanged = useCallback((event, uid, path) => {

            dispatch(setCheckedFiles({ uid, path }))
        }, [])

        const _isChecked = (uid, path) => {
            const result = checkedFiles.find(elem => JSON.stringify(elem) === JSON.stringify({uid, path}))
        
            return result === undefined ? false : true
        }

        return (
            filterList.map((elem, index) => {
                return <WrappedComponent
                            key = { index }
                            { ...elem }
                            checked = { _isChecked(elem.uid, elem.path) }
                            checkStateChanged = { _handleCheckStateChanged } />

            })
        )
    }
};

export default withCard;