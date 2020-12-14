const reducer = (state = [], action) => {
  if (action.type === "setData") {
    return action.user;
  }
  return [...state];
};

export default reducer;
