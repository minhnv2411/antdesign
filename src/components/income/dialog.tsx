import React, {FC, useState} from "react";
import PropTypes from 'prop-types';
import {Accordion,Dialog, AccordionDetails, AccordionSummary, Box, Button, DialogActions, DialogContent, FormControl, Grid, InputLabel, MenuItem, Radio, Select, TextField, Typography} from "@mui/material";
import {Cancel as CancelIcon} from "../../icons/cancel";
import {Section} from "./section";

interface DialogProps {
    onClose?: () => void;
    open?: boolean;
}


export const DialogBox: FC<DialogProps> = (props) => {
    const {onClose, open} = props;
    //Bank const
    const [bank, setBank] = useState('');
    //MethodPayment const
    const [method, setMethod] = useState('default');
    //Radio handle
    const handleChangeMethod = (event) => {
        setMethod(event.target.value);
    };
    const handleChangeToDefault = () => {
        setMethod("default");
    };
    //Bank handle
    const handleChangeBank = (event) => {
        setBank(event.target.value);
    };

    return (<Dialog
            open={open}
            onClose={onClose}
            aria-labelledby="responsive-dialog-title"
        >
            <Box sx={{width: '100%', minWidth: '563px', pt: 4, pb: 2, px: 5, textAlign: 'center'}}>
                <Grid container spacing={2}>
                    <Grid item sm={12} xs={12} md={1}>
                    </Grid>
                    <Grid item sm={12} xs={12} md={10}>
                        <Typography sx={{fontWeight: '700', fontSize: '22px'}}>Yêu cầu rút tiền về tài khoản</Typography>
                    </Grid>
                    <Grid item sm={12} xs={12} md={1}>
                        <CancelIcon sx={{my: 1, cursor: 'pointer'}} onClick={onClose}/>
                    </Grid>
                </Grid>
            </Box>
            <DialogContent sx={{px: 5}}>
                <Box component="form" noValidate autoComplete="off">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography>Ant Learning sẽ xử lý yêu cầu trong vòng 3-7 ngày làm việc</Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography sx={{color:'#7B8090',display:'flex'}}>Số dư hiện tại (<Typography sx={{fontSize:'14px'}}>Số dư có thể rút</Typography>)</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography color="primary.main" variant="h5" sx={{textAlign:'right'}}>500.000 đ</Typography>
                        </Grid>
                        {/*Withdrawal*/}
                        <Grid item xs={12}>
                            <Grid container spacing={1}>
                                <Grid item xs={12}>
                                    <Typography variant="subtitle1">Số tiền muốn rút *</Typography>
                                    <TextField
                                        id="outlined-number"
                                        type="number"
                                        size="small"
                                        sx={{width: '100%', borderRadius: 'none'}}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    {/*Message*/}
                                    {/*<Typography>Message</Typography>*/}
                                </Grid>
                            </Grid>
                        </Grid>
                        {/*Method Payment*/}
                        <Grid item xs={12}>
                            <Grid container spacing={1}>
                                <Grid item xs={12}>
                                    <Typography variant="subtitle1">Phương thức thanh toán</Typography>
                                </Grid>
                                {/*Default Method*/}
                                <Grid item xs={12}>
                                    <Section sx={{boxShadow: 'none', border: '1px solid #E1E6EB', p: 1, my: 0, cursor: 'pointer'}} onClick={handleChangeToDefault}>
                                        <Grid container spacing={1}>
                                            <Grid item xs={1}>
                                                <Radio
                                                    checked={method == "default"}
                                                    onChange={handleChangeMethod}
                                                    value="default"
                                                    name="radio-buttons"
                                                    inputProps={{'aria-label': 'default'}}
                                                    sx={{my: 1}}
                                                    size="small"
                                                />
                                            </Grid>
                                            <Grid item xs={11}>
                                                <Typography variant="subtitle1">VCB - NH TMCP Ngoai Thuong Viet Nam</Typography>
                                                <Typography sx={{fontSize: '14px', color: '#7B8090'}}>*7767 [Mặc định]</Typography>
                                            </Grid>
                                        </Grid>
                                    </Section>
                                </Grid>
                                {/*New Method*/}
                                <Grid item xs={12}>
                                    <Accordion sx={{
                                        background: '#FFFFFF',
                                        my: 1,
                                        borderRadius: 1,
                                        boxShadow: 0,
                                        border: '1px solid #E1E6EB'
                                    }}>
                                        <AccordionSummary
                                            // expandIcon={}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                            sx={{px: 1}}
                                        >
                                            <Grid container spacing={1}>
                                                <Grid item xs={1}>
                                                    <Radio
                                                        checked={method == "new"}
                                                        onChange={handleChangeMethod}
                                                        value="new"
                                                        name="radio-buttons"
                                                        inputProps={{'aria-label': 'new'}}
                                                        size="small"
                                                    />
                                                </Grid>
                                                <Grid item xs={11}>
                                                    <Typography variant="subtitle1" sx={{mt: '5px'}}>+ Thêm thẻ mới</Typography>
                                                </Grid>
                                            </Grid>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Grid container spacing={2}>
                                                <Grid item xs={12}>
                                                    <Typography variant="subtitle1">Tên tài khoản *</Typography>
                                                    <TextField placeholder="Ví dụ: Nguyễn văn A" size="small" sx={{width: '100%'}}/>
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <Typography variant="subtitle1">Số tài khoản *</Typography>
                                                    <TextField size="small" sx={{width: '100%'}}/>
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <Typography variant="subtitle1">Ngân hàng *</Typography>
                                                    <FormControl fullWidth>
                                                        <Select
                                                            labelId="demo-simple-select-label"
                                                            id="demo-simple-select"
                                                            value={bank}
                                                            onChange={handleChangeBank}
                                                        >
                                                            <MenuItem value={1}>Vietcombank</MenuItem>
                                                            <MenuItem value={2}>BIDV</MenuItem>
                                                            <MenuItem value={3}>BTech</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <Typography variant="subtitle1">Chi nhánh *</Typography>
                                                    <TextField size="small" sx={{width: '100%'}}/>
                                                </Grid>
                                            </Grid>
                                        </AccordionDetails>
                                    </Accordion>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography sx={{color: '#B4B2BC'}}>Phí rút tiền: 11.000 đ/lần</Typography>
                        </Grid>
                    </Grid>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button sx={{textAlign: 'center', width: '100%', background: '#5048E5', color: 'white'}} autoFocus onClick={onClose}>
                    Gửi yêu cầu
                </Button>
            </DialogActions>
        </Dialog>);
};


DialogBox.propTypes = {
    onClose: PropTypes.func,
    open: PropTypes.bool,
};