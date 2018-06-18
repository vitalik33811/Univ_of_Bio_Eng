/**
 * Created by Alex on 19.06.2018.
 */
import React, { Component } from 'react';

import './test.css';

const styles = {
    icons:{
        color: '#212121',
        fontSize: '30px',
    },

};
class SearchBar extends React.Component {
    state = {
        focus: false
    };

    focus = (event) => {
        event.preventDefault();
        this.setState({
            focus: !this.state.focus
        });
        console.log('hi', this.state.focus);
    }



    render() {
        const foc = this.state.focus;

        return (
            <div className="app">
                <div className="container">
                    <input type="text" className={foc ? ('focused') : (this.props.choo == 0 ? 'searchBlue' : 'searchRed')} placeholder="Поиск"/>
                    <button onClick={this.focus} id="search-button" className={
                        foc ? 'active' : ''}><i style={styles.icons} className="fas fa-search" aria-hidden="true"></i></button>
                </div>
            </div>
        );
    }
}


export default SearchBar;