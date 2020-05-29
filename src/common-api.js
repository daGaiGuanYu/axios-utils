// @ts-check
const getAxios = require('./axios-instance').get

module.exports = function(url){
  const a = getAxios()
  return {
    get: params => a(url, {
      params
    }),
    post: data => a.post(url, data),
    put: data => a.put(url, data),
    delete: data => a.delete(url, { data })
  }
}