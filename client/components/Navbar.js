import Link from 'next/link'
import styled from 'styled-components'
import { COLORS } from "../public/colors";

const Nav = styled.nav`
    background: ${COLORS.background};
    padding: 17px 0;
`

const NabarItem = styled.div`
    position: relative;
`

const Logo = styled.a`
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: ${COLORS.color};
    cursor: pointer;
`

const AddPostBtn = styled.button`
    position: absolute;
    width: 139px;
    height: 25px;

    color: ${COLORS.white};
    background: ${COLORS.background2};

    box-shadow: 0px 10px 25px rgba(148, 174, 213, 0.15);
    border-radius: 10px;
    border: 1px solid ${COLORS.background2};

    left: 43%;
    top: 25px;
    cursor: pointer;
    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
    :hover {
        box-shadow: 0px 10px 25px rgba(148, 174, 213, 0.5);
    }
`


export const Navbar = () => {
    return (
        <Nav>
            <div className="container">
                <NabarItem>
                    <Link href='/'>
                        <Logo>NEXT | BLOG</Logo>
                    </Link>
                    <Link href='/add-post'>
                        <AddPostBtn>Добавить статью</AddPostBtn>
                    </Link>

                </NabarItem>
            </div>
        </Nav>
    )
}
