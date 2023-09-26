import Swal from "sweetalert2";
import AllCategories from "../../Components/AllCategories/AllCategories";
import Banner from "../../Components/Banner/Banner";
import { useState, useEffect } from "react";
import NavBarForHomePage from "../../Components/Navbar/NavBarForHomePage";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredCategories, setFilteredCategories] = useState([]);
  useEffect(() => {
    fetch("donations.json")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setFilteredCategories(data);
      });
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();

    const currentFilteredCategories = categories.filter((category) =>
      category.category.toLowerCase().includes(search.toLowerCase())
    );
    if (currentFilteredCategories.length === 0 || search === "") {
      setSearch("");
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No category found! Please type a valid category name",
      });
    }
    setSearch("");
    setFilteredCategories(currentFilteredCategories);
  };
  return (
    <div className="relative">
      <div className="absolute z-20 w-full">
        <NavBarForHomePage></NavBarForHomePage>
      </div>
      <Banner
        handleSubmit={handleSubmit}
        setSearch={setSearch}
        search={search}
      ></Banner>
      <AllCategories categories={filteredCategories}></AllCategories>
    </div>
  );
};

export default Home;
