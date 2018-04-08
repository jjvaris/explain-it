import axios from 'axios';

const publicUrl = process.env.PUBLIC_URL;

const wordApi = {
  getWordsByLanguage(lng) {
    if (isCached(lng)) {
      const words = getCachedWords();
      return new Promise(resolve => resolve(words));
    }
    return axios.get(`${publicUrl}/words/${lng}.json`).then(response => {
      const data = response.data;
      cacheResponseData(lng, data);
      return data;
    });
  }
};

function isCached(lng) {
  return localStorage.getItem('lng') === lng;
}

function getCachedWords() {
  return JSON.parse(localStorage.getItem('words'));
}

function cacheResponseData(lng, data) {
  localStorage.setItem('lng', lng);
  localStorage.setItem('words', JSON.stringify(data));
}

export default wordApi;
