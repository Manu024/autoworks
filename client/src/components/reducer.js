import { setToken } from "../utils";

export const init = (initialState) => {
  const date = new Date();
  try {
    const { token } = JSON.parse(localStorage.getItem("token")) || null;
    if (token.expiry > date.getTime()) {
      return {
        email: token.email,
        token: token.token,
        user: token.user,
        isAuth: true,
      };
    } else return initialState;
  } catch {
    return initialState;
  }
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_STATE":
      const response = setToken(action.token, action.email, action.user);
      if (response) {
        return {
          ...action,
          isAuth: true,
        };
      }
      return state;
    case "AUTHORIZE":
      const initResponse = init();
      return initResponse;
    default:
      return state;
  }
};
