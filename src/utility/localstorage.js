const getStoredDonationData = () => {
  const storedDonationData = localStorage.getItem("donation-data");
  if (storedDonationData) {
    return JSON.parse(storedDonationData);
  }
  return [];
};

const saveDonationData = (id) => {
  const storedDonationData = getStoredDonationData();
  const exist = storedDonationData.find((donationId) => donationId === id);
  if (!exist) {
    storedDonationData.push(id);
    localStorage.setItem("donation-data", JSON.stringify(storedDonationData));
  }
};

export { getStoredDonationData, saveDonationData };
