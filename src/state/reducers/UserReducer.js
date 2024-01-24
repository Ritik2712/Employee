const reducer = (users = [], action) => {
  switch (action.type) {
    case "setUsers":
      users = action.payload;
      return users;
    case "deleteUser":
      users = users.filter((item) => {
        return item.id !== action.payload;
      });
      console.log(users);
      return users;
    default:
      return users;
  }
};

export default reducer;
