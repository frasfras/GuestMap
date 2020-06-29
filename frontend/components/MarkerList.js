import React,{useEffect, useState} from 'react';
import {Box,loadCSSFromString,  useBase, useRecords, CellRenderer} from '@airtable/blocks/ui';
import { Map, TileLayer,ImageOverlay, Marker, Popup, Circle } from 'react-leaflet';
import styles from '../styles-directory/styles';
import L from  'leaflet';
import {CRS} from 'leaflet';
import { Icon } from "leaflet";

export default function MarkerList  () {
 
    

 const base = useBase();
    const table = base.getTableByName('Markers');
   const records = useRecords(table.selectRecords());
   const fields = table.fields;



    const skater = new Icon({
    iconUrl: "./images/male.png",
    iconSize: [25, 25]
  });
  //http://tagayairport.com/wp-content/uploads/2015/08/male-24-24.png
  async componentDidMount =>  {
  // this.setState({pets:pets});
   const map = this.refs.Map.leafletElement
      map.invalidateSize();

  }
  
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
     <div  >
          
           
              <Map 
                 style={{ width: '100%', height: '600px'}}
                 
               bounds = {[[0,0], [580,440]]}
                center={[0, 0]} zoom={13}  doubleClickZoom={false} crs={CRS.Simple}

              >
        
             
               <ImageOverlay 
               bounds = {[[0,0], [480,640]]}
               url = 'http://tagayairport.com/wp-content/uploads/2015/08/wedding.jpg'
               
                /> 
             

                  {records.map((record, index) => {
                  	return fields.map((field, fieldIndex) => {
                  	//

                const x= record.getCellValueAsString('X');
                const y= record.getCellValueAsString('Y');
                !x ?  0 : x;
                !y ?  0 : y;
                
                  // const point = [record['lat'],  field['lng']]
                 return (

	                  <Marker position={{lat:x  ,lng:y}} icon ={skater} key={Math.random()} draggable={true} >
				          <Circle 
			                  center={{lat:x  ,lng:y}}
			                  fillColor="blue" 
			                  radius={10}/>

				          <Popup>
				            <span>
				              <img src= 'http://localhost/yourmap/uploads/icons/male-24-24.png' />
		                       Name:{record.name}<br />
		                      Guest <br />
		                   {record.lat} <br />
		                   
		                  </span>
				          <br/>
				       	
				       	  <record name= {record.name} />
				         </Popup>
				       
	       	               
			                   
				     </Marker>
              )
				     })
				   
			     })
			}
             </Map>
            
         </div>
         )     

}

function TimeArea() {
 const [theTime, setTheTime] = useState(new Date().toLocaleString())
  
  setTimeout(function() {
    setTheTime(new Date().toLocaleString())
  }, 1000)
  
  return <p>The current time is {theTime}.</p>
}