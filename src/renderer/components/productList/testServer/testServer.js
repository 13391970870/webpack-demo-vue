import axios from 'axios';
const test = () => {
	buildAxios();
}

const buildAxios = () => {
  axios.get('/api/user')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });}


export {
  test
}