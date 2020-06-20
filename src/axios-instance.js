let axios = require('axios')

exports.register = function(a){
  axios = a
}

exports.get = function(){
  return axios
}