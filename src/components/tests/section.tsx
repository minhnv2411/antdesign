import {Box} from "@mui/material";
import PropTypes from 'prop-types';

import React from "react";

export const Section = (props) => {
    const { sx, ...other } = props;
    return (
        <Box
            sx={{
                background:'#FFFFFF',
                p: 2,
                m: 1,
                borderRadius: 1,
                boxShadow: '0px 2px 7px rgba(171, 187, 204, 0.22)',
                ...sx,
            }}
            {...other}
        />
    );
}
