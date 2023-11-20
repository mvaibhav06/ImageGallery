import { useState } from "react";
import axios from "axios";

const FetchData = ({ resultData }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get("https://pixabay.com/api/", {
        params: {
          key: "40788016-5de2b2f18227942bb58638b05",
          q: searchTerm,
        },
      });
      resultData(response.data.hits);
    } catch (error) {
      console.log("Error in fetching the data: ", error);
    }
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          value={searchTerm}
          onChange={handleChange}
          type="search"
          className="form-control rounded"
          placeholder="Enter search term"
          aria-label="Search"
          aria-describedby="search-addon"
        />
        <button className="btn btn-outline-primary">search</button>
      </div>
    </form>
  );
};

export default FetchData;
