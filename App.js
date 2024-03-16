import React from "react";
import ReactDOM from "react-dom/client";

/**
 *
 * Header
 *   - Logo
 *   - Nav Items
 * Body
 *   - Search
 *   - RestarauntContainer
 *     - RestarauntCard
 *       - img
 *       - Name, star rating, cuisine, delivery time
 * Footer
 *   - Copyright
 *   - Links
 *   - Address
 *   - Contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://img.freepik.com/free-vector/food-delivery-logo-with-bike-man-courier_1308-48914.jpg?w=1380&t=st=1710609211~exp=1710609811~hmac=958f1bf655c70a0300e86214d1fc70229502e3d5f8fb94ad9ab22f58835b5304"
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

const RestarauntCard = (props) => {
  console.log(props);
  const { resName, cuisine } = props;
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        alt="res-logo"
        src="https://media.istockphoto.com/id/1345624336/photo/chicken-biriyani.jpg?s=2048x2048&w=is&k=20&c=uU0uuti6KOvpQhXuu6VMpgi021o1vZXfOhpMrJXSn1o="
      />
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>4.4 stars</h4>
      <h4>30 minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestarauntCard
          resName="Pista House"
          cuisine="Biryani, Hyderbadi, Asian"
        />
        <RestarauntCard resName="KFC" cuisine="Chicken, Fast Food" />
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
