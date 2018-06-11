import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import s5 from '../images/s5.jpg';


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
    <Card>

        <CardMedia
            overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
            mediaStyle ={style.media}
        >
            <img src={s5} alt="" style =  {style.img} />
        </CardMedia>
        <CardTitle title="Card title" subtitle="Card subtitle" />
        <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>

    </Card>
);

export default CardExampleWithAvatar;