import './App.css';
import { Box } from '@mui/material'

import Heading from './Components/Heading'
import VehicleOwner from './Components/VehicleOwner'


function App() {
  return (
    <Box className="App" display="flex" flexDirection="column" justifyContent="center">
      <Box order={1} m={2} p={2}> <Heading /> </Box>
      <Box order={2} m={1} p={2}> <VehicleOwner /> </Box>
      <Box order={2} m={1} p={2}> Contribute More Tools </Box>
    </Box >
  );
}

export default App;
