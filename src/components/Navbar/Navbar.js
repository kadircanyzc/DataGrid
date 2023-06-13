import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../../Styles/Navbar.css";

const pages = [
  "Hakkımızda",
  "Jüri - Yarışma Yazılımı",
  "Word Ninja",
  "Word Pyramids",
];

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: "white",
        boxShadow: 0,
        width: "95%",
        margin: "auto",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "black",
              textDecoration: "none",
            }}
          >
            <img src="Untitled.png" className="Img" />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "black",
              textDecoration: "none",
            }}
          >
            <img src="Untitled.png"></img>
          </Typography>

          <Box
            className="Deneme"
            sx={{
              flexGrow: 10,
              display: {
                marginLeft: "100",
                xs: "none",
                md: "flex",
              },
            }}
          >
            {pages.map((page) => (
              <Button
                className="Button"
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 0,
                  marginLeft: {
                    xl: 15,
                    lg: 11,
                    md: 7,
                  },
                  color: "black",
                  display: "block",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <IconButton
            color="white"
            sx={{
              p: "2px",
              bgcolor: "#744bfc",
              color: "white",
              borderRadius: "3px",
            }}
            aria-label="directions"
          >
            <YouTubeIcon />
          </IconButton>
          <IconButton
            color="white"
            sx={{
              p: "2px",
              bgcolor: "#744bfc",
              color: "white",
              borderRadius: "3px",
              margin: "5px",
            }}
            aria-label="directions"
          >
            <InstagramIcon />
          </IconButton>
          <IconButton
            color="white"
            sx={{
              p: "2px",
              bgcolor: "#744bfc",
              color: "white",
              borderRadius: "3px",
            }}
            aria-label="directions"
          >
            <LinkedInIcon />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
