import styled from 'styled-components';



const Linha = styled.div`
  width: 100%;               
  height: 2px;         
  background-color: ${({ theme }) => theme.text};
`;

function Div() {
    return (
        <Linha />
    );
}

export default Div;
