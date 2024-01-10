import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth, signOut } from "../firebase";
import Nav from "../Navbar/Nav";
import "./Profile.css";

const Profile = () => {
  const user = useSelector(selectUser);
  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit your profile</h1>
        <div className="profileScreen__info">
          <img
            className="profileScreen__avatar"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBCAMAAADQfiliAAAAZlBMVEUNfoD///8Ae30AeHoAdXf7/f0AcXPM3+Ds9PQ0iIp5rq/S5OTc6uvC19gAc3bD2tumycqKt7g2jY7i8PCzz9BGlZeVvr4fgoWcwcK41dVioKKCtbbm7u8ShIZOlJZWnJ6Erq9rqKnSn7YTAAACQ0lEQVR4nO2Y3ZaiMBCESXfCT0CEIKIIOL7/S26cWQeYRScs2b2YU98dR7q60jSSThAAAAAAAAAAAAAAgL+HZB7kOfkSC5lCuUaNSO+FUJEmHx6kKSoh4kMt3Q0kmfggNdstsFYfYuroLtaJB1mz1QLrTzFxYrcYOowx4uxeumUxE0/UWqf1UK0mMaLfVgRZTMXS0CWGL9MYUTpW7gl5N1NziznPYg7bHPTxTK12qWi4+4cOBhcHXM5iXPv3CfncgVNX0bC+bs+R0xdLdE6dGATRtHvzTQYCuk7fLO1WUDJjiNpYAluE46i2dxXj+vHw4uu2LphbOLsHsSk6JVRXJNsNWLU2siuKs1XfOZLB0A7Nqg/qCwts2ramtashL1/mUcyjGgAAAAB+DCzlxiF0yvoNB5OO0hXz+3f563bdFpLplnqYwEb2dud5cd74kST9OBNpvOT/PZFXmhy2ssSyLsbRzcOhTDCZyLujYX4lSczJJZ0MTcpHfjtdZ6NidDG2Eksu7OKDuoxmk6u6edr/z6ZrlRa2LaW01XjA9rIf9C6bncbYPqx9NSLr+UwuVBwVp7f2aizXqz4Vu+rLHfaewvg6oLxb6Is/MrxnubP0g6iOycuOWQ3Z0XLRwyIq0o3f/O8eZK/T75NbsnJgX8//CxyaMlou+ufq96UJ/S9/5P6+34p0uSeq/bFtXv9f+DJByXA77aK0iu+NGMdZGh0udvj/D9knNmTO1DeJpWkCzu0VxnUAAAAAAAAAAAAAAAAA4EfyCxrEFKSxHCvdAAAAAElFTkSuQmCC"
            alt="avatar"
          />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <button
                className="profileScreen__signOut"
                onClick={() => signOut(auth)}
              >
                sign out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
