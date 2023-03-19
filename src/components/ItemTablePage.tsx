import React, { useCallback, useEffect } from "react";
import { ChangeEvent, useState, FC } from "react";
import styled from "styled-components";
import { ItemList } from "./ItemList";
import { useItemList } from "../hooks/useItemList";
import { Stack } from "@mui/material";
import MUIcon from "@mui/icons-material";
import type { Item } from "../types/item";
import { DrawerItem } from "./DrawerItem";

import { useFirebase } from "../hooks/useFirebase";
import { QuerySnapshot, DocumentData } from "firebase/firestore";
import { async } from "@firebase/util";

export const ItemTablePage: FC = () => {
  const { items, deleteItem, fetchItems } = useItemList();
  // const databaseItems: Promise<QuerySnapshot<DocumentData>> = fetchItems();

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
