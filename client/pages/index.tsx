import { useState, useEffect } from 'react'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'

import { Navbar } from '../components'
import { COLORS } from '../public/colors'
import { IPost } from '../types'
import { NextPageContext } from 'next'

interface IProps {
    posts: IPost[]
}

export default function Home({ posts: serverPosts }: IProps) {
    const [posts, setPosts] = useState(serverPosts)

    useEffect(() => {
        async function load() {
            const response = await fetch(`${process.env.API_URL}/post`)
            const data = await response.json();
            console.log("🔥🚀 ===> load ===> data", data);
            setPosts(data)
        }

        if (!serverPosts) {
            load()
        }
    }, [])

    if (!posts || posts === null) {
        return <h2>Loading POSTS..........</h2>
    }

    function PostCard() {
        return (
            posts?.map((post, idx) => {
                return (
                    <Link href='/post/[id]' as={`/post/${post._id}`} key={idx}>
                        <Card >
                            <Image
                                alt="Mountains"
                                src={post.image + `?sig=${post._id}`}
                                layout="fill"
                                objectFit="cover"
                                quality={100}
                            />
                            <PostTitle>
                                <p>{post.title}</p>
                            </PostTitle>
                        </Card>

                    </Link>
                )
            })

        )
    }

    return (
        <div>
            <Head>
                <title>Home</title>
            </Head>
            <Navbar />
            <Wrapper>
                <div className="container">
                    <PostWrapper>
                        {posts ? PostCard() : null}
                    </PostWrapper>
                </div>
            </Wrapper>
        </div>
    )
}

Home.getInitialProps = async (ctx: NextPageContext) => {
    if (!ctx.req) {
        return { posts: null }
    }
    const response = await fetch(`${process.env.API_URL}/post`)
    const posts = await response.json();
    return {
        posts
    }
}

// export async function getServerSideProps() {
//     const res = await fetch(`${process.env.API_URL}/post`)
//     const posts = await res.json()

//     if (!posts) {
//         return {
//             notFound: true,
//         }
//     }

//     return {
//         props: {
//             posts
//         }, // will be passed to the page component as props
//     }
// }



const Wrapper = styled.div`
    background: ${COLORS.background3};
    min-height: 100vh;
    width: 100%;
`
const PostWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    column-gap: 30px;
`
const Card = styled.a`
    width: 350px;
    height: 270px;
    border-radius: 20px;
    margin-top: 50px;
    position: relative;
    cursor: pointer;
    overflow: hidden;
    transition:  500ms cubic-bezier(0.4, 0, 0.2, 1);
    :hover {
        transform: scale(1.1);
    }
`
const PostTitle = styled.div`
    text-align: center;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    font-style: normal;
    color: ${COLORS.color};
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${COLORS.background};
    border-radius: 0px 0px 15px 15px;
    padding:15px 20px;
`
