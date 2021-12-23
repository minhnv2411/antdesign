import * as React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { FC, useEffect } from 'react';
import { gtm } from '../../libs/gtm';
import { MainLayout } from "../../layouts/main-layout";
import { Box, Button, Container, Grid, ThemeOptions, Typography, useMediaQuery, TextField, FormLabel, FormControlLabel, FormControl, RadioGroup, Radio } from "@mui/material";
import NextLink from "next/link";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Input from '@mui/material/Input';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { log } from 'console';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
const steps = ['Thông tin cơ bản', 'Phương thức thanh toán', 'Kinh nghiệm giảng'];

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return <FormRegister />
    case 1:
      return <FormRegister2 />
    case 2:
      return <FormRegister3 />
    default:
      'pass'
  }
}

const StepRegister = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ background: 'white'}}>
      <Box sx={{ width: '100%',pt:13,pb:7}}>
        <Container>
          <Grid container sx={{alignItems: 'center',justifyContent:'space-between' }} >
            <Grid item xs={12} sm={3} md={3}>
            <Box>
              {activeStep === steps.length ? (
                <React.Fragment>
                  <Button
                    size="small"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{
                      backgroundColor: '#F8F8FF',
                      color: '#5768FF',
                      paddingX:1,
                      py:0.5,
                      fontSize: 16,
                      fontWeight: 400,
                    }}
                    startIcon={<ArrowBackIosIcon 
                      sx={{
                        height:16,
                        width:16,
                        position:'static',
                      }}
                     />}>Quay lại</Button>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <Box>
                  <Button
                    size="small"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{
                      backgroundColor: '#F8F8FF',
                      color: '#5768FF',
                      paddingX:1,
                      py:0.5,
                      fontSize: 16,
                      fontWeight: 400,
                    }}
                    startIcon={<ArrowBackIosIcon 
                      sx={{
                        height:16,
                        width:16,
                        position:'static',
                      }}
                     />}>Quay lại</Button>
                  </Box>
                </React.Fragment>
              )}
            </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
            <Box>
              <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                  if(index == activeStep ){
                    return (
                      <Step key={label} >
                        <StepLabel icon={<CheckCircleOutlineIcon 
                        sx={{
                          fontSize:16,
                          color:'#5768FF',
                        }} 
                        />} 
                        style={{color:'red'}}>{label}</StepLabel>
                      </Step>
                    );
                  }else{
                    return (
                      <Step key={label} >
                        <StepLabel icon={<RadioButtonUncheckedIcon sx={{
                          fontSize:15
                        }} 
                        />} sx={{
                          color:'#A4A6B3',
                          fontSize:16
                        }}
                        >{label}</StepLabel>
                      </Step>
                    );
                  }
                })}
              </Stepper>
            </Box>
            </Grid>
            <Grid item xs={12} sm={3} md={3}>
            <Box sx={{float:'right'}}>
              <Button
                onClick={handleNext} size="small" sx={{
                  backgroundColor: '#5768FF',
                  color: '#FFFFFF',
                  fontSize: 16,
                  paddingX:1,
                  py:0.5,
                  fontWeight: 400,
                  '&:hover': {
                    backgroundColor: '#6070ff',
                    color: 'white',
                  },
                }}
                endIcon={<ArrowForwardIosIcon sx={{
                  height:16,
                  width:16,
                  position:'static',
                  left: 97,
                  top: 10
                }} />}>{activeStep === steps.length-1 ? 'Hoàn thành' : 'Tiếp theo'}</Button>
            </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box>{getStepContent(activeStep)}</Box>
    </Box>
  );
}

const Banner = () => {
  const isMdScreen = useMediaQuery((theme: ThemeOptions) => theme.breakpoints.down('md'));
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          maxHeight: 200,
          background: isMdScreen ? '' : 'url(/images/bannerRegister.webp)',
          backgroundSize: 'cover',
        }}
      >
        <Container>
          <Grid container={true}>
            <Grid xs={12} item={true} md={6}>
              <Box sx={{ py: 9, pr: 12 }}>
                <Typography color="primary.contrastText" variant="h5" >
                  Đăng ký làm giáo viên
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

