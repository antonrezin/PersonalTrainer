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

export default function DeleteCustomers({ customer, deleteCustomer }) {
  const [open, setOpen] = React.useState(false);

  // Extract customer ID from _links.self.href
  const getCustomerId = () => {
    const url = customer._links.self.href.split("/");
    return url[url.length - 1];
  };

  const handleDelete = () => {
    const customerId = getCustomerId();
    deleteCustomer(customerId);
    setOpen(false);
  }

  const handleClickOpen = () => {
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
          fontSize: 13,
          padding: "1px",
          backgroundColor: "#de0344",
        }}
      >
        Delete
      </Button>
      <Dialog open={open} onClose={handleClose} disableRestoreFocus>
        <DialogTitle sx={{ textAlign: "center" }}>Are you sure to delete this customer?</DialogTitle>
        <DialogActions sx={{ justifyContent: "center", marginBottom: 2 }}>
          <Button
            onClick={handleClose}
            variant="outlined"
            sx={{
              fontWeight: "bold",
              fontSize: 15,
              backgroundColor: "#de0344",
              color: "white",
            }}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            onClick={handleDelete}
            variant="outlined"
            sx={{
              fontWeight: "bold",
              fontSize: 15,
              backgroundColor: "#03de44",
              color: "white",
            }}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
