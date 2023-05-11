const get = (key) => {
  return localStorage.getItem(key);
};

const set = (key, value) => {
  return localStorage.setItem(key, value);
};

const storage = { get, set };
export default storage;
