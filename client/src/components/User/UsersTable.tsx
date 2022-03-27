import { useState } from "react";
import { useUsers } from "../../api/users/useUsers";

const UsersTable = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const { users, isLoading, isError } = useUsers(pageIndex);

  // TODO: add Loading component
  if (isLoading) {
    return <div>Loading....</div>;
  }

  // TODO: add error bounduary or error handler
  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div>
      {users.map((user, index) => (
        <div key={`${user.username}-${index}`}>{user.name}</div>
      ))}
      <button onClick={() => setPageIndex(pageIndex - 1)}>Previous</button>
      <button onClick={() => setPageIndex(pageIndex + 1)}>Next</button>
    </div>
  );
};

export default UsersTable;
