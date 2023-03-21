import { FC } from "react";
import { Button, Container, TextField, Stack } from "@mui/material";
import type { Item } from "../types/item";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

type Props = {
  items?: Item[];
  onClickDelete: (index: number) => void;
  onClickPlus: (index: number) => void;
  onClickMinus: (index: number) => void;
};
export const ItemList: FC<Props> = (props) => {
  const { items = [], onClickDelete, onClickMinus, onClickPlus } = props;
  const columns: GridColDef[] = [
    { field: "name", headerName: "商品名", width: 180 },
    { field: "cost", headerName: "仕入れ値(円)", width: 100 },
    { field: "price", headerName: "売値(円)", width: 100 },
    { field: "commission", headerName: "手数料(円)", width: 100 },
    { field: "postage", headerName: "送料(円)", width: 100 },
    { field: "unitSales", headerName: "利益 / 個", width: 100 },
    { field: "unit", headerName: "売上個数", width: 100 },
    { field: "register", headerName: "登録", width: 100 },
    { field: "profit", headerName: "総利益", width: 100 },
    { field: "delete", headerName: "削除", width: 100 },
  ];
  const rows = [
    { id: 1, name: "Snow", cost: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];

  return (
    <Container>
      <h1>商品一覧</h1>
      <ul>
        <TableContainer component={Paper}>
          <DataGrid rows={rows} columns={columns} />

          <Table sx={{ minWidth: 1000 }} aria-label="simple table">
            <TableHead></TableHead>
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
