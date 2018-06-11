/**
 * Created by vital on 15.05.2018.
 */
import React, { Component } from 'react';

import FlatButton from 'material-ui/FlatButton';
import '../css/slider2.css';

const style = {
    ss1:{
        background: 'linear-gradient(to right, rgb(21, 101, 192), rgb(79, 195, 247))',
    },

    ss2:{
        //background: 'linear-gradient(to right, rgb(79, 195, 247), rgb(21, 101, 192))',
        //background: '-webkit-linear-gradient(-45deg, rgba(246,41,12,1) 0%, rgba(246,41,12,1) 65%, rgba(241,111,92,1) 65%, rgba(241,111,92,1) 100%)',
        background: '(-45deg, rgba(17,0,255,1) 0%, rgba(230,134,117,1) 23%, rgba(0,0,0,1) 23%, rgba(0,0,0,1) 77%, rgba(241,111,92,1) 77%, rgba(38,0,255,1) 100%)',
    },

    ss2:{
        fontSize: '22px',

    },
};



class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title : ["Дезор", "Дезараль", "Инол", ""],
            content : ["Lorem ipsum proin gravida", "Lalala lalalla aalalalala", "Doobi boodi doo", "Shalala shalala doom"]
        }
    }

    render() {
        const className = 'item level' + this.props.level;
        const item = this.props.id;

        //const id = "slide" + this.props.id.toString();
        let color;
        if ((item - 1) % 2 == 0){
            color = "slide1" ;
        }else{
            color = "slide0" ;
        }
        const clr = color;
        const pimg = this.props.prodimage;
        return(
            <div className={className} id={clr}>
                <div className="MySlide">
                    <div className="SliderFloatingText"><span class="SliderName">{this.state.title[item].toUpperCase()}</span><span class="SliderDescription"> - </span></div>
                    <img className="SliderImage" src={pimg}/>
                    <div className = "SliderBtn" to="/katalog">
                        <FlatButton  hoverColor = {'rgba(200, 200, 200, 0.3)'} className = "Btn"
                                     labelStyle = {style.ss2} label="Подробнее"
                            //style = {item == 0 ? style.ss1 : style.ss2}
                        />
                    </div>
                </div>

                {/*<h1>{this.state.title[item]}</h1>*/}
                {/*<p>{this.state.content[item]}</p>*/}
            </div>
        );
    }
}

class Slider extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            items: this.props.items,
            active: 0,
            direction: '',
            gi: null
        }
        var myVar;
        this.Stop = this.Stop.bind(this);
        this.setActive = this.setActive.bind(this);
        this.moveRight = this.moveRight.bind(this);
        this.moveLeft = this.moveLeft.bind(this);
    }

    componentDidMount(){
        var gi = setInterval(function() { this.setActive() }.bind(this), 5000);
        this.setState({gi: gi});
    }


    generateItems(user) {
        var items = [];
        var level;
        for (var i = this.state.active -1; i < this.state.active + 2; i++) {
            var index = i;

            if (i < 0) {
                index = this.state.items.length + i;
            } else if (i >= this.state.items.length) {
                index = i % this.state.items.length;
            }

            level = -(this.state.active - i);

            items.push(<Item key={index} id={index} prodimage = {this.state.items[index]} level={level} />);

        }

        return items;
    }

    moveLeft(){
        this.Stop();
        var index = this.state.active;
        index < 1 ? index = this.state.items.length - 1 : index--;
        this.setState({
            active:index,
            direction: 'left'
        });

    }

    moveRight(){
        this.Stop();
        var index = this.state.active;
        index >= 3 ? index = 0 : index++;
        this.setState({
            active:index,
            direction: 'right'
        });
      
    }

    setActive(){
        this.moveLeft();
    }

    Stop() {
        clearTimeout(this.state.gi);
        this.state.gi = setInterval(function() { this.setActive() }.bind(this), 5000);
    }

    render(){
        const index = this.state.active;
        const level = index - 1;


        return (
            <div id="container">
                {this.generateItems()}

                <button className="Sliderbutton" id="left" onClick={this.moveLeft}><i className="fa fa-chevron-left" aria-hidden="true"></i></button>
                <button className="Sliderbutton" id="right" onClick={this.moveRight}><i className="fa fa-chevron-right" aria-hidden="true"></i></button>
            </div>
        );
    }

}

//var items = [1, 2, 3, 4]
export default Slider;
// ReactDOM.render(<Slider items={items} active={1}/>, document.getElementById('slider'));