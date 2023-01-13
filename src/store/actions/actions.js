import { apiUrl } from '../../api'

export function getPublications () {
  return async function (dispatch) {
    try {
      const api = await apiUrl.get('publications')
      return dispatch({
        type: 'GET_PUBLICATIONS',
        payload: api.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export function getByPublication (id) {
  return async function (dispatch) {
    try {
      const api = await apiUrl.get(`publications/${id}`)
      return dispatch({
        type: 'GET_BY_ID_PUBLICATION',
        payload: api.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}
export const getPublicationsAdm = () => {
  return async function (dispatch) {
    try {
      const res = await apiUrl.get('publications/all')

      return dispatch({
        type: 'GET_PUBLICATIONS_ALL',
        payload: res.data
      })
    } catch (error) {
      return error.message
    }
  }
}
export const bannedPublication = (id, isBanned) => {
  return async function (dispatch) {
    try {
      const res = await apiUrl.put(`publications/${id}?banned=${!isBanned}`)
      console.log(res)
      return dispatch({
        type: 'GET_PUBLICATION_BANNED',
        payload: res.data
      })
    } catch (error) {
      return error.message
    }
  }
}

export function postPublication (data, token) {
  return async function (dispatch) {
    try {
      const api = await apiUrl.post('publications', data)
      return dispatch({
        type: 'POST_PUBLICATION',
        Headers: { 'content-type': 'application/json' },
        payload: api.data
      })
    } catch (error) {
      console.log(error.response)
      throw new Error(error.response.data)
    }
  }
}

export function getProducts () {
  return async function (dispatch) {
    try {
      const api = await apiUrl.get('products')
      return dispatch({
        type: 'GET_PRODUCTS',
        payload: api.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export function getByIdProduct (id) {
  return async function (dispatch) {
    try {
      const api = await apiUrl.get(`products/${id}`)
      return dispatch({
        type: 'GET_BY_ID_PRODUCT',
        payload: api.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export function postProduct (data) {
  return async function (dispatch) {
    try {
      const api = await apiUrl.post('products', data)
      return dispatch({
        type: 'POST_PRODUCT',
        payload: api.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

// pending
export const searchByNameProduct = (name) => {
  return async function (dispatch) {
    return apiUrl.get(`products?name=${name}`)
      .then((infoProductName) => {
        dispatch({ type: 'SEARCH_PRODUCT_BY_NAME', payload: infoProductName })
      })
  }
}

// /publications/filter
export const filterPublications = ({ varietal, type, origin, opt }) => {
  return async function (dispatch) {
    try {
      const { data } = await apiUrl.get(`publications/filter?varietal=${varietal}&type=${type}&origin=${origin}&opt=${opt}`)
      return dispatch({
        type: 'FILTER_PUBLICATIONS',
        payload: data
      })
    } catch (error) {
      console.log(error)
    }
  }
}
export const clearFilter = () => {
  return { type: 'CLEAR_FILTER', payload: null }
}

// Search Publication by Name

export const searchPublicationByName = (name) => {
  return async function (dispatch) {
    return apiUrl.get(`publications?name=${name}`)
      .then((dataP) => {
        dispatch({ type: 'GET_PUBLICATIONS', payload: dataP })
      })
  }
}

// getProducts

export const getProductsReviews = () => {
  return async function (dispatch) {
    try {
      const api = await apiUrl.get('reviews/products')
      return dispatch({
        type: 'GET_PRODUCTS_REVIEWS',
        payload: api.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

// postReview
export const postReview = (userId, productId, text) => {
  return async function (dispatch) {
    const data = {
      userId,
      productId,
      text
    }
    try {
      const api = await apiUrl.post('reviews', data)
      return dispatch({
        type: 'POST_REVIEW',
        payload: api.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}
// Favorites

export const getFavorites = (id) => {
  return async function (dispatch) {
    try {
      const api = await apiUrl.get(`favorites/${id}`)
      return dispatch({
        type: 'GET_FAVORITES_ID',
        payload: api.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const removePublicationsUserFavorites = (id) => {
  return async function (dispatch) {
    try {
      const api = await apiUrl.get(`favorites/${id}`)
      return dispatch({
        type: 'REMOVE_PUBLICATIONS_USERFAVORITES',
        payload: api.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const addFavorites = (data) => {
  return async function (dispatch) {
    try {
      const api = await apiUrl.post('favorites', data)
      return dispatch({
        type: 'ADD_FAVORITE',
        payload: api.data
      })
    } catch (error) {
      console.log(error.response)
      throw new Error(error.response.data)
    }
  }
}

export const removeFavorites = (userId, publicationId) => {
  return async function (dispatch) {
    try {
      const api = await apiUrl.get(`favorites/delete/${userId}?publicationId=${publicationId}`)
      return dispatch({
        type: 'REMOVE_FAVORITE',
        payload: api.data
      })
    } catch (error) {
      console.log(error.response)
      throw new Error(error.response.data)
    }
  }
}

// CARRITO

export const addCarrito = (publication) => {
  return {
    type: 'ADD_CARRITO',
    payload: publication
  }
}

export const removeCarrito = (id) => {
  return {
    type: 'REMOVE_CARRITO',
    payload: id
  }
}

export const clearCarrito = (id) => {
  return {
    type: 'CLEAR_CARRITO',
    payload: id
  }
}

// RECOMENDED PUBLICATIONS

export const getRecomendedPublications = (type, varietal, origin) => {
  return async function (dispatch) {
    try {
      const recPub = await apiUrl(`publications/filter?type=${type || null}&varietal=${varietal || null}&origin=${origin || null}`)
      return dispatch({
        type: 'RECOMENDED_PUBLICATIONS',
        payload: recPub.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

// USER

export const loginUser = (user) => {
  return {
    type: 'LOGIN_USER',
    payload: user
  }
}

export const logoutUser = () => {
  return {
    type: 'LOGOUT_USER'
  }
}

export const getUsers = () => {
  return async function (dispatch) {
    try {
      const res = await apiUrl.get('users')

      return dispatch({
        type: 'GET_USERS',
        payload: res.data
      })
    } catch (error) {
      return error.message
    }
  }
}

export const bannedUser = (id, isBanned) => {
  return async function (dispatch) {
    try {
      const res = await apiUrl.put(`users/${id}?banned=${!isBanned}`)
      return dispatch({
        type: 'GET_USER_BANNED',
        payload: res.data
      })
    } catch (error) {
      return error.message
    }
  }
}
export const sommelierUser = (id, isSommelier) => {
  return async function (dispatch) {
    try {
      const res = await apiUrl.put(`users/${id}?sommelier=${!isSommelier}`)

      return dispatch({
        type: 'GET_USER_SOMMELIER',
        payload: res.data
      })
    } catch (error) {
      return error.message
    }
  }
}
export const usersByProvinces = () => {
  return async function (dispatch) {
    try {
      const res = await apiUrl.get('users/provinces')
      return dispatch({
        type: 'GET_USER_PROVINCES',
        payload: res.data
      })
    } catch (error) {
      return error.message
    }
  }
}
// STRIPE

export const postStripe = (idStripe, totalAmount, carrito, userId) => {
  return async function (dispatch) {
    try {
      const res = await apiUrl.post('stripe', {
        idStripe,
        totalAmount,
        carrito,
        userId
      })
      return dispatch({
        type: 'POST_STRIPE',
        payload: res.data
      })
    } catch (error) {
      return dispatch({
        type: 'POST_STRIPE',
        payload: error.response.data
      })
    }
  }
}

// QUESTIONS

export const getQuestions = (id) => {
  return async function (dispatch) {
    try {
      const api = await apiUrl.get(`questions/${id}`)
      return dispatch({
        type: 'GET_QUESTIONS',
        payload: api.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const addQuestion = (data) => {
  return async function (dispatch) {
    try {
      const api = await apiUrl.post('questions', data)
      return dispatch({
        type: 'ADD_QUESTION',
        payload: api.data
      })
    } catch (error) {
      throw new Error(error.response.data)
    }
  }
}

export const addAnswer = (data, id) => {
  return async function (dispatch) {
    try {
      const api = await apiUrl.post(`questions/answer/${id}`, data)
      return dispatch({
        type: 'ADD_QUESTION',
        payload: api.data
      })
    } catch (error) {
      throw new Error(error.response.data)
    }
  }
}
// Render Modal Login
export const modalRender = () => {
  return {
    type: 'RENDER_MODAL_LOGIN'
  }
}

// BUYS
export const getUserBuys = (userId) => {
  return async function (dispatch) {
    try {
      const res = await apiUrl.get(`buys/user/${userId}`)
      return dispatch({
        type: 'GET_USER_BUYS',
        payload: res.data
      })
    } catch (error) {
      return error.message
    }
  }
}

export const getBuys = () => {
  return async function (dispatch) {
    try {
      const res = await apiUrl.get('buys')
      return dispatch({
        type: 'GET_ALL_BUYS',
        payload: res.data
      })
    } catch (error) {
      return error.message
    }
  }
}

// Varietales
export const getVarietals = () => {
  return async function (dispatch) {
    try {
      const res = await apiUrl.get('varietals')
      return dispatch({
        type: 'GET_ALL_VARIETALS',
        payload: res.data
      })
    } catch (error) {
      return error.message
    }
  }
}
export function postVarietals (name, description) {
  const data = {
    name,
    description
  }
  return async function (dispatch) {
    try {
      const api = await apiUrl.post('varietals', data)
      return dispatch({
        type: 'POST_VARIETALS',
        payload: api.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

// SALES
export const getUserSales = (userId) => {
  return async function (dispatch) {
    try {
      const res = await apiUrl.get(`buys/user/sales/${userId}`)
      return dispatch({
        type: 'GET_USER_SALES',
        payload: res.data
      })
    } catch (error) {
      return error.message
    }
  }
}

// SALES BUYS DETAIL
export const getItemsDetails = (buyId) => {
  return async function (dispatch) {
    try {
      const res = await apiUrl.get(`buyItems/buy/${buyId}`)
      return dispatch({
        type: 'GET_ITEMS_DETAIL',
        payload: res.data
      })
    } catch (error) {
      return error.message
    }
  }
}

// DELIVERY
export const deliveryStatus = (deliveryId, status) => {
  return async function (dispatch) {
    const data = {
      status
    }
    try {
      const res = await apiUrl.put(`delivery/${deliveryId}`, data)
      return dispatch({
        type: 'GET_DELIVERY_STATUS',
        payload: res.data
      })
    } catch (error) {
      return error.message
    }
  }
}

// REVIEWSBUYS

export const addReviewBuy = (data) => {
  return async function (dispatch) {
    try {
      const api = await apiUrl.post('reviewsBuys', data)

      return dispatch({
        type: 'ADD_REVIEWBUY',
        payload: api.data
      })
    } catch (error) {
      console.log(error.response)
    }
  }
}
export const getPuntaje = (id) => {
  return async function (dispatch) {
    try {
      const api = await apiUrl.get(`reviewsBuys/${id}`)
      return dispatch({
        type: 'GET_REVIEWBUY_ID',
        payload: api.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const getReviewPublication = (id) => {
  return async function (dispatch) {
    try {
      const api = await apiUrl.get(`reviewsBuys/reviewsDetail/${id}`)
      return dispatch({
        type: 'GET_REVIEWBUYS_ID',
        payload: api.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}
export const getReviewByUser = (id) => {
  return async function (dispatch) {
    try {
      const api = await apiUrl.get(`reviewsBuys/reviewsUser/${id}`)
      return dispatch({
        type: 'GET_REVIEW_BYUSER',
        payload: api.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

// UPDATE PROFILE IMAGE

export const updateProfileImage = (id, url) => {
  return async function (dispatch) {
    const data = {
      url
    }
    try {
      const api = await apiUrl.put(`users/${id}/image-upload`, data)
      return dispatch({
        type: 'UPDATE_PROFILE_PICTURE',
        payload: api.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}
// volver Admin a un usuario
export const adminUser = (id, isAdmin) => {
  return async function (dispatch) {
    try {
      const res = await apiUrl.put(`users/${id}?admin=${!isAdmin}`)

      return dispatch({
        type: 'GET_USER_ADMIN',
        payload: res.data
      })
    } catch (error) {
      return error.message
    }
  }
}

export const getUserById = (id) => {
  return async function (dispatch) {
    try {
      const api = await apiUrl.get(`users/${id}`)
      return dispatch({
        type: 'GET_USERBY_ID',
        payload: api.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const addNotification = (data) => {
  return {
    type: 'ADD_NOTIFICATION',
    payload: data
  }
}

export const clearNotifications = () => {
  return {
    type: 'CLEAR_NOTIFICATIONS'
  }
}

export const setOnlineUsers = (users) => {
  return {
    type: 'SET_ONLINE_USERS',
    payload: users
  }
}
// productos mas comprados
export const popularProducts = () => {
  return async function (dispatch) {
    try {
      const res = await apiUrl.get('buyItems/productsCount')
      return dispatch({
        type: 'GET_POPULAR_PRODUCTS',
        payload: res.data
      })
    } catch (error) {
      return error.message
    }
  }
}

export const reviewsPublication = (productId) => {
  return async function (dispatch) {
    try {
      const res = await apiUrl.get(`reviews/${productId}`)
      return dispatch({
        type: 'REVIEWS_PUBLICATIONS',
        payload: res.data
      })
    } catch (error) {
      return error.message
    }
  }
}
// aca van las review
export function getReviewsAdmin () {
  return async function (dispatch) {
    try {
      const api = await apiUrl.get('reviews/productsLanding')
      return dispatch({
        type: 'GET_REVIEWS',
        payload: api.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}
export const paymentAmount = (paymentAmount) => {  // eslint-disable-line
  return {
    type: 'SET_PAYMENT_AMOUNT',
    payload: paymentAmount
  }
}
