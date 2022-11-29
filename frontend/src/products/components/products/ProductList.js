import Card from "../../../shared/components/UIElements/Card";
import ProductItem from "./ProductItem";
import "./ProductList.css";

const ProductList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No product found</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className="place-list">
      {props.items.map((product) => (
        <ProductItem
          key={product.id}
          id={product.id}
          image={product.imageUrl}
          title={product.title}
          description={product.description}
          price={product.price}
          catId={product.cat}
        /> 
      ))}
    </ul>
  );
};

export default ProductList;
