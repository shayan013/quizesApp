import React from "react";
import { useDrag } from "react-dnd";

function Dragging_item({ numer, denom, index, id }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    //hook when element is being dragged
    type: "div",
    item: { id: id },
  }));

  return (
    <div>
      <div className="each_item" ref={drag}>
        <p className="mb-0">{numer}</p>
        <p
          className="mb-0"
          style={{
            borderBottom: denom != "" ? "1px solid black" : "",
          }}
        ></p>

        <p className="mb-0">{denom}</p>
      </div>
    </div>
  );
}

export default Dragging_item;
