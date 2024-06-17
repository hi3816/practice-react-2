import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({text, number}) {
  return (
    <div>
    <button className={styles.title}>{text}</button>
    <div>제가 좋아하는 숫자는 {number}입니다.</div>
    </div>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  number: PropTypes.number
};

export default Button  ;
