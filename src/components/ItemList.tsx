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
  items?: Item[];
  onClickDelete: (index: number) => void;
  onClickPlus: (index: number) => void;
  onClickMinus: (index: number) => void;
};
export const ItemList: FC<Props> = (props) => {
  const { items = [], onClickDelete, onClickMinus, onClickPlus } = props;
  return (
    <Container>
      <h1>商品一覧</h1>
      <ul>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 1000 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>商品名</TableCell>
                <TableCell align="left">仕入れ値(円)</TableCell>
                <TableCell align="left">売値(円)</TableCell>
                <TableCell align="left">手数料(円)</TableCell>
                <TableCell align="left">送料(円)</TableCell>
                <TableCell align="left">利益 / 個</TableCell>
                {/* <TableCell align="center">-</TableCell> */}
                <TableCell align="center">売上個数</TableCell>
                <TableCell align="center">+</TableCell>
                <TableCell align="center">総利益(円)</TableCell>
                <TableCell align="center">削除</TableCell>
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
                  <TableCell align="center">{item.cost}</TableCell>
                  <TableCell align="center">{item.price}</TableCell>
                  <TableCell align="center">
                    {Math.floor(item.price * 0.1)}
                  </TableCell>
                  <TableCell align="center">{item.postage}</TableCell>
                  <TableCell align="center">
                    {Math.floor(item.price * 0.9 - item.cost - item.postage)}
                  </TableCell>
                  {/* <TableCell align="center"></TableCell> */}
                  <TableCell align="center">{item.unitSales}</TableCell>
                  <TableCell align="center">
                    <Stack>
                      <Button
                        onClick={() => onClickPlus(index)}
                        color="primary"
                        size="small"
                      >
                        +
                      </Button>
                      <Button
                        onClick={() => onClickMinus(index)}
                        color="primary"
                        size="small"
                      >
                        -
                      </Button>
                    </Stack>
                  </TableCell>
                  <TableCell align="center">
                    {item.unitSales *
                      Math.floor(item.price * 0.9 - item.cost - item.postage)}
                  </TableCell>
                  <TableCell align="center">
                    <Button
                      onClick={() => {
                        onClickDelete(index);
                      }}
                      color="primary"
                    >
                      削除
                    </Button>
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
