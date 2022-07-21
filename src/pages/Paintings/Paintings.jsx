import { useContext } from "react";

import { PaintingsContext } from "../../contexts/paintings.context";

function Shop() {
  const { paintings } = useContext(PaintingsContext);
  return (
    <div>
      {paintings.map(({ id, name, imageUrl }) => (
        <div key={id}>
          <h1>{name}</h1>
        </div>
      ))}
    </div>
  );
}

export default Shop;
