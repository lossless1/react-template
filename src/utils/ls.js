const getUsername = () => {
  return window.localStorage.getItem('username') || null;
};

const getToken = () => {
  return window.localStorage.getItem('token') || null;
};

const getLanguage = () => {
  return window.localStorage.getItem('language') || null;
};

const setUsername = username => {
  return window.localStorage.setItem('username', username);
};

const setToken = token => {
  return window.localStorage.setItem('token', token);
};

const setLanguage = lang => {
  return window.localStorage.setItem('language', lang);
};

export default {
  getUsername,
  getToken,
  setUsername,
  setToken,
  getLanguage,
  setLanguage,
};
