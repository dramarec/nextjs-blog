import Head from 'next/head'
import Link from 'next/link'
import { Navbar } from '../components/Navbar'
import styled from 'styled-components'

const Title = styled.h1`
    color: #3375;
`

export default function Home() {
    return (
        <div className="container">
            {/* <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;700&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap" rel="stylesheet" />

            </Head> */}

            <Link href="/blog">
                <a>
                    <h1>
                        Blog
                    </h1>
                </a>
            </Link>
            <Navbar />
            <Title>Home</Title>
        </div>
    )
}
