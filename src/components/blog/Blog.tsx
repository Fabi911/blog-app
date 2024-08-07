import styled from "styled-components";
import BlogEntry from "../BlogEntry/BlogEntry.tsx";



export default function Blog() {
  return (
    <Container>
      <h2>Welcome to my blog</h2>
        <BlogEntry title={"Test2"} content={"Lorem ipsum dolor sit amt, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."} date={"07.08.2024"}/>
        <BlogEntry title={"Test"} content={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."} date={"07.08.2024"}/>
    </Container>
  );
}

const Container = styled.div`
  padding: 20px;
  height: 80vh;
  width: 65vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 4rem;
    gap:1rem;
    
`
