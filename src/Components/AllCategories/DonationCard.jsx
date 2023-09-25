import { useNavigate } from "react-router-dom";

const DonationCard = ({ card }) => {
  const { id, category, background_color, title, text_color, image } = card || "";
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();

    navigate(`/details/${id}`);
  };
  return (
    <div onClick={handleClick} className="cursor-pointer">
      <img className="rounded-t-xl h-48 w-full" src={image} alt="" />
      <div
        style={{ backgroundColor: `${background_color}20` }}
        className="p-4 rounded-b-xl"
      >
        <div>
          <button
            style={{
              color: text_color,
              backgroundColor: `${background_color}30`,
            }}
            className="px-2 py-1 rounded-md font-medium text-sm"
          >
            {category}
          </button>
        </div>
        <h2
          style={{ color: text_color }}
          className="text-xl font-semibold mt-2 h-14"
        >
          {title}
        </h2>
      </div>
    </div>
  );
};

export default DonationCard;
