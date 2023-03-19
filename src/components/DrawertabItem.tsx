import React, { useCallback, useContext } from "react";
import { ChangeEvent, useState, FC } from "react";
import styled from "styled-components";
import { ItemList } from "./ItemList";
import { useItemList } from "../hooks/useItemList";
import { Divider, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import { Page } from "../types/Page";
import { PageContext } from "../providers/PageContext";

type Props = {
  label: string;
  onClickItem: () => void;
  page: Page;
};

export const DrawerTabItem: FC<Props> = (props) => {
  const { label, onClickItem, page } = props;
  const { page: nowPage } = useContext(PageContext);

  return (
    <div>
      <ListItem
        button
        style={{
          maxWidth: "200px",
          maxHeight: "50px",
          minWidth: "200px",
          minHeight: "50px",

          backgroundColor: page == nowPage ? "#ffd740" : "white",
          color: "black",
          textAlign: "center",
        }}
        onClick={onClickItem}
      >
        <ListItemText>{label}</ListItemText>
      </ListItem>
      <Divider />
    </div>
  );
};
