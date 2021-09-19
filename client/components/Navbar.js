import styled from 'styled-components'

const Nav = styled.nav`
    background: #FEFEFE;
    padding: 17px 0;
`

const NabarItem = styled.div`
    position: relative;
    padding: 0 15px;
`

const Logo = styled.a`
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #3260A1;
`

const AddPostBtn = styled.button`
    position: absolute;
    width: 139px;
    height: 25px;
    left: calc(50% - 139px/2 - 13.5px);
    top: 43px;

    color: #FFFFFF;
    background: #67BFFF;

    box-shadow: 0px 10px 25px rgba(148, 174, 213, 0.15);
    border-radius: 10px;
    border: 1px solid  #67BFFF;
    position: absolute;
    width: 139px;
    height: 25px;
    left: 50%;
    top: 25px;
`


export const Navbar = () => {
    return (
        <div className="container">
            <Nav>
                <NabarItem>
                    <Logo>NEXT | BLOG</Logo>
                    <AddPostBtn>Добавить статью</AddPostBtn>
                </NabarItem>
            </Nav>
        </div>
    )
}
