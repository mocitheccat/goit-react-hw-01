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
      <div className={css.ProfileCardInfo}>
        <img className={css.ProfileImage} src={image} alt="User avatar" />
        <p className={css.MainText}>{name}</p>
        <p className={css.PrimaryText}>{`@${tag}`}</p>
        <p className={css.PrimaryText}>{location}</p>
      </div>

      <ul className={css.ProfileStats}>
        <li className={css.ProfileStatsItem}>
          <span className={css.SecondaryText}>Followers</span>
          <span className={css.BiggerText}>{followers}</span>
        </li>
        <li className={css.ProfileStatsItem}>
          <span className={css.SecondaryText}>Views</span>
          <span className={css.BiggerText}>{views}</span>
        </li>
        <li className={css.ProfileStatsItem}>
          <span className={css.SecondaryText}>Likes</span>
          <span className={css.BiggerText}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
