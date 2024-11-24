import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useEffect, useState } from "react";
import dayjs from "dayjs";

function TrainingsList() {
  // Saving fetched data to useState
  const [trainings, setTrainings] = useState([]);

  // Fetch "get trainings" data
  const fetchData = () => {
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

  useEffect(() => {
    fetchData();
  }, []);

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
      headerName: "Customer",
      valueGetter: formatName,
      ...columnProps(),
    },
  ]);

  return (
    <div
      className="ag-theme-alpine-dark"
      style={{
        height: "80vh",
        minWidth: "350px",
        maxWidth: "1071px",
        margin: "auto",
        alignItems: "center",
        fontSize: "17px",
        textAlign: "center",
      }}
    >
      <AgGridReact rowData={trainings} columnDefs={columnDefs}></AgGridReact>
    </div>
  );
}

export default TrainingsList;
