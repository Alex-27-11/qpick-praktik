import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Basket from "./Pages/Basket/Basket";

const Layout = () => {
  return (
    <div className="main">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <App /> },
      { path: "/basket", element: <Basket /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <Provider store={store}>
//     <BrowserRouter>
//       <React.StrictMode>
//         <App />
//       </React.StrictMode>
//     </BrowserRouter>
//   </Provider>
// );
