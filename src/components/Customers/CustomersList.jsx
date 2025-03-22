import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import AddCustomers from "./AddCustomers";
import EditCustomers from "./EditCustomers";
import DeleteCustomers from "./DeleteCustomers";
import { CSVLink } from "react-csv";

export default function CustomersList() {
  // Saving fetched data to useState
  const [customers, setCustomers] = useState([]);
  
  // CSV headers
  const csvHeaders = [
    { label: "First Name", key: "firstname" },
    { label: "Last Name", key: "lastname" },
    { label: "Street Address", key: "streetaddress" },
    { label: "Postcode", key: "postcode" },
    { label: "City", key: "city" },
    { label: "Email", key: "email" },
    { label: "Phone", key: "phone" },
  ];

  // Fetch customers data
  const getCustomers = () => {
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

  // UseEffect for get Customers
  useEffect(() => {
    getCustomers();
  }, []);

  // Adding new customer to the database
  const addCustomer = (newCustomer) => {
    fetch(
      "https://customer-rest-service-frontend-personaltrainer.2.rahtiapp.fi/api/customers",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCustomer),
      }
    )
      .then((response) => {
        // Error handling for POST request
        if (!response.ok) {
          throw new Error("Error in POST: " + response.statusText);
        }
        getCustomers();
      })
      .catch((err) => console.log(err));
  };

  // Updating customer's information
  const updateCustomer = (id, updateCustomer) => {
    fetch(
      `https://customer-rest-service-frontend-personaltrainer.2.rahtiapp.fi/api/customers/${id}`,
      {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateCustomer),
      }
    )
      .then((response) => {
        // Error handling for PUT request
        if (!response.ok) {
          throw new Error("Error in PUT: " + response.statusText);
        }
        getCustomers();
      })
      .catch((err) => console.log(err));
  };

  // Deleting customer's information
  const deleteCustomer = (id) => {
    fetch(
      `https://customer-rest-service-frontend-personaltrainer.2.rahtiapp.fi/api/customers/${id}`,
      {
        method: "DELETE",
      }
    )
      .then((response) => {
        // Error handling for DELETE request
        if (!response.ok) {
          throw new Error("Error in DELETE: " + response.statusText);
        }
        getCustomers();
      })
      .catch((err) => console.log(err));
  };

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
      field: "firstname",
      headerName: "First Name",
      width: 140,
      ...columnProps(),
    },
    {
      field: "lastname",
      headerName: "Last Name",
      width: 140,
      ...columnProps(),
    },
    {
      field: "streetaddress",
      headerName: "Street Address",
      width: 170,
      ...columnProps(),
    },
    {
      field: "postcode",
      headerName: "Postcode",
      width: 130,
      ...columnProps(),
    },
    {
      field: "city",
      width: 130,
      headerName: "City",
      ...columnProps(),
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
      ...columnProps(),
    },
    {
      field: "phone",
      headerName: "Phone",
      width: 150,
      ...columnProps(),
    },
    {
      field: "edit",
      headerName: "Edit",
      width: 100,
      cellRenderer: (params) => (
        <EditCustomers customer={params.data} updateCustomer={updateCustomer} />
      ),
    },
    {
      field: "delete",
      headerName: "Delete",
      width: 100,
      cellRenderer: (params) => (
        <DeleteCustomers customer={params.data} deleteCustomer={deleteCustomer} />
      ),
    },
  ]);

  return (
    <Box>
      <Box
        className="ag-theme-alpine-dark"
        style={{
          height: "73vh",
          minWidth: "350px",
          maxWidth: "1349px",
          margin: "auto",
          alignItems: "center",
          fontSize: "17px",
          textAlign: "center",
        }}
      >
        <AgGridReact rowData={customers} columnDefs={columnDefs}></AgGridReact>
      </Box>
      <Box sx={{ textAlign: "center", margin: 2 }}>
        <AddCustomers onSave={addCustomer} />
      </Box>
      <Box sx={{ textAlign: "center", margin: 2 }}>
        <CSVLink data={customers} headers={csvHeaders} filename={"customers.csv"}>
          <Button variant="contained" sx={{backgroundColor:"#9b9b9b", color:"#03de44"}}>
            Export CSV
          </Button>
          </CSVLink>
      </Box>
    </Box>
  );
}
