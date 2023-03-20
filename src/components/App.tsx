import React, { useCallback, useEffect } from "react";
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
import { useFirebase } from "../hooks/useFirebase";
import { AddSalesItemPage } from "./AddSalesItemPage";
import { BarGraph } from "./BarGraph";

export const App: FC = () => {
  const [page, setPage] = useState<Page>("List");
  const { items, fetchItems } = useItemList();
  const onClickItem = useCallback(
    (page: Page) => {
      setPage(page);
    },
    [items]
  );
  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <Container>
      <Stack
        direction="row"
        spacing={5}
        alignContent="center"
        alignItems="center"
      >
        <DrawerItem onClickItem={onClickItem}></DrawerItem>
        <Stack alignContent="center" alignItems="start">
          <div> {page === "List" ? <ItemTablePage /> : null}</div>
          <div> {page === "Add" ? <AddItemPage /> : null}</div>
          <div> {page === "Profit" ? <AddSalesItemPage /> : null}</div>
          <div> {page === "BarGraph" ? <BarGraph items={items} /> : null}</div>
        </Stack>
      </Stack>
    </Container>
  );
};

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;
