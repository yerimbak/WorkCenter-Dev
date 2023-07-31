import {useState} from 'react'
import Modal from '@/components/modal/index'

export function MyChangePasswordPopup1() {
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
        비밀번호 변경 팝업
      </button>
      <Modal
        isOpen={open}
        onOpenChange={setOpen}
        className="popup medium"
      >
        <Modal.Content>
          <div className="popup-header">
            <h2 className='popup-title'>비밀번호 변경</h2>
          </div>
          <div className="popup-contents popup-change-password">
            <div className="field-form">
              <label className="title">
                현재 비밀번호
              </label>
              <div className="cont-line">
                <div className="field clear">
                  <input type="password" placeholder="현재 비밀번호를 입력해주세요" />
                  <button type="button" className="btn-clear">
                    Reset
                  </button>
                </div>
              </div>
              {/* <p className="success">사용할 수 있는 아이디 입니다.</p>
              <p className="error">형식이 맞지 않습니다.</p> */}
            </div>
            <div className="field-form">
              <label className="title">
                새 비밀번호
              </label>
              <div className="cont-line">
                <div className="field clear">
                  <input type="password" placeholder="새로운 비밀번호를 입력해주세요" />
                  <button type="button" className="btn-clear">
                    Reset
                  </button>
                </div>
              </div>
              <p class="condition">영문, 숫자, 특수문자( !, @, $, ^, *, -, -)를 혼합하여 8~16자로 사용</p>
              {/* <p className="success">사용할 수 있는 아이디 입니다.</p>
              <p className="error">형식이 맞지 않습니다.</p> */}
            </div>
            <div className="field-form">
              <label className="title">
                새 비밀번호 확인
              </label>
              <div className="cont-line">
                <div className="field clear">
                  <input type="password" placeholder="새로운 비밀번호를 한번 더 입력해주세요" />
                  <button type="button" className="btn-clear">
                    Reset
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Modal.Content>
        <Modal.Bottom>
          <div className="popup-bottom">
            <button
              className='button line'
              onClick={() => {
                setOpen(false)
                onCloseCallback()
              }}
              type="button"
            >
              취소
            </button>
            <button
              className='button brown'
              onClick={() => {
                setOpen(false)
                onCloseCallback()
              }}
              type="button"
              disabled
            >
              비밀번호 변경하기
            </button>
          </div>
          
        </Modal.Bottom>
      </Modal>
    </>
  )
}
