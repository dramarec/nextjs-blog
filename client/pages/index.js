import Head from 'next/head'
import Link from 'next/link'
import { Navbar, PostCard } from '../components'
import styled from 'styled-components'
import { COLORS } from '../public/colors'
import Image from 'next/image'


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
    border-radius: 15px;
    margin-top: 50px;
    position: relative;
    cursor: pointer;
    transition:  500ms cubic-bezier(0.4, 0, 0.2, 1);
    background: url('${props => props.bgImage}') center / cover no-repeat;
    :hover {
        transform: scale(1.1);
    }
`

const PostTitle = styled.div`
    font-weight: 700;
    text-align: center;
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

export default function Home() {

    const posts = [
        {
            id: '1',
            title: 'Post #1',
            images: "https://www.superherodb.com/pictures2/portraits/10/100/639.jpg"
        },
        {
            id: '2',
            title: 'Post #2',
            images: "https://www.superherodb.com/pictures2/portraits/10/100/791.jpg"
        },
        {
            id: '3',
            title: 'Post #3',
            images: "https://www.superherodb.com/pictures2/portraits/10/100/891.jpg"
        },
    ]

    function PostCard() {
        return (
            posts.map((post, idx) => {
                return (
                    <Link href='/post/[id]' as={`/post/${post.id}`} key={idx}>
                        <Card >
                            <Image
                                alt="Mountains"
                                src={post.images}
                                layout="fill"
                                objectFit="cover"
                                quality={100}
                            />
                            <PostTitle>
                                <p>{post.title}</p>
                            </PostTitle>
                        </Card>

                        {/* <PostCard image={post.images} title={post.title} /> */}
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
                        {/* <Image
                            alt="Mountains"
                            src="https://www.superherodb.com/pictures2/portraits/10/100/891.jpg"
                            layout="fill"
                            objectFit="cover"
                            quality={100}
                        /> */}
                        {PostCard()}

                        {posts.map((post, idx) => (
                            <Link href='/post/[id]' as={`/post/${post.id}`} key={idx}>
                                <Card >
                                    <Image
                                        alt="Mountains"
                                        src={post.images}
                                        layout="fill"
                                        objectFit="cover"
                                        quality={100}
                                    />
                                    <PostTitle>
                                        <p>{post.title}</p>
                                    </PostTitle>
                                </Card>
                            </Link>
                        ))}
                    </PostWrapper>
                </div>
            </Wrapper>
        </div>
    )
}
