import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

import { getStoredDonationData } from "../../utility/localstorage";
import DonatedCard from "../../Components/DonatedCard/DonatedCard";
const Donation = () => {
  const categories = useLoaderData();
  const [donations, setDonations] = useState([]);
  const [seeAll, setSeeAll] = useState(false);
  useEffect(() => {
    const storedDonationid = getStoredDonationData();
    if (categories.length > 0) {
      const donationData = categories.filter((card) =>
        storedDonationid.includes(card.id)
      );
      setDonations(donationData);
    }
  }, []);

  return (
    <div className="py-20 max-w-screen-xl mx-auto px-5">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 ">
        {seeAll
          ? donations.map((donatedCard) => (
              <DonatedCard
                key={donatedCard.id}
                donatedCard={donatedCard}
              ></DonatedCard>
            ))
          : donations
              .slice(0, 4)
              .map((donatedCard) => (
                <DonatedCard
                  key={donatedCard.id}
                  donatedCard={donatedCard}
                ></DonatedCard>
              ))}
      </div>
      {
        <div
          className={`${
            donations.length <= 4 ? "hidden" : ""
          } text-center my-5`}
        >
          <button
            onClick={() => setSeeAll(!seeAll)}
            className="font-semibold px-3 py-1 bg-[#009444] rounded-md text-white"
          >
            {seeAll ? "See Less" : "See All"}
          </button>
        </div>
      }
    </div>
  );
};

export default Donation;
