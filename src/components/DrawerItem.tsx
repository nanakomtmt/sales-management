import React, { useCallback, useContext } from "react";
import { ChangeEvent, useState, FC } from "react";
import styled from "styled-components";
import { ItemList } from "./ItemList";
import { useItemList } from "../hooks/useItemList";
import {
  Button,
  Container,
  TextField,
  InputAdornment,
  Drawer,
  Stack,
  Divider,
  List,
  Link,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import MUIcon from "@mui/icons-material";
import type { Item } from "../types/item";

import { DrawerTabItem } from "./DrawertabItem";
import type { Page } from "../types/Page";
import { PageContext } from "../providers/PageContext";

type Props = {
  onClickItem: (index: Page) => void;
};

export const DrawerItem: FC<Props> = (props) => {
  const { onClickItem } = props;
  const { setPage } = useContext(PageContext);
  const onClick = (page: Page) => {
    onClickItem(page);
    setPage(page);
  };
  return (
    <div>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: "200px" },
        }}
      >
        <Divider />
        <List>
          <DrawerTabItem
            label="追加"
            onClickItem={() => onClick("Add")}
            page="Add"
          ></DrawerTabItem>
          <DrawerTabItem
            label="一覧"
            onClickItem={() => onClick("List")}
            page="List"
          ></DrawerTabItem>
          <DrawerTabItem
            label="売上登録"
            onClickItem={() => onClick("Profit")}
            page="Profit"
          ></DrawerTabItem>
          <DrawerTabItem
            label="売上グラフ"
            onClickItem={() => onClick("BarGraph")}
            page="BarGraph"
          ></DrawerTabItem>
        </List>
        {/* <Divider /> */}
      </Drawer>
    </div>
  );
};
