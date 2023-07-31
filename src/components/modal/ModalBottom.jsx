/* eslint-disable react/prop-types */
import classNames from 'classnames/bind'
import styles from '@/components/modal/modal.module.scss'

const cx = classNames.bind(styles)

function ModalBottom(props) {
  const {className, children} = props
  return (
    <div {...props} className={cx('modal-bottom', className)}>
      {children}
    </div>
  )
}

export default ModalBottom
