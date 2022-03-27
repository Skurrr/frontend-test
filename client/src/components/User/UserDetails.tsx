import React from "react";
import { useLocation, Link, useParams } from "react-router-dom";

// @ts-ignore
const ViewUserDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <div>
        <strong>Id:</strong> {id}{" "}
      </div>
    </div>
  );
};

export default ViewUserDetails;
