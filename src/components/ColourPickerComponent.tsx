import React from 'react';
import Carousel from 'react-material-ui-carousel'
import styled from "@emotion/styled";
import {ColourType} from "../models/ColourType";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';

interface ColourPickerComponentProps {
}

const Container = styled('div')`
`;

const Circle = styled('div')`
    min-width: 100px,
    min-height: 100px,
    borderRadius: 50%;
`;

const Item = styled(Paper)(({ theme }) => ({
    textAlign: 'center',
    width: '44',
    height: '44',
    borderRadius: '44/2'
}));

const ColourPickerComponent: React.FC<ColourPickerComponentProps> = (props) => {

    const dummyData  = [
        {
            name: "Zima",
            colour: "#22b7f2",
            category: ColourType.BLUE
        },
        {
            name: "Baby",
            colour: "#89CFF0",
            category: ColourType.BLUE
        },
        {
            name: "Blueberry",
            colour: "#4f86f7",
            category: ColourType.BLUE
        },
        {
            name: "Royal",
            colour: "#002366",
            category: ColourType.BLUE
        },
        {
            name: "Denim",
            colour: "#1560bd",
            category: ColourType.BLUE
        },
        {
            name: "Lapis Lazuli",
            colour: "#26619c",
            category: ColourType.BLUE
        },
        {
            name: "White",
            colour: "#ffffff",
            category: ColourType.GREY
        },
        {
            name: "Zima",
            colour: "#22b7f2",
            category: ColourType.BLUE
        },
        {
            name: "Baby",
            colour: "#89CFF0",
            category: ColourType.BLUE
        },
        {
            name: "Blueberry",
            colour: "#4f86f7",
            category: ColourType.BLUE
        },
        {
            name: "Royal",
            colour: "#002366",
            category: ColourType.BLUE
        },
        {
            name: "Denim",
            colour: "#1560bd",
            category: ColourType.BLUE
        },
        {
            name: "Lapis Lazuli",
            colour: "#26619c",
            category: ColourType.BLUE
        },
        {
            name: "White",
            colour: "#ffffff",
            category: ColourType.GREY
        }
    ]

    return (
        <Container>
            <Carousel sx={{width: '40%'}}>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    {
                        dummyData.map( (item, i) =>
                            <Grid item xs={2} sm={4} md={4} key={i}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        '& > :not(style)': {
                                            m: 1,
                                            width: 128,
                                            height: 128,
                                        },
                                    }}
                                >
                                    <Paper style={{backgroundColor: item.colour}}/>
                                </Box>
                            </Grid>
                        )
                    }
                </Grid>
            </Carousel>
        </Container>
    );
}

export default ColourPickerComponent;