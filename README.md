# Open Sesame
Open Sesame is an unstyled, versatile, customizable, responsive, and accessible drawer component for React. Built with Radix and animated with framer-motion, it's designed to be a drop-in solution to fulfill all your drawer needs. You can put anything your heart desires into this drawer; the only limit is your imagination.

The idea was sparked from my love of the Radix primitive library mixed
with a yearning for them to have a drawer component. Luckily, there's Dialog.

https://github.com/jordan-sussman/open-sesame/assets/52428171/01eee7f8-0536-47ee-89d0-e8ba9e5cb0dd

In this example, the drawer is styled, opens from the `left`, has a size
of `450`, and a border radius of `20`.

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
          <Drawer.Close />
          <Drawer.Title>Open Sesame</Drawer.Title>
          <Drawer.Description>Lovely stuff.<Drawer.Description>
          <div>Content</div>
        </Drawer.Content>
    </Drawer.Root>
  )
}
```

## Props
Because Open Sesame is built with Radix's Dialog primitive, you get
all Radix props out of the box. On top of this, Open Sesame adds
a few more to make it a truly powerful drawer component.

- `origin` (required): Choose where the drawer opens from. The value can be
  - `top`
  - `right`
  - `bottom`
  - `left`
- `size` (required): Choose the depth of the drawer. The value can be either a
number for the number of pixels or a percentage as a string for the percentage of the view.
- `radius` (optional): Choose the border radius of the drawer. The value is the pixel value as a number. If none is provided, the border radius defaults
as 0.
- `visible` (optional): This is required for the drawer's animation powered by framer-motion. The value is used for the drawer's enter and exit animations. The value must be a boolean. I recommend using React's useState and the Root component's `open` and `onOpenChange` prop. See the example above.

## Subcomponents
`Drawer.Root` - Parent element that contains all elements of the component. [Props.](https://www.radix-ui.com/docs/primitives/components/dialog#root)

`Drawer.Trigger` - The button or element used to open. [Props.](https://www.radix-ui.com/docs/primitives/components/dialog#trigger)

`Drawer.Content` - The wrapper that renders the content. [Props.](https://www.radix-ui.com/docs/primitives/components/dialog#content)

`Drawer.Title` - An accessible title that's announced when opened. [Props.](https://www.radix-ui.com/docs/primitives/components/dialog#title)

`Drawer.Description` - An accessible description that's announced when opened. [Props.](https://www.radix-ui.com/docs/primitives/components/dialog#description)

`Close` - The button or element used to close. [Props.](https://www.radix-ui.com/docs/primitives/components/dialog#close)

## Poke Around
Find the component in `src/OpenSesame`.
<br>
Find the example from the above video in `src/Example`.

## Setup Locally
Install:
```bash
npm install
```
To run example locally with Vite:
```bash
npm run dev
```
Note that the project example was built using Vite. If you want to view the example, and Vite provides prompts, select `React` then `TypeScript`.
