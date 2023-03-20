import { useCallback, useContext, useState, FC } from "react";
import type { Item } from "../types/item";
import { firebaseApp } from "../firebase";
import firebase from "firebase/app";
import "firebase/auth";
import {
  collection,
  doc,
  getFirestore,
  onSnapshot,
  query,
  updateDoc,
} from "firebase/firestore";
import "firebase/storage";
import { useFirebase } from "./useFirebase";
import { QuerySnapshot, DocumentData } from "firebase/firestore";
import { ItemDataContext } from "../providers/ItemDataContext";

export const useItemList = () => {
  const { addFirebase } = useFirebase();
  const { items, setItems } = useContext(ItemDataContext);
  const { getItemData, updateFirebase, deleteFirebase } = useFirebase();
  const addItem = (item: Item) => {
    const newItems = [...(items ?? [])];
    newItems.push(item);
    setItems(newItems);
    addFirebase(item);
  };
  const deleteItem = (index: number) => {
    var result: boolean = window.confirm("本当に削除しますか？");
    if (result) {
      const newItems = [...(items ?? [])];
      deleteFirebase(newItems[index]);
      newItems.splice(index, 1);
      setItems(newItems);
    }
  };
  const plusSales = (index: number) => {
    const newItems = [...(items ?? [])];
    newItems[index].unitSales++;
    setItems(newItems);
    updateFirebase(newItems[index]);
  };
  const minusSales = (index: number) => {
    const newItems = [...(items ?? [])];
    if (newItems[index].unitSales > 0) {
      newItems[index].unitSales--;
      setItems(newItems);
      updateFirebase(newItems[index]);
    }
  };
  const fetchItems = async () => {
    var databaseItems: QuerySnapshot<DocumentData> = await getItemData();
    const newItems: Item[] = [];

    databaseItems.forEach((doc) => {
      var item: Item = {
        id: doc.id,
        name: doc.data().name,
        cost: doc.data().cost,
        price: doc.data().price,
        postage: doc.data().postage,
        unitSales: doc.data().unitSales,
      };

      newItems.push(item);
    });
    setItems(newItems);
  };

  return { items, addItem, deleteItem, fetchItems, minusSales, plusSales };
};
