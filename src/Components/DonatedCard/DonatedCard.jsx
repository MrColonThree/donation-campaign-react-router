const DonatedCard = ({ donatedCard }) => {
  const { image, title, category, background_color, text_color, price } = donatedCard || "";
  console.log(donatedCard)
  return (
    <div style={{ backgroundColor: `${background_color}20` }} className="flex flex-start rounded-md items-center my-2">
      <img className="w-60 h-full rounded-l-md" src={image} alt="" />
      
      <div  className="p-5">
        <button
          style={{
            color: text_color,
            backgroundColor: `${background_color}30`,
          }}
          className="px-2 py-1 rounded-md font-medium text-sm" disabled
        >
          {category}
        </button>
        <h2
        
        className="text-2xl font-semibold my-3"
      >
        {title}
      </h2>
        <h2
        style={{ color: text_color }}
        className=" font-semibold mb-3 "
      >
        ${price}
      </h2>
      <button style={{ backgroundColor: `${background_color}` }} className="px-2 py-1 text-white text-lg font-semibold rounded-md">View Details</button>
      </div>
      
    </div>
  );
};

export default DonatedCard;
