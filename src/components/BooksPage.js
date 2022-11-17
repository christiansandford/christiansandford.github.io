import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import GoNCover from "../img/gangs_of_nexon_cover.png";

const gonDescription = "In the city of Nexon only greed wins.";

function BooksPage() {
  return (
    <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
    >
      <Paper
        display="flex"
        justifyContent="center"
        class="cover"
        style={{
          backgroundImage: `url(${GoNCover})`,
          backgroundSize: "30%",
          backgroundRepeat: "no-repeat",
          height: "60vh",
          color: "#f5f5f5",
        }}
      />
      <Box display="flex" flexDirection="column" justifyContent="center">
        <Typography variant="h3">The Gangs of Nexon</Typography>
        <Typography variant="p1">{gonDescription}</Typography>
      </Box>
    </Box>
  );
}

export default BooksPage;
