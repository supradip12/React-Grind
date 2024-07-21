import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement("h2", { id: "loda" }, [
  React.createElement("h3", { id: "loda1" }, "Hlloo load1"),
  React.createElement("h3", { id: "loda2" }, "Hlloo load2"),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
