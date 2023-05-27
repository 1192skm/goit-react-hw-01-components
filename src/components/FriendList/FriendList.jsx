import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem/FriendListItem';
import css from './FriendList.module.css';

export function FriendList({ friends }) {
  return (
    <ul className={css.friendlist}>
      {friends.map(friend => {
        return (
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            id={friend.id}
            isOnline={friend.isOnline}
          ></FriendListItem>
        );
      })}
    </ul>
  );
}
FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};
