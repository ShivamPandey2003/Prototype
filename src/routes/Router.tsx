import { createBrowserRouter } from "react-router";
import Layout from "../layout/Layout";
import RecommendedOffer from "../components/RecommendedOffer";
import VerifyProperty from "../components/VerifyProperty";
import PresentingProperty from "../components/PresentingProperty";
import MarketTrend from "../components/MarketTrend";
import PropertyCondition from "../components/PropertyCondition";
import PersonalizingTheOffer from "../components/PersonalizingTheOffer";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
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
        element: <PresentingProperty/>
      },
      {
        path: "analyzing-current-market",
        element: <MarketTrend/>
      },
      {
        path: "property-condition",
        element:<PropertyCondition/>
      },
      {
        path: "personalizing-the-offer",
        element:<PersonalizingTheOffer/>
      }
    ],
  },
]);
