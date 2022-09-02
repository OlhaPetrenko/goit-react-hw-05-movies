import PropTypes from 'prop-types';

import s from './Button.module.css';
function Button({ type, title, onClick }) {
  return (
    <button type={type} className={s.Btn} onClick={onClick}>
      {title}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
