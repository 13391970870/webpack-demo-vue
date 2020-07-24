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


function _deepClone(source) {
  let target;
  if (typeof source === 'object') {
    target = Array.isArray(source) ? [] : {}
    for (let key in source) {
      if (source.hasOwnProperty(key)) {
        if (typeof source[key] !== 'object') {
          target[key] = source[key]
        } else {
          target[key] = _deepClone(source[key])
        }
      }
    }
  } else {
    target = source
  }
  return target
}

export {
  $getJson,
  _deepClone
}