import React, { useState } from 'react';
import styled from "@emotion/styled";
import {css} from "@emotion/react";

interface MainImgComponentProps {
    backgroundColor: string;
}

const Container = styled('div')`
    margin-top: 0px;
`;

const MainImgComponent: React.FC<MainImgComponentProps> = (props) => {
    return (
        <Container>
            <img style={{height: '40%', width: '45%', backgroundColor: props.backgroundColor}}
                 src={"https://design.plyboo.com/wp-content/uploads/2017/04/room-2-1.png"}/>
        </Container>
    );
}

export default MainImgComponent;