import Image from 'next/image'
import styled from 'styled-components';
import { useRouter } from 'next/router'
import { Navbar } from '../../components';
import { COLORS } from '../../public/colors';
import Link from 'next/link'

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

export default function Post() {
    const router = useRouter()
    console.log("🔥🚀 ===> Post ===> router", router);
    const { id } = router.query

    return (
        <Wrapper>
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

                <h1>Post : {id}</h1>
            </div>
        </Wrapper>
    )
}
