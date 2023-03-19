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
  const { items, setItems } = useContext(ItemDataContext);
  const addItem = (item: Item) => {
    const newItems = [...(items ?? [])];

    newItems.push(item);
    setItems(newItems);
    console.log(items);
  };
  const deleteItem = (index: number) => {
    var result: boolean = window.confirm("本当に削除しますか？");
    if (result) {
      console.log("bbb");
      const newItems = [...(items ?? [])];
      newItems.splice(index, 1);
      setItems(newItems);
    }
  };
  const fetchItems = useCallback(async () => {
    // const { getItemData } = useFirebase();
    // var databaseItems: QuerySnapshot<DocumentData> = await getItemData();
    // return databaseItems;
  }, [items]);
  // const setFirebase = useCallback(async () => {
  //   const db = getFirestore(firebaseApp);
  //   // const q = query(collection(db, "videos"));
  //   const ref = doc(db, "videos", params.id.toString());
  //   await updateDoc(ref, {
  //     checkStatus: params.value,
  //   });
  // }, []);
  return { items, addItem, deleteItem, fetchItems };
};
