import Image from 'next/image'
import styled from 'styled-components';

import { COLORS } from "../public/colors";

export const PostCard = ({ image, title, description }) => {
    return (
        <Card>
            <Image
                alt="Card"
                src={image}
                objectFit="cover"
                quality={100}
                width={700}
                height={470}
            />
            <PostTitle>
                <p> Title: {title}</p>
                <p> Text: {description}</p>
            </PostTitle>

        </Card>
    )
}

const Card = styled.a`
    width: 350px;
    height: auto;
    border-radius: 15px;
    margin-top: 50px;
    position: relative;
    cursor: pointer;
    transition:  250ms cubic-bezier(0.4, 0, 0.2, 1);
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