// Toast Notification
import { toast } from 'react-toastify'
// Icon Check
import IconCheck from '../assets/images/svg/icons/check.svg'
// styles
import { COLORS } from '../theme/css/global.colors'

export const useNotify = ({ message, type }) => {
  toast(message, {
    icon: <img src={IconCheck} />,
    position: 'top-right',
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
    type,
    style: {
      fontFamily: 'Raleway',
      fontSize: 15,
      color: COLORS.violetDark,
      fontWeight: '600',
    },
    progressStyle: { color: COLORS.salmon },
  })
  return toast
}
