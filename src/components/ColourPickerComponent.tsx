import React, {useEffect, useState} from 'react';
import styled from "@emotion/styled";
import {ColourType} from "../models/ColourType";

import {ScrollMenu, VisibilityContext} from "react-horizontal-scrolling-menu";
import "swiper/css";
import "swiper/css/pagination";


import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import {ColourInterface} from "../models/ColourInterface";

interface ColourPickerComponentProps {
    color: string;
    setColor: (backgroundColor: string) => void
    dummyData: ColourInterface[];
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

const ColourPickerComponent: React.FC<ColourPickerComponentProps> = ({dummyData, setColor}) => {

    type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

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
                                <Grid item xs sx={{color: '#cacfcc'}}>
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