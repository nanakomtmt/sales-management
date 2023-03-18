import React, { useCallback } from "react";
import { ChangeEvent, useState, FC } from "react";
import styled from "styled-components";
import { ItemList } from "./ItemList";
import { useItemList } from "../hooks/useItemList";
import { Stack } from "@mui/material";
import MUIcon from "@mui/icons-material";
import type { Item } from "../types/item";
import { DrawerItem } from "./DrawerItem";
import { AddItemPage } from "./AddItemPage";
import { ItemTablePage } from "./ItemTablePage";

export const App: FC = () => {
  const [page, setPage] = useState(0);
  return (
    <div>
      <Stack
        direction="row"
        spacing={30}
        alignContent="center"
        alignItems="center"
      >
        <DrawerItem></DrawerItem>
        <Stack alignContent="center" alignItems="start">
          <AddItemPage></AddItemPage>
          {/* <ItemTablePage></ItemTablePage> */}
          {/* <input type="text" value={item?.name} onChange={onChangeText}></input>
<Button onClick={onClickAdd}>追加</Button> */}
        </Stack>
      </Stack>
    </div>
  );
};
