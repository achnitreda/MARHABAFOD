import { Link } from "react-router-dom";
import Avatar from "../../../shared/components/UIElements/Avatar";
import Card from "../../../shared/components/UIElements/Card";
import "./CatItem.css";

const CatItem = (props) => { /* Props is a parameter that is passed into the function. It is an object that
contains all the properties that are passed into the component. */
  return (
    <li className="user-item">
      <Card className="user-item__content">
        <Link to={`/${props.id}/products`}>
          <div className="user-item__image">
            <Avatar image={props.image} alt={props.name} />
          </div>
          <div className="user-item__info">
            <h2>{props.name}</h2>
          </div>
        </Link>
      </Card>
    </li>
  );
};
export default CatItem;
