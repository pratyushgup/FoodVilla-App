import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <a href="/">
    <img
      src="https://content.jdmagicbox.com/comp/rayagada/r1/9999p6856.6856.220317231853.s9r1/catalogue/the-food-villa-family-restaurant-gunupur-gunupur-rayagada-restaurants-zu4jzj8a1p.jpg"
      alt="logo"
      className="logo"
    />
  </a>
);

const Header = () => {
  return (
    <div className="header">
      {Title()}
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Contact</li>
          <li>About Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const burgerking ={
  image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/28fb13049b4e55297bb3f703cde63c35",
  name: "Burger King",
  cusines: ["Buger","American"],
  rating: "4.2"
}

const RestrauntCard = ()=>{
  return (
    <div className="card">
      <img src= {burgerking.image} alt="Burger" />
      <h2>{burgerking.name}</h2>
      <h3>{burgerking.cusines.join(" ,")}</h3>
      <h4>{burgerking.rating}</h4>
    </div>
  );
}

const Body = () => {
  return (
    <RestrauntCard/>
  )
};
const Footer = () => {
  return <h4>Footer</h4>;
};

const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
