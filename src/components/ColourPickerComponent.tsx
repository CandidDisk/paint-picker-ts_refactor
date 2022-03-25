import React, {useEffect, useState} from 'react';
import Carousel from 'react-material-ui-carousel'
import styled from "@emotion/styled";
import {ColourType} from "../models/ColourType";

import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";


import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';

interface ColourPickerComponentProps {
    color: string;
    setColor: (backgroundColor: string) => void
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

const ColourPickerComponent: React.FC<ColourPickerComponentProps> = ({color, setColor}) => {

    type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

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
            name: "WHITE",
            colour: "#ffffff",
            category: ColourType.GREY
        },
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
    ]

    function onWheel(apiObj: scrollVisibilityApiType, ev: React.WheelEvent): void {
        const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

        if (isThouchpad) {
            ev.stopPropagation();
            return;
        }

        if (ev.deltaY < 0) {
            apiObj.scrollNext();
        } else if (ev.deltaY > 0) {
            apiObj.scrollPrev();
        }
    }

    const [thisBackgroundColor, setThisBackgroundColor] = useState<string>('');

    useEffect(() => {
        setThisBackgroundColor(color)
    },[color])

    return (
        <Container>
            <ScrollMenu onWheel={onWheel}>
                    {
                        dummyData.map((item, i) =>
                            <Grid
                                container
                                direction="column"
                                justifyContent="center"
                                alignItems="center"
                                sx={{marginTop: 2}}
                            >
                                <Grid item xs onClick={() => console.log('wassap')} sx={{color: '#cacfcc'}}>
                                    {item.name}
                                </Grid>
                                <Grid item xs onClick={() => setColor(item.colour)}>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                            '& > :not(style)': {
                                                m: 1,
                                                width: 120,
                                                height: 120,
                                                marginTop: 2,
                                                marginLeft: 5,
                                                marginRight: 5,
                                            },
                                        }}
                                    >

                                        <Paper style={{backgroundColor: item.colour}}/>

                                    </Box>
                                </Grid>
                            </Grid>

                        )
                    }
            </ScrollMenu>
        </Container>
    );
}

export default ColourPickerComponent;