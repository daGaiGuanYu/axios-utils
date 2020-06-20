const instance = require('./axios-instance')

module.exports = function(url){
  const a = instance.get()
  return {
    get: params => a(url, {
      params
    }),
    post: data => a.post(url, data),
    put: data => a.put(url, data),
    delete: params => a.delete(url, { params })
  }
}