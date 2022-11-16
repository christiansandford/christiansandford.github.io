import "./App.css";
import { Box } from "@mui/material";
import ResponsiveAppBar from "./components/ResponsiveAppBar";

function App() {
  return (
    <Box>
      <ResponsiveAppBar />
      <Box>
        <h2>
          <u>Tech Employment History</u>
        </h2>
        <h3>General Motors (July 2021 - Present)</h3>
        <h4>Role : Software Developer - Full Stack</h4>
        <h4>Accomplishments</h4>
        <li>Worked on Advisor Workbench Software</li>
        <li>Unit Testing</li>
        <li>Client Support Tickets</li>
        <li>Completed SAFE Agile training and acquired certification</li>
        <h4>Tech Stack</h4>
        <li>JavaScript, ReactJS</li>
        <li>Java, Spring Framework</li>
        <li>Oracle Siebel</li>

        <h2>
          <u>Cosmic Cove Games</u>
        </h2>
        <h3>Cardboard Samurai</h3>
        <h3>Galactic Dungeon RL</h3>

        <h2>
          <u>Novels</u>
        </h2>
        <h3>The Gangs of Nexon - Upcoming</h3>
      </Box>
    </Box>
  );
}

export default App;
