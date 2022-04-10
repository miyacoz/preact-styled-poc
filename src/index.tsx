import React from 'react'
import styled from 'styled-components'

// i shall complain if i'm not given the `foo` :)
const Component: React.FC<{ foo: string }> = props => <div {...props} />

// i also should complain in the situation, but :(
const Styled = styled.div<{ foo: string }>`
  color: red;
`

const App: React.FC = () => (
  <>
    <Styled>Hello</Styled>
    <Component>World</Component>
  </>
)

export default App
