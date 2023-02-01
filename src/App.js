import "../src/style/style.css";
import Jokes from "./components/Jokes";
import React, {  useState } from "react";
import Loading from "./components/Loading";
import axios from "axios";

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const apiKey = "tLXCQmkdM5twFhQukUzyHA==MXaixEb7F5wBg1lR";
  const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1";
  const options = {
    method: "GET",
    headers: {
      "X-Api-Key": apiKey,
    },
  };
  const getJoke = async () => {
    setLoading(true);
    await axios(apiUrl, options)
      .then((response) => {
        setData(response.data[0].joke);
      })
      .catch((err) => console.log("Hatanız: ", err));
  };
  
  if (loading) {
    <main>
      <Loading />
    </main>;
  }

  return (
    <main>
      <Jokes getJoke={getJoke} data={data} />
    </main>
  );
}

export default App;
