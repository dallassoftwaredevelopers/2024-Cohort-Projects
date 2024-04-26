import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import { DndContext } from "@dnd-kit/core";

import { Draggable } from "./components/Draggable";
import { Droppable } from "./components/Droppable";
import { Splitter, SplitterPanel } from "primereact/splitter";

import { Card } from "primereact/card";

function App() {
  const containers = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const [parent, setParent] = useState(null);
  const [days, setDays] = useState({
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
    Sunday: [],
  });
  const [recipes, setRecipes] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const smoothies = ["Banana Avocado", "Berry Blast"];
  const [curr, setCurr] = useState("");
  const [smoothiesShown, setSmoothiesShown] = useState([
    { id: 1, text: "Banana Avocado" },
    { id: 2, text: "Berry Blast" },
  ]);
  const draggableMarkup = smoothiesShown.map((smoothie) => (
    <Draggable id={smoothie.id} key={smoothie.id}>
      {smoothie.text}
    </Draggable>
  ));
  let nextID = smoothiesShown.length + 1;
  console.log("days", days);
  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <Splitter style={{ height: "300px" }}>
        <SplitterPanel className="flex align-items-center justify-content-center">
          {draggableMarkup}
          {/* {parent === null ? draggableMarkup : null} */}
        </SplitterPanel>
        <SplitterPanel className="flex align-items-center justify-content-center">
          {containers.map((id) => (
            <Droppable id={id}>
              {days[id].length == 0
                ? id
                : days[id].map((recipe, i) => (
                    <div>
                      <span>{recipe} </span>
                      <span onClick={() => handleRemove(id, i)}>(X)</span>
                    </div>
                  ))}
            </Droppable>
          ))}
        </SplitterPanel>
      </Splitter>
    </DndContext>
  );

  function handleRemove(day, index) {
    setDays({
      ...days,
      [day]: days[day].filter((v, i) => index != i),
    });
  }

  function handleDragStart(event) {
    setActiveId(event.active.id);
    console.log(smoothiesShown);
    console.log("event active id " + event.active.id);
  }
  function handleDragEnd(event) {
    const { over } = event;
    setParent(over ? over.id : null);

    if (over) {
      const activeRecipe = smoothiesShown.find(
        ({ id }) => id == event.active.id
      );

      // const activeRecipe1 = smoothiesShown.find(
      //   (smoothie) => smoothie.id == event.active.id
      // );
      if (activeRecipe) {
        const day = over.id;
        //days[day] = days[day].push(activeRecipe.text); //mutable
        setDays({
          ...days,
          [day]: [...days[day], activeRecipe.text], //immutable
        });
      }
    }
  }
}

export default App;
