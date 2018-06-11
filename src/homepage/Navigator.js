/**
 * Created by vital on 26.05.2018.
 */
import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom'

import RaisedButton from 'material-ui/RaisedButton';
import ActionAndroid from 'material-ui/svg-icons/action/lock-outline';
import Dialog from 'material-ui/Dialog';
import {routes , consts} from '../data/consts';
import '../css/navigator.css';




import TextField from 'material-ui/TextField';
const g=routes;
console.log(g);









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

class Headernav extends Component {

    constructor(props){
        super(props);

        this.state = {
            Chooser: 0,
            RegistrationFormOpened: 1,
            floatingnode: null,
            style: null,
            flag: false,
            mounted: false,

        };


        this.handleScroll = this.handleScroll.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }


    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        console.log("Headernav mounted");
        this.setState({floatingnode: this.menu});
        //console.log(this.menu);


        //console.log(this.state.menu);
    };

    // componentWillUnmount = function() {

    // };

    handleScroll = function(event) {
        let scrollTop = event.srcElement.body.scrollTop;

        var pos = window.pageYOffset;
        if (pos > 70 && this.state.flag == false) {
            this.setState({flag: true});
        }else if(pos < 70 && this.state.flag == true){
            this.setState({flag: false});}
    };

    ChooserClicked(e) {
        e.preventDefault();
        // console.log('The link was clicked.');

    }



    render() {
       let self = this;



        const flag = this.state.flag;
      // const chooser = this.state.Chooser;

       // let chtext = null;
       // (chooser == 0) ? chtext = '- производственно-торговое унитарное предприятие' : chtext = '- общество с ограниченной ответственностью';

        return (
            <div >





                <div className = "PodNav">
                    <div className = "HeadernavCont"
                         ref={(node) => { this.menu = node;}}

                         style = {flag === true ? styles.float: styles.fixed}>




                        {consts.map((value,index)=> {
                                const nav_name =  value;
                               // var nav_url = consts.nav_links[index].toLocaleLowerCase().trim().replace(" ","-");
                        const a=routes[index];
                        console.log (a);
                                return (
                                    <div className="navElement" key={index}>
                                        <Link to={ a }>{nav_name}</Link>
                                    </div>
                                );

                            }
                        )}





                    </div>
                </div>
            </div>
        );
    }
}

export default Headernav;