import React, {useState} from 'react';
import logo from './logo.svg';
import styled from "@emotion/styled";
import {css} from "@emotion/react";

import './hideScrollbar.css';

import './App.css';
import MainImgComponent from "./components/MainImgComponent";
import ColourDrawerComponent from "./components/ColourDrawerComponent";
import ColourPickerComponent from "./components/ColourPickerComponent";

const Container = styled('div')`
`;

const Column = styled('div')`
    text-align: center;
`;

function App() {

    const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');

    const setColor = (color: string) => {
        setBackgroundColor(color);
    }

    return (
        <Container>
            <ColourDrawerComponent/>
            <Column>
                <MainImgComponent backgroundColor={backgroundColor}/>
            </Column>
            <Column>
                <ColourPickerComponent color={backgroundColor} setColor={(backgroundColor) => setColor(backgroundColor)}/>
            </Column>
        </Container>
    );
}

export default App;