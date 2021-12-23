import {Box, useScrollTrigger, Zoom} from "@mui/material";
import propTypes from 'prop-types';

import React, {FC} from "react";

export const ScrollTop = (props) => {
    const {children, window} = props;

    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector(
            '#back-to-top-anchor',
        );

        if (anchor) {
            anchor.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
        }
    };

    return (
        <Zoom in={trigger}>
            <Box
                onClick={handleClick}
                role="presentation"
                sx={{ position: 'fixed', bottom: 30, right: 60 }}
            >
                {children}
            </Box>
        </Zoom>
    );
};

ScrollTop.propTypes = {
    children: propTypes.element.isRequired,
    window: propTypes.func,
};