import React from 'react'
import styled from 'styled-components'

const Blog = ({blogImage, writerImage, title, content, name}) => {
  return (
    <BlogWrapper>
        <BlogHeader>
            <BlogHeaderLeft>
                <BlogTitle>
                    {title}
                </BlogTitle>
                <BlogWriterContent>
                    <WriterImage src={writerImage} alt='writer' />
                    <WriterName>{name}</WriterName>
                </BlogWriterContent>
            </BlogHeaderLeft>
            <BlogHeaderRight>
                <img src={blogImage} alt='image' />
            </BlogHeaderRight>
        </BlogHeader>
        <BlogContent>

        </BlogContent>
    </BlogWrapper>
  )
}

const BlogWrapper= styled.section`
padding : 10rem;
`;
const BlogHeader= styled.div`
display:flex;
justify-content: space-around;
`;

const BlogHeaderLeft = styled.div`
flex: 0.5;
`

const BlogHeaderRight = styled.div`
flex: 0.5;
`

const BlogContent= styled.div`
padding : 3rem 5rem;;
`;

const BlogTitle= styled.h1`
font-size: 3rem;
`;

const BlogWriterContent = styled.div`
display:flex;
gap: 2rem;
`
const WriterImage= styled.img`
border-radius: 50%;
width: 100%;
height: auto;`

const WriterName = styled.h5`
font-size: 1.5rem;`


export default Blog