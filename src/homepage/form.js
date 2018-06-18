/**
 * Created by Alex on 18.06.2018.
 */
import React, { Component } from 'react';
import './registrationform.css';

import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';
import { ValidatorForm } from 'react-form-validator-core';
import { TextValidator, SelectValidator} from 'react-material-ui-form-validator';
import {Tabs, Tab} from 'material-ui/Tabs';

//import { Tabs, Tab } from 'material-ui-scrollable-tabs/Tabs';

//import consts from '../constants.js';

const styles = {
    headline: {
        backgroundColor: 'white',
        padding: 0,
        color: '#0091EA',
    },
    selected:{
        backgroundColor: '#0091EA',
    },
    checkbox: {
        textAlign: 'center',
        color: 'red',
    },
    text: {
        color: 'red',
    },
    underlineStyle: {
        borderColor: '#BDBDBD',
        height: '2px',
    },
    underlineFocusStyle: {
        borderColor: '#0091EA',
    },
};

const countrys=['Минск','Брест','Гомель','Могилев','Витебск','Гродно'];

const listOfCountrys = [];
for (let i = 0; i < countrys.length; i++ ) {
    listOfCountrys.push(<MenuItem value={countrys[i]} key={i} primaryText={countrys[i]} />);
}

//function

class RegistrationDialogForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',

            tab: 'log',

            regEmail: '',
            regPassword: '',
            repeatPassword: '',
            NickName: '',
            country: 'Belarus',
            //age: false,
            cardNum: '',
            cardDate: '',
            cardOwner: '',
            cardSecur: '',
        }

        this.componentWillMount = this.componentWillMount.bind(this);
        //this.ValidatorForm.addValidationRule = this.ValidatorForm.addValidationRule.bind(this);
        this.handleChangetab = this.handleChangetab.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmitReg = this.handleSubmitReg.bind(this);
        this.handleSubmitLogIn = this.handleSubmitLogIn.bind(this);

        // this.handleSubmitFull = this.handleSubmitFull.bind(this);
        this.handleCountry = this.handleCountry.bind(this);
        //this.updateCheck = this.updateCheck.bind(this);

    }

    handleChangetab (value){this.setState({tab: value});}

    updateCheck() {
        this.setState((oldState) => {
            return {
                age: !oldState.age,
            };
        });
        console.log(this.state.age);
    }

    componentWillMount() {

        ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
            const ps = this.state.regPassword;
            console.log(ps + " / " +  value);
            if (value !== ps) {
                //console.log("no password match")
                return false;
            }
            return true;
        });

        ValidatorForm.addValidationRule('pasLen', (value) => {

            if (value.length < 16 || value.length > 20) {
                //console.log("bad password len")
                return false;
            }
            return true;
        });

        ValidatorForm.addValidationRule('loginLen', (value) => {

            if (value.length < 8 || value.length > 30) {
                //console.log("bad nickname len")
                return false;
            }
            return true;
        });

        ValidatorForm.addValidationRule('card', (value) => {
            const co = this.state.cardOwner;
            const cd = this.state.cardDate;
            const cvc = this.state.cardSecur;
            const cn = this.state.cardNum;

            if (co == '' && cd == '' && cvc == '' && cn == '') {
                //console.log("bad nickname len")
                return true;
            }
            if (co != '' && cd != '' && cvc != '' && cn != '') {
                //console.log("bad nickname len")
                return true;
            }
            return false;
        });

    }

    handleChange(event) {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({ [name]: value });
        console.log(value);
    }

    handleCountry(event, index, value) {
        this.setState({country: value});
    }


    handleSubmitLogIn() {
        // axios.post('http://kekstarterbackend-env.wbc2ckfdwu.us-east-2.elasticbeanstalk.com/profile/log-in', {
        //     logInData :{
        //         email: this.state.email,
        //         password: this.state.password
        //     }
        // })
        //     .then(function (response) {
        //         console.log(response);
        //         if (response.status == 200){
        //             console.log('LOGIN USER DATA');
        //
        //             localStorage.setItem('token', response.data.data.token);
        //             localStorage.setItem('role', response.data.data.user.role);
        //             localStorage.setItem('name', response.data.data.user.login);
        //             console.log(localStorage.getItem('role'));
        //
        //
        //             if (response.data.data.user.is_activated == false ){ ///// !!!!!!
        //                 if (response.data.data.user.is_blocked == false ){
        //
        //
        //                     store.dispatch(addNM(response.data.data.user.login));
        //
        //                     store.dispatch(addID(response.data.data.user.id));
        //
        //                     store.dispatch(addROLE(response.data.data.user.role));
        //
        //
        //                 }
        //             }
        //
        //         }else{
        //             console.log(response.data.error.message);
        //         }
        //
        //         console.log(store.getState());
        //         //this.StoreInform();
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });

    };


    handleSubmitReg() {
        const co = this.state.cardOwner;
        const cd = this.state.cardDate;
        const cvc = this.state.cardSecur;
        const cn = this.state.cardNum;

        //if (co != '' && cd != '' && cvc != '' && cn != ''){
            //Donator registration
        //     axios.post('http://kekstarterbackend-env.wbc2ckfdwu.us-east-2.elasticbeanstalk.com/profile/create', {
        //         profileData :{
        //             login: this.state.NickName,
        //             email: this.state.regEmail,
        //             password: this.state.regPassword,
        //             number: cn,
        //             keeper: co,
        //             cvc: cvc,
        //             expination_date: cn,
        //         }
        //     })
        //         .then(function (response) {
        //             console.log(response);
        //             if (response.status == 200){
        //
        //             } else{
        //                 console.log(response.data.error.message);
        //             }
        //             console.log(store.getState());
        //             //this.StoreInform();
        //         })
        //         .catch(function (error) {
        //             console.log(error);
        //         });
        //
        // }else{
        //     // Viewer reg
        //
        //     console.log('COMMON REG');
        //     //console.log(this.state.NickName);
        //     //console.log(this.state.regEmail);
        //     //console.log(this.state.regPassword);
        //
        //     axios.post('http://kekstarterbackend-env.wbc2ckfdwu.us-east-2.elasticbeanstalk.com/profile/create', {
        //         profileData :{
        //             login: this.state.NickName,
        //             email: this.state.regEmail,
        //             password: this.state.regPassword
        //         }
        //     })
        //         .then(function (response) {
        //             console.log(response);
        //             if (response.status == 200){
        //
        //             } else{
        //                 console.log(response.data.error.message);
        //             }
        //             console.log('com reg response ');
        //             console.log(store.getState());
        //             //this.StoreInform();
        //         })
        //         .catch(function (error) {
        //             console.log(error);
        //         });
        // }
    }

    handleSubmitFull() {
        const nm = this.state.email;
        const vl = this.state.password;
        const tb = this.state.tab;
        const ag = this.state.age;
        console.log('full');

    }

    render() {
        const { email, password, tab, regEmail, regPassword,repeatPassword,
            cardNum,cardDate,cardOwner,cardSecur, NickName, country
        } = this.state;

        return (
            <Tabs
                value={tab}
                onChange={this.handleChangetab}
                className="Tab"
                inkBarStyle = {styles.selected}
                //tabType = {2}
            >
                <Tab label="Вход" value = "log"  style={styles.headline} >
                    <div  className="VV">

                        <ValidatorForm
                            className = "ValidForm"
                            ref="form"
                            onSubmit={this.handleSubmitLogIn}
                            onError={errors => console.log(errors)}
                        >
                            <TextValidator
                                className = "ValidTextField"
                                floatingLabelText="Email"
                                underlineStyle={styles.underlineStyle}
                                underlineFocusStyle={styles.underlineFocusStyle}
                                onChange={this.handleChange}
                                name="email"
                                value={email}
                                validators={['required', 'isEmail' ]}
                                errorMessages={['this field is required', 'email is not valid']}
                            />
                            <TextValidator
                                className = "ValidTextField"
                                floatingLabelText="Пароль"
                                underlineStyle={styles.underlineStyle}
                                underlineFocusStyle={styles.underlineFocusStyle}
                                onChange={this.handleChange}
                                name="password"
                                type="password"
                                value={password}
                                validators={['required', 'pasLen', 'matchRegexp:^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{16,20}']}
                                errorMessages={['this field is required', 'length should be 16-20', 'too weak']}
                            />
                            <br/>
                            <FlatButton  hoverColor = "#0091EA" type="submit"  label="Вход" className = "ValidBtn"/>
                            <FlatButton label="Восстановить пароль" className = "ValidBtn"/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                        </ValidatorForm>


                    </div>
                </Tab>
                <Tab label="Регистрация" value = "reg" style={styles.headline} >
                    <div>
                        <ValidatorForm
                            className = "ValidForm"
                            ref="form"
                            onSubmit={this.handleSubmitReg}
                            onError={errors => console.log(errors)}
                        >
                            <div className="RegRow">
                                <TextValidator
                                    className = "ValidTextField"
                                    floatingLabelText="Email"
                                    onChange={this.handleChange}
                                    underlineStyle={styles.underlineStyle}
                                    underlineFocusStyle={styles.underlineFocusStyle}
                                    name="regEmail"
                                    value={regEmail}
                                    validators={['required', 'isEmail']}
                                    errorMessages={['this field is required', 'email is not valid']}
                                />
                                <TextValidator
                                    className = "ValidTextField"
                                    floatingLabelText="Пароль"
                                    underlineStyle={styles.underlineStyle}
                                    underlineFocusStyle={styles.underlineFocusStyle}
                                    onChange={this.handleChange}
                                    name="regPassword"
                                    type="password"
                                    validators={['required' , 'pasLen', 'matchRegexp:^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{16,20}']}
                                    errorMessages={['this field is required', 'length should be 16-20', 'too weak']}
                                    value={regPassword}
                                />
                            </div>
                            <div className="RegRow">
                                <TextValidator
                                    className = "ValidTextField"
                                    floatingLabelText="Номер Телефона"
                                    underlineStyle={styles.underlineStyle}
                                    underlineFocusStyle={styles.underlineFocusStyle}
                                    onChange={this.handleChange}
                                    name="NickName"
                                    value={NickName}
                                    //validators={['required', 'loginLen']}
                                    // errorMessages={['this field is required', '8 - 30 characters']}
                                />
                                <TextValidator
                                    className = "ValidTextField"
                                    floatingLabelText="Повторить Пароль"
                                    underlineStyle={styles.underlineStyle}
                                    underlineFocusStyle={styles.underlineFocusStyle}
                                    onChange={this.handleChange}
                                    name="repeatPassword"
                                    type="password"
                                    validators={['isPasswordMatch', 'required', 'pasLen']}
                                    errorMessages={['password mismatch', 'this field is required', 'length should be 16-20']}
                                    value={repeatPassword}
                                />

                            </div>



                            <div className="RegRow">
                                <SelectValidator
                                    className = "myValidSelect"
                                    floatingLabelText="Местоположение"
                                    underlineStyle={styles.underlineStyle}
                                    underlineFocusStyle={styles.underlineFocusStyle}
                                    onChange={this.handleCountry}
                                    value={country}
                                    name = "country"
                                    maxHeight={200}
                                    maxWidth = {300}
                                >
                                    {listOfCountrys}
                                </SelectValidator>

                                {/*<div className = "ValidTextField" >*/}
                                {/*<Checkbox*/}
                                {/*style = {styles.text}*/}
                                {/*underlineStyle={styles.underlineStyle}*/}
                                {/*underlineFocusStyle={styles.underlineFocusStyle}*/}
                                {/*className = "myValid"*/}
                                {/*label="Получать письма на Email"*/}
                                {/*checked={this.state.age}*/}
                                {/*onCheck={this.updateCheck.bind(this)}*/}
                                {/*//style={styles.checkbox}*/}
                                {/*/>*/}
                                {/*</div>*/}
                            </div>


                            <FlatButton hoverColor = "#0091EA" type="submit" label="Регистрация" className = "ValidBtn"/>
                            <br/>
                        </ValidatorForm>



                    </div>
                </Tab>
            </Tabs>

        );
    }
}


export default RegistrationDialogForm;