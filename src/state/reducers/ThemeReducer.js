const reducer = (state = true, action) => {
  switch (action.type) {
    case "change":
      console.log("change");
      return (state = !state);
    default:
      return state;
  }
};

export default reducer;
