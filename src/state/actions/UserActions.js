export const setUSers = (users) => {
  return (dispatch) => {
    console.log("worded dispatch");
    dispatch({
      type: "setUsers",
      payload: users,
    });
  };
};

export const deleteUser = (id) => {
  return (dispatch) => {
    console.log("worked dispatch");
    dispatch({
      type: "deleteUser",
      payload: id,
    });
  };
};
