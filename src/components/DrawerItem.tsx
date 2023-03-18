import React, { useCallback } from "react";
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
import { AddItemField } from "./AddItemField";
import { DrawerTabItem } from "./DrawertabItem";

export const DrawerItem: FC = () => {
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
          <DrawerTabItem label="追加"></DrawerTabItem>
          <DrawerTabItem label="一覧"></DrawerTabItem>
        </List>
        {/* <Divider /> */}
      </Drawer>
    </div>
  );
};
