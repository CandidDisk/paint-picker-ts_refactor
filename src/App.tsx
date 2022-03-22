import React from 'react';
import logo from './logo.svg';
import styled from "@emotion/styled";
import {css} from "@emotion/react";


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
    return (
        <Container>
            <ColourDrawerComponent/>
            <Column>
                <MainImgComponent backgroundColor={'#FFFFFF'}/>
            </Column>
            <Column>
                <ColourPickerComponent/>
            </Column>
        </Container>
    );
}

export default App;
