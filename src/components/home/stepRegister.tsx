import {Typography, Box, Container, Grid, List, ListItem , ListItemButton, ListItemIcon, ListItemText} from '@mui/material';

export const StepRegister = () => {
    return (
        <Box sx={{ backgroundColor: 'white', py: {md: 12, xs: 6} }}>
            <Container>
                <Typography variant="h3" color="1F2738" sx={{ py: 5 }}>
                    Bắt đầu từ những bước đơn giản nhất
                </Typography>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3}}>
                    <Grid  item xs={12} sm={6}>
                        <List>
                            <ListItem disablePadding sx={{mb: 4, borderLeft: '3px solid #000'}}>
                                <ListItemButton>
                                    <ListItemIcon sx={{ width: 20, mr: 1 }}>📝</ListItemIcon>
                                    <ListItemText  primaryTypographyProps={{
                                        color: '#1F2738',
                                        fontWeight: 'bold',
                                    }} primary="Đăng ký làm giáo viên" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding sx={{mb: 4, borderLeft: '1px solid #B4B2BC'}}>
                                <ListItemButton>
                                    <ListItemIcon sx={{ width: 20, mr: 1, justifyContent: 'center' }}>💡</ListItemIcon>
                                    <ListItemText primary="Tạo lớp" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding sx={{mb: 4, borderLeft: '1px solid #B4B2BC'}}>
                                <ListItemButton>
                                    <ListItemIcon sx={{ width: 20, mr: 1 }}>🎉</ListItemIcon>
                                    <ListItemText primary="Bắt đầu giảng dạy" />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid  item xs={12} sm={6}>
                        <Box
                            sx={{
                                '& img': {
                                    width: '100%',
                                    height: 'auto',
                                },
                            }}
                        >
                            <img width="564" height="413" style={{maxWidth: '100%'}} src="/images/imgStep.webp" alt="Bắt đầu từ những bước đơn giản nhất" />
                        </Box>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
};
