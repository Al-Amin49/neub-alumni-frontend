import React, { useState } from "react";
import { toast } from "react-toastify";
import { SearhAllUsers } from "../../api/Users";
import Loading from "../Loading/Loading";
import UserListItem from "../UserListItem";
import { createNewChat } from "../../api/Chat";
import { ChatState } from "../../context/ChatProvider";

const SideDrawer = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState(false);
  const { setSelectedChat, notification, setNotification, chats, setChats } =
    ChatState();
  const handleSearch = async () => {
    if (!search) {
      toast.info("Please Enter something in search", {
        position: "top-left",
      });
      return;
    }
    try {
      setLoading(true);

      const response = await SearhAllUsers(search);
      console.log("search data", response);

      setLoading(false);
      setSearchResult(response);
    } catch (error) {
      toast.error("Error occured", {
        position: "bottom-left",
      });
    }
  };
  const accessChat = async (userId) => {
    console.log(userId);

    try {
      setLoadingChat(true);

      const response = await createNewChat({ userId });
      console.log("response new chat", response);

      // Fix the check for existing chat with the correct property name
      if (!chats.find((c) => c._id === response._id)) {
        setChats([response, ...chats]);
      }

      setSelectedChat(response);
      setLoadingChat(false);
    } catch (error) {
      toast.error("Error occurred", {
        position: "bottom-left",
      });
    }
  };

  return (
    <div className="pt-4">
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label
            htmlFor="my-drawer"
            className="btn btn-lg btn-ghost drawer-button"
          >
            Search User
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <div className="flex justify-between">
              <input
                type="text"
                placeholder="Search user"
                className="input input-bordered input-primary"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button className="btn btn-ghost" onClick={handleSearch}>
                Go
              </button>
            </div>
            {loading ? (
              <Loading />
            ) : (
              searchResult?.map((user) => (
                <UserListItem
                  key={user._id}
                  user={user}
                  handleAccessChat={() => accessChat(user._id)}
                />
              ))
            )}
            {loadingChat && <Loading/>}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideDrawer;
