import { faker } from '@faker-js/faker'
import { types, cellers, provinces, varietales } from '../components/utilities'
import postAll from './posAll'

export const arrayOfImages = [
  'https://res.cloudinary.com/dnitjpfm5/image/upload/v1673562522/ewines/iudte27hha1nditaziug.png',
  'https://res.cloudinary.com/dnitjpfm5/image/upload/v1673561641/ewines/lmbbigp2ebwx2hyxuzgb.png',
  'https://res.cloudinary.com/dnitjpfm5/image/upload/v1673561590/ewines/aqmobmdz5eazd3vfcxah.png',
  'https://res.cloudinary.com/dnitjpfm5/image/upload/v1673561417/ewines/kprtvllrrsl24hooy7fx.png',
  'https://res.cloudinary.com/dnitjpfm5/image/upload/v1673561463/ewines/boiv7vqokhlmx8yne0bw.png',
  'https://res.cloudinary.com/dnitjpfm5/image/upload/v1673561532/ewines/n6sds1ur40tcgeku1orq.png',
  'https://res.cloudinary.com/dnitjpfm5/image/upload/v1673561385/ewines/uyltt7bfbgjjh4rjm0s3.png',
  'https://res.cloudinary.com/dnitjpfm5/image/upload/v1673561352/ewines/owluq4i0xdexsepftwj5.png',
  'https://res.cloudinary.com/dnitjpfm5/image/upload/v1673561245/ewines/c4paneddwshabiqhpae9.png',
  'https://res.cloudinary.com/dnitjpfm5/image/upload/v1673561156/ewines/vq6wmmavakt6ndyl9yea.png'
]

const fakerProductsPost = async (cantidad) => {
  if (!cantidad) return
  const fakeProducts = []
  const createFakerProducts = () => {
    return {
      name: faker.commerce.productName(),
      type: faker.helpers.arrayElement(types),
      varietal: faker.helpers.arrayElement(varietales),
      origin: faker.helpers.arrayElement(provinces),
      img: faker.helpers.arrayElement(arrayOfImages),
      cellar: faker.helpers.arrayElement(cellers)
    }
  }

  Array.from({ length: cantidad }).forEach(() => {
    fakeProducts.push(createFakerProducts())
  })

  await postAll('products', fakeProducts)
}

export default fakerProductsPost
