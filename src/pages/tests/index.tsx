import React, { FC } from 'react';
import {
    Box,
    Button,
    Container,
    Grid,
    ThemeOptions,
    Typography,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Stepper,
    Step,
    StepLabel,
    StepContent,
    Paper
} from "@mui/material";
import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';
import { DashboardLayout } from '../../layouts/dashboard-layout';
import { gtm } from '../../libs/gtm';
import { color, rgbToHex } from '@mui/system';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CloseIcon from '@mui/icons-material/Close';

interface DialogProps {
    examTime: string;
    title: string;
    time: string;
    open?: boolean;
    handleClose?: () => void
}

interface ExamTime {
    examTime: String;
    status: String;
    dateTime: String;
    result: String;
}

const DiaLogBox: FC<DialogProps> = ({...props}) => {
    return (
        <Box>
            <Dialog
                open={props.open}
                onClose={props.handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title" sx={{ fontSize: 20, fontWeight: 600 }}>
                    {props.title}
                </DialogTitle>
                <DialogContent sx={{ pb: 0 }}>
                    <DialogContentText >
                        Lần thi :{props.examTime}
                    </DialogContentText>
                    <DialogContentText>
                        Thời gian {props.time}
                    </DialogContentText>
                    <DialogContentText>
                        Cách tính điểm: Điểm cao nhất
                    </DialogContentText>
                </DialogContent>
                <DialogActions sx={{ p: 2 }}>
                    <Button
                        onClick={props.handleClose}
                        size="small"
                        sx={{
                            backgroundColor: '#ECEEFF',
                            color: '#5768FF',
                            paddingX: 2,
                            py: 0.5,
                            fontSize: 16,
                            fontWeight: 500,
                        }}
                    >Quay lại</Button>
                    <Button
                        onClick={props.handleClose}
                        size="small" sx={{
                        backgroundColor: '#5768FF',
                        color: '#FFFFFF',
                        fontSize: 16,
                        paddingX: 2,
                        py: 0.5,
                        fontWeight: 500,
                        '&:hover': {
                            backgroundColor: '#6070ff',
                        },
                    }}
                    >Bắt đầu làm bài</Button>
                </DialogActions>
            </Dialog>
        </Box>
    )
}

const Content = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Box
            sx={{
                mt: 5,
                mx: 2,
                fontSize: 14
                , background: 'white'
            }}
            borderRadius={1}
        >
            <Box
            >
                <Grid container={true} sx={{ alignItems: 'center', px: 3, py: 2, borderBottom: '1px solid #edf0f5' }}>
                    <Grid item md={6} xs={12} sm={6}>
                        <Box>
                            <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                                Kết quả cuối cùng:
                                <Typography variant="" sx={{ color: '#5768FF' }}>
                                    40/50
                                </Typography>
                            </Typography>
                        </Box>
                        <Box sx={{ mt: 0.5 }}>
                            <Typography variant="subtitle2" sx={{ fontWeight: 400 }}>
                                Bài đánh giá năng lực sẽ được làm mới sau mỗi 3 tháng
                            </Typography>
                            <Typography variant="subtitle2" sx={{ fontWeight: 400 }}>
                                Thầy cô có thể thực hiện lại để đạt tiêu chuẩn mở lớp ở cấp độ cao hơn
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item md={6} xs={12} sm={6} >
                        <Box>
                            <Button
                                onClick={handleClickOpen}
                                size="small" sx={{
                                backgroundColor: '#5768FF',
                                color: '#FFFFFF',
                                fontSize: 16,
                                paddingX: 9,
                                float: 'right',
                                py: 1.5,
                                fontWeight: 400,
                                '&:hover': {
                                    backgroundColor: '#6070ff',
                                    color: 'white',
                                },
                            }}
                            >Làm lại</Button>
                            <DiaLogBox examTime="2" title="Bài trắc nghiệm có tính thời gian, bạn có chắc chắn thực hiện ngay bây giờ không?" time="45 phút" open={open} handleClose={handleClose} />
                        </Box>
                    </Grid>
                </Grid>
                <Grid container={true} sx={{ alignItems: 'center', px: 3, py: 2 }}>
                    <Grid item md={12} xs={12} sm={12}>
                        <Box>
                            <Typography variant="subtitle2" sx={{ fontWeight: 400, color: '##1F2738' }}>
                                {'• '}Thời gian làm bài 45 phút
                            </Typography>
                            <Typography variant="subtitle2" sx={{ fontWeight: 400, color: '##1F2738' }}>
                                {'• '}Số lần làm bài : 02
                            </Typography>
                            <Typography variant="subtitle2" sx={{ fontWeight: 400, color: '##1F2738' }}>
                                {'• '}Cách tính điểm: Điểm cao nhất
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box>
            </Box>
        </Box>
    )
}
const examTimes: ExamTime[] = [
    {
        examTime: 'Lần 1',
        status: 'Đã hoàn thành',
        dateTime: '13:02, 22/08/21',
        result: '30/50'
    },
    {
        examTime: 'Lần 2',
        status: 'Chưa hoàn thành',
        dateTime: '13:02, 22/08/21',
        result: '40/50'
    }
]
const ContentItem: FC<ExamTime> = ({...props}) => {
    return (
        <Box>
            <Box
                sx={{
                    mt: 2,
                    mx: 2,
                    fontSize: 14,
                    background: 'white'
                }}>
                <Box borderRadius={1}
                >
                    <Grid container={true} sx={{ alignItems: 'center', px: 3, py: 2 }}>
                        <Grid item md={3} xs={6} sm={3}>
                            <Typography variant="subtitle2" sx={{ fontSize: 14, fontWeight: 700, color: '#1F2738' }}>
                                {props.examTime}
                            </Typography>
                        </Grid>
                        <Grid item md={3} xs={6} sm={3}>
                            <Typography variant="subtitle2" sx={{ fontWeight: 400, fontSize: 14, color: '#1F2738' }}>
                                Trạng thái: {props.status}
                            </Typography>
                        </Grid>
                        <Grid item md={3} xs={6} sm={3}>
                            <Typography variant="subtitle2" sx={{ fontWeight: 400, fontSize: 14, color: '#1F2738', textAlign: 'right' }}>
                                Thời gian: {props.dateTime}
                            </Typography>
                        </Grid>
                        <Grid item md={3} xs={6} sm={3} sx={{ textAlign: 'right' }}>
                            <Typography variant="subtitle2" >
                                Kết quả:
                                <Typography variant="" sx={{ fontSize: 14, fontWeight: 700, color: '#5768FF' }}>
                                    {props.result}
                                </Typography>
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
                <Box>
                </Box>
            </Box>
        </Box>
    )
}


