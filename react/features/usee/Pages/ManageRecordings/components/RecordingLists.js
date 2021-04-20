import React from 'react';
import { useTranslation } from 'react-i18next'

import { LANG_PREFIX, ActiveRadio } from '../constants'

// import CardContainer from '../card/container'
import BasicCard from './card/BasicCard'
import DetailCard from './card/DetailCard'

const RecordingLists = (props) => {
    const { t } = useTranslation()

    const {
        activeRadio
    } = props

    return (
        <div className = 'mr-list-wrapper'>
            {
                activeRadio === ActiveRadio.BASIC
                    ? <div className = 'mr-list-whole-file-component'>
                        <BasicCard />
                      </div>
                    : <DetailCard />
            }
        </div>
    );
};

export default RecordingLists;