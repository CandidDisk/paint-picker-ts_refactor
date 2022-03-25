import React, {useState} from 'react';
import styled from "@emotion/styled";

import './hideScrollbar.css';

import './App.css';
import MainImgComponent from "./components/MainImgComponent";
import ColourDrawerComponent from "./components/ColourDrawerComponent";
import ColourPickerComponent from "./components/ColourPickerComponent";
import {ColourType} from "./models/ColourType";
import {ColourInterface} from "./models/ColourInterface";

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

    const dummyData  = [
        {
            name: "ZIMA",
            colour: "#22b7f2",
            category: ColourType.BLUE
        },
        {
            name: "BABY",
            colour: "#89CFF0",
            category: ColourType.BLUE
        },
        {
            name: "BLUEBERRY",
            colour: "#4f86f7",
            category: ColourType.BLUE
        },
        {
            name: "ROYAL",
            colour: "#002366",
            category: ColourType.BLUE
        },
        {
            name: "DENIM",
            colour: "#1560bd",
            category: ColourType.BLUE
        },
        {
            name: "LAPIS LAZULI",
            colour: "#26619c",
            category: ColourType.BLUE
        },
        {
            name: "SKY",
            colour: "#87ceeb",
            category: ColourType.BLUE
        }
    ]

    const dummyDataRed  = [
        {
            name: "CHERRY",
            colour: "#990F02",
            category: ColourType.RED
        },
        {
            name: "ROSE",
            colour: "#E3242B",
            category: ColourType.RED
        },
        {
            name: "JAM",
            colour: "#60100B",
            category: ColourType.RED
        },
        {
            name: "MERLOT",
            colour: "#541E1B",
            category: ColourType.RED
        },
        {
            name: "CRIMSON",
            colour: "#B90E0A",
            category: ColourType.RED
        },
        {
            name: "APPLE",
            colour: "#A91B0D",
            category: ColourType.RED
        },
        {
            name: "SANGRIA",
            colour: "#5E1916",
            category: ColourType.RED
        }
    ]

    const [displayedDummyData, setDisplayedDummyData] = useState<ColourInterface[]>(dummyData);

    const setDummyData = (color: ColourType) => {
        if (color == ColourType.BLUE) {
            setDisplayedDummyData(dummyData);
        } else if (color == ColourType.RED) {
            setDisplayedDummyData(dummyDataRed);
        }
    }

    return (
        <Container>
            <ColourDrawerComponent setDummyData={(color) => setDummyData(color)}/>
            <Column>
                <MainImgComponent backgroundColor={backgroundColor}/>
            </Column>
            <Column>
                <ColourPickerComponent dummyData={displayedDummyData} color={backgroundColor} setColor={(backgroundColor) => setColor(backgroundColor)}/>
            </Column>
        </Container>
    );
}

export default App;