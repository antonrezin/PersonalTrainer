import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { Box } from "@mui/material";
import AddTrainings from "./AddTrainings";
import DeleteTrainings from "./DeleteTrainings";

export default function TrainingsList() {
  // Saving fetched data to useState
  const [trainings, setTrainings] = useState([]);

  // Fetch "get trainings" data
  const getTrainings = () => {
    fetch(
      "https://customer-rest-service-frontend-personaltrainer.2.rahtiapp.fi/api/gettrainings"
    )
      .then((response) => {
        if (!response.ok)
          throw new Error("Error in fetch: " + response.statusText);

        return response.json();
      })
      .then((data) => {
        setTrainings(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  // UseEffect for get Trainings
  useEffect(() => {
    getTrainings();
  }, []);

  // Adding new training to the database
  const addTraining = (newTraining) => {
    fetch(
      "https://customer-rest-service-frontend-personaltrainer.2.rahtiapp.fi/api/trainings",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTraining),
      }
    )
      .then((response) => {
        // Error handling for POST request
        if (!response.ok) {
          throw new Error("Error in POST: " + response.statusText);
        } else {
          alert("New training added successfully!");
          return response.json();
        }
      })
      .then(() => {
        getTrainings();
      })
      .catch((err) => {
        if (err) alert("Error in POST: " + err);
      });
  };

  // Deleting training information
  const deleteTraining = (id) => {
    fetch(
      `https://customer-rest-service-frontend-personaltrainer.2.rahtiapp.fi/api/trainings/${id}`,
      {
        method: "DELETE",
      }
    )
      .then((response) => {
        // Error handling for DELETE request
        if (!response.ok) {
          throw new Error("Error in DELETE: " + response.statusText);
        }
        getTrainings();
      })
      .catch((err) => console.log(err));
  };

  // Ag-grid column default properties function
  const columnProps = () => ({
    sortable: true,
    filter: true,
    suppressSizeToFit: true,
  });

  // Date formatting
  const formatDate = (dateString) => {
    return dayjs(dateString.data.date).format("DD.MM.YYYY");
  };

  // Time formatting
  const formatTime = (timeString) => {
    return dayjs(timeString.data.date).format("HH:mm");
  };

  const formatName = (nameString) => {
    const customer = nameString.data.customer;
    if (!customer) {
      return "No customer";
    }
    return `${nameString.data.customer.firstname} ${nameString.data.customer.lastname}`;
  };

  // Defining Ag-grid colums
  const [columnDefs, setColumnDefs] = useState([
    {
      headerName: "ID",
      valueGetter: "node.rowIndex + 1",
      width: 70,
      ...columnProps(),
    },
    {
      headerName: "Date",
      valueGetter: formatDate,
      ...columnProps(),
    },
    {
      headerName: "Time",
      valueGetter: formatTime,
      ...columnProps(),
    },
    {
      headerName: "Duration (Min)",
      field: "duration",
      ...columnProps(),
    },
    {
      headerName: "Activity",
      field: "activity",
      ...columnProps(),
    },
    {
      headerName: "Training",
      valueGetter: formatName,
      ...columnProps(),
    },
    {
      field: "delete",
      headerName: "Delete",
      width: 100,
      cellRenderer: (params) => (
        <DeleteTrainings
          training={params.data}
          deleteTraining={deleteTraining}
        />
      ),
    },
  ]);

  return (
    <Box
      className="ag-theme-alpine-dark"
      style={{
        height: "73vh",
        minWidth: "350px",
        maxWidth: "1071px",
        margin: "auto",
        alignItems: "center",
        fontSize: "17px",
        textAlign: "center",
      }}
    >
      <AgGridReact rowData={trainings} columnDefs={columnDefs}></AgGridReact>
      <Box sx={{ textAlign: "center", margin: 2 }}>
        <AddTrainings onSave={addTraining} />
      </Box>
    </Box>
  );
}
