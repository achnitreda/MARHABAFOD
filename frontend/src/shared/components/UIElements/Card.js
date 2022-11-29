import './Card.css';

const Card = props => {
  return (
    <div className={`card ${props.className}`} style={props.style}>
      {/* A special prop that allows you to pass in children to a component. */
      props.children}
    </div>
  );
};

export default Card;
