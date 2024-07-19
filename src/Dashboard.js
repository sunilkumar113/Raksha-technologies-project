import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/api/data');
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <ul>
        {data.map((item, index) => (
          <li key={index} onClick={() => window.location.href = `/detail/${item.id}`}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
