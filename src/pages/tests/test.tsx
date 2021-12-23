import {
    Box,
    Button, DialogContent,
    Grid,
    Typography,
    useMediaQuery,
} from '@mui/material';
import {Section} from '../../components/tests/section';
import {Question} from '../../components/tests/question';
import {DialogBox} from '../../components/tests/dialog';
import type {NextPage} from 'next';
import Head from 'next/head';
import React, {FC, useEffect, useState} from 'react';
import {DashboardLayout} from '../../layouts/dashboard-layout';
import {gtm} from '../../libs/gtm';
import {textAlign} from "@mui/system";

const Test: FC = (props) => {
    const isMdScreen = useMediaQuery("(min-width:1200px)");
    const Times = "00:45:00";
    const Answers = "2/50";
    const questionObj = {
        title: 'Câu 1: Đặc điểm chung của nhóm các nước đang phát triển là?',
        answers: [
            {title: 'A. GDP bình quân đầu người thấp, chỉ số HDI ở mức cao, nợ nước ngoài nhiều.', value: 'A'},
            {title: 'B. GDP bình quân đầu người thấp, chỉ số HDI ở mức cao, nợ nước ngoài nhiều.', value: 'B'},
            {title: 'C. GDP bình quân đầu người thấp, chỉ số HDI ở mức cao, nợ nước ngoài nhiều.', value: 'C'},
            {title: 'D. GDP bình quân đầu người thấp, chỉ số HDI ở mức cao, nợ nước ngoài nhiều.', value: 'D'},
        ]
    };
    const arrList = [...Array(5)].map((_) => {
        return questionObj;
    });
    const [dialog, setDialog] = useState<any>({
        isOpenExit: false,
        isOpenFinish: false,
    });
    const handleExit = (): void => {
        setDialog({
            isOpenExit: true
        });
    };
    const handleFinish = (): void => {
        setDialog({
            isOpenFinish: true
        });
    };
    const handleCloseExitDialog = (): void => {
        setDialog({
            isOpenExit: false
        });
    };
    const handleCloseFinishDialog = (): void => {
        setDialog({
            isOpenFinish: false
        });
    };

    return (
        <Box sx={{px: 6, my: 6, fontWeight: 500, mb: 20}}>
            <Box>
                <Section>
                    <Grid container={true} spacing={2}>
                        <Grid item xs={12} sm={8} md={8}>
                            <Box sx={{float: 'left'}}>
                                Thời gian: <Typography variant="subtitle2" sx={{display: 'inline'}} color="red">{Times}</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4} md={4}>
                            <Box sx={{float: 'right'}}>
                                Số câu đã làm: <Typography variant="subtitle2" sx={{display: 'inline'}}>{Answers}</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Section>
            </Box>
            <Box>
                <Question questions={arrList}/>
            </Box>
            <Box sx={{
                position: 'fixed', bottom: 0,
                zIndex: 1100,
                left: isMdScreen ? '280px' : 0,
                width: isMdScreen ? 'calc(100% - 280px)' : '100%',
                padding: '0 44px',
            }}>
                <Section sx={{borderRadius: '8px 8px 0px 0px', border: 'solid 1px #E5E5E5', mb: 0}}>
                    <Grid container={true} spacing={2}>
                        <Grid item xs={12} sm={8} md={8}>
                            <Typography sx={{float: 'left'}}>
                                <Button variant="contained" sx={{px: 5, float: 'right', background: '#ECEEFF', color: '#5768FF'}} onClick={handleExit}>Thoát</Button>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4} md={4}>
                            <Typography sx={{float: 'right'}}>
                                <Button variant="contained" sx={{px: 5, float: 'right'}} onClick={handleFinish}>Hoàn Thành</Button>
                            </Typography>
                        </Grid>
                    </Grid>
                </Section>
            </Box>
            <DialogBox
                title="Rời khỏi bài Đánh giá năng lực"
                content={<Box sx={{color: 'black', py: 2}}>
                    <Typography variant="subtitle1">
                        Kết quả sẽ không được lưu và lần làm bài này không được tính.
                    </Typography>
                </Box>}
                cancelTitle="Ở lại"
                submitTitle="Thoát ra"
                onClose={handleCloseExitDialog}
                open={dialog.isOpenExit}
            />

            <DialogBox
                title="Bạn có chắc chắn hoàn thành?"
                content={<Box sx={{color: 'black', py: 2}}>
                    <Typography variant="subtitle1">
                        Sau khi nộp, bạn còn 0 lần làm lại bài đánh giá.
                    </Typography>
                </Box>}
                cancelTitle="Huỷ"
                submitTitle="Đồng ý"
                onClose={handleCloseFinishDialog}
                open={dialog.isOpenFinish}
            />
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
                <title>Đánh giá năng lực</title>
            </Head>
            <main>
                <Test/>
            </main>
        </>
    );
};

Account.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Account;
