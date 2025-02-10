export const APIKey = '0dce0737355a46c28c1d4c9dc4852bcc';
const baseUrl = 'https://newsapi.org/v2/everything';
const proxyUrl = 'https://nomoreparties.co/news/v2/everything';

export const newsApiBaseUrl =
  process.env.NODE_ENV === 'production' ? baseUrl : proxyUrl;

const currentDate = new Date();

export const parseCurrentDate = date => {
  const dateObj = new Date(date);
  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, '0');
  const day = String(dateObj.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const previousWeek = new Date();
previousWeek.setDate(currentDate.getDate() - 7);

export const parsePreviousWeek =
  previousWeek.getFullYear() +
  '-' +
  String(previousWeek.getMonth() + 1).padStart(2, '0') +
  '-' +
  String(previousWeek.getDate()).padStart(2, '0');
