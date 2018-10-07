import React from 'react';
import {Table, TableBody, TableCell, TableHead, TableRow, Typography} from "@material-ui/core";

export const ListTransactions = ({data}) => {
    return <React.Fragment>
        <Typography variant="headline" component="h2">Nova Transação</Typography>
        <Table selectable={false}>
            <TableHead>
                <TableRow>
                    <TableCell>Valor</TableCell>
                    <TableCell>Tipo</TableCell>
                    <TableCell>Data</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    data.map((item, index) =>
                        <TableRow key={index}>
                            <TableCell>{item.value}</TableCell>
                            <TableCell>{item.type}</TableCell>
                            <TableCell>{item.date}</TableCell>
                        </TableRow>
                    )
                }
            </TableBody>
        </Table>
    </React.Fragment>
};
