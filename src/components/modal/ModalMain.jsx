import {Children, createContext, isValidElement, useRef, useMemo, useCallback, useEffect} from 'react'
import {createPortal} from 'react-dom'
import {CSSTransition} from 'react-transition-group'
import classNames from 'classnames/bind'
import ModalContent from '@/components/modal/ModalContent'
import ModalBottom from '@/components/modal/ModalBottom'
import styles from '@/components/modal/modal.module.scss'

export const ModalContext = createContext({
  isOpen: false,
  onOpenChange: undefined
})

const cx = classNames.bind(styles)

const getComponent = (children, component) => {
  const childrenArray = Children.toArray(children)
  return childrenArray.filter((child) => isValidElement(child) && child.type === component).slice(0, 2)
}

function ModalMain(props) {
  let closeFlag = true
  const {
    children,
    isOpen = false,
    isBottom = false,
    className,
    useCloseBt = true,
    isCloseOutside = true,
    onOpenChange,
    onOpenCallback,
    onCloseCallback
  } = props
  const nodeRef = useRef(null)
  const values = useMemo(
    () => ({
      isOpen,
      onOpenChange
    }),
    [isOpen, onOpenChange]
  )
  const modalContent = useMemo(() => getComponent(children, (<ModalContent />).type), [children])
  const modalBottom = useMemo(() => getComponent(children, (<ModalBottom />).type), [children])

  const onCloseModal = useCallback(() => {
    if (!closeFlag) return
    onOpenChange && onOpenChange(false)
    onCloseCallback && onCloseCallback()
  }, [closeFlag, onOpenChange, onCloseCallback])
  const onExiting = () => {
    closeFlag = false
  }
  const onExited = () => {
    closeFlag = true
  }

  useEffect(() => {
    if (isOpen && onOpenCallback) {
      onOpenCallback()
    }
  }, [isOpen, onOpenCallback])

  useEffect(() => {
    return () => {
      console.log('unMounted')
    }
  }, [])

  return createPortal(
    <ModalContext.Provider value={values}>
      <CSSTransition
        in={isOpen}
        nodeRef={nodeRef}
        timeout={1000}
        classNames={cx('fade')}
        unmountOnExit
        onExiting={onExiting}
        onExited={onExited}
      >
        <div ref={nodeRef} className={cx('modal-root', {'is-bottom': isBottom}, className)}>
          <div className={cx('window')}>
            {/* {useCloseBt && (
              <button type="button" className={cx('close-btn')} onClick={onCloseModal}>
                Close
              </button>
            )} */}
            {modalContent && modalContent}
            {modalBottom && modalBottom}
            {/* {children} */}
          </div>
          <div
            className={cx('overlay')}
            onClick={() => {
              isCloseOutside && onCloseModal()
            }}
          ></div>
        </div>
      </CSSTransition>
    </ModalContext.Provider>,
    document.body
  )
}

export default ModalMain
