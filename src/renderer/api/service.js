import axios from 'axios';
const $getJson = function(method) {
  return new Promise((resolve, reject) => {
    axios({
        method: 'get',
        url: method,
        dataType: "json",
        crossDomain: true,
        cache: false
      }).then(function(response) {
        resolve(response);
      })
      .catch(function(error) {
        reject(error);
      });
  })
}

export {
  $getJson
}