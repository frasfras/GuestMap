import React from 'react';
import { Box, RecordCardList, RecordCard, CellRenderer, useRecords,TextButton,expandRecord } from '@airtable/blocks/ui'

export default function Markers(props) {
    
     const base = useBase();
    const table = base.getTableByName('Markers');
    const records = useRecords(table);
    return (
        <div>Number of tasks: {records.length}</div>
    );

    return (
        <div>
           <div>Number of tasks: {records.length}</div>
            <h4>RecordCardList</h4>
            <Box height="300px" border="thick" backgroundColor="lightGray1">
                <RecordCardList records={records} />
            </Box>
            <h4>Individual Record Cards</h4>
            {
                records.map((record, index) => {
                    return (
                        <div key={Math.random()}>
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