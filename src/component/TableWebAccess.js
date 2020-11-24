import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

function createData(name, user, pass) {
  return { name, user, pass };
}

const rows = [
  createData("Triumph", 2334, "Transport01"),
  createData("CO1", 3453, "Transport01"),
  createData("Triumph", 2334, "Transport01"),
  createData("CO1", 3453, "Transport01"),
  createData("Triumph", 2334, "Transport01"),
  createData("CO1", 3453, "Transport01"),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});


export const TableWebAccess = () => {
  const classes = useStyles();

  return (
    <div className="contendor">
      <div className="title-form">
        <h1>Web Access</h1>
      </div>
      <div className="form-center">
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="caption table">
            <TableHead>
              <TableRow>
                  
                <TableCell>Name</TableCell>
                <TableCell align="right">User</TableCell>
                <TableCell align="right">Pass</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.user}</TableCell>
                  <TableCell align="right">{row.pass}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};
