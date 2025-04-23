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

export default function EditCustomers({ customer, updateCustomer }) {
  const [open, setOpen] = React.useState(false);
  const [editCustomer, setEditCustomer] = React.useState({ ...customer });

  // Extract customer ID from _links.self.href
  const getCustomerId = () => {
    const url = customer._links.self.href.split("/");
    return url[url.length - 1];
  };

  // Save edited customer information to useState
  const handleChange = (event) => {
    setEditCustomer({
      ...editCustomer,
      [event.target.name]: event.target.value,
    });
  };

  const handleSave = () => {
    const customerId = getCustomerId();
    updateCustomer(customerId, editCustomer);
    setOpen(false);
  };

  const handleClickOpen = () => {
    setEditCustomer({ ...customer });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Button
        onClick={handleClickOpen}
        variant="contained"
        sx={{
          fontWeight: "bold",
          fontFamily: "cursive",
          fontSize: 13,
          padding: "1px",
          backgroundColor: "#02c83d",
        }}
      >
        Edit
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ textAlign: "center", fontFamily: "cursive" }}>
          Edit Customer
        </DialogTitle>
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
            value={editCustomer.firstname}
            onChange={handleChange}
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
            value={editCustomer.lastname}
            onChange={handleChange}
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
            value={editCustomer.streetaddress}
            onChange={handleChange}
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
            value={editCustomer.postcode}
            onChange={handleChange}
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
            value={editCustomer.city}
            onChange={handleChange}
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
            value={editCustomer.email}
            onChange={handleChange}
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
            value={editCustomer.phone}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center", marginBottom: 2 }}>
          <Button
            onClick={handleClose}
            variant="outlined"
            sx={{
              fontWeight: "bold",
              fontFamily: "cursive",
              fontSize: 15,
              backgroundColor: "#de0344",
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
              fontFamily: "cursive",
              fontSize: 15,
              backgroundColor: "#02c83d",
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
