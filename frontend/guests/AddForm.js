import React, {useState} from 'react';

import {Box,Input,Dialog,Button,Label,  useBase, useRecords, useRecordById} from '@airtable/blocks/ui';
import { cursor } from '@airtable/blocks';
// import { Link} from 'react-router-dom';

function AddForm(props) {
   const [name ,setName] = useState()
   const [seatx ,setSeatX] = useState()  
   const [seaty, setSeatY] = useState()     
       const [isDialogOpen, setIsDialogOpen] = useState(false);

       const base = useBase();
       const table = base.getTableByName('Markers');
      const records = useRecords(table.selectRecords());

  async function handleSubmit(e) {
    const errors = {};
    e.preventDefault()
    if (!name){
      // setName("required")
    return ;
    }
    try {
      //save record
          table.createRecordAsync({'Name': name, 'X': seatx, 'Y':seaty});
          // addRecord(record, {'name': name, 'x': seatx, 'y':seaty})
           
      
      // marker
    } catch (e) {
      console.log('error',e);
    }
      setName("")
    setSeatX("")
    setSeatY("")
  
  }
  const handleSaveMarkerClick = () => {
        setIsDialogOpen(true)
    }
    // const addRecord = (record, recordFields) => {
    //         if (table.hasPermissionToUpdateRecord(record, recordFields)) {
    //             // table.createRecordAsync(recordFields);
                
    //         }

  return (
     <div>
            <Button
                onClick={handleSaveMarkerClick}
                size="small"
                icon="settings"
            >
                Add marker
            </Button>

            {isDialogOpen && (
                <Dialog onClose={() => setIsDialogOpen(false)} width="320px">
                    <Dialog.CloseButton />
                   

                    <Label htmlFor="my-input"></Label>
                               <form onSubmit= {handleSubmit}>
                    <legend>Add New Marker</legend>
                    <div className="form-group">
                    
                    <Input value={name} onChange={e => setName(e.target.value)} id="Name" type="text" placeholder="Name"  />
                    <label> Seat</label>
                    <Input value={seatx} onChange={e => setSeatX(e.target.value)} id="seatx" type="text" placeholder="X" />
                    <Input onChange={e => setSeatY(e.target.value)} id="seaty" type="text" placeholder="y" />
                    <button value={seaty}  
    icon="edit">Add marker </button>
                  </div>
                </form>

                    
                    <Button onClick={() => setIsDialogOpen(false)}>Close</Button>
                </Dialog>
              )}
        </div>
    


  )
}
function Pet(props) { 
    return ( 

  <li>{props.name} is empty {props.species} and is {props.age} years  </li>
     )}
export default AddForm;