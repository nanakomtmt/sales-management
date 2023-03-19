import React, { useCallback } from "react";
import { ChangeEvent, useState, FC } from "react";
import styled from "styled-components";
import { ItemList } from "./ItemList";
import { useItemList } from "../hooks/useItemList";
import { Stack, Container } from "@mui/material";
import MUIcon from "@mui/icons-material";
import type { Item } from "../types/item";
import { DrawerItem } from "./DrawerItem";
import { AddItemPage } from "./AddItemPage";
import { ItemTablePage } from "./ItemTablePage";
import type { Page } from "../types/Page";

export const App: FC = () => {
  const [page, setPage] = useState<Page>("List");
  const onClickItem = useCallback((page: Page) => {
    setPage(page);
  }, []);
  return (
    <Container>
      <Stack
        direction="row"
        spacing={30}
        alignContent="center"
        alignItems="center"
      >
        <DrawerItem onClickItem={onClickItem}></DrawerItem>
        <Stack alignContent="center" alignItems="start">
          <div> {page === "List" ? <ItemTablePage /> : null}</div>
          <div> {page === "Add" ? <AddItemPage /> : null}</div>
          <div> {page === "Profit" ? <AddItemPage /> : null}</div>
        </Stack>
      </Stack>
    </Container>
  );
};
