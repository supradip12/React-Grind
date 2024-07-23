import React from "react";
import ReactDOM from "react-dom";

// const heading = React.createElement("h2", { id: "loda" }, [
//   React.createElement("h3", { id: "loda1" }, "Hlloo load1"),
//   React.createElement("h3", { id: "loda2" }, "Hlloo load2"),
// ]);

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://static.vecteezy.com/system/resources/thumbnails/007/500/121/small_2x/food-delivery-icon-clip-art-logo-simple-illustration-free-vector.jpg"
          alt="app logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurentCard = (props) => {
  console.log(props);
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        alt="res-logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPuh5-mItCuAUBX7APK67gk4N3adkajqKzBw&s"
      />
      <h4>{props.resName}</h4>
      <h3>{props.rating}</h3>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurentCard resName="Meghna Foods" rating="4.4" />
        <RestaurentCard resName="KFC" rating="4.2" />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
