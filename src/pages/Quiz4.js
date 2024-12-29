import React, { useEffect, useState } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

const Quiz4 = () => {
  const [barData, setBarData] = useState(null);
  const [pieData, setPieData] = useState(null);
  const [viewBy, setViewBy] = useState('City'); 
  const [originalData, setOriginalData] = useState([]); 

  const fetchData = async () => {
    try {
      const response = await fetch('https://www.trcloud.co/test/api.php');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setOriginalData(data); 
      updateChartData(data, viewBy); 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const updateChartData = (data, viewType) => {
    let groupedData = {};
  
    if (viewType === 'Country') {
      groupedData = data.reduce((acc, item) => {
        const country = item.Country?.trim() || 'Unknown'; 
        if (!acc[country]) {
          acc[country] = 0;
        }
        acc[country] += Number(item.Population);
        return acc;
      }, {});
    } else {
      groupedData = data.reduce((acc, item) => {
        const city = item.City?.trim() || 'Unknown'; 
        if (!acc[city]) {
          acc[city] = 0;
        }
        acc[city] += Number(item.Population);
        return acc;
      }, {});
    }
  
    const labels = Object.keys(groupedData);
    const populations = Object.values(groupedData);
  
    const chartData = {
      labels,
      datasets: [
        {
          label: 'Population',
          data: populations,
          backgroundColor: [
            '#ff6384',
            '#36a2eb',
            '#cc65fe',
            '#ffce56',
            '#4bc0c0',
            '#9966ff',
            '#ff9f40',
            '#e7e9ed',
            '#ff4444',
            '#33cc33',
          ],
        },
      ],
    };
  
    setBarData(chartData);
    setPieData(chartData);
    console.log(chartData);
  };    

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (originalData.length > 0) {
      updateChartData(originalData, viewBy);
    }
  }, [viewBy]); 

  const options = {
    responsive: true,
    scales: {
      x: {
        type: 'category',
      },
      y: {
        type: 'linear',
      },
    },
  };

  return (
    <div>
      <h1>Quiz 4</h1>
      <div style={{ marginBottom: '20px', textAlign: 'center' }}>
        <label htmlFor="viewBy">View By: </label>
        <select
          id="viewBy"
          value={viewBy}
          onChange={(e) => setViewBy(e.target.value)}
          style={{ padding: '5px', fontSize: '16px' }}
        >
          <option value="City">City</option>
          <option value="Country">Country</option>
        </select>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        <div>
          {barData ? <Bar data={barData} options={options} style={{ width: '100%', height: '400px' }} /> : <p>Loading Bar Chart...</p>}
        </div>
        <div>
          {pieData ? <Pie data={pieData} style={{ width: '100%', height: '200px' }} /> : <p>Loading Pie Chart...</p>}
        </div>
      </div>
    </div>
  );
};

export default Quiz4;
