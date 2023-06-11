import PropTypes from 'prop-types';
import css from './Event.module.css';
import { BsAlarm } from 'react-icons/bs';
import { HiOutlineChartBar, HiOutlineChartPie } from 'react-icons/hi';

export const Event = ({ name, time, servings, calories }) => {
  return (
    <div className={css.event}>
      <h2 className={css.title}>{name}</h2>
      <p className={css.info}>
        <BsAlarm className={css.icon} size={24}></BsAlarm>
        {time}
      </p>
      <p className={css.info}>
        <HiOutlineChartBar className={css.icon} size={24}></HiOutlineChartBar>
        {servings}
      </p>
      <p className={css.info}>
        <HiOutlineChartPie className={css.icon} size={24}></HiOutlineChartPie>
        {calories}
      </p>
      {/* <span className="chip">Event type</span> */}
    </div>
  );
};

Event.propTypes = {
  name: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  servings: PropTypes.number.isRequired,
  calories: PropTypes.number.isRequired,
};
