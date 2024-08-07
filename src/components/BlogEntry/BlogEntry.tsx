import Entry from "./class.ts";
import styled from "styled-components";


const BlogEntry : ({title :string , content:string , date:string})=>Entry =({title, content, date}) => {
    return (
        <ContainerEntry>
            <h3>{title}</h3>
            <p>{content}</p>
            <p>{date}</p>
        </ContainerEntry>
    );
}

const ContainerEntry = styled.article`
    color: #3e5467;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 65vw;
    border: 1px solid #3e5467;
    padding: 1rem;
`

export default BlogEntry;