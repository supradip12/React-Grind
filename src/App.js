import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Shimmer from "./components/Shimmer";
// import GroceryCart from "./GroceryCart";

// const heading = React.createElement("h2", { id: "loda" }, [
//   React.createElement("h3", { id: "loda1" }, "Hlloo load1"),
//   React.createElement("h3", { id: "loda2" }, "Hlloo load2"),
// ]);

//Lazy Loading
//Code Spliting
//Dynamic Binding
//Chunking

const Grocery = lazy(() => {
  import("./components/Grocery");
});

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      {/* <Body /> */}
      <Outlet />
    </div>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },

      {
        path: "/ab",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/gro",
        element: (
          <Suspense fallback={<p>Hey</p>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);
root.render(<RouterProvider router={AppRouter} />);
