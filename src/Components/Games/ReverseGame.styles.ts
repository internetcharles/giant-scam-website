import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1.3fr 0.7fr ;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas:
    ". .";
  padding-top: 15px;
  padding-bottom: 15px;
  justify-content: center;
  align-content: center;
  background-color: gray;
`

export const Title = styled.div`
  font-size: 30px;
  text-align: center;
  justify-content: space-around;
  display: flex;
  flex-direction: column;
    div {
      font-size: 20px;
    }
`
export const ImageWrapper = styled.div`
  text-align: center;
  justify-content: center;
  display: flex;
`

export const Image = styled.img`
  max-width: 800px;

  
`