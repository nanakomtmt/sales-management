import { FC, useState, ChangeEvent } from "react";
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

export const AddItemField: FC<Props> = (props) => {
  const { AddItem } = props;

  const [name, setName] = useState<string>("");
  const [cost, setCost] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);
  const [commission, setCommission] = useState<number>(0);
  const [postage, setPostage] = useState<number>(0);
  const onClickAddButton = () => {
    AddItem({
      name: name,
      cost: cost,
      price: price,
      commission: commission,
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
  const onChangeCommission = (value: number) => {
    setCommission(value);
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
            label="手数料"
            unit="円"
            callback={onChangeCommission}
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
};