const Notify = () => {
    const [box, setBox] = React.useState('block');
    const handleClose = () => {
        setBox('none');
    };
    return (
        <Box sx={{
            background: rgbToHex('#FFC800'),
            mx: 2,
            mt: 2,
            p: 3,
            display: box
        }}
             borderRadius={1}
        >
            <Box borderRadius={1} sx={{ background: 'white', width: 'auto', p: 2 }}>
                <StepperNotify handleClose={handleClose} />
            </Box>
        </Box>
    )
}



const steps = [
    {
        label: '📝 Đăng ký làm giáo viên',
        description: `Hoàn thiện hồ sơ giáo viên`,
        description1: `Trắc nghiệm đánh giá năng lực chuyên môn`,
    },
    {
        label: '💡 Tạo lớp',
        description: 'Xây dựng chương trình học',
        description1: `Định giá lớp học`,
    },
    {
        label: '🎉‍ Bắt đầu giảng dạy',
    },
];


const StepperNotify = (props) => {
    const { handleClose } = props;
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <Box sx={{ mx: 1 }}>
            <Box>
                <Grid container sx={{ alignItems: 'center' }}>
                    <Grid item md={6} sm={6} xs={9}>
                        <Typography variant='subtitle1' sx={{ color: '#1F2738' }}>
                            🔔 Hướng dẫn dành cho người mới bắt đầu
                        </Typography>
                    </Grid>
                    <Grid item md={6} sm={6} xs={3}>
                        <Box>
                            <Button onClick={handleClose} sx={{
                                float: 'right',
                                p: 0,
                                color: '#7B8090',
                                '&:hover': {
                                    backgroundColor: 'white',
                                }
                            }} startIcon={<CloseIcon />}></Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box py={1}>
                <Typography variant='subtitle2' fontWeight={400} fontSize={16}>
                    Quy trình mở lớp trên Ant Learning
                </Typography>
            </Box>
            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((step, index) => {
                    if (activeStep === index) {
                        return (
                            <Step key={step.label}>
                                <StepLabel icon={<CheckCircleOutlineIcon sx={{
                                    fontSize: 16,
                                    color: '#5768FF',
                                }} />}>
                                    {step.label}
                                </StepLabel>
                                <StepContent>
                                    <Typography fontSize={14}>{'• '}{step.description}</Typography>
                                    <Typography fontSize={14}>{'• '}{step.description1}</Typography>
                                </StepContent>
                            </Step>
                        )
                    } else {
                        return (
                            <Step key={step.label}>
                                <StepLabel icon={<RadioButtonUncheckedIcon sx={{
                                    fontSize: 16,
                                    color: '#5768FF',
                                }} />}>
                                    {step.label}
                                </StepLabel>
                                <StepContent>
                                    <Typography>{'• '}{step.description}</Typography>
                                    <Typography>{'• '}{step.description1}</Typography>
                                </StepContent>
                            </Step>
                        )
                    }
                })}
            </Stepper>
        </Box>
    );
}




const Account: NextPage = () => {
    useEffect(() => {
        gtm.push({ event: 'page_view' });
    }, []);

    return (
        <>
            <Head>
                <title>Thông tin tài khoản</title>
            </Head>
            <main>
                <Content />
                <ContentItem examTime="Lần 1" status="Đã hoàn thành" dateTime="13:02, 22/08/21" result="30/50" />
                <Notify />
            </main>
        </>
    );
};

Account.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Account;
