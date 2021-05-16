export const setToken = (accessToken, email, user) => {
  try {
    const date = new Date();
    const token = {
      email: email,
      token: accessToken,
      user: user,
      expiry: date.getTime() + 1000 * 60 * 60 * 2,
    };
    localStorage.setItem("token", JSON.stringify({ token }));
    return true;
  } catch {
    return false;
  }
};
