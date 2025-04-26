import PropTypes from 'prop-types';
import Star from './Star';


export default function Stars({ count = 0 }) {
  const valid =
    Number.isInteger(count) && count >= 1 && count <= 5;

  if (!valid) return null;

  return (
    <ul className="card-body-stars">
      {Array.from({ length: count }).map((_, idx) => (
        <Star key={idx} />
      ))}
    </ul>
  );
}

Stars.propTypes = {
  count: PropTypes.number
};
