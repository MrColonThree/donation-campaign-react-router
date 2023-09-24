import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";

const AllCategories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("donations.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="max-w-screen-xl mx-auto py-20 px-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {categories.map((card) => (
        <DonationCard key={card.id} card={card}></DonationCard>
      ))}
    </div>
  );
};

export default AllCategories;
