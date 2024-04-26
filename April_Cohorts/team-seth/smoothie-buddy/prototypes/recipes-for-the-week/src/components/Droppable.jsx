import React from "react";
import { useDroppable } from "@dnd-kit/core";

export function Droppable(props) {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  });

  const style = {
    color: isOver ? "green" : undefined,
    width: "200px",
    height: "100px",
    padding: "1em",
    margin: "1em",
    backgroundColor: "#ddd",
  };

  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  );
}
