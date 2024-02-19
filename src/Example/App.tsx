import React from "react";
import { Drawer } from "../OpenSesame";
import "./App.css";
import "./styles.css";

function App() {
  const [open, setOpen] = React.useState(false);

  return (
    <Drawer.Root open={open} onOpenChange={setOpen}>
      <Drawer.Trigger>Open Sesame</Drawer.Trigger>
      <Drawer.Content
        className="content"
        origin="left" // Where the drawer opens from
        radius={20} // Border radius of the drawer
        size={450} // Depth of the drawer
        visible={open} // Required for animation
      >
        <div className="header">
          <Drawer.Title className="headersection">Open Sesame</Drawer.Title>
          <Drawer.Description className="headersection">
            Open Sesame is an unstyled, versatile, customizable, and accessible
            drawer component built with Radix.
          </Drawer.Description>
          <Drawer.Close className="close">X</Drawer.Close>
        </div>
        <div className="body">
          <div>The drawer is supercharged by the following props:</div>
          <p>
            <b>origin</b>
            <br />
            Choose where the drawer opens from. The value can be either
            <b> left</b>, <b>right</b>, <b>top</b>, or
            <b> bottom</b>.
          </p>
          <p>
            <b>size</b>
            <br />
            Choose the depth of the drawer. The value can be either a
            <b> number</b> for the number of pixels or a <b>percentage</b> as a
            string for the percentage of the view.
          </p>
          <p>
            <b>radius</b>
            <br />
            Choose the border radius of the drawer. The value is the pixel value
            as a <b>number</b>. If none is provided, the border radius defaults
            as <b>0</b>.
          </p>
          <p>
            <b>visible</b>
            <br />
            Required for animation, powered by framer-motion. The value is
            either <b>true</b> or <b>false</b> based on the open state of the
            drawer.
          </p>
          <br />
          <p>
            In this example, the drawer opens from the <b>left</b> with a depth
            of <b>450</b>px and a border radius of <b>20</b>px.
          </p>
        </div>
      </Drawer.Content>
    </Drawer.Root>
  );
}

export default App;
