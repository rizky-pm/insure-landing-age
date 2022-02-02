import styled from 'styled-components';

export const H1 = styled.h1`
    line-height: 1.1;
    font-size: 46px;
    color: ${(props) => props.theme.colors.neutralVeryLightGray};
`;

export const BorderedTopH1 = styled(H1)`
    position: relative;
    padding-top: 50px;
    color: ${(props) => props.theme.colors.neutralVeryDarkViolet};

    ::before {
        content: '';
        width: 150px;
        height: 1px;
        background-color: ${(props) =>
            props.theme.colors.neutralDarkGrayishViolet};
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
    }
`;

export const H2 = styled.h2`
    color: ${(props) => props.theme.colors.neutralVeryLightGray};
    font-size: 36px;
    line-height: 1.1;
`;

export const H3 = styled.h3`
    color: ${(props) => props.theme.colors.neutralVeryDarkViolet};
    margin-top: ${(props) => props.marginTop};
    font-size: 28px;
`;
