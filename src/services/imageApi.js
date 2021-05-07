import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '20752837-5cf2428c2df3b00b35cf66bdb';

const imageApi = ({
  searchQuery = '',
  currentPage = 1,
  orientation = 'horizontal',
  image_type = 'photo',
  perPage = 12,
}) => {
  return axios
    .get(
      `${BASE_URL}?q=${searchQuery}&page=${currentPage}&key=${API_KEY}&image_type=${image_type}&orientation=${orientation}&per_page=${perPage}`,
    )
    .then(response => response.data.hits);
};

export default imageApi;
