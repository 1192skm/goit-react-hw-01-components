import PropTypes from 'prop-types';
import clsx from 'clsx';
import css from '../FriendList.module.css';

export function FriendListItem({ avatar, name, isOnline, id }) {
  return (
    <li key={id} className={css.item}>
      <span
        className={clsx(css.status, isOnline ? css.isOnline : css.isOffline)}
      ></span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
