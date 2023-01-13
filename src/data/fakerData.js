import { apiUrl } from '../api'
import { fakerProducts, fakerPublications } from './'

const cant = {
  products: 30,
  publications: 120
}

const fakerData = async () => {
  const { data } = await apiUrl.get('products')
  const arrayOfProductsId = data.map(product => product.id)
  if (arrayOfProductsId.length > 0) return
  await fakerProducts(cant.products)
  await fakerPublications(cant.publications)
}

export default fakerData
