import styled from 'styled-components';

export const GhostButton = styled.button`
    padding: 15px 25px;
    text-transform: uppercase;
    background-color: transparent;
    border: 2px solid ${(props) => props.theme.colors.neutralVeryLightGray};
    font-family: 'Karla', sans-serif;
    color: ${(props) => props.theme.colors.neutralVeryLightGray};
    letter-spacing: 2px;

    margin-top: ${(props) => props.marginTop};
`;
