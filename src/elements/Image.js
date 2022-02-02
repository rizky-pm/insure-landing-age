import styled from 'styled-components';

export const Image = styled.img``;

export const HeaderImage = styled(Image)`
    width: 100%;
    height: 100%;
`;

export const AbsoluteImage = styled(Image)`
    position: absolute;
    top: ${(props) => props.top};
    left: ${(props) => props.left};
    bottom: ${(props) => props.bottom};
    right: ${(props) => props.right};
    z-index: 0;
`;
