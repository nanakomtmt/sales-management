import { FC, useState, ChangeEvent, useMemo } from "react";
import React from "react";
import styled from "styled-components";
import {
  Button,
  Container,
  TextField,
  InputAdornment,
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import type { Item } from "../types/item";
import { TextInputField } from "./TextInputField";

type Props = {
  AddItem: Function;
  items?: Item[];
};

export const AddSalesField: FC<Props> = React.memo((props: Props) => {
  const { AddItem, items = [] } = props;

  const [name, setName] = useState<string>("");
  const [cost, setCost] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);

  const [postage, setPostage] = useState<number>(0);

  const onClickAddButton = () => {
    AddItem({
      name: name,
      cost: cost,
      price: price,
      postage: postage,
    });
  };
  const onChangeName = (value: string) => {
    setName(value);
  };
  const onChangeCost = (value: number) => {
    setCost(value);
  };
  const onChangePrice = (value: number) => {
    setPrice(value);
  };

  const onChangePostage = (value: number) => {
    setPostage(value);
  };

  return (
    <Container>
      <Stack direction="row" spacing={2} alignItems="end">
        <Stack spacing={2}>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">商品</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              // value={age}
              // onChange={handleChange}
              label="商品"
            >
              {items.map((item, index) => (
                <MenuItem value={item.name}>{item.name}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextInputField
            label="個数"
            unit="個"
            callback={onChangeCost}
          ></TextInputField>
        </Stack>
        {/* <input type="text" value={name}></input>
    <input type="text" value={price}></input>
    <input type="text" value={commission}></input>
    <input type="text" value={postage}></input> */}

        <Button
          variant="contained"
          onClick={() => {
            onClickAddButton();
          }}
          style={{
            maxWidth: "400px",
            maxHeight: "50px",
            minWidth: "100px",
            minHeight: "50px",
            backgroundColor: "orange",
          }}
        >
          追加する
        </Button>
      </Stack>
    </Container>
  );
});
