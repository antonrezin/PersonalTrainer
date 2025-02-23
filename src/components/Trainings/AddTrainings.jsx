import React, { useEffect } from "react";
import {
  Box,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";

export default function AddTrainings({ onSave }) {
  const [open, setOpen] = React.useState(false);
  const [customers, setCustomers] = React.useState([]);
  const [addTraining, setAddTraining] = React.useState({
    date: "",
    duration: "",
    activity: "",
    customer: "",
  });

  // Fetch customers when Dialog opens
  useEffect(() => {
    if (open) {
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
    }
  }, [open]);

  // Adding Training input information to useState
  const handleChange = (event) => {
    setAddTraining({ ...addTraining, [event.target.name]: event.target.value });
  };

  // Saving new Training's information to useState
  const handleSave = () => {
    console.log("New Training's data:", addTraining);
    onSave(addTraining);
    // Reset the form and close the dialog after saving
    setAddTraining({
      date: "",
      duration: "",
      activity: "",
      customer: "",
    });
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setAddTraining({
      date: "",
      duration: "",
      activity: "",
      customer: "",
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
        Add New Training
      </Button>
      <Dialog open={open} onClose={handleClose} disableRestoreFocus>
        <DialogTitle sx={{ textAlign: "center" }}>Add New Training</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            name="date"
            label="Date"
            type="date"
            fullWidth
            variant="outlined"
            color="success"
            onChange={handleChange}
            value={addTraining.date}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            required
            margin="dense"
            name="duration"
            label="Duration (Min)"
            type="number"
            fullWidth
            variant="outlined"
            color="success"
            onChange={handleChange}
            value={addTraining.duration}
          />
          <TextField
            required
            margin="dense"
            name="activity"
            label="Activity"
            type="text"
            fullWidth
            variant="outlined"
            color="success"
            onChange={handleChange}
            value={addTraining.activity}
          />
          <FormControl fullWidth margin="dense" required>
            <InputLabel>Customer</InputLabel>
            <Select
              name="customer"
              label="Customer"
              onChange={handleChange}
              value={addTraining.customer}
            >
              {customers.map((cust) => (
                <MenuItem key={cust._links.self.href} value={cust._links.self.href}>
                  {cust.firstname} {cust.lastname}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
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
