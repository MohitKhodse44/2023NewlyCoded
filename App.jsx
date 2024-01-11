import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ViewData from './componenets/ViewData';
import SimpleContainer from './componenets/Navbar';
import Main from './componenets/Main';
import NewNavbar from './componenets/NewNavbar';
import UseContext from './componenets/UseContext';
import SelectComponent from './componenets/SelectComponenet';
import CardComponent from './componenets/CardComponent';
import Drawer from './componenets/Drawer';
import TemporaryDrawer from './componenets/Drawer';
import ToggleColorMode from './componenets/BlackWhiteTheme';
import { Paper } from '@mui/material';


function App() {


  return (



    <ToggleColorMode>

      <Paper sx={{ height: '100vh' }} >
        <div className="App" >

          <UseContext>
            <BrowserRouter>
              <>
                <NewNavbar />
              </>

              <Main />

              {/* <SelectComponent arrayprop={array} /> */}
              {/* <SelectComponent arrayprop={array1} /> */}

              {/* <CardComponent data={objArray} /> */}

              {/* <TemporaryDrawer /> */}

            </BrowserRouter>
          </UseContext>

        </div>
      </Paper>
    </ToggleColorMode>


  );
}
export default App;
