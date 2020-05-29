let instance
exports.register = function(a){
  instance = a
}

exports.get = function(){
  if(!instance)
    throw Error('axios-util: 请先注册 axios 实例')
  return instance
}