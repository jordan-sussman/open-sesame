# Open Sesame
Open Sesame is an unstyled, versatile, customizable, responsive, and accessible drawer component for React. Built with Radix and animated with framer-motion, it's designed to be a drop-in solution to fulfill all your drawer needs.

The idea was sparked from my love of the Radix primitive library mixed
with a yearning for them to have a drawer component. Luckily, there's Dialog.

https://github.com/jordan-sussman/open-sesame/assets/52428171/01eee7f8-0536-47ee-89d0-e8ba9e5cb0dd

## Usage
```jsx
import { Drawer } from 'open-sesame'
import React from 'react'

function MyComponent() {
  const [open, setOpen] = React.useState(false)
  return (
    <Drawer.Root open={open} onOpenChange={setOpen}>
      <Drawer.Trigger>Open</Drawer.Trigger>
        <Drawer.Content
          origin={origin} // ''
          radius={radius} // #
          size={size} // # or '' (px or %)
          visible={open} // bool
        >
          <p>Content</p>
        </Drawer.Content>
    </Drawer.Root>
  )
}
```

## Features and Props
Because Open Sesame is built with Radix's Dialog primitive, you get
all Radix features out of the box. On top of this, Open Sesame adds
a few more to make it a truly powerful drawer component.

I said powerful, right? The drawer is supercharged by the following props:
- **origin** (required): Choose where the drawer opens from. The value can be
  - `top`
  - `right`
  - `bottom`
  - `left`
- **size** (required): Choose the depth of the drawer. The value can be either a
number for the number of pixels or a percentage as a string for the percentage of the view.
- radius (optional): Choose the border radius of the drawer. The value is the pixel value as a number. If none is provided, the border radius defaults
as 0.
- **visible** (optional): This is required for the drawer's animation powered by framer-motion. The value is used for the drawer's enter and exit animations. The value must be a boolean. I recommend using React's useState and the Root component's `open` and `onOpenChange` prop. See the example above.

## Poke Around
You can find the component under `src/OpenSesame`.
You can find an example implementation under `src/Example`.

## Setup Locally
Install:
```bash
npm install
```
To run example locally with Vite:
```bash
npm run dev
```
Note that the project example was built using Vite. If you want to view the example, and Vite provides prompts, select 'React' then 'TypeScript'.
