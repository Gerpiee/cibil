import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchTodos } from "./store/todoSlice";

export default function BasicTable() {
  // useDispatch ile birlikte redux'u dahil ediyoruz
  const dispatch = useDispatch();
  // stateimizin değerini alıyoruz
  const todos = useSelector((state) => state.todos);
  // useEffect ile çağırıyoruz
  useEffect(() => {
    if (todos) {
      dispatch(fetchTodos(todos));
    }
  }, []);
  //consol'a yazdırıyoruz

  //  {
  //    todos?.data?.entry?.map((item) => (
  //      <div key={item.id}>
  //        <h1>{item.resource.birthDate}</h1>
  //        <h2>{item.resource.gender}</h2>
  //        <h3>{item.resource.resourceType}</h3>
  //        {item?.resource?.address?.map((adr) => {
  //          return <div>{adr.city}</div>;
  //        })}
  //      </div>
  //    ));
  //  }

  console.log("toodos", todos);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: "100%" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Birth Date</TableCell>
            <TableCell>City</TableCell>

            <TableCell>Postcode</TableCell>
            <TableCell>contact addres</TableCell>
            <TableCell>District</TableCell>
            <TableCell>Name given</TableCell>

            <TableCell>Address</TableCell>
            <TableCell>State</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Start</TableCell>
            <TableCell>Name</TableCell>
            {/* <TableCell>Start</TableCell>
            <TableCell>City</TableCell> */}
            {/* <TableCell>Name</TableCell>
            <TableCell>Name</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {todos?.data?.entry?.map((item) => (
            <TableRow
              key={item.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{item.resource.birthDate}</TableCell>
              {item?.resource?.address?.map((adr) => {
                return (
                  <>
                    <TableCell component="th" scope="row">
                      {adr.city}
                    </TableCell>
                    <TableCell>{adr.postalCode}</TableCell>
                    <TableCell>{adr.use}</TableCell>
                    <TableCell>{adr.line}</TableCell>
                    <TableCell>{adr.district}</TableCell>
                    <TableCell>{adr.text}</TableCell>
                    <TableCell>{adr.state}</TableCell>
                  </>
                );
              })}
              {item?.resource.name.map((nam) => {
                return (
                  <div>
                    <TableCell component="th" scope="row">
                      {nam.family}
                    </TableCell>
                  </div>
                );
              })}
              {item?.resource?.contact?.map((con) => {
                return (
                  <>
                    <TableCell>{con.gender}</TableCell>
                    <TableCell>{con.period.start}</TableCell>
                    <TableCell>{con.period.telecom}</TableCell>
                    <TableCell>{con.telecom.value}</TableCell>
                  </>
                );
              })}

              {/* {item?.resource?.map((res) => {
                return (
                  <>
                    <TableCell>{res.birthDate}</TableCell>
                  </>
                );
              })} */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
