import FetchData from "./FetchData";
import Images from "./Images";
import { useState } from "react";
import "./styles.css";

function App() {
  const [data, setData] = useState([]);

  const resultData = (results) => {
    setData(results);
  };

  return (
    <div>
      <FetchData resultData={resultData} />
      <br />

      {data.length > 0 ? <Images results={data} /> : null}
    </div>
  );
}

export default App;
