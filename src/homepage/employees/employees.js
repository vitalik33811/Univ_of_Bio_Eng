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
    swipe:{
        height:'100%',
    },
    root: {
        display: 'flex',
        justifyContent: 'space-around',
        width:'100%',
        marginTop: '3%',
    },
    gridList: {
        marginRight: '3%',
        marginLeft: '3%',
        width: '90%',
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
        img: 'https://sante.by/upload/iblock/8c9/1.jpg',
        title: 'Breakfast',
        author: 'jill111',
        cat: 1
    },
    {
        img: 'https://sante.by/upload/iblock/6e5/1.jpg',
        title: 'Tasty burger',
        author: 'pashminu',
        cat: 5
    },
    {
        img: 'https://sante.by/upload/iblock/bea/3.jpg',
        title: 'Camera',
        author: 'Danson67',
        cat: 2
    },
    {
        img: 'https://sante.by/upload/iblock/2c3/2c31f72e397f5031792a9016078d3cc4.jpg',
        title: 'Morning',
        author: 'fancycrave1',
        cat: 2
    },
    {
        img: 'https://sante.by/upload/iblock/161/2.jpg',
        title: 'Hats',
        author: 'Hans',
        cat: 3
    },
    {
        img: 'https://sante.by/upload/iblock/eaa/%D0%BA%D0%BB%D0%B8%D0%BC%D0%BA%D0%BE%D0%B2%D0%B8%D1%87.jpg',
        title: 'Honey',
        author: 'fancycravel',
        cat: 4
    },
    {
        img: 'https://sante.by/upload/iblock/741/7410d51ed278909afa20bdaba3e791cd.jpg',
        title: 'Vegetables',
        author: 'jill111',
        cat: 3
    },
    {
        img: 'https://sante.by/upload/iblock/632/63245477ee399a1274d8376967d02b46.jpg',
        title: 'Water plant',
        author: 'BkrmadtyaKarki',
        cat: 4
    },
    {
        img: 'https://sante.by/upload/iblock/388/22.jpg',
        title: 'Water plant',
        author: 'BkrmadtyaKarki',
        cat: 6
    },
    {
        img: 'https://sante.by/upload/iblock/bf1/bf17f1266f07b683e6379a3beb936ba3.jpg',
        title: 'Water plant',
        author: 'BkrmadtyaKarki',
        cat: 1
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
        const spis = [];
        tilesData.forEach(g=>{ if (g.cat == val || val == 0){spis.push(g);}})
        return(
            <GridList
                cellHeight={180}
                style={styles.gridList}
                cols={4}
            >

                {spis.map(vrach => {
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
                    style={styles.swipe}
                    index={this.state.cat}
                    data-swipeable = "false"
                >
                    {consts.cats.map((c,i)=>{
                        return(
                            <div  style={styles.swipe} key = {i}>
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