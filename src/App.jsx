// // pangea/dnd
// import React from "react";
// import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
// import "./App.css"; // スタイルを定義するためのCSSファイル

// const initialItems = [
//   { id: "1", content: "Item 1" },
//   { id: "2", content: "Item 2" },
//   { id: "3", content: "Item 3" },
//   { id: "4", content: "Item 4" },
//   { id: "5", content: "Item 5" },
//   { id: "6", content: "Item 6" },
//   { id: "7", content: "Item 7" },
//   { id: "8", content: "Item 8" },
//   { id: "9", content: "Item 9" },
// ];

// const reorder = (list, startIndex, endIndex) => {
//   const result = Array.from(list);
//   const [removed] = result.splice(startIndex, 1);
//   result.splice(endIndex, 0, removed);
//   return result;
// };

// const App = () => {
//   const [items, setItems] = React.useState(initialItems);

//   const onDragEnd = (result) => {
//     if (!result.destination) {
//       return;
//     }
//     const reorderedItems = reorder(
//       items,
//       result.source.index,
//       result.destination.index
//     );
//     setItems(reorderedItems);
//   };

//   return (
//     <DragDropContext onDragEnd={onDragEnd}>
//       <Droppable droppableId="droppable" direction="horizontal">
//         {(provided) => (
//           <div
//             {...provided.droppableProps}
//             ref={provided.innerRef}
//             className="grid"
//           >
//             {items.map((item, index) => (
//               <Draggable key={item.id} draggableId={item.id} index={index}>
//                 {(provided) => (
//                   <div
//                     ref={provided.innerRef}
//                     {...provided.draggableProps}
//                     {...provided.dragHandleProps}
//                     className="grid-item"
//                   >
//                     {item.content}
//                   </div>
//                 )}
//               </Draggable>
//             ))}
//             {provided.placeholder}
//           </div>
//         )}
//       </Droppable>
//     </DragDropContext>
//   );
// };

// export default App;

// // dnd-kit
// import React from "react";
// import { DndContext, closestCenter } from "@dnd-kit/core";
// import {
//   arrayMove,
//   SortableContext,
//   useSortable,
//   rectSortingStrategy,
// } from "@dnd-kit/sortable";
// import { CSS } from "@dnd-kit/utilities";
// import "./App.css"; // スタイルを定義するためのCSSファイル

// const initialItems = [
//   { id: "1", content: "Item 1" },
//   { id: "2", content: "Item 2" },
//   { id: "3", content: "Item 3" },
//   { id: "4", content: "Item 4" },
//   { id: "5", content: "Item 5" },
//   { id: "6", content: "Item 6" },
//   { id: "7", content: "Item 7" },
//   { id: "8", content: "Item 8" },
//   { id: "9", content: "Item 9" },
// ];

// const SortableItem = ({ id, content }) => {
//   const { attributes, listeners, setNodeRef, transform, transition } =
//     useSortable({ id });

//   const style = {
//     transform: CSS.Transform.toString(transform),
//     transition,
//   };

//   return (
//     <div
//       ref={setNodeRef}
//       style={style}
//       {...attributes}
//       {...listeners}
//       className="grid-item"
//     >
//       {content}
//     </div>
//   );
// };

// const App = () => {
//   const [items, setItems] = React.useState(initialItems);

//   const handleDragEnd = (event) => {
//     const { active, over } = event;
//     if (active.id !== over.id) {
//       const oldIndex = items.findIndex((item) => item.id === active.id);
//       const newIndex = items.findIndex((item) => item.id === over.id);
//       setItems(arrayMove(items, oldIndex, newIndex));
//     }
//   };

//   return (
//     <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
//       <SortableContext items={items} strategy={rectSortingStrategy}>
//         <div className="grid">
//           {items.map((item) => (
//             <SortableItem key={item.id} id={item.id} content={item.content} />
//           ))}
//         </div>
//       </SortableContext>
//     </DndContext>
//   );
// };

// export default App;

// // react-beautiful-dnd
// import React, { useState, useCallback } from "react";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// import "./App.css"; // スタイルを定義するためのCSSファイル

// const initialItems = [
//   { id: "1", content: "Item 1" },
//   { id: "2", content: "Item 2" },
//   { id: "3", content: "Item 3" },
//   { id: "4", content: "Item 4" },
//   { id: "5", content: "Item 5" },
//   { id: "6", content: "Item 6" },
//   { id: "7", content: "Item 7" },
//   { id: "8", content: "Item 8" },
//   { id: "9", content: "Item 9" },
// ];

// const reorder = (list, startIndex, endIndex) => {
//   const result = Array.from(list);
//   const [removed] = result.splice(startIndex, 1);
//   result.splice(endIndex, 0, removed);
//   return result;
// };

// const App = () => {
//   const [items, setItems] = useState(initialItems);

//   const onDragEnd = useCallback(
//     (result) => {
//       if (!result.destination) {
//         return;
//       }
//       const reorderedItems = reorder(
//         items,
//         result.source.index,
//         result.destination.index
//       );
//       setItems(reorderedItems);
//     },
//     [items]
//   );

//   return (
//     <DragDropContext onDragEnd={onDragEnd}>
//       <Droppable droppableId="droppable" direction="vertical">
//         {(provided) => (
//           <div
//             {...provided.droppableProps}
//             ref={provided.innerRef}
//             className="grid"
//           >
//             {items.map((item, index) => (
//               <Draggable key={item.id} draggableId={item.id} index={index}>
//                 {(provided) => (
//                   <div
//                     ref={provided.innerRef}
//                     {...provided.draggableProps}
//                     {...provided.dragHandleProps}
//                     className="grid-item"
//                   >
//                     {item.content}
//                   </div>
//                 )}
//               </Draggable>
//             ))}
//             {provided.placeholder}
//           </div>
//         )}
//       </Droppable>
//     </DragDropContext>
//   );
// };

// export default App;

// // react-dnd
import React, { useState, useCallback } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./App.css"; // スタイルを定義するためのCSSファイル

const ItemTypes = {
  ITEM: "item",
};

const initialItems = [
  { id: "1", content: "Item 1" },
  { id: "2", content: "Item 2" },
  { id: "3", content: "Item 3" },
  { id: "4", content: "Item 4" },
  { id: "5", content: "Item 5" },
  { id: "6", content: "Item 6" },
  { id: "7", content: "Item 7" },
  { id: "8", content: "Item 8" },
  { id: "9", content: "Item 9" },
];

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

const DraggableItem = ({ item, index, moveItem }) => {
  const [, ref] = useDrag({
    type: ItemTypes.ITEM,
    item: { index },
  });

  const [, drop] = useDrop({
    accept: ItemTypes.ITEM,
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveItem(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  return (
    <div ref={(node) => ref(drop(node))} className="grid-item">
      {item.content}
    </div>
  );
};

const App = () => {
  const [items, setItems] = useState(initialItems);

  const moveItem = useCallback((fromIndex, toIndex) => {
    setItems((prevItems) => reorder(prevItems, fromIndex, toIndex));
  }, []);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="grid">
        {items.map((item, index) => (
          <DraggableItem
            key={item.id}
            item={item}
            index={index}
            moveItem={moveItem}
          />
        ))}
      </div>
    </DndProvider>
  );
};

export default App;
