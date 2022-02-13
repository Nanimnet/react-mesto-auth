import Fail from "../images/fail.svg"
import Success from "../images/success.svg"

function InfoTooltip({onClose, isOpen, isRegSucces, message}) {
  return (
    <div 
        className={isOpen ? `popup popup_is-opened` : `popup`}>
      <div className="popup__overlay"></div>
      <div className="popup__content popup-info__content">
        <img
          className="popup__image popup-info__image"
          src={isRegSucces ? Success:Fail} />
        <h3 className="popup-info__heading">{isRegSucces ?
                    "Вы успешно зарегистрировались":
                    "Что-то пошло не так! Попробуйте еще раз." + message
                    }</h3>
        <button onClick={onClose} className="popup__close popup-info__close" type="button"></button>
      </div>
    </div>
  );
}

export default InfoTooltip;
