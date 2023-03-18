import { FC, useState, ChangeEvent } from "react";
import styled from "styled-components";
import { Button, Container, TextField, InputAdornment } from "@mui/material";
import type { Item } from "../types/item";
type Props = {
  label: string;
  unit: string;
  callback: Function;
};

export const TextInputField: FC<Props> = (props) => {
  const { label, unit, callback } = props;
  const [inputValue, setInputValue] = useState("");

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e?.target.value);
    callback(e?.target.value);
  };

  return (
    <Container>
      <TextField
        id="input-with-icon-textfield"
        label={label}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">{unit}</InputAdornment>
          ),
        }}
        variant="standard"
        value={inputValue}
        onChange={onChangeText}
      />
    </Container>
  );
};
