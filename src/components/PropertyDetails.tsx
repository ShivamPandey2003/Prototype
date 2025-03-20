import React from "react";
import { VerifyPropertyCardData } from "../constant";

const PropertyDetails = () => {
  return (
    <div className="bg-blue-100 p-4 rounded-lg shadow-lg max-w-2xl mx-auto">
      <div className="grid grid-cols-3 gap-4 mb-2 text-blue-700">
        {VerifyPropertyCardData.propertyDetails.map((detail, index) => (
          <InfoCard icon={<detail.icon />} label={detail.label} />
        ))}
      </div>
      <div className="bg-blue-200 p-4 rounded-lg mb-2 text-blue-900 text-sm">
        {VerifyPropertyCardData.features.map((feature, index) => (
          <p key={index}>
            <strong className="font-semibold">+ {feature.category}</strong> - {feature.details.join(", ")}
          </p>
        ))}
      </div>
    </div>
  );
};

const InfoCard = ({
  icon,
  label,
}: {
  icon: React.JSX.Element;
  label: string;
}) => {
  const labels = label.split(" ");

  return (
    <div className="flex items-center space-x-2">
      <div className="p-1 bg-white rounded-full shadow">{icon}</div>
      <div className="text-sm tracking-tighter font-semibold">
        <p>{labels[0]}</p>
        <p className="text-sm text-neutral-700/40">
          {labels.slice(1).join(" ")}
        </p>
      </div>
    </div>
  );
};

export default PropertyDetails;
