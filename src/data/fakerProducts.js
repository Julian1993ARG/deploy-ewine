import { faker } from '@faker-js/faker'
import { types, cellers, provinces, varietales } from '../components/utilities'
import postAll from './posAll'

const data = [
  {
    id: '616ff7c1-25f8-4b46-a2e8-e3edd3f42aab',
    image_url: 'https://res.cloudinary.com/dnitjpfm5/image/upload/v1673557059/ewines/igtbo2rtavi0tksfcnds.png',
    isLanding: false
  },
  {
    id: '5343db69-4b97-4f8a-a07c-369118aa244b',
    image_url: 'https://res.cloudinary.com/dnitjpfm5/image/upload/v1673557364/ewines/qcxlpucgmggj7o6rofp7.png',
    isLanding: false
  },
  {
    id: 'b347cffa-82b7-4a19-83e7-1b5a1f7865bc',
    image_url: 'https://res.cloudinary.com/dnitjpfm5/image/upload/v1673557709/ewines/b7vvaggaoxyszdbumtme.png',
    isLanding: false
  },
  {
    id: '70e890bd-2fe8-40f1-a3c8-3ce693ab7338',
    image_url: 'https://res.cloudinary.com/dnitjpfm5/image/upload/v1673557782/ewines/m98y5rneeh3mem1rwjd9.png',
    isLanding: false
  },
  {
    id: '623ab83b-3dc7-481c-b4a4-be7f3f8f66b9',
    image_url: 'https://res.cloudinary.com/dnitjpfm5/image/upload/v1673557834/ewines/seafza334zxucaxmnnaa.png',
    isLanding: false
  },
  {
    id: 'adaec1b3-45b7-4697-9aef-3c44f08da9d9',
    image_url: 'https://res.cloudinary.com/dnitjpfm5/image/upload/v1673558058/ewines/qqczv1bwsxjfgsr3h3l9.png',
    isLanding: false
  },
  {
    id: 'a6985d2d-de69-4673-ab65-cff79a9137f1',
    image_url: 'https://res.cloudinary.com/dnitjpfm5/image/upload/v1673558134/ewines/s3qbjhwb9nwaktyxhf55.png',
    isLanding: false
  },
  {
    id: '343a357b-ac67-4da1-b9ce-804b172062e5',
    image_url: 'https://res.cloudinary.com/dnitjpfm5/image/upload/v1673558438/ewines/pf4ake8skoens7wjfybd.png',
    isLanding: false
  },
  {
    id: '4fbcdde9-a2f2-4ef5-beee-ed4d708559b5',
    image_url: 'https://res.cloudinary.com/dnitjpfm5/image/upload/v1673559411/ewines/undefined/tdnxyryphqyeotjsrhma.png',
    isLanding: false
  },
  {
    id: '90f21f99-11b1-4095-9c19-c66d0c8d38ad',
    image_url: 'https://res.cloudinary.com/dnitjpfm5/image/upload/v1673559481/ewines/undefined/vhzwxbaw8ptgsyh6j7o0.png',
    isLanding: false
  },
  {
    id: '966a35e7-b11e-4837-b060-3082c453624b',
    image_url: 'https://res.cloudinary.com/dnitjpfm5/image/upload/v1673559595/ewines/La%20Linda/ytkntcvpj6vvcuctw2kq.png',
    isLanding: false
  },
  {
    id: 'bf972149-79d3-4f03-b89f-4d872e066f56',
    image_url: 'https://res.cloudinary.com/dnitjpfm5/image/upload/v1673559711/ewines/La%20Linda/ebw5hxigddpwrzbqzuwn.png',
    isLanding: false
  },
  {
    id: 'c5d9788f-3881-4c2b-baa4-e574216cb271',
    image_url: 'https://res.cloudinary.com/dnitjpfm5/image/upload/v1673559892/ewines/f56oz8np48rmmrf4fnf5.png',
    isLanding: false
  },
  {
    id: 'd65dda38-cdeb-4235-b613-de48c25a622a',
    image_url: 'https://res.cloudinary.com/dnitjpfm5/image/upload/v1673559965/ewines/nfyiewjvljulzllhbg4b.png',
    isLanding: false
  },
  {
    id: '8decfe11-f5f4-43ac-8526-e394a9e9c401',
    image_url: 'https://res.cloudinary.com/dnitjpfm5/image/upload/v1673560820/ewines/ytcptjoit6ipftkra7u6.png',
    isLanding: false
  },
  {
    id: 'be6620a3-0669-4684-8a73-51d12ccca9aa',
    image_url: 'https://res.cloudinary.com/dnitjpfm5/image/upload/v1673560839/ewines/nhxjoxwvm4myzivjh7ee.png',
    isLanding: false
  },
  {
    id: '7fdaa5d1-8e07-4a2c-9608-a115c854e434',
    image_url: 'https://res.cloudinary.com/dnitjpfm5/image/upload/v1673560869/ewines/rvuhltf4y72wkadvbsb6.png',
    isLanding: false
  },
  {
    id: 'd3a474d0-99ed-4270-a230-8b32260cc27b',
    image_url: 'https://res.cloudinary.com/dnitjpfm5/image/upload/v1673560892/ewines/b1eqxd719ywxoobuoguj.png',
    isLanding: false
  },
  {
    id: '22892bec-51c6-4bdf-b02c-d97d2325ead6',
    image_url: 'https://res.cloudinary.com/dnitjpfm5/image/upload/v1673560914/ewines/wgikb9pb6ggntafdnwon.png',
    isLanding: false
  },
  {
    id: '4dc4faf2-31ef-4ab1-a4bf-573103ef8532',
    image_url: 'https://res.cloudinary.com/dnitjpfm5/image/upload/v1673560934/ewines/i3pqodateguyyqvq5ctt.png',
    isLanding: false
  },
  {
    id: 'dff00f4d-de5e-42ce-a1ae-84f2144e9142',
    image_url: 'https://res.cloudinary.com/dnitjpfm5/image/upload/v1673560960/ewines/hrk2qhnoelnfed2jptao.png',
    isLanding: false
  },
  {
    id: 'c3e93cd2-9b7c-43c9-a7c1-840865234fad',
    image_url: 'https://res.cloudinary.com/dnitjpfm5/image/upload/v1673561026/ewines/vvvib1pxpvw6svxvt9vw.png',
    isLanding: false
  },
  {
    id: 'd3a247db-3f44-4e37-b23a-1a4b4fc75046',
    image_url: 'https://res.cloudinary.com/dnitjpfm5/image/upload/v1673561156/ewines/vq6wmmavakt6ndyl9yea.png',
    isLanding: false
  },
  {
    id: 'e27128ef-2b17-4c36-bfec-4c0595437833',
    image_url: 'https://res.cloudinary.com/dnitjpfm5/image/upload/v1673561245/ewines/c4paneddwshabiqhpae9.png',
    isLanding: false
  },
  {
    id: '2f16cd1f-a0e7-4046-93a9-96f3fd267d02',
    image_url: 'https://res.cloudinary.com/dnitjpfm5/image/upload/v1673561268/ewines/grioecnkwo8uwhiv34rk.png',
    isLanding: false
  },
  {
    id: 'fbfecf88-c806-4a22-8396-efe5c2378ad6',
    image_url: 'https://res.cloudinary.com/dnitjpfm5/image/upload/v1673561333/ewines/vvb7ltqowxrjfgddtm6p.png',
    isLanding: false
  },
  {
    id: 'a0a7215c-0ef0-48fe-b85d-cdad45ba2fbf',
    image_url: 'https://res.cloudinary.com/dnitjpfm5/image/upload/v1673561352/ewines/owluq4i0xdexsepftwj5.png',
    isLanding: false
  },
  {
    id: '78464d8e-6afe-4db5-8b0f-018039f55e37',
    image_url: 'https://res.cloudinary.com/dnitjpfm5/image/upload/v1673561385/ewines/uyltt7bfbgjjh4rjm0s3.png',
    isLanding: false
  },
  {
    id: 'e4fb0aee-1ab2-4376-8fca-300c1c095fc3',
    image_url: 'https://res.cloudinary.com/dnitjpfm5/image/upload/v1673561417/ewines/kprtvllrrsl24hooy7fx.png',
    isLanding: false
  },
  {
    id: '60f11b7e-c42a-4c18-9c64-8d3526c323cc',
    image_url: 'https://res.cloudinary.com/dnitjpfm5/image/upload/v1673561463/ewines/boiv7vqokhlmx8yne0bw.png',
    isLanding: false
  },
  {
    id: 'f880e2f3-bd5f-4deb-99e7-418b428f4edb',
    image_url: 'https://res.cloudinary.com/dnitjpfm5/image/upload/v1673561532/ewines/n6sds1ur40tcgeku1orq.png',
    isLanding: false
  },
  {
    id: 'cdacc88d-fd92-4e86-be59-f1ae223fc3b8',
    image_url: 'https://res.cloudinary.com/dnitjpfm5/image/upload/v1673561572/ewines/xqvclv8hrcajttuslw3k.png',
    isLanding: false
  },
  {
    id: '822b0307-1d87-4d2c-8147-58ac9e8d51c9',
    image_url: 'https://res.cloudinary.com/dnitjpfm5/image/upload/v1673561590/ewines/aqmobmdz5eazd3vfcxah.png',
    isLanding: false
  },
  {
    id: 'c4c3d1a9-afa2-4d4a-bb2a-00ac6b202924',
    image_url: 'https://res.cloudinary.com/dnitjpfm5/image/upload/v1673561622/ewines/glaz6qkjzsshonwpzi4e.png',
    isLanding: false
  },
  {
    id: '1c711f52-ce4d-4881-8b32-ee2d70298ac2',
    image_url: 'https://res.cloudinary.com/dnitjpfm5/image/upload/v1673561641/ewines/lmbbigp2ebwx2hyxuzgb.png',
    isLanding: false
  }
]
export const arrayOfImages = data.map((item) => item.image_url)

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
