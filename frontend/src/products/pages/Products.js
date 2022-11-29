import { useParams } from 'react-router-dom';
import ProductList from '../components/products/ProductList';


const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    title: 'Beef Burger',
    description: 'an american Beef Burger',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/47/Hamburger_%28black_bg%29.jpg',
    price: '69 DH',
    cat: 'u1'
  },
  {
    id: 'p2',
    title: 'Lazania Pizza',
    description: 'Pizza with lazania ...',
    imageUrl: 'https://images-gmi-pmc.edge-generalmills.com/1423aa04-68e7-40b3-8778-6fa6091fc2b8.jpg',
    price: '40 DH',
    cat: 'u1'
  },
  {
    id: 'p3',
    title: 'Lazania Pizza',
    description: 'Pizza with lazania',
    imageUrl: 'https://www.recipetineats.com/wp-content/uploads/2020/05/Pizza-Crust-without-yeast_5.jpg?resize=650,910',
    price: '60 DH',
    cat: 'u1'
  }
];

const Products = () => {
    /* `useParams` is a hook that gives access to the dynamic parameters in the URL use it to get catId from url*/
    const catId = useParams().catId;
    const loadedProducts = DUMMY_PRODUCTS.filter(product => product.cat === catId)

  return <ProductList items={loadedProducts} />;
};

export default Products;

