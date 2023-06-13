import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Box } from "@mui/material";
import "../../Styles/SearchBar.css";

export default function SearchBar(props) {
  return (
    <Box sx={{ display: "flex" }} className="SearcBar_Box">
      <Paper
        component="form"
        sx={{
          display: "flex",
          alignItems: "center",
          width: 300,
          borderRadius: "27px",
        }}
        className="Paper"
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="   Search Objects..."
          onChange={props.search}
          type="search"
        />

        <IconButton
          color="white"
          sx={{
            p: "10px",
            bgcolor: "#744bfc",
            borderRadius: "0px",
            borderTopRightRadius: "27px",
            borderEndEndRadius: "27px",
          }}
          aria-label="directions"
        >
          <SearchIcon />
        </IconButton>
      </Paper>
      <IconButton
        sx={{
          p: "10px",
          color: "#744bfc",
          bgcolor: "white",
          marginLeft: "10px",
        }}
        aria-label="directions"
        className="Filter"
      >
        <FilterAltIcon />
      </IconButton>
    </Box>
  );
}
