import { FC, useState, ChangeEvent, useMemo } from "react";
import React from "react";
import styled from "styled-components";
import {
  Button,
  Container,
  TextField,
  InputAdornment,
  Stack,
} from "@mui/material";
import type { Item } from "../types/item";
import { TextInputField } from "./TextInputField";

type Props = {
  AddItem: Function;
};

const AddItemField: FC<Props> = React.memo((props: Props) => {
  const { AddItem } = props;

  const [name, setName] = useState<string>("");
  const [cost, setCost] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);

  const [postage, setPostage] = useState<number>(0);
  const getRandomString = (length: number): string => {
    let chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let rand_str = "";
    for (var i = 0; i < length; i++) {
      rand_str += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return rand_str;
  };

  const onClickAddButton = () => {
    AddItem({
      id: getRandomString(20),
      name: name,
      cost: cost,
      price: price,
      postage: postage,
      unitSales: 0,
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
          {" "}
          <TextInputField
            label="商品名"
            unit=""
            callback={onChangeName}
          ></TextInputField>
          <TextInputField
            label="仕入れ値(送料込み)"
            unit="円"
            callback={onChangeCost}
          ></TextInputField>
          <TextInputField
            label="売値"
            unit="円"
            callback={onChangePrice}
          ></TextInputField>
          <TextInputField
            label="送料"
            unit="円"
            callback={onChangePostage}
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
export default AddItemField;
