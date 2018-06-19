/**
 * Created by Alex on 19.06.2018.
 */
/**
 * Created by Alex on 19.06.2018.
 */
import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import './cont.css';

const style = {
    media:{
        textAlign: "center",
    },
    img:{
        height: "400px",
        width: "800px",
        minWidth: "none",
    }
};


const CardExampleWithAvatar = () => (
    <div style = { {marginLeft:'3%',marginRight:'3%',marginBottom:'4%'}}>


        <div class="card-wrapper">
            <div class="card-body">
                <h2>Go Down Sunshine</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores repellat distinctio tenetur delectus consectetur aperiam molestias quibusdam impedit earum pariatur perspiciatis obcaecati sit quae tempore, sint error porro fugit sunt.</p>
            </div>
            <div class="card-image"></div>
        </div>

    </div>
);

export default CardExampleWithAvatar;