import { motion } from "framer-motion";

function DragSnapBox() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <motion.div
        drag
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        onDragEnd={(event, info) => {
          console.log("Released at:", info.point);
        }}
        animate={{ x: 0, y: 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        style={{
          width: 100,
          height: 100,
          backgroundColor: "#ff008c",
          borderRadius: 20,
          cursor: "grab",
        }}
      />
    </div>
  );
}

export default DragSnapBox;
