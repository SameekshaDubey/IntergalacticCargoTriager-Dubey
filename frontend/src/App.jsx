import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [cargo, setCargo] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch data from API
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/cargo")
      .then((res) => {
        setCargo(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  // Sort data
  const sortedCargo = [...cargo].sort((a, b) => {
    if (a.destination === "Earth") return 1;
    if (b.destination === "Earth") return -1;

    return b.weight - a.weight;
  });

  // Sync button

  
  return (
    <div style={{ padding: "30px" }}>
      <h1>Intergalactic Cargo Dashboard</h1>

      <button disabled={loading} onClick={syncData}>
        {loading ? "Aligning quantum drives..." : "Sync Data"}
      </button>

      <br />
      <br />

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Cargo ID</th>
            <th>Destination</th>
            <th>Weight (kg)</th>
          </tr>
        </thead>

        <tbody>
          {sortedCargo.map((item) => (
            <tr key={item.cargoId}>
              <td>{item.cargoId}</td>
              <td>{item.destination}</td>
              <td>{item.weight}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;