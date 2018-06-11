import React, { Component } from 'react';
import Card from './Card.js';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import Menu from 'material-ui/svg-icons/navigation/menu';
import School from 'material-ui/svg-icons/social/school';
import Slider from './slider.js';
import './home.css';
import ss from '../images/1057.jpg'
import appimg from '../images/appimg.jpg';
import AutoComplete from 'material-ui/AutoComplete';
import Footer from './footer.js';
import Navigation from './navigation.js'
import Navigator from './Navigator'
import { Switch, Route } from 'react-router'
import Employees from './employees/employees.js'





const style = {
    all:{
        height: '80px',
        background: "White",
    },
    titleappbar:{
        color: "black",
        fontFamily: "Open Sans",
    },
    iconleft: {
        margin: 0,
        height: '80px',
        maxHeight: "80px",
    },
};


const Logged = (props) => (
    <IconMenu
        {...props}
        iconButtonElement={
            <IconButton><Menu/></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
        <MenuItem primaryText="Pisya" />
        <MenuItem primaryText="Help" />
        <MenuItem primaryText="Sosat" />
        <MenuItem primaryText="neeeeeeeeeeeeeeew" />
    </IconMenu>
);

Logged.muiName = 'IconMenu';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
            logged: true,
        }
    }

    handleUpdateInput = (value) => {
        this.setState({
            dataSource: [
                value,
                value + value,
                value + value + value,
            ],
        });
    };

    render() {

        return(
           <div className="TotalHome">

               <div className="AppBarCont"id="colorsid">

                   <AppBar
                       title="MySiteName"
                       // iconElementLeft={<IconButton><School color ="black" fill = "black" /></IconButton>}
                       iconElementLeft={<img className="AppBarImg" src={appimg}/>}
                       iconElementRight={<Logged/>}
                       style = {style.all}
                       titleStyle={style.titleappbar}
                       iconStyleLeft={style.iconleft}
                       iconClassNameLeft="iconclassname"
                   />
               </div>

               <div className="Navigatorbar">
                   <Navigator/>
               </div>

               <div className="Sliderconteiner">
                   <Slider items={[1057,ss,ss,ss]}/>

               </div>



               {/*<div className="NavCont">*/}
                   {/*<Navigation/>*/}
               {/*</div>*/}

               {/*<div className="CardHandler">*/}
                   {/*<Card/>*/}
               {/*</div>*/}


               <Switch>
                   <Route exact path='/' component={Card}/>
                   <Route path='/employees' component={Employees}/>
                   <Route path='/page2' render={() => <div>govno2</div>}/>
               </Switch>

                  <div className="AutoCompletecontainer">




                      < div className="footerconteiner">


                      <Footer/>



                      </div>



                  </div>


           </div>


        );
    }
}

export default HomePage;