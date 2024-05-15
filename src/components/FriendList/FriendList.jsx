import FriendListItem from "./FriendListItem/FriendListItem.jsx";
import css from "./FriendsList.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={css.container}>
      {friends.map((friend) => (
        <li key={friend.id}>
          <FriendListItem friend={friend} />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
