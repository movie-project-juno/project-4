const Users = () => {
  return (
    <section className="create-user">
      <h2>Create new User</h2>
      <form action="submit">
        <label htmlFor="newUser">User name</label>
        <input type="text" id="newUser" />
        <label htmlFor="newUserPassword">Password</label>
        <input type="text" id="newUserPassword" />
        <button>Add user</button>
      </form>
      <ul>
        {/* {users.map((user) => {
        return (
          // activeUser.key = user.key ? {Show <li>} : <p>No user found</p>
          <li key={user.key}>
            <p>
              {user.name} - {user.key} - {user.userName}
            </p>
            <button onClick={() => handleRemoveList(user.key)}>
              Remove
            </button>
          </li>
        );
      })} */}
      </ul>
    </section>
  );
};

export default Users;
