import {Typography, Grid, Box, Container} from '@mui/material';
import {FC} from "react";

const ReasonItem = ({ img, title }: { img: string; title: string }) => (
    <Box
        sx={{
            p: 5,
            height: '100%',
            '& img': {
                height: 76,
                width: 70,
            },
            '&:hover': {
                opacity: 0.8,
                cursor: 'pointer'
            },
        }}
        boxShadow={1}
        borderRadius={1}
    >
        <img src={img} alt={title} />
        <Typography variant="h5" sx={{ py: 2 }}>
            {title}
        </Typography>
        <Box
            sx={{
                display: 'inline-block',
                width: 50,
                height: 2,
                backgroundColor: 'red',
                mb: 2,
            }}
        />
        <Typography variant="body2">
            The gradual accumulation of information about atomic and small-scale behaviour...
        </Typography>
    </Box>
);

export const Reason: FC = (props) => (
    <Box sx={{ backgroundColor: 'white' }}>
        <Container sx={{ py: 5 }}>
            <Typography variant="h3" sx={{ py: 5 }}>
                Tại sao bạn nên hợp tác với Ant Learning?
            </Typography>

            <Grid container={true} alignItems="stretch" spacing={5}>
                <Grid item xs={12} sm={6} md={4}>
                    <ReasonItem
                        img="/images/train.webp"
                        title="Làm chủ phương pháp giảng dạy 4.0"
                    ></ReasonItem>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ReasonItem
                        img="/images/view.webp"
                        title="Thiết kế nội dung giảng dạy tuỳ biến"
                    ></ReasonItem>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ReasonItem
                        img="/images/learn.webp"
                        title="Gia tăng thu nhập và mở rộng mạng lưới chuyên môn"
                    ></ReasonItem>
                </Grid>
            </Grid>
        </Container>
    </Box>
);
