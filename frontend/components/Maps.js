import React, { Component,useEffect } from 'react';
import { Map, TileLayer,ImageOverlay, Marker, Popup, Circle } from 'react-leaflet';
import styles from '../styles-directory/styles';
import L from  'leaflet';
import {CRS} from 'leaflet';
import {loadCSSFromString, colors, Box, useRecords,useBase} from '@airtable/blocks/ui';
import { Icon } from "leaflet";
import MarkerList from './MarkerList';
// import logo from
//    './images/male.png';


export const pointerIcon = new L.Icon({
  iconUrl: '../assets/pointerIcon.svg',
  iconRetinaUrl: '../assets/pointerIcon.svg',
  iconAnchor: [5, 55],
  popupAnchor: [10, -44],
  iconSize: [25, 55],
  shadowUrl: '../assets/marker-shadow.png',
  shadowSize: [68, 95],
  shadowAnchor: [20, 92],
})



export default class Maps extends Component {
   
  	state ={
   		pets: [],
   	}

   
   
   render() {
   // L.Icon.Default.imagePath='images/';
  
   const useState = React.useState;
 
    const skater = new Icon({
	  iconUrl: "./images/male.png",
	  iconSize: [25, 25]
	});
	
    const pets = [
	  { name: "Meowsalot", species: "cat", age: "5", id: 123456789, lat:100 ,lng:56, icon:skater },
	  { name: "Barksalot", species: "dog", age: "3", id: 987654321, lat:50 ,lng:109, icon:skater},
	  { name: "Fluffy", species: "rabbit", age: "2", id: 123123123, lat:110 ,lng:109, icon:skater},
	  { name: "Purrsloud", species: "cat", age: "1", id: 456456456, lat:100 ,lng:76, icon:skater},
	  { name: "Paws", species: "dog", age: "6", id: 789789789, lat:100 ,lng:141, icon:skater }
	]   	
	async componentDidMount =>  {
   const base = useBase();
     const table = base.getTableByName('Markers');
 
     //  async function fetchPosts() {
     //   	 try {
     //  //save record
     //      const query = await table.selectRecordsAsync();
		   //  console.log(query.recordIds.length);
		   //  setPosts(query.data);
		   //  const pets=query.data;
		   //  setIsLoading(false);
		   //  query.unloadData();
     //      // addRecord(record, {'name': name, 'x': seatx, 'y':seaty})
               
      
     //  // marker
		   // } catch (e) {
		   //    console.log('error',e);
		   // }
     //   }
	this.setState({pets:pets});
	 const map = this.refs.map.leafletElement
	    map.invalidateSize();

 	}

 
 	const handleClick = (e) => {
	  const { lat, lng } = e.latlng;
	  console.log(lat, lng);
	}
    
   // const logo1 = require('../assets/male.png');

   var greenIcon = L.icon({
    iconUrl: 'marker-icon.png',
    shadowUrl: 'marker-shadow.png',

    iconSize:     [38, 95], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
	    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
	});

    

   	loadCSSFromString(styles);
       return (
     <div>
        
              <Map 
                 style={{ width: '100%', height: '600px'}}
                 onclick={this.handleClick} 
               bounds = {[[0,0], [580,440]]}
                center={[0, 0]} zoom={2}  doubleClickZoom={false} crs={CRS.Simple}
                ref="map"
              >
              
               <ImageOverlay 
               bounds = {[[0,0], [480,640]]}
               url = 'http://localhost/yourmap/uploads/maps/3/wedding.jpg'
               
                /> 
                
                  {pets.map(pet =>  {
                  	// <Pet name= {pet.name} species= {pet.species} age={pet.age} id={pet.id} /> 
                  	 // const point =  [pet['coordinates'][1],pet['coordinates'][0]];
                  
                  	 	
                  
                  return (

                  <Marker position={{lat:pet.lat, lng:pet.lng}} icon ={skater} key={Math.random()} draggable={true} >
			          <Circle 
		                  center={{lat:pet.lat, lng: pet.lng}}
		                  fillColor="blue" 
		                  radius={10}/>

			          <Popup>
			            <span>
			              <img src= 'http://localhost/yourmap/uploads/icons/male-24-24.png' />
	                       Name:{pet.name}<br />
	                      Seat<br />
	                       <br />
	                   
	                  </span>
			          <br/>
			       	  // <Pet name= {pet.name} species= {pet.species} age={pet.age} id={pet.id} /> 
			       	  <Pet name= {pet.name} />
			         </Popup>
			       
       	               
		                   
			     </Marker>

			     )
			     })
			}
             </Map> 
                
     </div>

        )

    }

}

   function Pet(props) { 
   	return ( 
	<li>{props.name} is a {props.species} and is {props.age} years  </li>
     )}
