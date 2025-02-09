// // Mock server
// export const checkToken = () => {
//   return new Promise(resolve => {
//     resolve({
//       data: { name: 'Test', email: 'test@example.com', id: 'fakeID' },
//     });
//   });
// };

// export const authorize = (email, password) => {
//   return new Promise(resolve => {
//     // Mock authorization logic
//     if (email === 'test@example.com' && password === 'password') {
//       resolve({ token: 'fakeToken' });
//     } else {
//       reject(new Error('Invalid credentials'));
//     }
//   });
// };

// export const register = (name, email, password) => {
//   return new Promise(resolve => {
//     // Mock registration logic
//     resolve({
//       data: { name, email, id: 'fakeID' },
//     });
//   });
// };

export const baseUrl = 'https://api.news';

export const checkToken = () => {
  return fetch(`${baseUrl}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    },
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  });
};
export const authorize = (email, password) => {
  return fetch(`${baseUrl}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  });
};

export const register = (name, email, password) => {
  return fetch(`${baseUrl}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      email,
      password,
    }),
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  });
};

export const getSavedArticles = () => {
  return fetch(`${baseUrl}/articles`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    },
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  });
};

export const saveArticle = article => {
  return fetch(`${baseUrl}/articles`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    },
    body: JSON.stringify(article),
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  });
};

export const deleteArticle = articleId => {
  return fetch(`${baseUrl}/articles/${articleId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    },
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  });
};

// Compare this snippet from src/utils/constants.js:
