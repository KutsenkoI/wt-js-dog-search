import axios from 'axios';

axios.defaults.headers.common['x-api-key'] = 'live_2olw1IjoZxCtskf4QK1CLgTlzQIgKu61QFAl6rYxpmeolUd2LKqVpcskko3E8Src';

export async function fetchBreeds() {
  return await axios
    .get('https://api.thedogapi.com/v1/breeds')
    .then(response => response.data);
}

export async function fetchDogByBreed(breedId) {
  return await axios
    .get(`https://api.thedogapi.com/v1/images/search?breed_ids=${breedId}`)
    .then(response => response.data);
}
