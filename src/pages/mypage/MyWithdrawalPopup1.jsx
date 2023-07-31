import {useState} from 'react'
import Modal from '@/components/modal/index'

export function MyWithdrawalPopup1() {
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
        회원탈퇴 팝업
      </button>
      <Modal
        isOpen={open}
        onOpenChange={setOpen}
        className="popup medium"
      >
        <Modal.Content>
          <div className="popup-header">
            <h2 className='popup-title'>회원 탈퇴</h2>
          </div>
          <div className="popup-contents">
            <div className="drawal-reason">
              <p className="bold-text-1">정말 회원탈퇴를 하시겠어요?</p>
              <p>어떤 점이 불편해서 탈퇴를 결심하셨는지 이유를 알려주세요.</p>
            </div>
            <div classNmae="drawal-info">
              <p className="bold-text-1">플루닛을 떠나기 전, 안내 사항을 꼭 확인해주세요!</p>
              <p className="regular-text">탈퇴 후에 고객님의 모든 콘텐츠와 활동 기록, 크레딧 충전/적립/사용 내역이 모두 삭제되며, 삭제된 정보는 복구가 불가하오니 신중하게 결정해 주세요.</p>
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
              확인
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
              탈퇴신청
            </button>
          </div>
          
        </Modal.Bottom>
      </Modal>
    </>
  )
}
