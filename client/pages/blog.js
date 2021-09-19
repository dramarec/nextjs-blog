import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components';
import { Post } from '../components/Post';

const Wraper = styled.div`
    background: #EEF5FF;
    min-height: 100vh;
    width: 100%;
`

const PostWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    column-gap: 30px;
`


const Blog = () => {
    return (
        <>
            <Head>
                <title>Blog title</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
           
        </>
    );
}

export default Blog;