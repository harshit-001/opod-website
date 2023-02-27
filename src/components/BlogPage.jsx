import React from 'react'
import styled from 'styled-components'
import { Blogs } from '../assets/utils'
import { Button, Span } from '../GlobalStyle'
import Blog from './Blog'

const BlogPage = () => {
  return (
    <BlogWrapper>
      <BlogLeft>
      <BlogHeading>
         OPOD AUDIO
      </BlogHeading>
      <BlogSubHeading>
      <Span>Subscribe </Span> to our blog to get <Span>updates from us</Span>
      </BlogSubHeading>
      <BlogFormWrapper>
         <div>
          <Label required={true} >My full name</Label>
          <Input placeholder='John Doe' type={'text'} required/>
          </div>
          <div>
          <Label required={true}>You can reply me at </Label>
          <Input placeholder='welovelistening@abcd.in' type={'email'} required />
          </div>
          <Button isFullWidth={true} type='submit'>Send</Button>
      </BlogFormWrapper>
      </BlogLeft>
      <BlogRight>
          <BlogListWrapper>
            {
              Blogs.map((blog,index) => <Blog blog={blog} key={index}/>)
            }
          </BlogListWrapper>
      </BlogRight>
    </BlogWrapper>
  )
}

const BlogWrapper = styled.section`
display: flex;
align-items: center;
padding: 5rem;
background : ${({theme}) => `url(${theme.bgimage.purple})`};
color : ${({theme}) => theme.colors.text.white};

@media (max-width : ${({theme}) => theme.media.mobile}){
  flex-direction: column;
  gap: 2rem;
}
`

const BlogLeft = styled.div`
flex: 0.5;
display: flex;
flex-direction: column;
align-self: baseline;
gap:2rem;
padding : 5rem 20rem;

@media (max-width : ${({theme}) => theme.media.mobile}){
  padding:0;
}`

const BlogRight= styled.div`
flex: 0.5;
overflow-y: scroll;
height:39rem;

::-webkit-scrollbar {
  display:none;
}

@media (max-width : ${({theme}) => theme.media.mobile}){
  flex:auto;
  height:88rem;
}`

const BlogHeading = styled.h1`
font-size : 6.4rem;
font-weight :  ${({theme}) => theme.weight.bold};
font-family :  ${({theme}) => theme.fontFamily.latin};

@media (max-width : ${({theme}) => theme.media.mobile}){
    font-size : 8rem;
    width: 60%;
    margin:auto;
}
`

const BlogSubHeading = styled.h3`
font-size : 2.6rem;
font-weight :  ${({theme}) => theme.weight.normal};
font-family :  ${({theme}) => theme.fontFamily.latin};

@media (max-width : ${({theme}) => theme.media.mobile}){
   padding-bottom : 2rem;
   font-size: 4rem; 
   width: 60%;
    margin:auto;
    text-align: center;
}
`

const Label = styled.label`
font-size: 1.4rem;
color: ${({theme}) => theme.colors.text.white};

@media (max-width : ${({theme}) => theme.media.mobile}){
  font-size : 2.4rem;
}
`

const Input = styled.input`
border-radius: 10px;
padding: 1rem;
border: none;

@media (max-width : ${({theme}) => theme.media.mobile}){
  padding : 3rem;
}`

const BlogFormWrapper = styled.div`
display: flex;
width: fit-content;
gap: 1.5rem;

div{
  display:flex;
  flex-direction:column;
  gap:1rem;
}

@media (max-width : ${({theme}) => theme.media.mobile}){
  flex-direction: column;
  gap: 3rem;
  width: 90%;
  margin:auto;

  div{
    display:flex;
    flex-direction:column;
    gap:1rem;
  }
}`

const BlogListWrapper= styled.div`
display:flex;
flex-direction: column;
gap: 1rem;

@media (max-width : ${({theme}) => theme.media.mobile}){
  padding : 4rem;
}
`

export default BlogPage