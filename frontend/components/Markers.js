import React, {useState} from 'react';
import Settings from "../guests/Settings";
import { Box, RecordCardList, RecordCard, 
          TablePicker, CellRenderer,useBase, useRecords,TextButton,expandRecord } from '@airtable/blocks/ui';

export default function Markers(props) {
    
     const base = useBase();
     const [tableName, setTableName] = useState("Markers");
    const table = base.getTableByNameIfExists(tableName);
    const records = useRecords(table); 
    const field = table.field;

    // let field= null;
     
    try {
        const field = table.getFieldByName('Name');
       // record = queryResult.getRecordById(cursor.selectedRecordIds[0]);
       
        if (field == null) {
            console.log(field.id);
            
        } else {
         
           
           
         }
    } catch (e) {
      
    }
    

    const tasks = records ? records.map(record => (
                <Task key={record.id} record={record} />
            )) : null;

    

    return (
        <div>
           <div> <Settings /></div>
           
            <h4>Select markers Table</h4>
          <TablePicker
                table={table}
                onChange={newTable => {
                  setTableName(newTable.name);
                }}
            />

            
            
            <h4>Individual Record Cards</h4>
            {

             records &&
                records.map((record, index) => {
                        return (
                            <div key={record.id}>
                                <RecordCard record={record} />
                                <TextButton
                                icon="expand"
                                aria-label="Expand record"
                                onClick={() => {
                                    expandRecord(record);
                                }}
                            />
                            </div>
                        )
                    })
            
            }

           </div>
    )


}
function Task({record}) {
 return(
     <div> </div>
 )
 
function Petz(props) { 
    return ( 

  <li>{props.name} is not exist  </li>
     )}
}

