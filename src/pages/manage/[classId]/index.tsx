import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { DashboardLayout } from '../../../layouts/dashboard-layout';
import { gtm } from '../../../libs/gtm';
import {Step1} from "../../../components/manage/step1";
import {Step2} from "../../../components/manage/step2";
import {
    Box,
    Stepper,
    Step,
    StepButton,

} from "@mui/material";
const steps = ['Thông tin, lịch học', 'Chương trình học', 'Định giá học phí'];
const AddClass: NextPage = () => {

    const [activeStep, setActiveStep] = useState(0);
    const [completed, setCompleted] = useState({});
  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

    const totalSteps = () => {
        return steps.length;
    };

    const completedSteps = () => {
        return Object.keys(completed).length;
    };

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
    };

    const handleNext = () => {
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ? // It's the last step, but not all steps have been completed,
                  // find the first step that has been completed
                steps.findIndex((step, i) => !(i in completed))
                : activeStep + 1;
        setActiveStep(newActiveStep);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStep = (step) => () => {
        setActiveStep(step);
    };

    const handleComplete = () => {
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();
    };

    const handleReset = () => {
        setActiveStep(0);
        setCompleted({});
    };

    return (
    <>
      <Head>
        <title>Tạo lớp học</title>
      </Head>
      <main>
        <Box sx={{px: 30, mb: 8}}>
            <Stepper nonLinear activeStep={activeStep}>
                {steps.map((label, index) => (
                    <Step key={label} completed={completed[index]}>
                        <StepButton color="inherit" onClick={handleStep(index)}>
                            {label}
                        </StepButton>
                    </Step>
                ))}
            </Stepper>
        </Box>
          {activeStep === 0 ?  <Step1></Step1> : ''}
          {activeStep === 1 ?  <Step2></Step2> : ''}
      </main>
    </>
  );
};

AddClass.getLayout = (page) => <DashboardLayout showBackButton={true} title="Tạo lớp" desc="Tạo lớp học">{page}</DashboardLayout>;

export default AddClass;
