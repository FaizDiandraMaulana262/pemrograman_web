import React, { useEffect, useState } from "react";
import axios from "axios";

function Response() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080");
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      {data && (
        <div>
          <p>{data.data.name}</p>
          <p>{data.data.anime}</p>
          <img src={data.data.picture} />
          <p>{data.data.description}</p>
          <p>{data.data.star}</p>
        </div>
      )}
    </div>
  );
}

export default Response;