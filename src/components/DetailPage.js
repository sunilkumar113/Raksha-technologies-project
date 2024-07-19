import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function DetailPage() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`/api/data/${id}`);
      setData(result.data);
    };
    fetchData();
  }, [id]);

  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h2>{data.name}</h2>
      <p>{data.description}</p>
    </div>
  );
}

export default DetailPage;
