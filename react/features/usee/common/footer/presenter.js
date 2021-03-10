import React from 'react'

const FooterPresenter = () => {

    return(
        <>
            <footer className ='welcome-footer'>
                <div className ='welcome-footer-menu'>
                    <ul>
                        <li className = 'welcome-footer-menu-list'>
                            <a href="http://uclick.co.kr/sub1/sub1_2.html">
                                회사소개
                            </a>
                        </li>
                        <li className = 'welcome-footer-menu-list'>
                            <a href = "https://usee.co.kr/static/202102_terms_of_service.html">
                                개인정보처리방침
                            </a>
                        </li>
                        <li className = 'welcome-footer-menu-list'>
                            <a href ="http://uclick.co.kr/email.html">
                                이메일무단수집거부
                            </a>
                        </li>
                        <li className = 'welcome-footer-menu-list'>
                            <a href="http://uclick.co.kr/sub5/sub5_1.html">
                                안내데스크  
                            </a>
                        </li>
                        <li className = 'welcome-footer-menu-list-manual'>
                            <a href="'https://usee.co.kr/usee-manual-ko.pdf'" download>
                                메뉴얼
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='welcome-footer-company-info'>
                    <p>
                        <strong>(주)유클릭</strong>
                        <span className='bar'> | </span>
                        주소 : 서울시 중구 퇴계로 286 쌍림빌딩 8층/9층
                        <span className='bar'> | </span>
                        대표이사 : 엄남한, 김인욱
                        <br/>
                        사업자등록번호 : 110-81-41781
                        <span className='bar'> | </span>
                        대표전화 : 02-6320-0000
                        <span className='bar'> | </span>
                        팩스 : 6320-0001
                    </p>
                </div>
                <div className = 'welcome-footer-download'>
                    {/* <div className = 'welcome-footer-download-message'>
                        <strong>
                            Usee mobile
                        </strong>
                            - download for apps and start meeting from anywhere
                    </div> */}
                        <a
                            className = 'ios-download'
                            href = "https://itunes.apple.com/us/app/jitsi-meet/usee.co.kr">
                            <img src = './images/app-store-badge.png' />
                        </a>
                        <a
                            className = 'android-download'
                            href = "https://play.google.com/store/apps/details?id=usee.co.kr">
                            <img src = './images/google-play-badge.png' />
                        </a>
                </div>
            </footer>
        </>
    )
}

export default FooterPresenter