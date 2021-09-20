import PropTypes from 'prop-types';
import s from './Container.module.css';

function Container({ children, title }) {
  return (
    <div className={s.Container}>
      {title && <h2>{title}</h2>}
      {children}
    </div>
  );
}

Container.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Container;
