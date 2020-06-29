import React, { Component } from 'react';
import {Box, Button, useBase, useRecords,useLoadable , useWatchable, useRecordById} from '@airtable/blocks/ui';
import { cursor } from '@airtable/blocks';


export default function MarkerForm  (){

		   const base = useBase();
         
		 // 	const table = base.getTableByName('Markers');
			// const records = useRecords(table.selectRecords());
              useLoadable( cursor);


  	      useWatchable(cursor, ['activeTableId','selectedRecordIds']);
  	      const table = base.getTableById(cursor.activeTableId);
		    const queryResult = table.selectRecords();
		    let record = null;

		    try {
		        record = queryResult.getRecordById(cursor.selectedRecordIds[0]);
		    } catch (e) {
		        record = null;
		    }
      //       // table.createRecordAsync({'My field name': 'new value'});

      //        const addRecord = (record, recordFields) => {
		    //     if (table.hasPermissionToUpdateRecord(record, recordFields)) {
		    //         table.createRecordAsync(recordFields);
		    //     }
		    // }

		    const handleAddClick = ()  =>  {


		    }

		  return (
			    <div >
			    		<h2> New Marker </h2>
			    		 <div>  
			     		      Selected Record Ids: {cursor.selectedRecordIds.join('')}
			     		  </div>

			    	     

						  {
							     record && record.getCellValueAsString('Name')
		                     }

						    {
						    	!record && <div> please select a record </div>
						    }

				    		
			    			   
						  
						    <hr/>
						  <Button 
						     onClick={() => handleAddClick()} icon="edit">
						     Add 
						  </Button>
						 

			    			

			    		


			     </div>


		    );

}

