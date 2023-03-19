import { createContext, useContext, useState, FC } from "react";

import type { Item } from "../types/item";
import type { Page } from "../types/Page";

type Props = {
  children: any;
};

export const PageContext = createContext<{
  page: Page;
  setPage: React.Dispatch<React.SetStateAction<Page>>;
}>({
  page: "List",
  setPage: () => {},
});

export const PageProvider: React.FC<Props> = (props: Props) => {
  const { children } = props;
  const [page, setPage] = useState<Page>("List");
  return (
    <PageContext.Provider value={{ page, setPage }}>
      {children}
    </PageContext.Provider>
  );
};
