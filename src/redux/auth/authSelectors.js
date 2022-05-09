const getAuthLoading = state => state.auth.loading;
const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user.name;
const getToken = state => state.auth.token;

const authSelectors = {
  getAuthLoading,
  getIsLoggedIn,
  getUserName,
  getToken,
};

export default authSelectors;
