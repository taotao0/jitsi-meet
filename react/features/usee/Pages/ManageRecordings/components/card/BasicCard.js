import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileVideo } from '@fortawesome/free-solid-svg-icons'

import withCard from './withCard'

import { getfileSize, getToday } from '../../../../functions'

const BasicCard = (props) => {
    const {
        path,
        uid,
        recordDate,
        size,
        thumbnailLink,
        status,
        checked,
        checkStateChanged
    } = props

    return (
        <div className = 'mr-file-component-wrapper'>
            <input
                type = 'checkbox'
                checked = { checked }
                onChange = { (e) => checkStateChanged(e, path) } />
                {
                    !thumbnailLink 
                        ? <FontAwesomeIcon
                            className = 'video-file-icon'
                            icon = { faFileVideo }
                            size = '4x' />
                        : <img
                            src = { thumbnailLink } />
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

export default withCard(BasicCard);