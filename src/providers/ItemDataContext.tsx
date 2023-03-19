import { createContext, useContext, useState, FC } from "react";

import type { Item } from "../types/item";

type Props = {
  children: any;
};
export const ItemDataContext = createContext<{
  items: Item[] | undefined;
  setItems: React.Dispatch<React.SetStateAction<Item[] | undefined>>;
}>({ items: undefined, setItems: () => undefined });

export const ItemDataProvider: React.FC<Props> = (props: Props) => {
  const { children } = props;
  const [items, setItems] = useState<Item[] | undefined>(undefined);
  return (
    <ItemDataContext.Provider value={{ items, setItems }}>
      {children}
    </ItemDataContext.Provider>
  );
};
