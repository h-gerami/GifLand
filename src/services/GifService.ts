import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.giphy.com/v1/gifs/',
  params: {
    api_key: 'vBOqt29BarEKXiOqKqwgKbBfrbj1VYO9',
  },
  timeout: 10000,
  timeoutErrorMessage: 'There is somthing wrong with your internet connection!',
});
