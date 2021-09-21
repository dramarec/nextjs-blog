import Head from 'next/head';
import Image from 'next/image'
import styled from 'styled-components';
import { useRouter } from 'next/router'
import { Navbar, PostCard } from '../../components';
import { COLORS } from '../../public/colors';
import Link from 'next/link'
import { useEffect, useState } from 'react';

const Wrapper = styled.div`
    background:${COLORS.background3};
    min-height: 100vh;
    width: 100%;
`;

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
export default function Post({ post: serverPost }) {
    const [post, setPost] = useState(serverPost)
    console.log("🔥🚀 ===> Post ===> post", post);

    const router = useRouter()
    const { id } = router.query

    useEffect(() => {
        async function load() {
            const response = await fetch(`http://localhost:4300/posts/${router.query.id}`)
            const data = await response.json()
            setPost(data)

        }
        if (!serverPost) {
            load()
        }
    }, [])

    if (!post) {
        return <h2>Loading posts</h2>
    }

    return (
        <Wrapper>
            <Head>
                <title>Post: {id}</title>
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

                <h1>Post : {post.title}</h1>

                {/* <Image
                    alt="Card"
                    src={post.images}
                    // layout="fill"
                    objectFit="cover"
                    quality={100}
                    width={700}
                    height={470}
                /> */}

                <PostCard image={post.images} title={post.title} />

            </div>
        </Wrapper>
    )
}

Post.getInitialProps = async ({ query, req }) => {
    if (!req) {
        return { post: null }
    }
    const response = await fetch(`http://localhost:4300/posts/${query.id}`)
    const post = await response.json();
    return {
        post
    }
}