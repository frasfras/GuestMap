import React from 'react';
import { Box, RecordCardList, RecordCard, CellRenderer, useRecords,TextButton,expandRecord } from '@airtable/blocks/ui'

export default function MoviesList(props) {
    const {
        table
    } = props;
    const records = useRecords(table);
    const fields = table.fields;

    return (
        <div>
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