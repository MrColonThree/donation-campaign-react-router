import { Tooltip } from "@mui/material";
import { getStoredDonationData } from "../../utility/localstorage";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
const Statistics = () => {
  const yourDonation = getStoredDonationData().length;
  const yourDonationInPercentage = (yourDonation / 12) * 100;

  const totalDonation = 100 - yourDonationInPercentage;

  const data = [
    {
      label: "Your Donation",
      value: yourDonationInPercentage,
      color: "#00C49F",
    },
    { label: "Total Donation", value: totalDonation, color: "#FF444A" },
  ];

  const sizing = {
    margin: { right: 3, left: 3 },
    width: 400,
    height: 400,
    legend: { hidden: true },
  };
  const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);

  const getArcLabel = (params) => {
    const percent = params.value / TOTAL;
    return `${(percent * 100).toFixed(1)}%`;
  };

  return (
    <div className="max-w-screen-xl mx-auto flex justify-center items-center my-10 md:my-28">
      <div className="flex flex-col items-center">
        <PieChart
          series={[
            {
              outerRadius: 200,
              data,
              arcLabel: getArcLabel,
            },
          ]}
          sx={{
            [`& .${pieArcLabelClasses.root}`]: {
              fill: "white",
              fontSize: 30,
              fontWeight: 700,
            },
          }}
          {...sizing}
        />
        <Tooltip />
        <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-10 mt-10">
          <div className="flex items-center justify-center gap-5">
            <h1 className="text-lg">Your Donation</h1>
            <div className="bg-[#00C49F] w-20 h-3"></div>
          </div>
          <div className="flex items-center justify-center gap-5">
            <h1 className="text-lg">Total Donation</h1>
            <div className="bg-[#FF444A] w-20 h-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
