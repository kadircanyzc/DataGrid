import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { Box, DialogContentText } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import "../../Styles/DialogBar.css";
import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function DialogBar({ addNewData }) {
  const [formValue, setFormValue] = useState({
    link: "",
    name: "",
    description: "",
  });

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFormChange = (e) => {
    setFormValue((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSave = () => {
    const data = { ...formValue, ID: uuid() };
    addNewData(data);
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }} className="DialogBar_Box">
      <Button
        variant="outlined"
        className="Dialog_Button"
        onClick={handleClickOpen}
        sx={{
          bgcolor: "#744bfc",
          borderRadius: "30px",
          p: "10px",
          color: "white",
          fontSize: {
            lg: 14,
            md: 10,
            sm: 8,
            xs: 7,
          },
        }}
      >
        <AddIcon sx={{ paddingRight: "4px" }} /> Yeni Hesap Ekle
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: { borderRadius: "20px" },
        }}
      >
        <DialogContent sx={{ paddingTop: "50px" }}>
          <DialogContentText sx={{ color: "black" }}>
            Sosyal Medya Linki
          </DialogContentText>
          <TextField
            name="link"
            fullWidth
            onChange={handleFormChange}
            InputProps={{
              style: {
                borderRadius: "10px",
                height: "40px",
                width: "400px",
              },
            }}
          />
        </DialogContent>
        <DialogContent sx={{ paddingTop: "2px" }}>
          <DialogContentText sx={{ color: "black" }}>
            Sosyal Medya Adı
          </DialogContentText>
          <TextField
            name="name"
            fullWidth
            onChange={handleFormChange}
            InputProps={{
              style: {
                borderRadius: "10px",
                height: "40px",
                width: "400px",
              },
            }}
          />
        </DialogContent>
        <DialogContent sx={{ paddingTop: "2px" }}>
          <DialogContentText sx={{ color: "black" }}>
            Açıklama
          </DialogContentText>
          <TextField
            name="description"
            fullWidth
            onChange={handleFormChange}
            InputProps={{
              style: {
                borderRadius: "10px",
                height: "40px",
                width: "400px",
              },
            }}
          />
        </DialogContent>
        <DialogActions sx={{ paddingTop: "20px", paddingBottom: "20px" }}>
          <Button
            onClick={handleClose}
            sx={{ color: "#744bfc", bgcolor: "#f1f4ff", borderRadius: "17px" }}
          >
            Vazgeç
          </Button>
          <Button
            onClick={handleSave}
            sx={{ bgcolor: "#744bfc", color: "white", borderRadius: "17px" }}
          >
            Kaydet
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
