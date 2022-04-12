import React from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'

// i shall complain if i'm not given the `foo` :)
const Component: React.FC<{ foo: string }> = props => <div {...props} />

// i also should complain in the situation, but :(
const Styled = styled.div<{ foo: string }>`
  color: red;
`

const e = document.getElementById('app')

const App: React.FC = () => (
  <>
    <Styled>Hello</Styled>
    <Component>World</Component>
  </>
)

if (e) {
  render(<App />, e)
}
