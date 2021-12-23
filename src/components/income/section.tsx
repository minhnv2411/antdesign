import {Box} from "@mui/material";

import React from "react";

export const Section = (props) => {
    const { sx, ...other } = props;
    return (
        <Box
            sx={{
                background:'#FFFFFF',
                p: 2,
                my: 2,
                borderRadius: 1,
                boxShadow: '0px 2px 7px rgba(171, 187, 204, 0.22)',
                ...sx,
            }}
            {...other}
        />
    );
}
