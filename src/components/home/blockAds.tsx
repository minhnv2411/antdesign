import {Typography, Box, Container, Grid} from '@mui/material';

export const BlockAds = () => {
    return (
        <Box sx={{ backgroundColor: '#F8F9FC', py: {md: 12, xs: 6} }}>
            <Container>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3}}>
                    <Grid  item xs={12} sm={5}>
                        <Box>
                            <img width="424" height="361" style={{maxWidth: '100%', height: 'auto'}} src="/images/a1.webp" alt="Tối ưu hoá trải nghiệm người dùng" />
                        </Box>
                    </Grid>
                    <Grid  item xs={12} sm={7}>
                        <Box>
                            <Typography variant="h3" color="#1F2738" sx={{ py: 5 }}>
                                Tối ưu hoá trải nghiệm người dùng
                            </Typography>

                            <Typography variant="body2" color="#737373">
                                Nhóm hỗ trợ Giáo viên của Ant Learning sẽ luôn đồng hành bất cứ khi nào bạn gặp khó
                                khăn, giúp bạn có những trải nghiệm tuyệt vời nhất khi sử dụng nền tảng và tối ưu hóa
                                hóa hiệu quả khi bạn đồng hành với chúng tôi.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};
