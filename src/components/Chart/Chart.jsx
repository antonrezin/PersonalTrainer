import { useEffect, useState } from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { Box } from "@mui/material";

export default function ChartPage() {
  const [trainings, setTrainings] = useState([]);

  // Fetch "get trainings" data to get duration and activity data
  const getTrainings = () => {
    fetch(
      "https://customer-rest-service-frontend-personaltrainer.2.rahtiapp.fi/api/trainings"
    )
      .then((response) => {
        if (!response.ok)
          throw new Error("Error in fetch: " + response.statusText);

        return response.json();
      })
      .then((data) => {
        setTrainings(data._embedded.trainings);
        console.log(data._embedded.trainings);
      })
      .catch((err) => console.log(err));
  };

  // UseEffect for get Trainings
  useEffect(() => {
    getTrainings();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "87vh",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#02c83d",
          borderRadius: "30px",
          padding: "20px",
        }}
      >
        <BarChart
          borderRadius={20}
          xAxis={[
            {
              scaleType: "band",
              data: trainings.map((training) => training.activity),
            },
          ]}
          yAxis={[
            {
              scaleType: "linear",
              data: trainings.map((training) => training.duration),
              label: "Duration (Min)",
              labelStyle: { fontFamily: "cursive", fontSize: 25 },
            },
          ]}
          series={[
            {
              data: trainings.map((training) => training.duration),
              color: "#3b3b3b",
              labelStyle: { fontFamily: "cursive" },
            },
          ]}
          height={500}
          width={1200}
        />
      </Box>
    </Box>
  );
}
