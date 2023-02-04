import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/';
axios.defaults.params = {
  key: '31959718-480cdd2164520f69972499037',
  per_page: 12,
  image_type: 'photo',
  orientation: 'horizontal',
};

const fetchImages = (value, page = 1) => {
  return axios
    .get('api/', {
      params: {
        q: value,
        page,
      },
    })
    .then(data => data);
};

export default fetchImages;
