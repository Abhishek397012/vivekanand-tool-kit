import './App.css';
import { Box } from '@mui/material'

import Heading from './Components/Heading'
import VehicleOwner from './Components/VehicleOwner'


function App() {
  return (
    <Box display="flex" flexDirection="column" justifyContent="center" style={{ maxWidth: 1200, textAlign: 'center', margin: '0 auto' }}>
      <Box order={1} p={3}> <Heading /> </Box>
      <Box order={2} m={1} p={2}> <VehicleOwner /> </Box>
      <Box order={3} m={1} p={2}> Contribute More Tools <a href="https://github.com/Abhishek397012/vivekanand-tool-kit">Here</a> </Box>
    </Box >
  );
}

export default App;
