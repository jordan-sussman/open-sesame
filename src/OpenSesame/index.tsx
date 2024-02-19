import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";

type ContentProps = React.ComponentPropsWithoutRef<typeof Dialog.Content> & {
  origin: "left" | "right" | "top" | "bottom";
  size: string | number;
  radius?: number;
  visible?: boolean;
};

const Content = React.forwardRef<HTMLDivElement, ContentProps>(function (
  { style, ...props },
  ref,
) {
  // Fallback valiation for size to a proper value in case of invalid input.
  // If the size is a string and not a number, in the styles, fallback is 100%.
  const sizeChecker = (size: ContentProps["size"]) => {
    if (typeof size === "string" && !size.includes("%")) {
      const parsedSize = parseInt(size, 10);
      return isNaN(parsedSize) ? size : `${parsedSize}px`;
    }
    return size;
  };

  // Animation properties for framer-motion
  let initial, animate;
  switch (props.origin) {
    case "left":
      initial = { x: -props.size };
      animate = { x: 0 };
      break;
    case "right":
      initial = { x: props.size };
      animate = { x: 0 };
      break;
    case "top":
      initial = { y: -props.size };
      animate = { y: 0 };
      break;
    case "bottom":
      initial = { y: props.size };
      animate = { y: 0 };
      break;
  }

  return (
    <AnimatePresence>
      {props.visible && (
        <Dialog.Portal forceMount>
          <Dialog.Overlay asChild>
            <motion.div
              className="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.15)",
                position: "fixed",
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
              }}
            />
          </Dialog.Overlay>
          <Dialog.Content
            asChild
            ref={ref}
            style={{
              ...style,
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
              overflow: "auto",
              position: "fixed",
              borderTopLeftRadius:
                props.radius &&
                (props.origin === "bottom" || props.origin === "right")
                  ? 20
                  : undefined,
              borderTopRightRadius:
                props.radius &&
                (props.origin === "bottom" || props.origin === "left")
                  ? 20
                  : undefined,
              borderBottomLeftRadius:
                props.radius &&
                (props.origin === "top" || props.origin === "right")
                  ? 20
                  : undefined,
              borderBottomRightRadius:
                props.radius &&
                (props.origin === "top" || props.origin === "left")
                  ? 20
                  : undefined,
              left: props.origin === "left" ? 0 : undefined,
              right:
                props.origin === "bottom" ||
                props.origin === "right" ||
                props.origin === "top"
                  ? 0
                  : undefined,
              top:
                props.origin === "left" ||
                props.origin === "right" ||
                props.origin === "top"
                  ? 0
                  : undefined,
              bottom: props.origin === "bottom" ? 0 : undefined,
              height:
                props.origin === "bottom" || props.origin === "top"
                  ? sizeChecker(props.size)
                  : "100%",
              width:
                props.origin === "left" || props.origin === "right"
                  ? sizeChecker(props.size)
                  : "100%",
            }}
            {...props}
          >
            <motion.div
              initial={initial}
              animate={animate}
              exit={initial}
              transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
            >
              {props.children}
            </motion.div>
          </Dialog.Content>
        </Dialog.Portal>
      )}
    </AnimatePresence>
  );
});

export const Drawer = {
  Root: Dialog.Root,
  Trigger: Dialog.Trigger,
  Title: Dialog.Title,
  Description: Dialog.Description,
  Close: Dialog.Close,
  Content: Content,
};
