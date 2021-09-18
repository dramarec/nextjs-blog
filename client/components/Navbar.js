import styled from 'styled-components'

const Nav = styled.nav`
    background: #FEFEFE;
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
`


export const Navbar = () => {
    return (
        <Nav>
            <div className="container">
                <NabarItem>
                    <Logo>NEXT | BLOG</Logo>
                </NabarItem>
            </div>
        </Nav>
    )
}
