import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
const DonationDetails = () => {
  const categories = useLoaderData();

  const { id } = useParams();
  const card = categories.find((card) => card.id === id);
  const { title, image, description } = card;
  const handleClickDonate = () => {
    Swal.fire("Good job!", "You have donated $290 successfully.", "success");
  };
  return (
    <div className="max-w-screen-xl mx-auto py-10 lg:px-10 ">
      <div className="relative h-[700px]">
        <img className="rounded-lg h-[700px] w-full" src={image} alt="" />
        <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-80 h-28 rounded-b-lg">
          <button
            onClick={handleClickDonate}
            className="text-white bg-[#FF444A] text-xl px-4 py-2 rounded-md font-semibold my-10 ml-10"
          >
            Donate $290
          </button>
        </div>
      </div>
      <h1 className="text-4xl font-bold py-5">{title}</h1>
      <p className="text-gray-600 text-lg">{description}</p>
    </div>
  );
};

export default DonationDetails;
