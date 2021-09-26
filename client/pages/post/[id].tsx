import { useEffect, useState } from 'react';
import { NextPageContext } from 'next';
import { useRouter } from 'next/router'
import Head from 'next/head';
import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components';
import axios from 'axios';

import { Navbar, PostCard } from '../../components';
import { COLORS } from '../../public/colors';
import { IPost } from '../../types';

interface Iprop {
    post: IPost
}

export default function Post({ post: serverPost }: Iprop) {
    const [post, setPost] = useState(serverPost)

    const router = useRouter()
    const { id } = router.query

    useEffect(() => {
        async function load() {
            const response = await fetch(`${process.env.API_URL}/post/${id}`)
            const data = await response.json()
            console.log("🔥🚀 ===> load ===> data", data);
            setPost(data)

        }
        if (!serverPost) {
            load()
        }
    }, [])

    if (!post) {
        return <h2>Loading posts</h2>
    }

    const removePost = async () => {
        await axios.post(`${process.env.API_URL}/post/remove`, {
            id: post._id
        }).then(() => router.push('/'))
    }


    return (
        <Wrapper>
            <Head>
                <title>Post: {post.title}</title>
            </Head>

            <Navbar />
            <div className="container">
                <Link href='/'>
                    <BtnBack>
                        <Image
                            src='/static/back.svg'
                            width={24}
                            height={15}
                        />
                        Назад
                    </BtnBack>
                </Link>

                <BtnBack onClick={removePost}>
                    Удалить
                </BtnBack>

                <h1>Post : {post.title}</h1>

                <PostCard
                    image={post.image + `?sig=${post._id}`}
                    title={post.title}
                    description={post.description}
                />

            </div>
        </Wrapper>
    )
}

Post.getInitialProps = async ({ query, req }: NextPageContext) => {
    if (!req) {
        return { post: null }
    }

    const response = await fetch(`${process.env.API_URL}/posts/${query.id}`)
    const post = await response.json();
    return {
        post
    }
}

// export async function getServerSideProps({ query }) {
//     const res = await fetch(`${process.env.API_URL}/api/post/${query.id}`)
//     const post = await res.json()

//     if (!post) {
//         return {
//             notFound: true,
//         }
//     }

//     return {
//         props: {
//             post
//         }, // will be passed to the page component as props
//     }
// }



const Wrapper = styled.div`
    background:${COLORS.background3};
    min-height: 100vh;
    width: 100%;
`
const BtnBack = styled.button`
    width: 117px;
    height: 45px;

    background: ${COLORS.white};
    box-shadow: 0px 10px 25px rgba(148, 174, 213, 0.15);
    border-radius: 10px;
    border: inherit;

    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;

    color: ${COLORS.color};
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    margin-top: 30px;
    outline: none;
    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
    :hover {
        box-shadow: 0px 10px 25px rgba(148, 174, 213, 0.5);
    }
`