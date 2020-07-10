import React from 'react';
import { cursor } from '@airtable/blocks';
import { useGlobalConfig, Box, Button, useBase, useLoadable, useWatchable, useRecordById } from '@airtable/blocks/ui';
import Settings from './Settings';
import AddForm from './AddForm';

export default function MoviesApplication() {
    const base = useBase();
    const globalConfig = useGlobalConfig();
    useLoadable(cursor);
    useWatchable(cursor, ['activeTableId', 'selectedRecordIds']);

    // const record = useRecordById(cursor.activeTableId, cursor.selectedRecordIds);

    const table = base.getTableById(cursor.activeTableId);
    const queryResult = table.selectRecords();
    let record = null;
    const p= null;
    try {
        record = queryResult.getRecordById(cursor.selectedRecordIds[0]);
      //  p=record.getCellValueAsString('Name');
    } catch (e) {
        record = null;
    }

    const handleFetchRatingClick = (record) => {
        const name = record.getCellValueAsString('Name');

        // const apiKey = globalConfig.get(['settings', 'omdbApiKey']);
        // Make API call to  API here
      //  const omdbApiUrl = 'https://cors-anywhere.herokuapp.com/https://www.omdbapi.com/?t=' +name + '&apikey=' + apiKey ;

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
            const imdbRating = response.imdbRating;
            console.log('imdbRating', imdbRating);

            updateRecord(record, {
                'IMDB Rating': imdbRating
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
            <Settings />
            <div>
                Selected Record Ids: {cursor.selectedRecordIds.join(' ')}
            </div>
            <Box
                border="thick"
                backgroundColor="white"
                borderRadius="large"
                padding={2}
                height={100}
                overflow="hidden"
              >
                {
                    record && record.getCellValueAsString('Name')

                }
                {
                    !record && <div>Please select a record</div>
                }

                <div>
                    <Button
                        onClick={() => console.log()}
                        size="large"
                    >Fetch Ratings
                    </Button>
                </div>
              </Box>
                <AddForm  />
                
        </div>

    )


}
