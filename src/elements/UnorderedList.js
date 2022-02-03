import styled from 'styled-components';

export const UL = styled.ul`
    list-style: none;
    display: ${(props) => props.smallDevicesDisplay};

    @media only screen and (${(props) => props.theme.breakpoints.lDevices}) {
        display: flex;
        text-transform: uppercase;
        column-gap: 30px;
    }

    &:not(:last-of-type) {
        margin-bottom: 45px;
    }
`;

export const LI = styled.li`
    color: ${(props) => props.theme.colors.primaryDarkViolet};

    &:first-of-type {
        margin-top: 40px;
    }

    &:not(:last-of-type) {
        margin-bottom: 20px;
    }

    @media only screen and (${(props) => props.theme.breakpoints.lDevices}) {
        padding: 10px 0;
        width: 140px;
        text-align: center;

        &:hover {
            font-weight: bold;

            &:last-of-type {
                color: white;
                background-color: black;

                color: ${(props) =>
                    props.viewPlans
                        ? props.theme.colors.neutralVeryLightGray
                        : props.theme.colors.primaryDarkViolet};
            }
        }

        &:first-of-type {
            margin-top: 0;
        }

        &:last-of-type {
            border: 1px solid
                ${(props) => props.theme.colors.neutralVeryDarkViolet};
        }

        &:not(:last-of-type) {
            margin-bottom: 0;
        }
    }
`;
