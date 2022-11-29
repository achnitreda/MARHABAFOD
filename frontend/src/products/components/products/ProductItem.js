import Card from '../../../shared/components/UIElements/Card';
import Button from '../../../shared/components/FormElements/Button';
import './ProductItem.css';

const ProductItem = props => {
    return (
        <li className="place-item">
          <Card className="place-item__content">
            <div className="place-item__image">
              <img src={props.image} alt={props.title} />
            </div>
            <div className="place-item__info">
              <h2>{props.title}</h2>
              <h3>{props.price}</h3>
              <p>{props.description}</p>
            </div>
            <div className="place-item__actions">
              <Button inverse>+</Button>
              <Button to={`/products/${props.id}`}>ORDER</Button>
            </div>
          </Card>
        </li>
      );
};

export default ProductItem;
