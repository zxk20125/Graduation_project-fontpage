
export default function (data) {
  let { url, params = {}, headers = {}, method, config, query } = data;
  method = method || config.method || 'get';

  return new Promise((resolve, reject) => {
    window.axios({
      url: url,
      headers: headers,
      method: method,
      [(method === 'get' || method === 'delete') ? 'params' : "data"]: params
    }).then(async (res) => {
      resolve(res);
    }).catch(async (err) => {
      reject(err)
    })
  })
}
