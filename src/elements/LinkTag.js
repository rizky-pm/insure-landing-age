import styled from 'styled-components';

export const LinkTag = styled.a`
    text-decoration: none;
    color: inherit;

    &:hover {
        text-decoration: ${(props) => (props.navbar ? 'none' : 'underline')};
    }
`;
