import React from 'react';
import styled from 'styled-components/macro';
import SvgHeader from '../../elements/Svg';

const Svg = styled(SvgHeader)`
    width: 24px;
    height: 24px;
`;

export const IconFacebook = ({ className }) => (
    <Svg viewBox='0 0 72 72' className={className}>
        <title>Facebook</title>
        <desc>Created with Sketch.</desc>
        <defs></defs>
        <g
            id='Page-1'
            stroke='none'
            strokeWidth='1'
            fill='none'
            fillRule='evenodd'
        >
            <g
                id='Social-Icons---Rounded-Black'
                transform='translate(-152.000000, -43.000000)'
            >
                <g id='Facebook' transform='translate(152.000000, 43.000000)'>
                    <rect
                        id='Rounded'
                        fill='#837D88'
                        x='0'
                        y='0'
                        width='72'
                        height='72'
                        rx='8'
                    ></rect>
                    <path
                        d='M60.4641463,13.4173171 L60.4641463,22.7278049 L54.9382927,22.7421951 C50.6068293,22.7421951 49.7721951,24.8 49.7721951,27.807561 L49.7721951,34.4702439 L60.09,34.4702439 L58.7517073,44.8887805 L49.7721951,44.8887805 L49.7721951,72 L39.0097317,72 L39.0097317,44.8887805 L30,44.8887805 L30,34.4702439 L39.0097317,34.4702439 L39.0097317,26.7858537 C39.0097317,17.8639024 44.4478049,13 52.42,13 C56.2204634,13 59.5,13.2878049 60.4641463,13.4173171 Z'
                        fill='#FFFFFF'
                    ></path>
                </g>
            </g>
        </g>
    </Svg>
);
