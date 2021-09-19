import Head from 'next/head'
import Link from 'next/link'
import { Navbar, Post } from '../components'
import styled from 'styled-components'

// const Title = styled.h1`
//     color: #3375;
// `

const Wraper = styled.div`
    background: #EEF5FF;
    min-height: 100vh;
    width: 100%;
`

const PostWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    column-gap: 30px;
`
export default function Home() {
    return (
        <div>
            <Head>
                <title>Home</title>
            </Head>
            <Navbar />
            <Wraper>
                <div className="container">
                    <PostWrapper>
                        {/* <Link href="/blog">
                        </Link> */}
                        <Post images={"/static/images/4.png"} title='Мальдивы. Рай или пафос ? ' />
                        <Post images={"/static/images/5.png"} title='Италия. Остров Капри. Обзор. ' />
                        <Post images={"/static/images/6.png"} title='США. Сан-Франциско,  дорого ?' />
                        <Post images={"/static/images/7.png"} title='Канада. Пейзажи вблизи Онтарио.' />
                        <Post images={"/static/images/8.png"} title='Швейцария.  Красота природы.' />
                        <Post images={"/static/images/9.png"} title='Альпы.  Покори вершину с нами !' />

                    </PostWrapper>

                </div>
            </Wraper>
        </div>
    )
}
