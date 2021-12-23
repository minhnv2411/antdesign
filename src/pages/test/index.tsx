import {
    Box,
    Button,
    Container,
    Grid,
    Typography,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Fab,
} from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import type {NextPage} from 'next';
import Head from 'next/head';
import NextLink from 'next/link';
import {Question} from '../../components/test/question';
import {ScrollTop} from '../../components/test/scrolltop';
import React, {FC, useEffect, useState} from 'react';
import {MainLayout} from '../../layouts/main-layout';
import {gtm} from '../../libs/gtm';



const Hero = () => {
    return (
        <Box
            sx={{
                background: 'linear-gradient(180deg, #E63638 0%, #E67536 100%)',
            }}
            id="back-to-top-anchor"
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    maxHeight: 216,
                    background: 'url(/images/TestBanner.png)',
                    backgroundSize: 'cover',
                }}
            >
                <Container>
                    <Box sx={{py: 12}}>
                        <Grid container={true}>
                            <Grid xs={12} item={true}>
                                <Typography color="primary.contrastText" variant="h4">
                                    Đăng ký làm giáo viên
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
};

const Exam: FC = (props) => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const questionObj = {
        title: 'Câu 1: Đặc điểm chung của nhóm các nước đang phát triển là?',
        answers: [
            {title: 'A. GDP bình quân đầu người thấp, chỉ số HDI ở mức cao, nợ nước ngoài nhiều.', value: 'A'},
            {title: 'B. GDP bình quân đầu người thấp, chỉ số HDI ở mức cao, nợ nước ngoài nhiều.', value: 'B'},
            {title: 'C. GDP bình quân đầu người thấp, chỉ số HDI ở mức cao, nợ nước ngoài nhiều.', value: 'C'},
            {title: 'D. GDP bình quân đầu người thấp, chỉ số HDI ở mức cao, nợ nước ngoài nhiều.', value: 'D'},
        ]
    };

    const arrList = [...Array(45)].map((_) => {
        return questionObj;
    });

    return (
        <Box sx={{background: 'white', py: 12}}>
            <Box sx={{
                pb: 4, position: 'sticky', top: 0,
                zIndex: 1200,
                backgroundColor: 'white'
            }}>
                <Container>
                    <Grid container={true} spacing={2} sx={{pb: 4}}>
                        <Grid item xs={12} sm={8} md={8}>
                            <Typography variant="h4">
                                Bài đánh giá năng lực chuyên môn
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4} md={4}>
                            <Button variant="contained" onClick={handleClickOpen} sx={{px: 5, float: 'right'}}>Hoàn Thành</Button>
                        </Grid>
                    </Grid>
                    <Box component="div" sx={{display: 'flex'}}>
                        <Typography variant="subtitle1">
                            Thời gian: 00:45:00
                        </Typography>
                        <Typography sx={{mx: 1}} variant="subtitle1">
                            |
                        </Typography>
                        <Typography variant="subtitle1">
                            Số câu đã làm: 2/50
                        </Typography>
                    </Box>
                </Container>
            </Box>
            <Box sx={{my:2}}>
                <Container>
                    <Box boxShadow="0px 2px 7px rgba(171, 187, 204, 0.22)" borderRadius={1} sx={{py: 4, px: 4, background: '#FFFFFF'}}>
                        <Question questions={arrList}/>
                    </Box>
                </Container>
            </Box>
            <Box>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <Box sx={{width: '100%', minWidth: '395px', textAlign: 'center', color: 'black', py: 2, px: 3}}>
                        <Box>
                            <img src="/images/Check.webp" alt="Bắt đầu từ những bước đơn giản nhất"/>
                        </Box>
                        <Typography sx={{my: 2}} variant="subtitle1">
                            🎉 CHÚC MỪNG!! 🎉
                        </Typography>
                        <Typography variant="subtitle1">
                            Kết quả: 40/50
                        </Typography>
                    </Box>
                    <DialogContent>
                        <Box sx={{color: 'black', textAlign: 'center'}}>
                            <Button>
                                Thực hiện lại bài Đánh giá năng lực
                            </Button>
                        </Box>
                    </DialogContent>
                    <DialogActions sx={{px: 3}}>
                        <Grid container={true} spacing={2} sx={{pb: 2}}>
                            <Grid item xs={12} sm={6} md={6} sx={{textAlign: 'center'}}>
                                <Button sx={{background: '#ECEEFF', color: '#5768FF', px: 3, width: '100%'}} onClick={handleClose}>Về trang chủ</Button>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} sx={{textAlign: 'center'}}>
                                <Button sx={{background: '#5048E5', color: 'white', px: 3, width: '100%'}} onClick={handleClose} autoFocus>
                                    Tạo lớp
                                </Button>
                            </Grid>
                        </Grid>
                    </DialogActions>
                </Dialog>
            </Box>
            <ScrollTop {...props}>
                <Fab color="primary" size="medium" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon/>
                </Fab>
            </ScrollTop>
        </Box>
    );
}

const DialogStart = () => {
    const [open, setOpen] = useState(true);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title" sx={{maxWidth: '484px'}}>
                    {"Bài trắc nghiệm có tính thời gian, bạn có chắc chắn thực hiện ngay bây giờ không?"}
                </DialogTitle>
                <DialogContent>
                    <Box sx={{color: 'black', py: 2}}>
                        <Typography variant="subtitle1">
                            Số lần làm bài: 2
                        </Typography>
                        <Typography variant="subtitle1">
                            Thời gian: 45 phút
                        </Typography>
                        <Typography variant="subtitle1">
                            Cách tính điểm: Điểm cao nhất
                        </Typography>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button sx={{background: '#ECEEFF', color: '#5768FF'}} onClick={handleClose}>Để sau</Button>
                    <Button sx={{background: '#5048E5', color: 'white'}} onClick={handleClose} autoFocus>
                        Bắt đầu làm bài
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
};

const Test: NextPage = () => {
    useEffect(() => {
        gtm.push({event: 'page_view'});
    }, []);

    return (
        <>
            <Head>
                <title>Ant Learning</title>
                <meta name="description" content="Ant Learning"></meta>
            </Head>
            <main>
                <Hero/>
                <Exam/>
            </main>
            <DialogStart/>
        </>
    );
};

Test.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default Test;
