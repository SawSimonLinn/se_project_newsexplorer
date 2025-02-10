// Authorization and Authentication
export const authorize = () => {
  return new Promise((resolve, reject) => {
    resolve({ token: 'fake token' });
  });
};

export const checkToken = () => {
  return new Promise((resolve, reject) => {
    resolve({
      data: { name: 'Fake', email: 'test@example.com', id: 'fake-id' },
    });
  });
};

export const register = () => {
  return new Promise((resolve, reject) => {
    resolve({
      data: { name: 'Fake', email: 'test@example.com', id: 'fake-id' },
    });
  });
};
