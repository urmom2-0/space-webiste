import Main from "./components/Main";
import Sidebar from "./components/SideBar";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(null);

  const handleToggleModal = () => {
    setShowModal((prev) => !prev);
  };

  useEffect(() => {
    async function fetchAPIData() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
      const today = new Date().toDateString();
      const localKey = `NASA-${today}`;

      if (localStorage.getItem(localKey)) {
        const cachedData = JSON.parse(localStorage.getItem(localKey));
        setData(cachedData);
        console.log("Fetched from cache");
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`;
        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
        const apiData = await res.json();
        localStorage.setItem(localKey, JSON.stringify(apiData));
        setData(apiData);
        console.log("Fetched from API");
      } catch (err) {
        console.error("Fetch Error:", err.message);
        setError("Failed to fetch NASA data. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    fetchAPIData();
  }, []);

  return (
    <>
      {loading && !error && (
        <div className="loadingState">
          <i className="fa-solid fa-gear fa-spin"></i>
        </div>
      )}
      {error && <div className="error">{error}</div>}
      {data && !loading && !error && <Main data={data} />}
      {showModal && <Sidebar data={data} handleToggleModal={handleToggleModal} />}
      {data && !loading && (
        <Footer data={data} handleToggleModal={handleToggleModal} />
      )}
    </>
  );
}

export default App;