const FormRegister = () => {
  const api = [
    'Chú', 'Cháu', 'Cô', 'Dì', 'Bác'
  ]

  return (
    <Box sx={{ background: 'white',pb:10 }}>
      <Container>
        <Grid container={true} alignItems="stretch" spacing={3}>
          <Grid item xs={12} sm={6} md={6}>
            <InputItem type='text' title='Họ và tên *' placeholder='Nguyễn Văn A' />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <InputItem type='text' title='Email *' placeholder='Sử dụng email để được trải nhiệm tối ưu nhât' />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <InputItem type='date' title='Ngày tháng năm sinh *' placeholder='dd/mm/yyyy' />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <SelectItem title="Danh xưng *"  />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <InputItem type='text' title='Công việc hiện tại *' placeholder='' />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <SelectItem title="Nơi sinh sống *" />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <InputItem type='file' title='Ảnh CMND/CCCC mặt trước *' placeholder='' />
            <Typography variant='subtitle2' sx={{ color: '#5A6C90', pt: 1, fontSize: 14,fontWeight:400  }} >
              Hộ trợ định dạng file: .jpg, .png, .jpeg
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <InputItem type='file' title='Ảnh CMND/CCCC mặt sau *' placeholder='' />
            <Typography variant='subtitle2' sx={{ color: '#5A6C90', pt: 1, fontSize: 14, fontWeight:400 }} >
              Hộ trợ định dạng file: .jpg, .png, .jpeg
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12} sx={{ pb: 5 }}>
            <Box>
              <Typography variant='subtitle2' sx={{ color: '#5A6C90', pt: 1, fontSize: 14, fontWeight:400 }}>
                Ant Learning cam kết bảo mật tuyết đối thông tin của người dùng. theo chứng chỉ bảo mật quốc tế
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

const FormRegister2 = () => (
  <Box sx={{ background: 'white', pb:10 }}>
    <Container>
      <Grid container={true} alignItems="stretch" spacing={3}>
        <Grid item xs={12} sm={12} md={12} sx={{ pb: 5 }}>
          <Box>
            <Typography variant='subtitle2' sx={{ color: '#5A6C90', fontSize: 14, fontWeight:400 }}>
              Phương thức thanh toán được sử dụng để hệ thống thanh toán thù lao cho thầy/cô khi lớp học kết thúc
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <SelectItem title="Phương thức thanh toán *" />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <InputItem type='text' title='Tên tài khoản *' placeholder='VD: NGUYEN VAN A' />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <InputItem type='number' title='Số tài khoản *' placeholder='' />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <SelectItem title="Ngân hàng *" />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <InputItem type='text' title='Chi nhánh *' placeholder='' />
        </Grid>
        <Grid item xs={12} sm={12} md={12} sx={{ pb: 5 }}>
          <Box>
            <Typography variant='subtitle2' sx={{ color: '#5A6C90', pt: 1, fontSize: 14, fontWeight:400 }}>
              Ant Learning cam kết bảo mật tuyết đối thông tin của người dùng. theo chứng chỉ bảo mật quốc tế
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

const FormRegister3 = () => (
  <Box sx={{ background: 'white', pb:10 }}>
    <Container>
      <Grid container={true} alignItems="stretch" spacing={3}>
        <Grid item xs={12} sm={12} md={12} sx={{ pb: 5 }}>
          <Box>
            <Typography variant='subtitle2' sx={{ color: '#5A6C90', pt: 1, fontSize: 14, fontWeight:400 }}>
              Lưu ý: Thầy/cô vui lòng lựa chọn hình ảnh rõ ràng, lịch sự. Hình ảnh này sẽ được sử dụng trong hồ sơ giáo viên
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <InputItem type='file' title='Hình ảnh cá nhân *' placeholder='' />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <InputItem type='file' title='Video giới thiệu bản thân *' placeholder='' />
        </Grid>
     
        <Grid item xs={12} sm={12} md={12}>
          <Typography variant='subtitle2' sx={{ pb: 1 }}>
            Giới thiệu (tối đa 200 ký tự) *
          </Typography>
          <TextareaAutosize
            minRows={8}
            style={{
              width: "100%",
              padding: 10,
              borderRadius: 6,
              borderColor: '#dee2e6'
            }}
            color='red'
          />
        </Grid>
        <Grid item xs={12} sm={6} md={5}>
          <InputItem type='text' title='Trường Đại học/Cao đẳng *' placeholder='' />
        </Grid>
        <Grid item xs={12} sm={6} md={5}>
          <InputItem type='text' title='Ngành *' placeholder='' />
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <SelectItem title="Năm tốt nghiệp *" />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <InputItem type='file' title='Bằng cấp cao nhất *' placeholder='' />
          <Typography variant='subtitle2' sx={{ color: '#5A6C90', pt: 1, fontSize: 14, fontWeight:400 }} >
            Hộ trợ định dạng file: .jpg, .png, .jpeg
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <InputItem type='file' title='Bằng cấp chứng chỉ khác *' placeholder='' />
          <Typography variant='subtitle2' sx={{ color: '#5A6C90', pt: 1, fontSize: 14, fontWeight:400 }} >
            Hộ trợ định dạng file: .jpg, .png, .jpeg
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SelectItem title='Chuyên môn *' />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <InputItem type='text' title='Số năm kinh nghiệm giảng dạy *' placeholder='' />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SelectItem title='Trình độ có thể dạy *' />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <InputItem type='text' title='Giải thưởng *' placeholder='' />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <SelectItem title='Thiết bị giảng dạy *' />
        </Grid>
      </Grid>
    </Container>
  </Box>
);

const InputItem = ({ ...props }) => (
  <Box
    sx={{
      maxWidth: '100%',
    }}
  >
    <Typography variant='subtitle2' sx={{ pb: 0.5,color:'##212529',fontSize:16 }}>
      {props.title}
    </Typography>
    <TextField type={props.type} id='icon-file' sx={{
      'input': {
        '&::placeholder': {
          color: '#ADB5BD',
          fontSize:15,
          fontWeight:400
        }
      },
      'input[type=date]':{
          color: '#ADB5BD',
          fontSize:15,
          fontWeight:400
      },
      'input[type=file]':{
        color: '#ADB5BD',
        fontSize:15,
        fontWeight:400,
      },
      fontSize: 10,
    }} name='' placeholder={props.placeholder} fullWidth size='small' />
  </Box>
);

const SelectItem = ({ ...props }) => {
    return (
      <Box
        sx={{
          maxWidth: '100%',
        }}
      >
        <FormControl fullWidth>
          <Typography variant='subtitle2' sx={{ pb: 1,color:'##212529',fontSize:16 }}>
            {props.title}
          </Typography>
          <Select
            displayEmpty
            size='small'
            input={<OutlinedInput />}
            sx={{
                color: "#ADB5BD",
                fontSize:15,
                fontWeight:400
            }}
          >
            <MenuItem>
              Chú
            </MenuItem>
            
          </Select>
        </FormControl>
      </Box>
    )
}

const Account: NextPage = () => {
  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  return (
    <>
      <Head>
        <title>Register</title>
      </Head>
      <main>
        <Banner />
        <StepRegister />
      </main>
    </>
  );
};

Account.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default Account;
