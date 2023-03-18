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
import { ItemTablePage } from "./ItemTablePage";

export const AddItemPage: FC = () => {
  const { addItem, items, deleteItem } = useItemList();
  const [item, setItem] = useState<Item | null>(null);

  const onClickAddItem = (item: Item) => {
    addItem(item);
    console.log("additem");
    setItem(null);
  };
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
        <h1>商品の追加</h1>
        <AddItemField AddItem={onClickAddItem}></AddItemField>
        {/* <ItemTablePage></ItemTablePage> */}
        <ItemList items={items} onClickDelete={onClickDelete}></ItemList>

        {/* <input type="text" value={item?.name} onChange={onChangeText}></input>
<Button onClick={onClickAdd}>追加</Button> */}
      </Stack>
    </div>
  );
};
