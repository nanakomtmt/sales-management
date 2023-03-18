import { useCallback, useState } from "react";
import type { Item } from "../types/item";
export const useItemList = () => {
  const [items, setItems] = useState<Item[]>([]);
  const addItem = useCallback(
    (item: Item) => {
      const newItems = [...items];
      newItems.push(item);
      setItems(newItems);
      console.log(items);
    },
    [items]
  );
  const deleteItem = useCallback(
    (index: number) => {
      var result: boolean = window.confirm("本当に削除しますか？");
      if (result) {
        console.log("bbb");
        const newMemos = [...items];
        newMemos.splice(index, 1);
        setItems(newMemos);
      }
    },
    [items]
  );
  return { items, addItem, deleteItem };
};
