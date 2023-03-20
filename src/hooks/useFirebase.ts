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
  deleteDoc,
} from "firebase/firestore";
import "firebase/storage";
import { QuerySnapshot, DocumentData } from "firebase/firestore";
export const useFirebase = () => {
  const db = getFirestore(firebaseApp);
  const addFirebase = async (item: Item) => {
    try {
      const docRef = await setDoc(doc(db, "items", item.id), item);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  const deleteFirebase = async (item: Item) => {
    try {
      const docRef = await deleteDoc(doc(db, "items", item.id));
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  const updateFirebase = async (item: Item) => {
    try {
      const ref = doc(db, "items", item.id);

      // Set the "capital" field of the city 'DC'
      await updateDoc(ref, item);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  const getItemData = async (): Promise<QuerySnapshot<DocumentData>> => {
    const q = query(collection(db, "items"));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
    return querySnapshot;
  };
  return { addFirebase, getItemData, updateFirebase, deleteFirebase };
};
