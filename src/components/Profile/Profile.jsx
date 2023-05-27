import PropTypes from 'prop-types';
import defaultImage from './defaultImage.png';
import css from './Profile.module.css';

export function Profile({
  username,
  tag,
  location,
  avatar = defaultImage,
  stats: { followers, views, likes },
}) {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt={username} className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.item}>
          <span className={css.label}>Followers </span>
          <span className={css.quantity}>{followers}</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>Views </span>
          <span className={css.quantity}>{views}</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>Likes </span>
          <span className={css.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
