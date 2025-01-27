import React from "react";
import {
  Box,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

export default function AddCustomers({ onSave }) {
  const [open, setOpen] = React.useState(false);
  const [customer, setCustomer] = React.useState({
    firstname: "",
    lastname: "",
    streetaddress: "",
    postcode: "",
    city: "",
    email: "",
    phone: "",
  });

  // Adding customer input information to useState
  const handleChange = (event) => {
    setCustomer({ ...customer, [event.target.name]: event.target.value });
  };

  // Saving new customer's information to useState
  const handleSave = () => {
    console.log("New customer's data:", customer);
    onSave(customer);
    // Reset the form and close the dialog after saving
    setCustomer({
      firstname: "",
      lastname: "",
      streetaddress: "",
      postcode: "",
      city: "",
      email: "",
      phone: "",
    });
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setCustomer({
      firstname: "",
      lastname: "",
      streetaddress: "",
      postcode: "",
      city: "",
      email: "",
      phone: "",
    });
    setOpen(false);
  };

  return (
    <Box>
      <Button
        onClick={handleClickOpen}
        variant="contained"
        sx={{ fontWeight: "bold", fontSize: 15, backgroundColor: "#03de44" }}
      >
        Add New Customer
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ textAlign: "center" }}>Add New Customer</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            name="firstname"
            label="First Name"
            type="text"
            fullWidth
            variant="outlined"
            color="success"
            onChange={handleChange}
            value={customer.firstname}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            name="lastname"
            label="Last Name"
            type="text"
            fullWidth
            variant="outlined"
            color="success"
            onChange={handleChange}
            value={customer.lastname}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            name="streetaddress"
            label="Street Address"
            type="text"
            fullWidth
            variant="outlined"
            color="success"
            onChange={handleChange}
            value={customer.streetaddress}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            name="postcode"
            label="Postcode"
            type="number"
            fullWidth
            variant="outlined"
            color="success"
            onChange={handleChange}
            value={customer.postcode}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            name="city"
            label="City"
            type="text"
            fullWidth
            variant="outlined"
            color="success"
            onChange={handleChange}
            value={customer.city}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            name="email"
            label="Email"
            type="email"
            fullWidth
            variant="outlined"
            color="success"
            onChange={handleChange}
            value={customer.email}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            name="phone"
            label="Phone"
            type="tel"
            fullWidth
            variant="outlined"
            color="success"
            onChange={handleChange}
            value={customer.phone}
          />
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center", marginBottom: 2 }}>
          <Button
            onClick={handleClose}
            variant="outlined"
            sx={{
              fontWeight: "bold",
              fontSize: 15,
              backgroundColor: "#03de44",
              color: "white",
            }}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            onClick={handleSave}
            variant="outlined"
            sx={{
              fontWeight: "bold",
              fontSize: 15,
              backgroundColor: "#03de44",
              color: "white",
            }}
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
