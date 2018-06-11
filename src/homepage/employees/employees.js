/**
 * Created by vital on 02.06.2018.
 */
import React, { Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import SwipeableViews from 'react-swipeable-views';


import i1 from '../../images/1057.jpg'
import i2 from '../../images/s5.jpg'

const styles = {
    position:{
        marginLeft:'10%',
        marginRight:'10%',
        // width:'25%',
    },
    root: {
        display: 'flex',
        justifyContent: 'space-around',
        width:'100%',

    },
    gridList: {
        width: '70%',
        height: '100%',
        overflowY: 'auto',

    },
    tab_test:{
//backgroundColor: '#212121',
        background: '#212121',

    },
    tab_selector_line:{
        backgroundColor: '#0091EA',
        height: '5px',
    },

    tab_headline: {
        fontSize: 32,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
    slide: {
        padding: 10,
    },
};
const style = {
    display: 'inline-block',
    boxShadow: 'none',
    width: '100%',
};

const itemstyle = {
    textdecoration: 'none',
    fontfamily: 'Comfortaa',
    fontsize: '18px',
    fontweight: '400',
    textTransform: 'uppercase',
    letterspacing: '2px',

    verticalAlign: 'middle',
    textAlign: 'center',
    paddingTop: '5%',
    paddingBottom: '5%',
    color: '#0091EA',
};

const selitemstyle = {
    backgroundColor: '#0091EA',
    color: 'white',
};

const consts = {
    cats: ['Все','Зубы','Письки','Жопки','Глаз','Шоколадный Глаз','Клетки']
};

const tilesData = [
    {
        img: i1,
        title: 'Breakfast',
        author: 'jill111',
        cat: 1
    },
    {
        img: i2,
        title: 'Tasty burger',
        author: 'pashminu',
        cat: 1
    },
    {
        img: 'images/grid-list/camera-813814_640.jpg',
        title: 'Camera',
        author: 'Danson67',
        cat: 2
    },
    {
        img: 'images/grid-list/morning-819362_640.jpg',
        title: 'Morning',
        author: 'fancycrave1',
        cat: 2
    },
    {
        img: 'images/grid-list/hats-829509_640.jpg',
        title: 'Hats',
        author: 'Hans',
        cat: 3
    },
    {
        img: 'images/grid-list/honey-823614_640.jpg',
        title: 'Honey',
        author: 'fancycravel',
        cat: 3
    },
    {
        img: 'images/grid-list/vegetables-790022_640.jpg',
        title: 'Vegetables',
        author: 'jill111',
        cat: 4
    },
    {
        img: 'images/grid-list/water-plant-821293_640.jpg',
        title: 'Water plant',
        author: 'BkrmadtyaKarki',
        cat: 4
    },
];

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */

class emp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            cat : 0,
        };

        this.handleCat = this.handleCat.bind(this);

    }

    Ggroup(val = 0){

        return(
            <GridList
                cellHeight={180}
                style={styles.gridList}
                cols={4}
            >
                {tilesData.map(vrach => {
                    if (vrach.cat == val || val == 0){
                        return(
                            <GridTile
                                style={styles.position}
                                key={vrach.img}
                                title={vrach.title}
                                subtitle={<span>by <b>{vrach.author}</b></span>}
                                actionIcon={<IconButton><StarBorder color="white"/></IconButton>}
                            >
                                <img src={vrach.img}/>
                            </GridTile>)
                    };
                    return (<div></div>);
                })}
            </GridList>
        );
    };


    handleCat(event, value) {
        this.setState({cat: value});
    }
    render() {

        return(
            <div className="empAll" style = {{height:'800px',display:'flex'}}>

            <div className="catcolumn" style = {{width:'20%',display:'flex'}}>
                <div className = "catmenu" style={{width:'100%',marginTop:'3%'}}>
                    <Paper  style={style} >
                        <Menu selected = {0} menuItemStyle = {itemstyle} selectedMenuItemStyle = {selitemstyle} onChange = {this.handleCat} value = {this.state.cat}>
                            {consts.cats.map((value,index)=> {
                                    const nm = value.toLocaleLowerCase();
                                    const ind = index;
                                    return (
                                        <MenuItem
                                            //selectedMenuItemStyle = {1}
                                            primaryText={nm}
                                            value = {ind}
                                            key={ind}
                                            //selected = {1}
                                            //onClick={event => this.handleMenuItemClick(event, index)}
                                        />
                                    );
                                }
                            )
                            }
                        </Menu>
                    </Paper>
                </div>
            </div>


            <div style={styles.root}>


                <SwipeableViews
                    index={this.state.cat}
                >
                    {consts.cats.map((c,i)=>{
                        return(
                            <div key = {i}>
                                {this.Ggroup(i)}
                            </div>
                        )
                    })}

                </SwipeableViews>




            </div>
            </div>



        );
    }
}



export default emp;