import React from 'react';

import { ActiveRadio } from '../constants'

import BasicCard from './card/BasicCard'
import DetailCard from './card/DetailCard'

const RecordingLists = (props) => {

    const { activeRadio } = props

    return (
        <div className = 'mr-list-wrapper'>
            {
                activeRadio === ActiveRadio.BASIC
                    ? (
                        <div className = 'mr-list-whole-file-component'>
                            <BasicCard />
                        </div>
                    )
                    : <DetailCard />
            }
        </div>
    );
};

export default RecordingLists;