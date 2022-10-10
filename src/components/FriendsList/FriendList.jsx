import PropTypes from 'prop-types';
import { FriendListStyle, Item, Status, Name } from './FriendsList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendListStyle>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <Item key={id}>
          <Status props={isOnline}>◉</Status>
          <img class="avatar" src={avatar} alt="User avatar" width="48" />
          <Name>{name}</Name>
        </Item>
      ))}
    </FriendListStyle>
  );
};

FriendList.protoTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
