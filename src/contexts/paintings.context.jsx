import { createContext, useState } from "react";

import PAINTINGS from "../shop-data.json";

export const PaintingsContext = createContext({
  products: [],
});

export const PaintingProvider = ({ children }) => {
  const [paintings, setPaintings] = useState(PAINTINGS);
  const value = { paintings };

  return (
    <PaintingsContext.Provider value={value}>
      {children}
    </PaintingsContext.Provider>
  );
};
