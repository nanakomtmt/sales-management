import React, { useCallback } from "react";
import { ChangeEvent, useState, FC } from "react";
import styled from "styled-components";
import { ItemList } from "./ItemList";
import { useItemList } from "../hooks/useItemList";
import { Alert, Stack } from "@mui/material";

import type { Item } from "../types/item";
import { DrawerItem } from "./DrawerItem";
import AddItemField from "./AddItemField";
import { ItemTablePage } from "./ItemTablePage";
import { useFirebase } from "../hooks/useFirebase";

import { AddSalesField } from "./AddSalesField";

export const AddSalesItemPage: FC = () => {
  const { addItem, items } = useItemList();

  const [item, setItem] = useState<Item | null>(null);
  const [isAlertOpen, setIsAlertOpen] = useState<boolean>(false);

  const onClickAddItem = (item: Item) => {
    addItem(item);

    console.log("additem");
    setItem(null);
    setIsAlertOpen(true);
    setTimeout(() => setIsAlertOpen(false), 2000);
  };

  return (
    <div>
      <Stack alignContent="center" alignItems="start">
        <h1>売上の追加</h1>
        <AddSalesField AddItem={onClickAddItem} items={items}></AddSalesField>
        {isAlertOpen && (
          <Alert severity="success">一覧ページに商品を追加しました</Alert>
        )}

        {/* <ItemTablePage></ItemTablePage> */}
        {/* <input type="text" value={item?.name} onChange={onChangeText}></input>
<Button onClick={onClickAdd}>追加</Button> */}
      </Stack>
    </div>
  );
};
