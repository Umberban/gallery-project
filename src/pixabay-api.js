import axios from 'axios'

export class PixabayApi {
  #BASE_URL = 'https://pixabay.com/api/';
  #API_KEY = '31209256-0b3a6934894cd0b0ba6ec9540';

  page = 1;

 fetchPhotos(searchQuery) {
   return axios.get(
    `${this.#BASE_URL}?`, {
    params: {
     key: this.#API_KEY,
     q: searchQuery,
     page: this.page,
     per_page: 40,
     image_type: 'photo',
     orientation: 'horizontal',
     safesearch: 'true',
      },
    });
 }
}