import { useLoaderData, useParams } from "react-router-dom";
import { saveDonationData } from "../../utility/localstorage";
const DonationDetails = () => {
  const categories = useLoaderData();

  const { id } = useParams();
  const card = categories.find((card) => card.id === id);
  const { title, image, description, price, background_color } = card;
  const handleClickDonate = () => {
    saveDonationData(id, price);
  };
  return (
    <div className="max-w-screen-xl mx-auto py-10 lg:px-10  ">
      <div className="relative h-[600px]">
        <img className="rounded-lg h-[600px] w-full" src={image} alt="" />
        <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-80 h-30 rounded-b-lg">
          <button
            onClick={handleClickDonate}
            style={{ backgroundColor: `${background_color}` }}
            className="text-white text-xl px-4 py-2 rounded-md font-semibold my-10 ml-10"
          >
            Donate ${price}
          </button>
        </div>
      </div>
      <h1 className="text-4xl font-bold py-5">{title}</h1>
      <p className="text-gray-600 text-lg">{description}</p>
    </div>
  );
};

export default DonationDetails;
