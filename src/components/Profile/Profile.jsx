import css from "./Profile.module.css";

const Profile = ({
  name,
  tag,
  image,
  location,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css.ProfileCard}>
      <div className="Profile-info">
        <img src={image} alt="User avatar" />
        <p>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className="profile-stats">
        <li className="profile-stat">
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li className="profile-stat">
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li className="profile-stat">
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
