import React, { useCallback } from "react";
import { ChangeEvent, useState, FC } from "react";
import styled from "styled-components";
import { ItemList } from "./ItemList";
import { useItemList } from "../hooks/useItemList";
import { Divider, ListItem, ListItemText, ListItemIcon } from "@mui/material";

type Props = {
  label: string;
};

export const DrawerTabItem: FC<Props> = (props) => {
  const { label } = props;
  return (
    <div>
      <ListItem
        button
        style={{
          maxWidth: "200px",
          maxHeight: "50px",
          minWidth: "200px",
          minHeight: "50px",
          backgroundColor: "pink",
          color: "white",
          textAlign: "center",
        }}
      >
        <ListItemText>{label}</ListItemText>
      </ListItem>
      <Divider />
    </div>
  );
};
