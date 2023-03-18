import { FC } from "react";
import styled from "styled-components";
import { Button, Container, TextField, Stack } from "@mui/material";
import type { Item } from "../types/item";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

type Props = {
  items: Item[];
  onClickDelete: (index: number) => void;
};
export const ItemList: FC<Props> = (props) => {
  const { items, onClickDelete } = props;
  console.log(`items${items}`);
  return (
    <Container>
      <p>商品一覧</p>
      <ul>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>商品名</TableCell>
                <TableCell align="right">仕入れ値</TableCell>
                <TableCell align="right">売値</TableCell>
                <TableCell align="right">手数料</TableCell>
                <TableCell align="right">送料</TableCell>
                <TableCell align="right">利益</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((item, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {item.name}
                  </TableCell>
                  <TableCell align="right">{item.cost}</TableCell>
                  <TableCell align="right">{item.price}</TableCell>
                  <TableCell align="right">{item.commission}</TableCell>
                  <TableCell align="right">{item.postage}</TableCell>
                  <TableCell align="right">
                    {item.cost - item.price - item.commission - item.postage}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </ul>
    </Container>
  );
};
