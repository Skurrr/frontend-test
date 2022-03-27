import Avatar from "@mui/material/Avatar";
import React from "react";
import { useParams } from "react-router-dom";
import { useUser } from "../../api/users/useUser";
import "./UserDetails.css";

// TODO: move data fetch to page/view component
const ViewUserDetails = () => {
  const { id } = useParams();
  const { user, isError, isLoading } = useUser(id);

  // TODO: add Loading component
  if (isLoading) {
    return <div>Loading....</div>;
  }

  // TODO: add error bounduary or error handler
  if (isError) {
    return <div>Error</div>;
  }

  // TODO: move user address and user basic info to separate components, use composition
  return (
    <div className="UserDetails--container">
      <div className="UserDetails--image">
        <Avatar></Avatar>
        <h1>{user?.name}</h1>
      </div>
      <div className="UserDetails--main">
        <div className="UserDetails--info">
          <h2>Basic Information</h2>
          <ul>
            <li>Email: {user?.email}</li>
            <li>Username: {user?.username}</li>
            <li>Phone: {user?.phone}</li>
            <li>Website: {user?.website}</li>
          </ul>
        </div>
        <div className="UserDetails--address">
          <h2>Address Details</h2>
          <ul>
            <li>City: {user?.address?.city}</li>
            <li>Username: {user?.address?.street}</li>
            <li>Phone: {user?.address?.zipcode}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ViewUserDetails;
