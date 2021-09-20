import PropTypes from 'prop-types';
import s from './Section.module.css';

function Section({ children, color, img }) {
  return (
    <div className={s.Container} style={{ backgroundColor: color }}>
      <div className={s.Image} style={{ backgroundImage: `url(${img})` }}></div>
      {children}
    </div>
  );
}

Section.propTypes = {
  children: PropTypes.node,
};

export default Section;
