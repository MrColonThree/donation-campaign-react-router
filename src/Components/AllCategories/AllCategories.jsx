
import DonationCard from "./DonationCard";

const AllCategories = ({categories}) => {
  
  return (
    <div className="max-w-screen-xl mx-auto py-20 px-5 grid w-[360] md:w-auto grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {categories.map((card) => (
        <DonationCard key={card.id} card={card}></DonationCard>
      ))}
    </div>
  );
};

export default AllCategories;
