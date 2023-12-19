import { User } from "../assets";

const ProfileUser = () => {
  return (
    <div className="profile__user">
      <img src={User} alt="User Profile" className="profile__image" />
      <div className="md:block hidden">
        <p className="text-[15px]">Ian Timotheos</p>
        <p className="profile__gmail">iantimotheos@gmail.com</p>
      </div>
    </div>
  );
};

export default ProfileUser;
