import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import DonationDetails from "../Components/DonationDetails/DonationDetails";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
      },

      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/details/:id",
        element: <DonationDetails></DonationDetails>,
        loader: ()=> fetch("/donations.json")
      },
    ],
  },
]);

export default Route;
