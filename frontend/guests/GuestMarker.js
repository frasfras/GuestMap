import React from 'react';
import { cursor } from '@airtable/blocks';
import { Box,Button, useBase, useLoadable, useWatchable, useRecordById} from '@airtable/blocks/ui';
//import Settings from './Settings';

export default function GuestMarker() {
     const base = useBase();
     useLoadable( cursor);

    useWatchable(cursor, ['activeTableId','selectedRecordIds']);
  // const record = useRecordById(cursor.activeTableId, cursor.selectedRecordIds);
  
    const table = base.getTableById(cursor.activeTableId);
    const queryResult = table.selectRecords();
    let record = null;

    try {
        record = queryResult.getRecordById(cursor.selectedRecordIds[0]);
    } catch (e) {
        record = null;
    }
     const handleFetchClick = (record) => {

     }
 	 const handleFetchRatingClick = (record) => {
        const name = record.getCellValueAsString('Name');

        const apiKey = globalConfig.get(['settings', 'omdbApiKey']);
        // Make API call to
        const omdbApiUrl = '' +name + '&apikey=' + apiKey ;

        fetch(omdbApiUrl, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then((response) => {
            if (!response.ok) {
                return response.json().then(err => {throw err});
            }
            return response.json();
        })
        .then((response) => {
            const dbRating = response.imdbRating;
            console.log('dbRating', dbRating);

            updateRecord(record, {
                'DB Rating': imdbRating
            });
            return response;
        })
        .catch( (error) => {
            console.log('error ', error);
        });

    }

    const updateRecord = (record, recordFields) => {
        if (table.hasPermissionToUpdateRecord(record, recordFields)) {
            table.updateRecordAsync(record, recordFields);
        }
    }

     return (
     		<div>
     			<h2>Guest Application</h2>
     
     		  <div>  
     		      Selected Record Ids: {cursor.selectedRecordIds.join('')}
     		  </div>

     		   <Box
				    border="thick"
				    backgroundColor="lightGray1"
				    borderRadius="large"
				    padding={2}
				    height={100}
				    overflow="hidden"
				  >
				  
				    {
                    record && record.getCellValueAsString('Name')
                     }

				    {
				    	!record && <div> please select a record </div>
				    }
				    <hr/>
				 
				 </Box>
				 
     		   			
     		</div>

     )     

}
