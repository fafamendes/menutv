import './App.css';
import Slider from './features/slider/Slider'

function App() {
  return (
    <div className="App">
      <Slider data={data} interval={5000} />
    </div>
  );
}

const description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Vestibulum lacinia quam ac purus fermentum pharetra.`;
const data = [
  {
    title: 'Panificação',
    backgroundImageCategoryUrl: 'https://i.pinimg.com/564x/6d/a1/88/6da18893234b8bb468fab930b2e110f9.jpg',
    products: [
      {
        name: 'Pão francês',
        price: 'R$ 11,49',
        productImageUrl: 'https://i.pinimg.com/564x/00/e0/30/00e030619e352c815b47bd4447c40e5b.jpg',
        description,
        portion: 'Kg'
      },
      {
        name: 'Sonho',
        price: 'R$ 4,00',
        productImageUrl: 'https://i.pinimg.com/564x/f1/e7/fe/f1e7fe7f5200a722eec7339e32e0291b.jpg',
        description,
        portion: 'Unidade'
      },
      {
        name: 'Donuts',
        price: 'R$ 5,00',
        productImageUrl: 'https://i.pinimg.com/564x/4c/2e/22/4c2e22f7ddf1ad1218433ebd612efd4c.jpg',
        description,
        portion: 'Unidade'
      },
      {
        name: 'Pão Italiano',
        price: 'R$ 37,99',
        productImageUrl: 'https://i.pinimg.com/564x/36/37/82/363782e826bc019979a140239f4ef3a3.jpg',
        description,
        portion: 'Kg'
      }
    ]
  },
  {
    title: 'Cervejas',
    products: [
      {
        name: 'Heineken Long Neck',
        price: 'R$ 9,49',
        description,
        productImageUrl: 'https://i.pinimg.com/564x/53/28/e1/5328e1acab47a8b0ceaf2ff4cb2bf0a5.jpg',
      },
      {
        name: 'Stella Artois',
        price: 'R$ 8,49',
        description,
        productImageUrl: 'https://i.pinimg.com/564x/c8/75/b8/c875b8b97062717fcc1c6d4c7eb8a4c0.jpg',
      },
      {
        name: 'Budweiser',
        price: 'R$ 7,49',
        description,
        productImageUrl: 'https://i.pinimg.com/564x/a8/a0/0e/a8a00ef7e1fe3c95856af069a8729f30.jpg',
      },
      {
        name: 'Amstel',
        price: 'R$ 5,99',
        description,
        productImageUrl: 'https://i.pinimg.com/564x/4a/00/e9/4a00e932408db5426c2e269d571d3dab.jpg',
      },
    ]
  },
  {
    title: 'Ofertas',
    products: [
      {
        name: 'Brigadeiro',
        price: 'R$ 0,99',
        productImageUrl: `https://mir-s3-cdn-cf.behance.net/projects/404/136206105332129.Y3JvcCw1OTYsNDY2LDExMiw0NzU.jpg`,
        description,
      },
      {
        name: 'Mini Sonho',
        price: 'R$ 1,99',
        productImageUrl: 'https://i.pinimg.com/564x/2c/81/a5/2c81a5e47148643743baa551fdf6f3c9.jpg',
        description,
      },
      {
        name: 'Baguete',
        price: 'R$ 3,99',
        productImageUrl: 'https://i.pinimg.com/564x/63/bb/3e/63bb3e0d660195438c6050b0047cb11d.jpg',
        description,
      }
    ]
  },
  {
    title: 'Bebidas',
    products: [
      {
        name: 'Café',
        price: 'R$ 2,49',
        description,
        productImageUrl: 'https://i.pinimg.com/564x/9e/af/39/9eaf392dfb783de47a8fa833787daf22.jpg',
      },
      {
        name: 'Suco de Laranja',
        price: 'R$ 1,99',
        description,
        productImageUrl: 'https://i.pinimg.com/564x/f3/46/7f/f3467f72e381d3a4960972ba49fa2979.jpg',
      },
      {
        name: 'Coca-cola Lata',
        price: 'R$ 3,99',
        description: 'Lata 350 mL',
        productImageUrl: 'https://i.pinimg.com/564x/3f/40/3c/3f403c68584f0c60d08e66c207b09977.jpg',
      }
    ]
  },
]

export default App;
