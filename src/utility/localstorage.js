import Swal from "sweetalert2";
const getStoredDonationData = () => {
  const storedDonationData = localStorage.getItem("donation-data");
  if (storedDonationData) {
    return JSON.parse(storedDonationData);
  }
  return [];
};

const saveDonationData = (id,price) => {
  const storedDonationData = getStoredDonationData();
  const exist = storedDonationData.find((donationId) => donationId === id);
  if (!exist) {
    storedDonationData.push(id);
    localStorage.setItem("donation-data", JSON.stringify(storedDonationData));
    Swal.fire({
      icon: "success",
      title: `Good job!, You have donated $${price} successfully.`,
    });
  } else {
    Swal.fire({
      icon: 'error',
      title: "You have already donated in this category",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
  }
};

export { getStoredDonationData, saveDonationData };
