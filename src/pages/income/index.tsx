import {
    Box, Grid, Typography, TextField, Stack, Link
} from '@mui/material';
import NextLink from 'next/link';
import {DatePicker, LocalizationProvider} from '@mui/lab';
import viLocale from 'date-fns/locale/vi';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import {Section} from "../../components/income/section";
import {DialogBox} from "../../components/income/dialog";
import {Vector as VectorIcon} from '../../icons/vector';
import {Info as InfoIcon} from '../../icons/info';
import type {NextPage} from 'next';
import Head from 'next/head';
import {FC, useEffect, useState} from 'react';
import {DashboardLayout} from '../../layouts/dashboard-layout';
import {gtm} from '../../libs/gtm';
import * as React from "react";

const Income: FC = () => {
    //date const
    const [date, setDate] = useState<any>({
        firstDate: new Date(),
        lastDate: new Date(),
    });
    //Dialog const
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <Box sx={{px: 6, my: 3, fontWeight: 500, mb: 20}}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={5}>
                    <Box>
                        <Box>
                            <Box sx={{display: 'flex', cursor: 'pointer'}}>
                                <VectorIcon sx={{
                                    fontSize: '25px',
                                    mt: '4px'
                                }}/>
                                <Typography sx={{color: '#5768FF', fontSize: '14px'}}>
                                    Lọc mức doanh thu thấp - cao
                                </Typography>
                            </Box>
                        </Box>
                        <Section sx={{p: 1}}>
                            <LocalizationProvider dateAdapter={AdapterDateFns} locale={viLocale}>
                                <Stack direction="row" spacing={2}>
                                    <Box>
                                        <DatePicker
                                            views={["day"]}
                                            value={date.firstDate}
                                            onChange={(newValue) => {
                                                setDate({firstDate: newValue});
                                            }}
                                            renderInput={(params) => <TextField {...params} helperText={null}/>}
                                        />
                                    </Box>
                                    <Box sx={{textAlign: 'center', py: 1, fontSize: '15px'}}>
                                        <Typography variant="subtitle1">-</Typography>
                                    </Box>
                                    <Box>
                                        <DatePicker
                                            views={["day"]}
                                            value={date.lastDate}
                                            onChange={(newValue) => {
                                                setDate({lastDate: newValue});
                                            }}
                                            renderInput={(params) => <TextField {...params} helperText={null}/>}
                                        />
                                    </Box>
                                </Stack>
                            </LocalizationProvider>

                        </Section>
                        <Section sx={{p: 4, my: 4}}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={8}>
                                    <Typography sx={{display: 'flex', fontWeight: 'bold'}}>
                                        Tổng doanh thu
                                        <InfoIcon sx={{mt: '4px', ml: 1}}/>
                                    </Typography>
                                    <Typography sx={{color: '#1F2738', fontSize: '13px'}}>
                                        Số tiền thực nhận sau khi buổi học kết thúc
                                    </Typography>
                                    <Link sx={{fontSize: '14px'}} onClick={handleOpen}>Yêu cầu rút tiền về tài khoản</Link>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <Typography variant="h6" sx={{background: '#7987FF', p: 1, textAlign: 'center', color: 'white', borderRadius: 1}}>
                                        1.000.000 đ
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Section>
                        <Section>
                            <Box>
                                <Typography sx={{display: 'flex', fontWeight: 'bold'}}>
                                    Lịch sử giao dịch
                                    <InfoIcon sx={{mt: '4px', ml: 1}}/>
                                </Typography>
                            </Box>
                            <Section sx={{boxShadow: 'none', border: '1px solid #E1E6EB', p: 3}}>
                                <Grid container spacing={2}>
                                    <Grid item xs={8}>
                                        <Typography sx={{fontWeight: 'bold'}}>
                                            Ant Learning
                                        </Typography>
                                        <Typography sx={{my: 1}}>23:10:69 - 17/11/2021</Typography>
                                        <Typography>Lý do: Rút tiền về tài khoản</Typography>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Typography sx={{textAlign: 'right', fontWeight: 'bold', color: '#E41338'}}> - 500.000 đ</Typography>
                                    </Grid>
                                </Grid>
                            </Section>
                            <Section sx={{boxShadow: 'none', border: '1px solid #E1E6EB', p: 3}}>
                                <Grid container spacing={2}>
                                    <Grid item xs={8}>
                                        <Typography sx={{fontWeight: 'bold'}}>
                                            Ant Learning
                                        </Typography>
                                        <Typography sx={{my: 1}}>23:10:69 - 17/11/2021</Typography>
                                        <Typography>Lý do: Rút tiền về tài khoản</Typography>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Typography sx={{textAlign: 'right', fontWeight: 'bold', color: '#E41338'}}> - 500.000 đ</Typography>
                                    </Grid>
                                </Grid>
                            </Section>
                        </Section>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box>
                        <Box>
                            <Typography sx={{fontSize: '14px', color: '#1F2738'}}>Đang diễn ra</Typography>
                        </Box>
                        <Section sx={{p: 4}}>
                            <NextLink href="#" passHref>
                                <Link sx={{color: 'black'}}>
                                    <Typography sx={{fontSize: '16px', fontWeight: 'bold'}}>
                                        Địa Lý 9 (Tháng 8)
                                    </Typography>
                                </Link>
                            </NextLink>
                            <Typography sx={{my: 1, fontSize: '14px'}}>Sĩ số : 10</Typography>
                            <Typography sx={{display: 'flex', fontSize: '14px', fontWeight: 'bold'}}>
                                Doanh thu
                                <Typography color="primary.main" sx={{mx: 1, fontSize: '14px', fontWeight: 'bold'}}>
                                    1.000.000 đ
                                </Typography>
                            </Typography>
                        </Section>
                        <Section sx={{p: 4}}>
                            <NextLink href="#" passHref>
                                <Link sx={{color: 'black'}}>
                                    <Typography sx={{fontSize: '16px', fontWeight: 'bold'}}>
                                        Địa Lý 9 (Tháng 7)
                                    </Typography>
                                </Link>
                            </NextLink>
                            <Typography sx={{my: 1, fontSize: '14px'}}>Sĩ số : 10</Typography>
                            <Typography sx={{display: 'flex', fontSize: '14px', fontWeight: 'bold'}}>
                                Doanh thu
                                <Typography color="primary.main" sx={{mx: 1, fontSize: '14px', fontWeight: 'bold'}}>
                                    1.000.000 đ
                                </Typography>
                            </Typography>
                        </Section>
                        <Box>
                            <Typography sx={{fontSize: '14px', color: '#1F2738'}}>Đang diễn ra</Typography>
                        </Box>
                        <Section sx={{p: 4}}>
                            <NextLink href="#" passHref>
                                <Link sx={{color: 'black'}}>
                                    <Typography sx={{fontSize: '16px', fontWeight: 'bold'}}>
                                        Địa Lý 9 (Tháng 5)
                                    </Typography>
                                </Link>
                            </NextLink>
                            <Typography sx={{my: 1, fontSize: '14px'}}>Sĩ số : 10</Typography>
                            <Typography sx={{display: 'flex', fontSize: '14px', fontWeight: 'bold'}}>
                                Doanh thu
                                <Typography color="primary.main" sx={{mx: 1, fontSize: '14px', fontWeight: 'bold'}}>
                                    1.000.000 đ
                                </Typography>
                            </Typography>
                        </Section>
                    </Box>
                </Grid>
            </Grid>
            <DialogBox onClose={handleClose} open={open}/>
        </Box>
    );
};

const Account: NextPage = () => {
    useEffect(() => {
        gtm.push({event: 'page_view'});
    }, []);

    return (
        <>
            <Head>
                <title>Doanh thu</title>
            </Head>
            <main>
                <Income/>
            </main>
        </>
    );
};

Account.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Account;
