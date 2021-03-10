import React from 'react'

import FooterPresenter from './presenter'

const FooterContainer = () => {
    const [ langSelect, setLangSelect ] = useState('한국어')

    const handleSelectChanged = useCallback((event) => {
        setLangSelect(event.target.value)
    }, [])
    return (
        <FooterPresenter />
    )
}

export default FooterPresenter