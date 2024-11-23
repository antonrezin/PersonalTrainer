import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useEffect, useState } from "react";

function CustomersList() {
  // Saving fetched data to useState
  const [customers, setCustomers] = useState([]);

  // Ag-grid column default properties function
  const columnProps = () => ({
    sortable: true,
    filter: true,
    suppressSizeToFit: true,
  });

  // Defining Ag-grid colums
  const [columnDefs, setColumnDefs] = useState([
    {
      headerName: "ID",
      valueGetter: "node.rowIndex + 1",
      width: 70,
      ...columnProps(),
    },
    {
      headerName: "First Name",
      field: "firstname",
      ...columnProps(),
    },
    {
      headerName: "Last Name",
      field: "lastname",
      ...columnProps(),
    },
    {
      headerName: "Street Address",
      field: "streetaddress",
      ...columnProps(),
    },
    {
      headerName: "Postcode",
      field: "postcode",
      ...columnProps(),
    },
    {
      headerName: "City",
      field: "city",
      ...columnProps(),
    },
    {
      headerName: "Email",
      field: "email",
      ...columnProps(),
    },
    {
      headerName: "Phone",
      field: "phone",
      ...columnProps(),
    },
  ]);

  // Fetch customers data
  const fetchData = () => {
    fetch(
      "https://customer-rest-service-frontend-personaltrainer.2.rahtiapp.fi/api/customers"
    )
      .then((response) => {
        if (!response.ok)
          throw new Error("Error in fetch: " + response.statusText);

        return response.json();
      })
      .then((data) => {
        setCustomers(data._embedded.customers);
        console.log(data._embedded.customers);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      className="ag-theme-alpine-dark"
      style={{
        height: "130vh",
        minWidth: "350px",
        maxWidth: "1470px",
        margin: "auto",
        alignItems: "center",
        fontSize: "17px",
        textAlign: "center",
      }}
    >
      <AgGridReact rowData={customers} columnDefs={columnDefs}></AgGridReact>
    </div>
  );
}

export default CustomersList;
