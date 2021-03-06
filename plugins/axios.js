export default function ({ $axios, redirect }) {

  if (process.env.NODE_ENV == 'development') {
    $axios.defaults.baseURL = 'http://localhost:3000'
  } else if (process.env.NODE_ENV == 'production') {
    $axios.defaults.baseURL = process.env.BASE_URL
  }

  $axios.onRequest(config => {
    // console.log('Making request to ' + config.url)
  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      // redirect('/400')
      console.log('请求地址异常, status code：400');
    }
  })

}