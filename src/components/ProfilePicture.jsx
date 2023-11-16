import img from '../assets/img/profile.png'
import styles from '../assets/styles/ProfilePicture.module.css'

const ProfilePicture = function () {
  return (
    <img className={styles.picture} src={img} alt="Profile Picture" />
  );
}

export default ProfilePicture