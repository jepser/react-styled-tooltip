# React styled tooltip

I simple, configurable, almost-no-opinionated tooltip for React and styled-components.

## But, but why?

While working on [A my zero-💩 guide of Guatemala](https://chapin.guide) I needed a tooltip that was:

- Easy to configure
- Easy to extend
- Using styled-components (so it easy could inherit certain features that is has)

I couldn't find anything so... I made one.

## Installation

Type in your terminal `yarn add react-styled-tooltip` or `npm install --save react-styled-tooltip`.

> Remember that you need to have styled-components installed.

## Usage

For the most simple use:

``` jsx
import Tooltip from 'react-styled-tooltip'

const SuperComponent = () => {
  return (
    <p>I am a super noicy text and <Tooltip content="I will be in the tooltip">I have a tooltip</Tooltip> here</p>
  )
}

```

If you want to use custom content, it uses a render prop for that:

``` jsx
import Tooltip from 'react-styled-tooltip'

const SuperTooltipContent = ({ isVisible }) => (
  <div superStyling={isVisible}>
    <h4>I'm the tooltip title</h4>
    <p>I'm the tooltip description</p>
  </div>
)

const SuperComponent = () => {
  return (
    <p>I am a super noicy text and <Tooltip content={SuperTooltipContent}>I have a tooltip</Tooltip> here</p>
  )
}

```

## Api

| Props | Default | | Description |
| --- | --- | --- |
| content | null | It can be a primite or a render function |
| delay | 0 | `number`: expressed in seconds of the delay after mouse over/out for the tooltip to appear |
| duration | 0.1 | `number`: seconds of the animation duration |
