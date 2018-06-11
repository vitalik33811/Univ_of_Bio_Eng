/**
 * Created by vital on 19.05.2018.
 */
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import  '../css/Navigation.css'

const style = {
    margin: 12,
    background:"grey",
    Width: "20%" ,
    slova:['Услуги','О центре','Специалисты','Контакты ','юля'],
};

const RaisedButtonExampleSimple = () => (
    <div className="navigationbattons">

        {style.slova.map(ss => {
            return(
            <div className="ButtonConvert">
                <RaisedButton label={ss} style={style} backgroundColor="pink" secondary={true} fullWidth="full"/>
            </div>
            )
            }
        )}

    </div>
);

export default RaisedButtonExampleSimple;