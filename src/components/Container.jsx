import style from "./Container.module.css";
import PropTypes from 'prop-types';

function Container({handleClick, advice}) {
    console.log(advice)

    return (
      <div className={style.container}>
        <div className={style.mainContainer}>
          <p>Advice #{advice.slip.id}</p>
          <h1 className={style.quotes}>
            "{advice.slip.advice}"     </h1>
          <span className={style.border}></span>
        </div>
        <button className={style.dice} onClick={handleClick}>
          <span className={style.imageDice}></span>
        </button>
      </div>
    );
}
Container.propTypes = {
    handleClick: PropTypes.func.isRequired,
    advice: PropTypes.shape({
      id: PropTypes.number.isRequired,
      advice: PropTypes.string.isRequired,
    }).isRequired,
}
export default Container;