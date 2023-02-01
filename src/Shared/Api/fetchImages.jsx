import axios from 'axios';

const fetchImages = async (query, page) => {
  const response = await axios.get('https://pixabay.com/api/', {
    params: {
      q: `${query}`,
      page: `${page}`,
      key: '31959718-480cdd2164520f69972499037',
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
    },
  });
  const { hits } = response.data;
  const dataImages = hits.map(({ id, tags, webformatURL, largeImageURL }) => ({
    id,
    tags,
    webformatURL,
    largeImageURL,
  }));
  return dataImages;
};

export default fetchImages;
