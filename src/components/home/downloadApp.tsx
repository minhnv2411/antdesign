import {Typography, Box, Container, Grid, Link} from '@mui/material';
import NextLink from "next/link";

export const DownloadApp = () => {
    return (
        <Box sx={{ background: 'url(/images/bannerApp.webp) no-repeat center', backgroundSize: ' cover', minHeight: '452px' }}>
            <Container>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3}}>
                    <Grid item xs={12} sm={6}>
                        <Typography color="white"  variant="h3" sx={{ py: 5, mt: 10 }}>
                            Ant Learning
                        </Typography>
                        <Typography color="white" sx={{ pb: 5 }}>
                            Nền tảng học và dạy trực tuyến hàng đầu Việt Nam
                        </Typography>
                        <Box>
                            <NextLink href="/application" passHref>
                                <Link  sx={{
                                    marginRight: 3,
                                    '&:hover': {
                                        opacity: 0.8,
                                        cursor: 'pointer'
                                    },
                                }}>
                                    <img width="164" height="56" src="/images/btn-gPlay.webp" alt="Download App" />
                                </Link>
                            </NextLink>
                            <NextLink href="/application" passHref>
                                <Link  sx={{
                                    marginRight: 3,
                                    '&:hover': {
                                        opacity: 0.8,
                                        cursor: 'pointer'
                                    },
                                }}>
                                    <img width="164" height="56" src="/images/btn-AppStore.webp" alt="Download App" />
                                </Link>
                            </NextLink>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} sx={{minHeight: {md: '452px', xs: 'none'} }} container  direction="row" justifyContent="flex-end"
                          alignItems="flex-end">
                        <img width="450" height="412" style={{maxWidth: '100%', height: 'auto'}} src="/images/imgPhone.webp" alt="Download App" />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};
