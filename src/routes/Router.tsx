import { createBrowserRouter } from "react-router";
import Layout from "../layout/Layout";
import RecommendedOffer from "../components/RecommendedOffer";
import VerifyProperty from "../components/VerifyProperty";
import MarketTrend from "../components/MarketTrend";
import PropertyCondition from "../components/PropertyCondition";
import PersonalizingTheOffer from "../components/PersonalizingTheOffer";
import IndexLayout from "../layout/IndexLayout";
import Home from "../components/Home";
import PresentingProperty from "../components/PresentingProperty";
import Login from "../components/Login";
import ProtectedRoute from "./ProtectedRoute";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute element={<IndexLayout />} />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/auth",
    element: <Login />,
  },
  {
    path: "/create",
    element: <ProtectedRoute element={<Layout />} />,
    children: [
      {
        index: true,
        element: <VerifyProperty />,
      },
      {
        path: "recommended-offer",
        element: <RecommendedOffer />,
      },
      {
        path: "presenting-comparable",
        element: <PresentingProperty />,
      },
      {
        path: "analyzing-current-market",
        element: <MarketTrend />,
      },
      {
        path: "property-condition",
        element: <PropertyCondition />,
      },
      {
        path: "personalizing-the-offer",
        element: <PersonalizingTheOffer />,
      },
    ],
  },
]);
