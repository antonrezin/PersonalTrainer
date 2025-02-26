import React from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
} from "@mui/material";

export default function DeleteTrainings({ training, deleteTraining }) {
  const [open, setOpen] = React.useState(false);

  // Extract training ID from _links.self.href
  const getTrainingId = () => {
    return training.id;
  };

  const handleDelete = () => {
    const trainingId = getTrainingId();
    deleteTraining(trainingId);
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
        <DialogTitle sx={{ textAlign: "center" }}>Are you sure to delete this training?</DialogTitle>
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
            onClick={handleDelete}
            variant="outlined"
            sx={{
              fontWeight: "bold",
              fontSize: 15,
              backgroundColor: "#de0344",
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
