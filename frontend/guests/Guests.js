import React from 'react';
// import Header from './Header';
import {useBase} from '@airtable/blocks/ui';
const useState = React.useState
// import MarkerForm from '../components/markers/MarkerForm';
import GuestMarker from './GuestMarker';
import {Button} from '@airtable/blocks/ui';
import GuestsApplication from './GuestsApplication';
import GuestList from './GuestList';
import AddForm from './AddForm';
import MarkerList from '../components/MarkerList';
import Settings from "./Settings";
// import { Link} from 'react-router-dom';

function Guests() {

    // YOUR CODE GOES HERE
     const base = useBase();
     console.log('base',base);
     const tables = base.tables;
     console.log('tables' ,  tables);
      const useState = React.useState;
     
 
 
    return (
    	<div>
      
      <OurHeader />
      <TimeArea />
     
       <AddForm />      	
    	  <GuestMarker />
          <hr/>
          <h4> your map </h4>
         <MarkerList/>
         <Footer />
    	   <hr/>
    	      
		    	<div>Guests component</div>
		    	<div>ID : {base.id} </div>
		    	<div> name : {base.name} </div>
		        <div> number of tables: {tables.length}</div>
				  

		         {
		              tables.map((table) => {
			           return (
			             <div>
				              <br />
				              <div> name: {table.name}   </div>
				              <div> ID:  {table.id}    </div>
				              <div> description: {table.description}  </div>
			     
			              <h4> Records information </h4>
		    	 	 		 <GuestList table={table} />

			              </div>
			            )
			       
		       		  })
		    	 }

         
        	</div>
       )
} 
function AddPetForm(props, species, age) {

   function handleSubmit(e) {
    e.preventDefault()
    props.setPets(prev => prev.concat({name, species, age, id: Date.now()}))
  
  }

  return (
    <form onSubmit= {handleSubmit}>
      <fieldset>
        <legend>Add New </legend>
        <input placeholder="Name" />
        <input placeholder="species" />
        <input placeholder="age in years" />
        <button>Add </button>
      </fieldset>
    </form>
  )
}
function Pet(props) { 
   	return ( 
	<li>{props.name} is a {props.species} and is {props.age} years  </li>
     )}

function Footer() {
  return <small>Copyright Footer Text</small>
}

function TimeArea() {
 const [theTime, setTheTime] = useState(new Date().toLocaleString())
  
  setTimeout(function() {
    setTheTime(new Date().toLocaleString())
  }, 1000)
  
  return <p>The current time is {theTime}.</p>
}

function OurHeader() {
  return <h1 className="special">Our Guest App </h1>
}
export default Guests;