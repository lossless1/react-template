import { goHome } from './links';

const requestWrap = req =>
  req
    .then(async data => {
      if (data.status >= 400) {
        if (data.status === 403) {
          goHome();
        }
        throw await data.json();
      }
      return data;
    })
    .then(async data => {
      return data.json();
    })
    .catch(e => {
      throw e;
    });

export const get = (url, { headers = {} } = {}) => {
  return requestWrap(
    fetch(url, {
      method: 'GET',
      headers,
    })
  );
};

export const post = (url, { body, headers = {} } = {}) => {
  return requestWrap(
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    })
  );
};

export default { get, post };
