import Swal from "sweetalert2";
import AllCategories from "../../Components/AllCategories/AllCategories";
import Banner from "../../Components/Banner/Banner";
import { useState, useEffect } from "react";

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
    if (currentFilteredCategories.length === 0) {
      setFilteredCategories([]);
      setSearch("");
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No category found!",
      });
    }
    
    setFilteredCategories(currentFilteredCategories);
  };
  return (
    <div>
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
