import {Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography} from "@mui/material";
import PropTypes from 'prop-types';
import React, {FC} from "react";


interface DialogProps {
    title: any;
    content: any;
    cancelTitle: string;
    submitTitle: string;
    onClose?: () => void;
    open?: boolean;
}

export const DialogBox: FC<DialogProps> = (props) => {
    const {title,content,cancelTitle,submitTitle,onClose,open} = props;
    return (
        <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title" sx={{maxWidth: '484px'}}>
                {title}
            </DialogTitle>
            <DialogContent>
                {content}
            </DialogContent>
            <DialogActions>
                <Button sx={{background: '#ECEEFF', color: '#5768FF'}} onClick={onClose}>{cancelTitle}</Button>
                <Button sx={{background: '#5048E5', color: 'white'}} onClick={onClose} autoFocus>{submitTitle}</Button>
            </DialogActions>
        </Dialog>
    );
};


DialogBox.propTypes = {
    title: PropTypes.any,
    content: PropTypes.any,
    cancelTitle: PropTypes.string,
    submitTitle: PropTypes.string,
    onClose: PropTypes.func,
    open: PropTypes.bool,
};