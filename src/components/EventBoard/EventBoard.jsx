// import PropTypes from 'prop-types';
import { Event } from 'components/Event/Event';
import css from './EventBoard.module.css';

export const EventBoard = ({ events }) => {
  console.log(events);
  return (
    <div className={css.eventBoard}>
      {events.map(({ name, time, servings, calories }) => (
        <Event
          key={name}
          name={name}
          time={time}
          servings={servings}
          calories={calories}
        />
      ))}
    </div>
  );
};

// EventBoard.propTypes = {
//   events: PropTypes.arrayOf(
//     PropTypes.exact({
//       name: PropTypes.string.isRequired,
//       time: PropTypes.string.isRequired,
//       servings: PropTypes.number.isRequired,
//       calories: PropTypes.number.isRequired,
//     })
//   ),
// };
