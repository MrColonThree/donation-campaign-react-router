
const DonationCard = ({ card  }) => {
  const handleClickDonate = ()=>{
    console.log('clicked')
  }
  const { category, background_color, title, text_color, image } = card;
  return (
    <div onClick={handleClickDonate}>
      <img className="rounded-t-xl h-48 w-full" src={image} alt="" />
      <div style={{ backgroundColor: `${background_color}20`}} className="p-4 rounded-b-xl ">
        <button style={{ color: text_color, backgroundColor: `${background_color}30` }} className="px-2 py-1 rounded-md font-medium text-sm">{category}</button>
        <h2 style={{ color: text_color }} className="text-xl font-semibold mt-2">{title}</h2>
      </div>
    </div>
  );
};

export default DonationCard;
