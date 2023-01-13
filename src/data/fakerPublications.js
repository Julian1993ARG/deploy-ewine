import { apiUrl } from '../api'
import { arrayOfImages } from './fakerProducts'
import { faker } from '@faker-js/faker'
import postAll from './posAll'

const arrayOfUsersId = ['ca2e4f01-0a56-440d-8d39-235ca52b25f6', '71257928-0bc1-446c-8401-60055b17a8cb', '5488cd5e-83d5-47c2-bc3a-b468824d7ae7', '3111f327-5ebd-447d-9564-ae4b8550115c']

const fakerPublications = async cant => {
  if (!cant) return
  const { data } = await apiUrl.get('products')
  const arrayOfProductsId = data.map(product => product.id)

  const arrayOfPublications = []

  const createFakerPublication = () => {
    return {
      userId: faker.helpers.arrayElement(arrayOfUsersId),
      price: faker.commerce.price(1, 5000, 0),
      count: faker.datatype.number({ min: 1, max: 100 }),
      image: faker.helpers.arrayElement(arrayOfImages),
      description: faker.lorem.paragraph(),
      title: faker.lorem.sentence(),
      productId: faker.helpers.arrayElement(arrayOfProductsId)
    }
  }

  Array.from({ length: cant }, () => arrayOfPublications.push(createFakerPublication()))

  await postAll('publications', arrayOfPublications)
}

export default fakerPublications
