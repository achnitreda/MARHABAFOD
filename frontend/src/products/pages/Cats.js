import CatsList from "../components/cats/CatsList";

const Cats = () => {
  const Cats = [
    {
      id: "u1",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Hamburger_%28black_bg%29.jpg",
      name: "Burgers",
    },
    {
      id: "u2",
      image: "https://www.recipetineats.com/wp-content/uploads/2020/05/Pizza-Crust-without-yeast_5.jpg?resize=650,910",
      name: "Pizzas",
    },
    {
      id: "u3",
      image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/isd1ulbakiziume4dyh9",
      name: "shakes",
    },
  ];

  return <CatsList items={Cats} />;
};

export default Cats;
