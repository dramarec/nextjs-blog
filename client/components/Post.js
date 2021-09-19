import styled from 'styled-components';
import Image from 'next/image'

const Card = styled.a`
    width: 350px;
    height: 270px;
    border-radius: 15px;
    margin-top: 50px;
    position: relative;
    cursor: pointer;
    :hover {
        transform: scale(1.1);
        transition: 0.3s all ease;
    }
`

const PostTitle = styled.div`
    font-weight: 700;
    text-align: center;
    font-size: 18px;
    line-height: 21px;
    font-style: normal;
    color: #3260A1;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background: #FEFEFE;
    border-radius: 0px 0px 15px 15px;
    padding:15px 20px;
`



export const Post = ({ images, title }) => {
    return (
        <Card>
            <Image
                alt="Mountains"
                src={images}
                layout="fill"
                objectFit="cover"
                quality={100}
            />
            <PostTitle>
                <p> {title}</p>
            </PostTitle>
        </Card>
    )
}
