import {useState} from 'react'
import Modal from '@/components/modal/index'

export function RatePlanManaPopup2() {
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
        구독요금제취소 팝업(사유)
      </button>
      <Modal
        isOpen={open}
        onOpenChange={setOpen}
        className="popup medium"
      >
        <Modal.Content>
        <div className="popup-contents">
            <div className="product-cancel">
              <p className="bold-text-1">
                구독 요금제를 해지하시는 이유를 알려주세요.
              </p>
              <p className="regular-text">
                설문에 응답해주시면 더 좋은 서비스를 만드는데 도움이 됩니다.
              </p>
              <div>
                인풋요소 대기중
              </div>
            </div>
          </div>
        </Modal.Content>
        <Modal.Bottom>
          <div className="popup-bottom">
            <button
              className='button brown'
              onClick={() => {
                setOpen(false)
                onCloseCallback()
              }}
              type="button"
            >
              확인
            </button>
          </div>
          
        </Modal.Bottom>
      </Modal>
    </>
  )
}
