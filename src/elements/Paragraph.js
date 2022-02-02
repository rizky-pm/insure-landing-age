import styled from 'styled-components';

export const Paragraph = styled.p`
    line-height: 1.5;
    margin-top: ${(props) => props.marginTop};
    color: ${(props) =>
        props.darkColor
            ? `${props.theme.colors.neutralDarkGrayishViolet}`
            : `${props.theme.colors.neutralVeryLightGray}`};
`;
