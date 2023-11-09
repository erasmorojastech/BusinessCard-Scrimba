import img from '../assets/img/profile.png'

const ProfilePicture = function () {
  return (
    <img className="profile_picture" src={img} alt="Profile Picture" />
  );
}

export default ProfilePicture