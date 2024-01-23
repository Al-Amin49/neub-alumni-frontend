

const UserListItem = ({user, handleAccessChat }) => {


  return (
    <div
      onClick={handleAccessChat}
      className="cursor-pointer bg-gray-300 hover:bg-teal-500 hover:text-white w-full flex items-center text-black px-3 py-2 mb-2 rounded-lg"
    >
      <img
        className="mr-2 w-8 h-8 rounded-full cursor-pointer"
        src={user.profile}
        alt={user.username}
      />
      <div>
        <p className="text-sm font-semibold">{user.username}</p>
        <p className="text-xs">
          <b>Email :</b> {user.email}
        </p>
      </div>
    </div>
  );
};

export default UserListItem;
