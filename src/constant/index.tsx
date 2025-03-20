import { PropertyCardProps } from "../components/PresentingPropertyCard";

export const images = [
    {
      url: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: "4,995,000"
    },
    {
      url: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: "5,250,000"
    },
    {
      url: "https://images.pexels.com/photos/1105754/pexels-photo-1105754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: "4,750,000"
    }
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
      image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
      similarFeatures: ["Modern design", "Smart home features", "Gourmet kitchen"],
      keyDifferences: ["Additional half bath", "Smaller lot", "Higher price"],
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
      image: "https://images.pexels.com/photos/1105754/pexels-photo-1105754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];