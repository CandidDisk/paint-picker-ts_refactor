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
        },
        {
            name: "TEAL",
            colour: "#008080",
            category: ColourType.BLUE
        },
        {
            name: "AQUA",
            colour: "#00FFFF",
            category: ColourType.BLUE
        },
        {
            name: "STEEL",
            colour: "#4682B4",
            category: ColourType.BLUE
        },
        {
            name: "CORN FLOWER",
            colour: "#6495ED",
            category: ColourType.BLUE
        },
        {
            name: "MIDNIGHT",
            colour: "#191970",
            category: ColourType.BLUE
        },
        {
            name: "CADET",
            colour: "#5F9EA0",
            category: ColourType.BLUE
        },
        {
            name: "DODGER",
            colour: "#1E90FF",
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
        },
        {
            name: "SALMON",
            colour: "#FA8072",
            category: ColourType.RED
        },
        {
            name: "DARK SALMON",
            colour: "#E9967A",
            category: ColourType.RED
        },
        {
            name: "LIGHT CORAL",
            colour: "#F08080",
            category: ColourType.RED
        },
        {
            name: "TOMATO",
            colour: "#FF6347",
            category: ColourType.RED
        },
        {
            name: "RED",
            colour: "#FF0000",
            category: ColourType.RED
        },
        {
            name: "LIGHT SALMON",
            colour: "#FFA07A",
            category: ColourType.RED
        },
        {
            name: "FIRE BRICK",
            colour: "#B22222",
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