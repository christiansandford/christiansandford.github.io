import React from "react";
import { Box, List, ListItemText, Typography } from "@mui/material";
import GMLogo from "../img/general-motors-logo.png"

function ResumePage() {
  return (
    <Box display="flex" flexDirection="column" backgroundColor="default">
        <Box display="flex" justifyContent="center">
          <Typography variant="h1">Resume</Typography>
        </Box>
        <Box display="flex" justifyContent="center">
          <Typography variant="h2">Tech Employment History</Typography>
        </Box>
        <Box display="flex" justifyContent="center">
          <img src={GMLogo} alt="gm_logo" width="100" height="100" />
          <Box marginLeft={1}>
            <Typography variant="h3">General Motors (July 2021 - Present)</Typography>
            <Typography variant="h4">Role: Software Developer - Full Stack</Typography>
          </Box>
        </Box>
        <Box display="flex" flex-direction="column" justifyContent="center" alignItems="center" px={2}>
          <Box>
            <Typography variant="h4">Accomplishments</Typography>
            <List>
              <ListItemText>Worked on Advisor Workbench Software</ListItemText>
              <ListItemText>Unit testing</ListItemText>
              <ListItemText>Application support tickets</ListItemText>
              <ListItemText>Completed SAFE Agile training and acquired certification</ListItemText>
            </List>
          </Box>
          <Box>
            <Typography variant="h4">Tech Stack</Typography>
            <List>
              <ListItemText>Javascript, React</ListItemText>
              <ListItemText>Java, Spring Framework</ListItemText>
              <ListItemText>Oracle Siebel</ListItemText>
            </List>
          </Box>
        </Box>
    </Box>
  );
}

export default ResumePage;
