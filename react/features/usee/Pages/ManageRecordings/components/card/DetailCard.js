import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileVideo } from '@fortawesome/free-solid-svg-icons'

import withCard from './withCard'

import { getfileSize, getToday } from '../../../../functions'

const DetailCard = (props) => {
    const {
        path,
        uid,
        recordDate,
        size,
        thumbnail,
        status,
        checked,
        checkStateChanged
    } = props

    return (
        <div className = 'mr-file-detail-component-wrapper'>
            <input
                className = 'mr-file-detail-checkbox'
                type = 'checkbox'
                checked = { checked }
                onChange = { (e) => checkStateChanged(e, path) } />
            {
                !thumbnail && <FontAwesomeIcon
                                className = 'video-file-icon'
                                icon = { faFileVideo }
                                size = '3x' /> 
            }
            <div>{uid}</div>
            <p className = 'file-size'>
                { getfileSize(size) }
            </p>
            <p className = 'recording-date'>
                { getToday(recordDate) }
            </p>
        </div>
    );
};

export default withCard(DetailCard);