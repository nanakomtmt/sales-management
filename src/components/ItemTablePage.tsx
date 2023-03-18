import React, { useCallback } from "react";
import { ChangeEvent, useState, FC } from "react";
import styled from "styled-components";
import { ItemList } from "./ItemList";
import { useItemList } from "../hooks/useItemList";
import { Stack } from "@mui/material";
import MUIcon from "@mui/icons-material";
import type { Item } from "../types/item";
import { DrawerItem } from "./DrawerItem";
import { AddItemField } from "./AddItemField";

export const ItemTablePage: FC = () => {
  const { items, deleteItem } = useItemList();
  const onClickDelete = useCallback(
    (index: number) => {
      deleteItem(index);
      console.log("aaa");
    },
    [deleteItem]
  );
  return (
    <div>
      <Stack alignContent="center" alignItems="start">
        <ItemList items={items} onClickDelete={onClickDelete}></ItemList>
      </Stack>
    </div>
  );
};
