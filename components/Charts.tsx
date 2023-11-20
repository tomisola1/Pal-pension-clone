import Chart from "chart.js/auto";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useEffect, useRef } from "react";

ChartJS.register(ArcElement, Tooltip, Legend);


const Charts = () => {
  // const canvasEl = useRef(null);

  // useEffect(() => {
  //   const ctx = canvasEl.current;
  //   new Chart(ctx, config)
  // })
  const data = {
    labels: ['Total Earnings', 'Total Contributions', 'Total Withdrawal'],
    datasets: [
      {
        label: 'NGR',
        data: [80000, 300000, 0],
        backgroundColor: [
          '#3580c3',
          '#18dbd5',
          '#073f71'
        ],
        borderWidth: 1,
      },
    ],
  };


  return (
    <div>
         {/* <canvas ref={canvasEl} width="400" height="400" /> */}
         <Doughnut
			data={data}
			width={400}
			height={400}
		/>
    </div>
  )
}

export default Charts