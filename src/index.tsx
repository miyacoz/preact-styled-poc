import React from 'react'
import styled from 'styled-components'

const Styled = styled.div<{ foo: string }>`
  color: red;
`

const Component: React.FC<{ foo: string }> = props => <div {...props} />

const App: React.FC = () => (
  <>
    <Styled>Hello</Styled>
    <Component>World</Component>
  </>
)

export default App
