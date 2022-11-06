import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(Title, Subtitle, isbn13, Price, Image, Url) {
  return { Title, Subtitle, isbn13, Price, Image, Url};
}

const rows = [
  createData('Debugging with GDB', 'The GNU Source-Level Debugger', 9780983159230, '$65', `https://itbook.store/img/books/9780983159230.png` ,'https://itbook.store/books/9780983159230'),
  createData('Retro Gaming with Raspberry Pi, 2nd Edition', '', 1001656317756, '$0.00', `https://itbook.store/img/books/1001656317756.png`, 'https://itbook.store/books/1001656317756'),
  createData('Learning Go', 'An Idiomatic Approach to Real-World Go Programming', 9781492077213, '$35.88', `https://itbook.store/img/books/9781492077213.png`, 'https://itbook.store/books/9781492077213'),
  createData('Embracing Modern C++ Safely', '', 9780137380350, '$44.87', `https://itbook.store/img/books/9780137380350.png`, 'https://itbook.store/books/9780137380350'),
  createData('Open Workbook of Cryptology', 'A project-based introduction to crypto in Python', 1001656678502, '$0.00', `https://itbook.store/img/books/1001656678502.png`, 'https://itbook.store/books/1001656678502')
  
];

function BookList() {
  return (
    <TableContainer component={Paper}>
      <Table  sx={{ minWidth: 650 }}>
        <TableHead  className='tablename'>
          <TableRow className='frame' sx={{ 'td, th': { border: 1.5 } }}>
            <TableCell  align='center' >Title</TableCell>
            <TableCell align="center" >Subtitle</TableCell>
            <TableCell align="center" >isbn13</TableCell>
            <TableCell align="center" >Price</TableCell>
            <TableCell align="center" max width='400 px'>Image</TableCell>
            <TableCell align="center" >Url</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.Title}
              sx={{ 'td, th': { border: 2 }}}
            >
              <TableCell align='center' component="th" scope="row">
                {row.Title}
              </TableCell>
              <TableCell align="center">{row.Subtitle}</TableCell>
              <TableCell align="center">{row.isbn13}</TableCell>
              <TableCell align="center">{row.Price}</TableCell>
              <TableCell align="center"><img src={row.Image}></img></TableCell>
              <TableCell align="center"><a href={row.Url}>{row.Url}</a></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default BookList
