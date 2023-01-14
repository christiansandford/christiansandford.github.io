import * as React from "react";
import { AppBar, Box, Button, MenuItem } from "@mui/material";
import { createTheme } from '@mui/material/styles';
import { blue, orange } from '@mui/material/colors';
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AdbIcon from "@mui/icons-material/Adb";

const pages = ["Resume", "Books", "Games"];

const theme = createTheme({
  palette: {
    primary: {
      main: '#01c8ee', // blue
    }
  },
})

function ResponsiveAppBar({ setActivePage }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleNavButtonClick = (page) => {
    setAnchorElNav(null);
    setActivePage(page);
  };

  return (
    <AppBar position="static" color='primary' theme={theme}>
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
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Christian Sandford
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => {
              console.log('Added Page', page);
              return (
                <Button
                  key={page}
                  onClick={() => handleNavButtonClick(page)}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              );
            })}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
