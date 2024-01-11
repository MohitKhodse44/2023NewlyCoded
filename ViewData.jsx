import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/material';
import { MyContext } from './UseContext';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));





export default function ViewData() {

    const { colorMode, setColorMode } = React.useContext(MyContext);

    const rows = localStorage.getItem('Array') ? JSON.parse(localStorage.getItem('Array')) : [];

    return (

        <Container maxWidth={'sm'} sx={{ marginTop: '40px', boxShadow: '0px 0px 6px black', padding: '2% 3% 3% 5%' }} >
            <TableContainer component={Paper}>
                <h2>View Details</h2>
                <Table max sx={{ minWidth: 'sm' }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center" >Firstname</StyledTableCell>
                            <StyledTableCell align="center">Lastname</StyledTableCell>
                            <StyledTableCell align="center">MailId</StyledTableCell>
                            <StyledTableCell align="center">Password</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.firstname}>
                                <StyledTableCell align="center">{row.firstname}</StyledTableCell>
                                <StyledTableCell align="center">{row.lastname}</StyledTableCell>
                                <StyledTableCell align="center">{row.mailid}</StyledTableCell>
                                <StyledTableCell align="center">{row.password}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}
