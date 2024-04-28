import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import AddTouristSpot from "../pages/Tourist/AddTouristSpot";
import TouristSpotDetails from "../pages/Tourist/TouristSpotDetails";
import MyTouristSpots from "../pages/Tourist/MyTouristSpots";
import AllTouristSpots from "../pages/Tourist/AllTouristSpots";
import CountrySpecificSpots from "../pages/Tourist/CountrySpecificSpots";
import UpdateTouristSpot from "../pages/Tourist/UpdateTouristSpot";
import PrivateRoutes from "./PrivateRoutes";
import ErrorPage from "../pages/errorPage/ErrorPage";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/spot-details/:id",
        loader: ({ params }) =>
          fetch(`https://travelors-server.vercel.app/details/${params.id}`),
        element: (
          <PrivateRoutes>
            <TouristSpotDetails></TouristSpotDetails>
          </PrivateRoutes>
        ),
      },
      {
        path: "/add-tourist-spot",
        element: (
          <PrivateRoutes>
            <AddTouristSpot></AddTouristSpot>
          </PrivateRoutes>
        ),
      },
      {
        path: "/my-tourist-spot",
        element: (
          <PrivateRoutes>
            <MyTouristSpots></MyTouristSpots>
          </PrivateRoutes>
        ),
      },
      {
        path: "/tourist-spots",
        loader: () =>
          fetch(`https://travelors-server.vercel.app/tourist-spots`),
        element: <AllTouristSpots></AllTouristSpots>,
      },
      {
        path: "/countries/:name",
        loader: ({ params }) =>
          fetch(`https://travelors-server.vercel.app/countries/${params.name}`),
        element: <CountrySpecificSpots></CountrySpecificSpots>,
      },
      {
        path: "/update/:id",
        loader: ({ params }) =>
          fetch(`https://travelors-server.vercel.app/details/${params.id}`),
        element: (
          <PrivateRoutes>
            <UpdateTouristSpot></UpdateTouristSpot>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
export default Routes;
