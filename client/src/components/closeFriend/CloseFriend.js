import "./closeFriend.css";

const CloseFriend = ({user}) => {
    return (
        <li className="sidebarFriend">
            <img className="sidebarFriendImg" src={"/images/"+user.profilePicture} alt="" />
            <span className="sidebarFriendName">{user.username}</span>
        </li>
    )
}

export default CloseFriend
