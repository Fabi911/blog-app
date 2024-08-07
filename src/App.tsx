import styled from "styled-components";
import Blog from "./components/blog/Blog.tsx";


export default function App() {


  return (
    <AppBox>
      <Blog />
    </AppBox>
  )
}

const AppBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
    height: 100vh;
`

