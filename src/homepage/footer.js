/**
 * Created by vital on 19.05.2018.
 */
/**
 * Created by Alex on 04.02.2018.
 */

import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom'
import TextField from 'material-ui/TextField';



import '../css/footer.css';
import SearchIcon from 'material-ui/svg-icons/action/search';
import IconButton from 'material-ui/IconButton';
// import lg from './images/smllg.png'

const styles = {
    medium: {
        width: 48,
        height: 48,
    },

};

class Headernav extends Component {

    constructor(props){
        super(props);

        this.state = {


        };

        //this.componentDidMount = this.componentDidMount.bind(this);
    }

    // setSt = (node) => {
    //     // ужасный костыль
    //     const myn = node;
    //     if(myn != null){
    //         if (myn != this.state.menu){
    //             this.setState({menu:myn});
    //             console.log(myn);
    //         }
    //     }
    // }

    // componentDidMount() {

    // };

    // componentWillUnmount = function() {

    // };



    render() {


        return (
            <div className="FooterCont">
                <div className="fblock">
                    <div className="logoText">Контакты</div>
                    <div className="finf">
                        <div className="foovar">Дирекция</div>
                        <div className="fooval">+375 (17) 237-25-30</div>
                    </div>

                    <div className="finf">
                        <div className="foovar">Отдел сбыта</div>
                        <div className="fooval">+375 (17) 280-85-02</div>
                        <div className="fooval">+375 (17) 280-25-12</div>
                        <div className="fooval">+375 (17) 237-26-03</div>
                    </div>

                    <div className="finf">
                        <div className="foovar">Отдел снабжения</div>
                        <div className="fooval">+375 (17) 216-17-46</div>
                    </div>
                </div>

                <div className="fblock">
                    <div className="logoText">Партнеры</div>
                    <div className="fooval"></div>
                </div>

                <div className="fblock">
                    <div className="logoText">Адрес</div>
                    <div className="fooval">Беларусь,  Минск,  220049</div>
                    <div className="fooval">ул. Волгоградская, 76А</div>
                    <div className="foovar">Email</div>
                    <div className="fooval">inkraslav@gmail.com</div>
                </div>

            </div>
        );
    }
}

export default Headernav;