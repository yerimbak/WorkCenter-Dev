import {Link, useHref} from 'react-router-dom'
import {useSelector} from 'react-redux'

function Header() {
  const uri = useHref()
  const user = useSelector((state) => state.user)
  console.log('user', user)

  return (
    <header className="header">
      <div className="inner-wrap">
        <div className="header-wrap">
          <h1 className="header-logo">
            <Link href="/" className="logo-link">
              <img src="/assets/images/logo/img-work-center-logo.png" alt="WORK CENTER LOGO" />
            </Link>
          </h1>
          <div className="nav-container">
            <nav>
              <ul className="nav-list">
                <li className="nav-menu">
                  <Link to="/" className="link">
                    홈
                  </Link>
                </li>
                <li className="nav-menu">
                  <Link to="/guide" className="link">
                    이용가이드
                  </Link>
                </li>
                <li className="nav-menu">
                  <Link to="/service-plan" className="link">
                    서비스플랜
                  </Link>
                </li>
                <li className="nav-menu">
                  <Link to="notice" className="link">
                    공지사항
                  </Link>
                </li>
                <li className="nav-menu">
                  <Link to="inquiry" className="link">
                    제휴문의
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="user-menu-container">
            <ul className="user-menu-list">
              {user.isLogin ? (
                <>
                  {/* 로그인 후 마이페이지 메뉴 노출 */}
                  <li className="user-menu">
                    <Link to="/mypage">마이페이지</Link>
                  </li>
                  {/* 로그인 후 노출 font-normal class 추가 */}
                  <li className="user-menu font-normal">
                    <Link to="/auth/logout">로그아웃</Link>
                  </li>
                </>
              ) : (
                <li className="user-menu">
                  <Link to="/auth/login">로그인</Link>
                </li>
              )}
              <li className="user-menu work-link">
                <Link href="#" className="link-box">
                  워크플레이스
                </Link>
                {uri === '/auth/login' && (
                  <div className="user-menu-tooltip">
                    <p className="text">
                      <span className="text-block">상담 관리와 상담서비스는</span>워크플레이스에서 사용하실 수 있습니다.
                    </p>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
