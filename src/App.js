import React, { useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Restaurantmenu from "./components/RestaurantMenu";
import userContext from "./utils/userContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const AppLayout = () => {
  const {loggedInUser} = useContext(userContext);
  const [name , setName] = useState(loggedInUser)
//  console.log(name);
  useEffect(()=>{

    let data = 
      {
        name : "prajeet shah"
      }
    
    // console.log(data.name);
    setName(data.name);
  },[])

  return (
    <Provider store = {appStore} >
    <userContext.Provider value={{loggedInUser : name}}>
    <div className="app">
      <Header />
      <Outlet />
    </div>
    </userContext.Provider>
    </Provider>
  );
};

const Approuter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <Restaurantmenu />,
      },
      {
        path:"/cart",
        element:<Cart/>
      }
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={Approuter} />);
