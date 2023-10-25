import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

export const FichaTecnica = ({ imageSrc, onClose }) => {
  return (
    <Dialog open={true} onClose={onClose} maxWidth="md">
      <DialogContent>
        <img src={imageSrc} alt="Ficha Técnica" style={{ width: "100%" }} />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cerrar
        </Button>
      </DialogActions>
    </Dialog>
  );
};