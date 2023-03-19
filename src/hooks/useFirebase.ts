import { useCallback, useState } from "react";
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
  setDoc,
  updateDoc,
  addDoc,
  getDocs,
} from "firebase/firestore";
import "firebase/storage";
import { QuerySnapshot, DocumentData } from "firebase/firestore";
export const useFirebase = () => {
  const addFirebase = async (item: Item) => {
    console.log(firebaseApp.name);
    const db = getFirestore(firebaseApp);

    try {
      const docRef = await addDoc(collection(db, "items"), item);
      console.log(docRef);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  const getItemData = async (): Promise<QuerySnapshot<DocumentData>> => {
    console.log(firebaseApp.name);
    const db = getFirestore(firebaseApp);

    const q = query(collection(db, "items"));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
    return querySnapshot;
  };
  return { addFirebase, getItemData };
};
