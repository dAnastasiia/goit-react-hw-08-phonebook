const isAuthenticated = state => state.auth.isAuthenticated;

const getUserEmail = state => state.auth.user.email;

const authSelectors = { isAuthenticated, getUserEmail };

export default authSelectors;
