import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Body from "./components/Body";

// const heading = React.createElement("h2", { id: "loda" }, [
//   React.createElement("h3", { id: "loda1" }, "Hlloo load1"),
//   React.createElement("h3", { id: "loda2" }, "Hlloo load2"),
// ]);

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
