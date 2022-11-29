import React from "react";
import Card from "../../../shared/components/UIElements/Card";
import CatItem from "./CatItem";
import "./CatsList.css";

const CatsList = (props) => {
  if (props.items.length === 0) {  
    return (
      <div className="center">
        <Card>
          <h1>No Categories found</h1>
        </Card>
      </div>
    );
  }

  return (
    <React.Fragment>
    <div className="center">
        <h1>Categories</h1>
      </div>
    <ul className="users-list">
      {props.items.map((cat) => (
        <CatItem
          key={cat.id}
          id={cat.id}
          image={cat.image}
          name={cat.name}
        />
      ))}
    </ul>
    </React.Fragment>
  );
};
export default CatsList;
