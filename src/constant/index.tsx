import { PropertyCardProps } from "../components/PresentingPropertyCard";
import {
  BarChart,
  DollarSign,
  TrendingDown,
  Calendar,
  Bath,
  Bed,
  Ruler,
  Users,
  Grid,
} from "lucide-react";

export const images = [
  {
    url: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "4,995,000",
  },
  {
    url: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "5,250,000",
  },
  {
    url: "https://images.pexels.com/photos/1105754/pexels-photo-1105754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "4,750,000",
  },
];

export const propertyData: PropertyCardProps[] = [
  {
    matchPercentage: 95,
    address: "123 Maple Street, Beverly Hills, CA 90210",
    distance: "0.5 miles",
    price: "1,250,000",
    saleDate: "Mar 15, 2024",
    bedrooms: 4,
    baths: 3,
    sqft: 2800,
    similarFeatures: ["Open floor plan", "Hardwood floors", "Updated kitchen"],
    keyDifferences: ["Larger backyard", "No pool", "Newer construction"],
    image:
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    matchPercentage: 88,
    address: "456 Oak Avenue, Beverly Hills, CA 90210",
    distance: "0.8 miles",
    price: "1,450,000",
    saleDate: "Mar 10, 2024",
    bedrooms: 4,
    baths: 3.5,
    sqft: 3000,
    similarFeatures: [
      "Modern design",
      "Smart home features",
      "Gourmet kitchen",
    ],
    keyDifferences: ["Additional half bath", "Smaller lot", "Higher price"],
    image:
      "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    matchPercentage: 82,
    address: "789 Pine Road, Beverly Hills, CA 90210",
    distance: "1.2 miles",
    price: "1,150,000",
    saleDate: "Mar 5, 2024",
    bedrooms: 3,
    baths: 2.5,
    sqft: 2500,
    similarFeatures: ["Updated bathrooms", "Large windows", "Garden space"],
    keyDifferences: ["One less bedroom", "Lower price", "Older build"],
    image:
      "https://images.pexels.com/photos/1105754/pexels-photo-1105754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

export const Titles = {
  "/create": "Verifying Property information",
  "/create/presenting-comparable": "Presenting Comparable Properties",
  "/create/analyzing-current-market": "Analyzing Current Market Conditions",
  "/create/property-condition": "Property Condition Input",
  "/create/personalizing-the-offer": "Personalizing The Offer",
  "/create/recommended-offer": "Presenting the Recommended Offer",
};

export const Trends = [
  {
    title: "Median Price",
    icon: DollarSign,
    value: "$100,000",
    trend: "5.2% From Last Year",
  },
  {
    title: "Sale To List Ratio",
    icon: BarChart,
    value: "97.5%",
    trend: "2.5% Below Asking On Avg.",
  },
  {
    title: "Price Reduced Listings",
    icon: TrendingDown,
    value: "24%",
    trend: "+5% From Last Month",
  },
  {
    title: "Median Days on Market",
    icon: Calendar,
    value: "46 Days",
    trend: "↑ 16 Days YoY | ↑ 2 Days MoY",
  },
  {
    title: "Other",
    icon: null,
    value: "0000",
    trend: null,
  },
];

export const VerifyPropertyCardData = {
  propertyDetails: [
    {
      icon: Bed,
      label: "20 Bedrooms",
    },
    {
      icon: Bath,
      label: "20 Baths",
    },
    {
      icon: Ruler,
      label: "10,00000 Square feet",
    },
    {
      icon: Calendar,
      label: "1945 Built In",
    },
    {
      icon: Grid,
      label: "N/A HOA / mo",
    },
    {
      icon: Users,
      label: "Single Family Home",
    },
  ],
  features: [
    {
      category: "Entrance Foyer",
      details: [
        "Roman Tub",
        "Volume Ceilings",
        "Walk-In Closet(s)",
        "Maid/In-Law Quarters",
        "Storage",
      ],
    },
    {
      category: "Flooring",
      details: ["Marble", "Wood"],
    },
    {
      category: "Windows",
      details: ["Clear Impact Glass", "Impact Glass"],
    },
  ],
};

export const PersonalizingTheOfferData = {
  image:
    "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  matchPercentage: 94,
  address: "123 Palm Avenue",
  distance: "0.8 miles",
  price: "223,000",
  saleDate: "Dec 14, 2024",
  bedrooms: 20,
  baths: 20,
  sqft: 1000000,
  similarFeatures: [
    "Identical Mid-Century Style",
    "Similar Tropical Landscaping",
    "Matching White Exterior",
  ],
  keyDifferences: [
    "Entry: No Pavers",
    "Palm Trees: Fewer",
    "Windows: Original",
  ],
};

export const RecommendedOfferData = {
  matchDetails: {
    matches: {
      title: "Matches",
      details: [
        "Amenities are distant",
        "High Neighborhood Safety",
        "High Quality of Local Schools"
      ]
    },
    partialMatch: {
      title: "Partial Match",
      details: "Kitchen size slightly smaller than pretend"
    }
  },
  image: {
      image: {
        url: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Property"
      },
      matchPercentage: 95,
      address: "XYZ Building, 1234 road, Fl, 1000048"
  },
  recommendation: {
    title: "Offer savant recommendation",
    offerAmount: "$787,800",
    increaseAmount: "$10,000",
    description: "This aggressive offer maximizes your chances of winning the home"
  },
  offerDetails: {
    winProbability: "89%",
    offerStrategy: "More aggressive",
    yourOffer: {
      amount: "$787,800",
      percentageChange: "+0.1%"
    }
  },
  marketConditions: {
    type: "Seller's market",
    competitionLevel: "High competition"
  },
  listOffer: {
    amount: "$787,800"
  }
};

export const propertyQualityData = {
  overallQuality: {
    title: "Overall quality score",
    score: 5,
    category: "Luxe",
    description: "In excellent condition with high-quality features and no repairs needed."
  },
  exterior: {
    title: "Exterior",
    image: {
      url: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "House"
    },
    features: ["Fence", "Patio"]
  },
  secondaryQuality: {
    score: 2,
    category: "Luxe",
    description: "In excellent condition with high-quality features and no repairs needed."
  }
};