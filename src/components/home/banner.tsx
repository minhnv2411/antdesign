import {Typography, Grid, Box, Container, Button} from '@mui/material';
import NextLink from "next/link";
import { useTheme } from '@mui/material/styles';
export const BannerHomePage = () => {
  return (
      <Box>
        <Box
            sx={(theme) => ({
                    display: 'flex',
                    flexDirection: 'row',
                    maxHeight: 475,
                    background: {
                        md: 'url(/images/banner.webp) no-repeat center',
                        xs: theme.palette.gradient.main
                    },
                    backgroundSize: 'cover',
                    paddingBottom: {
                        xs: 1
                    }
            })}
        >
          <Container>
            <Grid container={true}>
              <Grid xs={12} item={true} md={6}>
                <Box sx={{ py: 7, pr: {md: 12, xs: 0} }}>
                  <Typography color="primary.contrastText" variant="h1" sx={{ mb: 1}}>
                    Hãy cùng<br/>
                    chúng tôi lan toả<br/>
                    tri thức !
                  </Typography>

                  <Typography color="primary.contrastText" sx={{ mb: 3 }}>
                    Content
                  </Typography>

                  <NextLink href="/application" passHref>
                    <Button
                        size="large"
                        color="primary"
                        variant="contained"
                        sx={{
                          display: 'block',
                          maxWidth: 343,
                          textAlign: 'center',
                          backgroundColor: 'white',
                          color: '#E53638',
                          '&:hover': {
                            backgroundColor: 'white',
                            color: '#E53638',
                          },
                        }}
                    >
                      Trở thành Giáo viên
                    </Button>
                  </NextLink>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
  );
};
