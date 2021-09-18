import Head from 'next/head'
import Link from 'next/link'

const Blog = () => {
    return (
        <>
            <Head>
                <title>Blog title</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>bloggg</h1>
            <Link href="/">
                <a>
                    Back
                </a>
            </Link>
        </>
    );
}

export default Blog;