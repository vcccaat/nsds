import React from 'react';
import '../containers/App.css';
import ImageLoader from 'react-load-image';
import BeatLoader from "react-spinners/BeatLoader";
import Translate from 'react-translate-component';

const Card = ({ name, price, shadow, location, id, time, month, region, category,birthday,buyPrice, imageNames,species,personality}) => {

  const item_id = id
  const time_display = time?time:<Translate content="card.random" />
  let info = ''
  let fishInfo = <br/>


  if (category === 'fish' ){
    fishInfo = <span> <br/> <Translate content="card.fishShadow"/>: {shadow}<br/> 
     <Translate content="card.fishLocation"/> : {location}<br/></span>
      
    info = <p><Translate content="card.price"/> : {price}  <br/> 
            <Translate content="card.time"/> : {time_display} 
            {fishInfo}  
            </p> 
    return (
    	<div className="item-card">
          <ImageLoader
          src={require(`../images/${item_id}${category}.png`)}>
          <img alt="icon"/>
          <div>Error!</div>
          <BeatLoader color={"#50E3C2"}/>
        </ImageLoader>
          <h4 className="name-text">{name}</h4>
          {info}
      </div>
    )

    }
    else if (category==='bugs'){
      info = <p><Translate content="card.price"/> : {price}  <br/> 
        <Translate content="card.time"/> : {time_display}   
        </p> 
      return (
      <div className="item-card">
      <div className="smaller-img">
          <ImageLoader
          src={require(`../images/${item_id}${category}.png`)}>
          <img alt="icon"/>
          <div>Error!</div>
          <BeatLoader color={"#50E3C2"}/>
        </ImageLoader>
        </div>
          <h4 className="name-text">{name}</h4>
          {info}
      </div>
      )
    }
    else if  (category === 'villagers') {
      info = <p><Translate content="card.species"/>: {species} <br/> 
                <Translate content="card.personality"/>: {personality} <br/>
                <Translate content="card.birthday"/>: {birthday}</p>
      return (
      <div className="item-card">
        <ImageLoader
          src={require(`../images/${item_id}${category}.jpg`)}>
          <img alt="icon"/>
          <div>Error!</div>
          <BeatLoader color={"#50E3C2"}/>
        </ImageLoader>
        <h4 className="name-text">{name}</h4>
        {info}
      </div>
    );
    }
    else if (category === 'furnitures') {
      info =<p><Translate content="card.price"/>
            : {buyPrice===null?<Translate content="card.diy"/>:buyPrice}</p>
      return (
      <div className="item-card">
      <div className="smaller-img">
        <ImageLoader
          src={require(`../images/${imageNames}.png`)}>
          <img alt="icon"/>
          <div>Error!</div>
          <BeatLoader color={"#50E3C2"}/>
        </ImageLoader>
        </div>
        <h4 className="name-text">{name}</h4>
        {info}
      </div>
      );
    }
    else if (category === 'deepsea') {
    info = <p><Translate content="card.price"/> : {price}  <br/> 
      <Translate content="card.time"/> : {time_display} 
      </p> 
      return (
      <div className="item-card">
      <div className="smaller-img">
        <ImageLoader
          src={require(`../images/sc_${id}_i.png`)}>
          <img alt="icon"/>
          <div>Error!</div>
          <BeatLoader color={"#50E3C2"}/>
        </ImageLoader>
        </div>
        <h4 className="name-text">{name}</h4>
        {info}
      </div>
      )
    }
}

export default Card;
