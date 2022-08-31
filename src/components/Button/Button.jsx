import s from './Button.module.css';
function Button({ type, title }) {
  return (
    <button type={type} className={s.Btn}>
      {title}
    </button>
  );
}

export default Button;
