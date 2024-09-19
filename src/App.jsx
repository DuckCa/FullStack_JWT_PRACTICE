import axios from "./util/axios.customize";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const fetchHelloWorld = async () => {
      const res = await axios.get(`/v1/api/`);
      console.log(">>>>>CHECK API:", res);
    };
    fetchHelloWorld();
  }, []);
  return <>Hello World!!</>;
}

export default App;
