import {
    Box, Grid, Typography, TextField, Stack, Link
} from '@mui/material';
import NextLink from 'next/link';
import {DatePicker, LocalizationProvider} from '@mui/lab';
import viLocale from 'date-fns/locale/vi';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import {Section} from "../../components/income/section";
import {Chat as ChatIcon} from '../../icons/chat';
import type {NextPage} from 'next';
import Head from 'next/head';
import {FC, useEffect, useState} from 'react';
import {DashboardLayout} from '../../layouts/dashboard-layout';
import {gtm} from '../../libs/gtm';
import * as React from "react";

const Income: FC = (props) => {
    return (
        <Box sx={{px: 6, my: 3, fontWeight: 500, mb: 20}}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={5}>
                    <Box>
                        <Section sx={{p: 4,mt:0}}>
                            <Grid container spacing={2}>
                                <Grid item xs={8} md={8} sx={{color: '#1F2738'}}>
                                    <Typography sx={{fontSize: '14px'}}>
                                       Sĩ số
                                    </Typography>
                                    <Typography sx={{fontSize: '14px',my:1}}>
                                      Số buổi đã học
                                    </Typography>
                                    <Typography sx={{fontSize: '14px'}}>
                                      Doanh thu trung bình/ học sinh
                                    </Typography>
                                </Grid>
                                <Grid item xs={4} md={4} sx={{color: '#1F2738',textAlign:'right'}}>
                                    <Typography sx={{fontSize: '14px'}}>
                                        10 học sinh
                                    </Typography>
                                    <Typography sx={{fontSize: '14px',my:1}}>
                                        2/10
                                    </Typography>
                                    <Typography sx={{fontSize: '14px'}}>
                                        79.000đ
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Section>
                        <Section sx={{p: 4}}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={8}>
                                    <Typography variant="subtitle1">
                                        Doanh thu
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={4} sx={{textAlign:'right'}}>
                                    <Typography variant="subtitle1" color="primary.main">
                                        790.000 đ
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Section>
                        <Section sx={{p: 4}}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sx={{color: '#1F2738'}}>
                                    <Typography variant="subtitle1">
                                        Chi tiết
                                    </Typography>
                                </Grid>
                                <Grid item xs={8} md={8} sx={{color: '#1F2738'}}>
                                    <Typography sx={{fontSize: '14px'}}>
                                        Tiền khuyến mãi
                                    </Typography>
                                    <Typography sx={{fontSize: '14px'}}>
                                        Phí giao dịnh trả cho phần mềm
                                    </Typography>
                                    <Typography sx={{fontSize: '14px'}}>
                                       Tiền hoàn phí
                                    </Typography>
                                    <Typography sx={{fontSize: '14px'}}>
                                        Tiền thưởng
                                    </Typography>
                                    <Typography sx={{fontSize: '14px'}}>
                                        Tiền phạt
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        Doanh thu
                                    </Typography>
                                </Grid>
                                <Grid item xs={4} md={4} sx={{color: '#1F2738',fontSize: '14px',textAlign:'right'}}>
                                    <Typography sx={{fontSize: '14px'}}>
                                        -?0.000 đ
                                    </Typography>
                                    <Typography sx={{fontSize: '14px'}}>
                                        0 đ
                                    </Typography>
                                    <Typography sx={{fontSize: '14px'}}>
                                        0 đ
                                    </Typography>
                                    <Typography sx={{fontSize: '14px'}}>
                                        0 đ
                                    </Typography>
                                    <Typography sx={{fontSize: '14px'}}>
                                        0 đ
                                    </Typography>
                                    <Typography variant="subtitle1">
                                       790.000 đ
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Section>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box>
                        <Box>
                            <Typography variant="subtitle1">Doanh thu/học sinh</Typography>
                        </Box>
                        <Section sx={{px: 4,py:2,mt:0}}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={1} sx={{color: '#1F2738',textAlign:'center'}}>
                                    <Typography variant="subtitle1"  sx={{mt:3}}>
                                       1.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={2} sx={{color: '#1F2738',textAlign:'center'}}>
                                    <Typography  sx={{mt:3}}>
                                        <img src="../../images/maskGroup.webp" alt=""/>
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={7}>
                                    <Typography variant="subtitle1">
                                       Anh
                                    </Typography>
                                    <Typography sx={{fontSize: '14px',color: '#7B8090'}}>
                                        Học tất cả các buổi của lớp
                                    </Typography>
                                    <Typography variant="subtitle1" color="primary.main">
                                        79.000 đ
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={2} sx={{color: '#1F2738',textAlign:'center'}}>
                                    <Typography variant="subtitle1"  sx={{mt:3}}>
                                        <ChatIcon/>
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Section>
                        <Section sx={{px: 4,py:2,mt:0}}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={1} sx={{color: '#1F2738',textAlign:'center'}}>
                                    <Typography variant="subtitle1" sx={{mt:3}}>
                                       2.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={2} sx={{color: '#1F2738',textAlign:'center'}}>
                                    <Typography sx={{mt:3}}>
                                        <img src="../../images/maskGroup.webp" alt=""/>
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={7}>
                                    <Typography variant="subtitle1">
                                       Anh
                                    </Typography>
                                    <Typography sx={{fontSize: '14px',color: '#7B8090'}}>
                                        Học tất cả các buổi của lớp
                                    </Typography>
                                    <Typography variant="subtitle1" color="primary.main">
                                        79.000 đ
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={2} sx={{color: '#1F2738',textAlign:'center'}}>
                                    <Typography variant="subtitle1"  sx={{mt:3}}>
                                        <ChatIcon/>
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Section>
                        <Section sx={{px: 4,py:2,mt:0}}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={1} sx={{color: '#1F2738',textAlign:'center'}}>
                                    <Typography variant="subtitle1" sx={{mt:3}}>
                                       3.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={2} sx={{color: '#1F2738',textAlign:'center'}}>
                                    <Typography sx={{mt:3}}>
                                        <img src="../../images/maskGroup.webp" alt=""/>
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={7}>
                                    <Typography variant="subtitle1">
                                       Anh
                                    </Typography>
                                    <Typography sx={{fontSize: '14px',color: '#7B8090'}}>
                                        Học tất cả các buổi của lớp
                                    </Typography>
                                    <Typography variant="subtitle1" color="primary.main">
                                        79.000 đ
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={2} sx={{color: '#1F2738',textAlign:'center'}}>
                                    <Typography variant="subtitle1"  sx={{mt:3}}>
                                        <ChatIcon/>
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Section>
                    </Box>
                </Grid>
            </Grid>
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
