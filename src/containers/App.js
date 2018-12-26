import React, { Component } from 'react';
// import logo from '../logo.svg';
import '../util/styles/main_stylesheet.css';
import { Switch, Route } from 'react-router-dom';
import * as PATHS from '../util/contants/RouteContants';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import MainMenu from './Main_Menu';
import Footer from './Footer';
import LandingPage from './LandingPage';

import GamingLaptop from './Laptop/GamingLaptop';
import LaptopVanPhong from './Laptop/LaptopVanPhong';

import CameraGiamSat from './Camera/CameraGiamSat';
import CameraTronBo from './Camera/CameraTronBo';
import CameraDauGhiHinh from './Camera/CameraDauGhiHinh';
import CameraPhuKien from './Camera/CameraPhuKien';

import GuttersGrid from './GutterGrid';

const SPACING = 16;

class ProductListGrid extends React.Component {
  render() {
    return (
      <Grid container style={{flexGrow: '1'}} spacing={16}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={SPACING}>
              <Route path={PATHS.GAMING_LAPTOP} component={GamingLaptop} />
              <Route path={PATHS.LAPTOP_VANPHONG} component={LaptopVanPhong} />
              {/* <Route path={PATHS.ANNING_THIETBICHONGTROM} component={Thietbichongtrom} /> */}
              <Route path={PATHS.CAMERA_GIAMSAT} component={CameraGiamSat} />
              <Route path={PATHS.CAMERA_TRONBO} component={CameraTronBo} />
              <Route path={PATHS.CAMERA_DAUGHIHINH} component={CameraDauGhiHinh} />
              <Route path={PATHS.CAMERA_PHUKIEN} component={CameraPhuKien} />
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <MainMenu />
        </header>

        <main>
          <Switch>
            <Route exact path={PATHS.LANDING_PAGE} component={LandingPage} />
            <Route path="/gridtest" component={GuttersGrid} />
            <ProductListGrid />
          </Switch>
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
