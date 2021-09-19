import Image from 'next/image'
import styled from 'styled-components';
import { Navbar } from '../components';
import { COLORS } from '../public/colors';

const PostWrapper = styled.div`
    background:${COLORS.background3};
    min-height: 100vh;
    width: 100%;
`;

const BtnBack = styled.button`
    width: 117px;
    height: 45px;
    /* left: calc(50% - 117px/2 - 496.5px); */
    /* top: 85px; */

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
    transition: /* opacity transform */ 250ms cubic-bezier(0.4, 0, 0.2, 1);
    /* transform: scaleX(0); */
    /* transition-duration: 2500ms; */
    /* transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); */
    :hover {
    box-shadow: 0px 10px 25px rgba(148, 174, 213, 0.5);
    /* transition: 3s all ease; */
    }
`

const FormWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 120px;
`

const Form = styled.form`
    width: 500px;
    height: 447px;
    padding: 30px;

    background: #FFFFFF;
    border-radius: 15px;
`

const InputField = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
`
const Input = styled.input`
    width: 100%;
    display: flex;
    height: 33px;

    border: 1px solid #E5E5E5;
    border-radius: 5px;
`

const TextLabel = styled.div`
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
    margin-bottom: 5px;
    color: #222222;
`

const TeaxtArea = styled.textarea`
    width: 440px;
    height: 150px;
    left: 500px;
    top: 379px;

    border: 1px solid #E5E5E5;
    box-sizing: border-box;
    border-radius: 5px;
`
const FormBtn = styled.button`
    width: 139px;
    height: 33px;
    background: #67BFFF;
    color: ${COLORS.white};
    box-shadow: 0px 10px 25px rgba(148, 174, 213, 0.15);
    border-radius: 10px;
    border: inherit;
    margin-top: 15px;
    margin-left: auto;
    margin-right: auto;
    cursor: pointer;
    outline: none;
    transition:  250ms cubic-bezier(0.4, 0, 0.2, 1);
    :hover {
        box-shadow: 0px 10px 25px rgba(148, 174, 213, 0.5);
    }
`


export default function AddPost() {
    return (
        <PostWrapper>
            <Navbar />
            <div className="container">
                <BtnBack>
                    <Image
                        src='/static/back.svg'
                        width={24}
                        height={15}
                    />
                    Назад
                </BtnBack>

                <FormWrapper>
                    <Form>
                        <InputField>
                            <TextLabel>Название статьи:</TextLabel>
                            <Input />
                        </InputField>

                        <InputField>
                            <TextLabel>Текст статьи:</TextLabel>
                            <TeaxtArea></TeaxtArea>
                        </InputField>

                        <InputField>
                            <TextLabel>URL картинки:</TextLabel>
                            <Input />
                        </InputField>
                        <InputField>
                            <FormBtn>Добавить</FormBtn>
                        </InputField>
                    </Form>
                </FormWrapper>
            </div>
        </PostWrapper>
    )
}
