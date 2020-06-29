import React,{useEffect, useState} from 'react';
import {Box,loadCSSFromString,  useBase, useRecords, CellRenderer} from '@airtable/blocks/ui';
import { Map, TileLayer,ImageOverlay, Marker, Popup, Circle } from 'react-leaflet';
import styles from '../styles-directory/styles';

export default function MarkerList () {
 
    

 const base = useBase();
    const table = base.getTableByName('Markers');
   const records = useRecords(table.selectRecords());
   const fields = table.fields;
//  const queryResult = table.selectRecords();
//  const records = useRecords(queryResult);

  // return(
  // 	   <div> 
  // 	     <h4>CellRenderer</h4>
  //           {
  //               records.map((record, index) => {
  //                   return fields.map((field, fieldIndex) => {
  //                       return (
  //                           <div key={Math.random()}>
  //                               <div>{field.name}</div>
  //                               <div>
  //                                   <CellRenderer field={field} record={record} />
  //                               </div>
                                
  //                           </div>
  //                       )
  //                   })
  //               })
  //           }
  //       </div>
  //      )
  
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
                
                  {records.map((record, index) => {
                  	// return fields.map((field, fieldIndex) => {
                  	// <Pet name= {pet.name} species= {pet.species} age={pet.age} id={pet.id} /> 
                  	 // const point =  [pet['coordinates'][1],pet['coordinates'][0]];
                  
                  	 	
                 
                 

	                  <Marker position={{lat:record.lat, lng:record.lng}} icon ={skater} key={Math.random()} draggable={true} >
				          <Circle 
			                  center={{lat:record.lat, lng: record.lng}}
			                  fillColor="blue" 
			                  radius={10}/>

				          <Popup>
				            <span>
				              <img src= 'http://localhost/yourmap/uploads/icons/male-24-24.png' />
		                       Name:{record.name}<br />
		                      Seat<br />
		                       <br />
		                   
		                  </span>
				          <br/>
				       	  // <Pet name= {pet.name} species= {pet.species} age={pet.age} id={pet.id} /> 
				       	  <record name= {record.name} />
				         </Popup>
				       
	       	               
			                   
				     </Marker>

				      
				   
			     })
			}
             </Map>
         </div>
         )     

}