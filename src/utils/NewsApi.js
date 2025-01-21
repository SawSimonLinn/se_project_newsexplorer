export const BASE_URL = 'https://newsapi.org';
export const APIkey = '0dce0737355a46c28c1d4c9dc4852bcc';

export const fetchNews = async query => {
  try {
    const fromData = new Date();
    fromData.setDate(fromData.getDate() - 7);
    const toData = new Date().toISOString().split('T')[0];

    const url = `${BASE_URL}/v2/everything?q=${query}&from=${fromData}&to=${toData}&sortBy=popularity&apiKey=${APIkey}`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`error: ${response.status}`);
    }
    const data = await response.json();

    return data.articles;
  } catch (error) {
    console.error(error);
    return Promise.reject(`error message: ${error.message}`);
  }
};
