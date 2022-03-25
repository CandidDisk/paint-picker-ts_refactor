import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Grid from '@mui/material/Grid';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import styled from "@emotion/styled";
import TextField from '@mui/material/TextField';

import './components.css';
import Paper from "@mui/material/Paper";
import {ColourType} from "../models/ColourType";

type Anchor = 'top' | 'left' | 'bottom' | 'right';

const Container = styled('div')`
    margin-top: 0px;
    margin-left: 25px;
`;

interface ColourDrawerComponentProps {
    setDummyData: (color: ColourType) => void
}


const ColourDrawerComponent: React.FC<ColourDrawerComponentProps> = ({setDummyData}) => {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const [burgerVisible, setBurgerVisible] = React.useState(true);

    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setState({ ...state, [anchor]: open });
                setBurgerVisible(!burgerVisible);
            };

    const list = (anchor: Anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 350}}
            role="presentation"
        >
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '40ch'},
                }}
                noValidate
                autoComplete="off"
            >
            </Box>
            <TextField sx={{width: '250px', marginLeft: '50px', marginTop: '30px', marginBottom: '30px'}} id="outlined-basic" size="small" label="Search colors" variant="outlined" />
            <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 2, md: 0 }}>
                <Grid item xs={6} onClick={() => setDummyData(ColourType.RED)}>
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
                                backgroundColor: '#FF0000',
                            },
                        }}
                    >

                        <Paper />

                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            '& > :not(style)': {
                                m: 1,
                                width: 120,
                                height: 120,
                                marginTop: 2,
                                backgroundColor: '#FFA500',
                            },
                        }}
                    >

                        <Paper/>

                    </Box>
                </Grid>
                <Grid item xs={6}>
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
                                backgroundColor: '#FFFF00',
                            },
                        }}
                    >

                        <Paper/>

                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            '& > :not(style)': {
                                m: 1,
                                width: 120,
                                height: 120,
                                marginTop: 2,
                                backgroundColor: '#00FF00',
                            },
                        }}
                    >

                        <Paper/>

                    </Box>
                </Grid>
                <Grid item xs={6} onClick={() => setDummyData(ColourType.BLUE)}>
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
                                backgroundColor: '#0000FF',
                            },
                        }}
                    >

                        <Paper />

                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            '& > :not(style)': {
                                m: 1,
                                width: 120,
                                height: 120,
                                marginTop: 2,
                                backgroundColor: '#000000',
                            },
                        }}
                    >

                        <Paper/>

                    </Box>
                </Grid>
                <Grid item xs={6}>
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
                                backgroundColor: '#FFA500',
                            },
                        }}
                    >

                        <Paper/>

                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            '& > :not(style)': {
                                m: 1,
                                width: 120,
                                height: 120,
                                marginTop: 2,
                                backgroundColor: '#FFA500',
                            },
                        }}
                    >

                        <Paper/>

                    </Box>
                </Grid>
            </Grid>
        </Box>
    );

    return (
        <Container>
            <React.Fragment>
                <IconButton style={{color: '#7a7d7b', transition: 'width 0.1s 0.1s, height 0.3s 0.3s, opacity 0.8s ease-in-out'}}
                            className={burgerVisible?'fadeIn':'fadeOut'}
                            onClick={toggleDrawer('left', true)}
                            disableRipple={true}
                            component="span">
                    <MenuIcon fontSize={'large'}/>
                </IconButton>
                <Drawer
                    anchor={'left'}
                    open={state['left']}
                    onClose={toggleDrawer('left', false)}
                >
                    {list('left')}
                </Drawer>
            </React.Fragment>
        </Container>
    );
}

export default ColourDrawerComponent;