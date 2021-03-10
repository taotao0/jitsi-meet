import React from 'react'

const FooterPresenter = () => {

    return(
        <footer className = 'footer-container'>
            <div className = 'footer-menu'>
                <ul>
                    <li className = 'footer-menu-list'>
                        <a href= "http://uclick.co.kr/sub1/sub1_2.html">
                            회사소개
                        </a>
                    </li>
                    <li className = 'footer-menu-list'>
                        <a href = "https://usee.co.kr/static/202102_terms_of_service.html">
                            개인정보처리방침
                        </a>
                    </li>
                    <li className = 'footer-menu-list'>
                        <a href = "http://uclick.co.kr/email.html">
                            이메일무단수집거부
                        </a>
                    </li>
                    <li className = 'footer-menu-list'>
                        <a href = "http://uclick.co.kr/sub5/sub5_1.html">
                            안내데스크  
                        </a>
                    </li>
                    <li className = 'footer-menu-list'>
                        <a href = "https://usee.co.kr/usee-userguide-kr_v1.0.zip" download>
                            메뉴얼
                        </a>
                    </li>
                    <li className = 'footer-menu-list-mobile'>
                        <a>모바일 지원</a>
                    </li>
                </ul>
            </div>
            <div className = 'footer-info-section'>
                <div className = 'footer-uclick-logo-info'>
                    <div>
                        <img src = './images/uclicklogo.png'/>
                    </div>
                    <div className ='footer-company-info'>
                        <p>
                            <strong>(주)유클릭</strong>
                            <span className='bar'> | </span>
                            주소 : 서울시 중구 퇴계로 286 쌍림빌딩 8층/9층
                            <span className='bar'> | </span>
                            대표이사 : 엄남한, 김인욱
                        </p>
                        <p>
                            사업자등록번호 : 110-81-41781
                            <span className='bar'> | </span>
                            대표전화 : 02-6320-0000
                            <span className='bar'> | </span>
                            팩스 : 6320-0001
                        </p>
                        <p>
                            COPYRIGHT UCLICK ALL RIGHTS RESERVED.
                        </p>
                    </div>
                </div>
                <div className = "footer-language-select">
                    <select>
                        <option value = "Korean">
                            한국어
                        </option>
                        <option value = "English">
                            영어
                        </option>
                    </select>
                </div>
            </div>
        </footer>
    )
}

export default FooterPresenter