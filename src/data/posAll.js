import { apiUrl } from '../api'

const postAll = async (url, array) => {
  const promiseArray = array.map((value) => {
    return apiUrl.post(url, value)
  })
  console.log(promiseArray)
  await Promise.allSettled(promiseArray)
}

export default postAll
