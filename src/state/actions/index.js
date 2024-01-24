export const ChangeTheme = (amount) => {
  console.log("work");
  return (dispatch) => {
    dispatch({
      type: "change",
      payload: amount,
    });
  };
};

export const withdrawMoney = (amount) => {
  return (dispatch) => {
    dispatch({ type: "withdraw", payload: amount });
  };
};
