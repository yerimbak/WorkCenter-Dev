import {useState} from 'react'
import Modal from '@/components/modal/index'

export function LoginPopup() {
  const [open, setOpen] = useState(false)

  const onOpenCallback = () => {
    console.log('open modal!')
  }
  const onCloseCallback = () => {
    console.log('close modal!')
  }
  return (
    <>
      <button style={{border: '1px solid', padding: '5px', margin: '10px'}} onClick={() => setOpen((prev) => !prev)}>
        로그인 팝업
      </button>
      <Modal isOpen={open} onOpenChange={setOpen} className="popup bic">
        <Modal.Content>
          <div className="popup-contents login">
            <h2 className="login-title">LOGIN</h2>
            <div className="form-area">
              <div className="form-box">
                <div className="field-form">
                  <div className="cont-line">
                    <div className="field clear">
                      <input type="text" placeholder="아이디를 입력해 주세요." />
                      <button type="button" className="btn-clear">
                        Reset
                      </button>
                    </div>
                  </div>
                  {/* <p className="success">사용할 수 있는 아이디 입니다.</p>
                  <p className="error">형식이 맞지 않습니다.</p> */}
                </div>
                <div className="field-form">
                  <div className="cont-line">
                    <div className="field clear">
                      <input type="password" placeholder="비밀번호를 입력해 주세요." />
                      <button type="button" className="btn-clear">
                        Reset
                      </button>
                    </div>
                  </div>
                  {/* <p className="success">사용할 수 있는 아이디 입니다.</p>
                  <p className="error">형식이 맞지 않습니다.</p> */}
                </div>
              </div>
              <button type="button" className="login-button">로그인</button>
            </div>
            <div className="login-id-check">
              <div>
                <label className="ruletext">
                  <input className="check" type="checkbox" />
                  <span className="checkbox-title">아이디 저장</span>
                </label>
              </div>
              <div>
                <a href="#" className="login-find-email">아이디(이메일) 찾기</a>
                <a href="#" className="login-find-password">비밀번호 찾기</a>
              </div>
            </div>
            <div className="sns-area">
              <div className="sns-area-text">SNS계정으로 간편 로그인</div>
              <div className="sns-link">
                <button type="button" className="login-kakao">카카오로 로그인</button>
                <button type="button" className="login-apple">애플로 로그인</button>
                <button type="button" className="login-naver">네이버로 로그인</button>
              </div>
            </div>
            <div className="login-bottom-area">
              <div>
                <p className="bottom-area-text">아직 플루닛 통합회원이 아니신가요?</p>
                <p className="bottom-area-text">통합회원이 되사면 다양한 서비스를 하나의 ID로 이용하실 수 있습니다.</p>
                <a className="login-more-info" href="#">플루닛 통합서비스 안내 자세히보기</a>
              </div>
              <button type="button" className="button line login-bottom-button">통합회원가입</button>
            </div>
            <button 
            type="buttn" 
            className="login-close-button"
            onClick={() => {
              setOpen(false)
              onCloseCallback()
            }}
            >닫기</button>
          </div>
        </Modal.Content>
      </Modal>
    </>
  )
}
