import { useEffect, useState } from "react";
import API from "../api/api";
import { getToken } from "../utils/auth";

export default function Dashboard() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await API.get("/auth/protected", {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        });
        setMessage(res.data.message);
      } catch (err) {
        alert("Access denied. Please login.");
        window.location.href = "/";
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <h3>{message}</h3>
    </div>
  );
}