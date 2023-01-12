import "./App.css";
import React, { useState } from "react";
import { Box } from "@mui/material";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import ResumePage from "./components/ResumePage";
import GamesPage from "./components/GamesPage";
import BooksPage from "./components/BooksPage";

function App() {
  const [activePage, setActivePage] = useState('Resume'); // keep track of the active page for conditional rendering

  return (
    <Box display="flex" flexDirection="column" height="100%">
      <ResponsiveAppBar setActivePage={setActivePage} />
      {activePage == 'Resume' && <ResumePage />}
      {activePage == 'Games' && <GamesPage />}
      {activePage == 'Books' && <BooksPage />}
    </Box>
  );
}

export default App;
