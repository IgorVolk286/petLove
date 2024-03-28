import axios from 'axios';
axios.defaults.baseURL = 'https://petlove.b.goit.study/api';

export const getNews = async () => {
  try {
    const response = await axios.get('/news');
    const results = await response.json();
    console.log(results);
    return results;
  } catch (error) {
    console.error(error);
  }
};
