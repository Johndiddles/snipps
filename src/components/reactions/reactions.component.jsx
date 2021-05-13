import React, { Component } from 'react';


import './reactions.styles.scss'

function Reactions (){
    var reactions = [];


    for (var i = 2; i < 9; i++){

        reactions.push({ id: i});
        
    }


    return (
        <div className="comments-wrapper">
            {
                reactions.map(images => (
                    <div key={images.id} className='comments'>
                        <img key={images.id} src={`https://robohash.org/${images.id}?set=set5`} alt=""/>
                    </div>
                ))
            }
        </div>
    )
}

export default Reactions;