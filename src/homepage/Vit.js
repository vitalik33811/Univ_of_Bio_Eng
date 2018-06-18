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
import logo from '../images/logo.jpg';
import AutoComplete from 'material-ui/AutoComplete';
import Footer from './footer.js';
import Navigation from './navigation.js'
import Navigator from './Navigator'
import { Switch, Route } from 'react-router'
import Employees from './employees/employees.js'
import Sea from './employees/search.js'

import RaisedButton from 'material-ui/RaisedButton';
import ActionAndroid from 'material-ui/svg-icons/action/lock-outline';
import Dialog from 'material-ui/Dialog';

import Form from './form';

const styles = {
    float: {
        position: 'fixed',
        top: 0,
        left: 0,
        width : '100%',
        marginTop: 0,
    },
    fixed:{
        position: 'relative',
    },
    mediumIcon: {
        width: 30,
        height: 30,
    },
    medium: {
        width: 40,
        height: 40,
    },
    logo1:{
        top: '0%',
    },
    logo2:{
        top: '-100%',
    },

    buttonS:{
        backgroundColor: '#212121',
        color: '#0091EA',
    },
    darkBack:{
        backgroundColor: '#212121',
        lineHeight: '35px',
    },
    InkColor:{
        color: '#0091EA',
    },
    InvColor:{
        color: '#EE3B3B',
    },
    icons:{
        color: '#212121',
        fontSize: '30px',
    },
};

const style = {
    all:{
        height: '80px',
        background: "White",
    },
    titleappbar:{
        marginLeft: '7px',
        lineHeight: '80px',
        color: "black",
        fontFamily: "Open Sans",
    },
    iconleft: {
        margin: 0,
        height: '80px',
        maxHeight: "80px",
    },
};


// const Logged = (opened) => (
//
// );

//Logged.muiName = 'IconMenu';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
            logged: true,
            RegistrationFormOpened: false,
            floatingnode: null,
            style: null,
            flag: false,
            mounted: false,
            UserIsLogged: false,
        }
    }

    handleOpen = () => {
        console.log('ggjjj');
        this.setState({RegistrationFormOpened: true});
    };

    handleClose = () => {
        this.setState({RegistrationFormOpened: false});
    };

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

               <div className="AppBarCont" id="colorsid">

                   <AppBar
                       title="Институт Биологии"
                       // iconElementLeft={<IconButton><School color ="black" fill = "black" /></IconButton>}
                       iconElementLeft={<img className="AppBarImg" src={logo}/>}
                       iconElementRight={
                           <div style = {{lineHeight: '70px'}}>

                               <button className="canBtn" id="IconBtn" onClick={this.moveLeft}><i id="can" style={styles.icons} className="fas fa-search" aria-hidden="true"></i></button>

                               <RaisedButton className = 'MainRegBtn'
                                         backgroundColor = {'#212121'}
                                         style={styles.darkBack}
                                         label={'регистрация'}
                                         labelPosition="before"
                                         icon={<ActionAndroid />}
                                         labelColor ={'#2196F3'}
                                         onClick={this.handleOpen}  />
                           <Dialog
                               actionsContainerStyle = {styles.center}
                               bodyStyle = {styles.content}
                               className = "Dialog"
                               //actions={actions}
                               modal={false}
                               open={this.state.RegistrationFormOpened}
                               onRequestClose={this.handleClose}
                               autoDetectWindowHeight={true}
                           >

                               <Form />

                           </Dialog>
                       </div>
                       }
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