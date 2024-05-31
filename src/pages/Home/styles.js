import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    gap: 20px;
  
`;
export const Content = styled.div`
    gap:15px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    box-shadow: 0 1px 2px #0003;
    background-color: #fff;
    max-width: 350px;
    padding: 20px;
    border-radius: 5px;
`;	

export const Title = styled.h2``;

export const Div = styled.div`
    margin-top: 10px;
    padding: 15px;
    background-color: #0003;
    border-radius: 5px;
    border: 1px solid ;
    text-align: center;
    flex-direction: column;

    button{
        width: 100%;
    }
`;
