import { Box, Container, Grid, Link,  Avatar,Typography } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import type { FC } from 'react';
import { styled } from '@mui/material/styles';
import NextLink from "next/link";
const AvatarIcon = styled(Avatar)(() => ({
  backgroundColor: '#F6F9FC',
}));

export const Footer: FC = (props) => (
  <Box
    sx={{
      backgroundColor: '#1F2738',
      pb: {
        md: 10,
        xs: 6,
      },
      pt: {
        md: 10,
        xs: 6,
      },
    }}
    {...props}
  >
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid
          item
          sm={4}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            order: {
              md: 1,
              xs: 4,
            },
          }}
          xs={12}
        >
          <Link href="/">
            <Typography color="white" sx={{ mt: 0 }} variant="h5">
              Ant Learning
            </Typography>
          </Link>
        </Grid>

        <Grid
          item
          sm={2}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            order: {
              md: 1,
              xs: 4,
            },
          }}
          xs={6}
        >
          <Link href="/about">
            <Typography color="#F6F9FC" sx={{ mt: 2, fontSize: 13 }} variant="caption">
              Giới thiệu
            </Typography>
          </Link>

          <Link href="/careers">
            <Typography color="#F6F9FC" sx={{ mt: 2, fontSize: 13 }} variant="caption">
              Tuyển dụng
            </Typography>
          </Link>

          <Link href="/contact">
            <Typography color="#F6F9FC" sx={{ mt: 2, fontSize: 13 }} variant="caption">
              Liên hệ
            </Typography>
          </Link>
        </Grid>

        <Grid
          item
          sm={2}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            order: {
              md: 1,
              xs: 4,
            },
          }}
          xs={6}
        >
          <Link href="/#">
            <Typography color="#F6F9FC" sx={{ mt: 2, fontSize: 13  }} variant="caption">
              Điều khoản sử dụng
            </Typography>
          </Link>

          <Link href="/#">
            <Typography color="#F6F9FC" sx={{ mt: 2, fontSize: 13  }} variant="caption">
              Chính sách bảo mật
            </Typography>
          </Link>
          <Link href="/#">
            <Typography color="#F6F9FC" sx={{ mt: 2, fontSize: 13  }} variant="caption">
              Chính sách riêng tư
            </Typography>
          </Link>

          <Link href="/#">
            <Typography color="#F6F9FC" sx={{ mt: 2, fontSize: 13  }} variant="caption">
              Tiêu chuẩn cộng đồng
            </Typography>
          </Link>
        </Grid>

        <Grid
          item
          sm={4}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: {
              md: 'flex-end',
              xs: 'center'
            },
            order: {
              md: 1,
              xs: 4,
            },
          }}
          xs={12}
        >
          <NextLink href="/application" passHref>
            <Link  sx={{
              marginRight: 1
            }}>
              <img width="144" height="43" src="/images/GPlayB.webp" alt="Download App" />
            </Link>
          </NextLink>
          <NextLink href="/application" passHref>
            <Link  sx={{
              marginRight: 0
            }}>
              <img width="122" height="43" src="/images/AppStoreB.webp" alt="Download App" />
            </Link>
          </NextLink>
        </Grid>
      </Grid>
    </Container>

    <Box
      sx={{
        pt: 5,
        pb: 5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
      }}
    >
      <Box sx={{ p: 1 }}>
        <NextLink href="/application" passHref>
          <Link  sx={{
            marginRight: 0
          }}>
        <AvatarIcon>
          <TwitterIcon sx={{ color: '#1E2E50' }} />
        </AvatarIcon>
          </Link>
        </NextLink>
      </Box>
      <Box sx={{ p: 1 }}>
        <NextLink href="/application" passHref>
          <Link  sx={{
            marginRight: 0
          }}>
        <AvatarIcon>
          <FacebookIcon sx={{ color: '#1E2E50' }} />
        </AvatarIcon>
          </Link>
        </NextLink>
      </Box>
      <Box sx={{ p: 1 }}>
        <NextLink href="/application" passHref>
          <Link  sx={{
            marginRight: 0
          }}>
        <AvatarIcon>
          <InstagramIcon sx={{ color: '#1E2E50' }} />
        </AvatarIcon>
          </Link>
        </NextLink>
      </Box>
    </Box>

    <Typography color="rgba(233,244,255, 0.6)" sx={{ textAlign: 'center', pb: 1 }} variant="body2">
      Copyright © 2021 Ant Learning. All rights reserved.
    </Typography>

    <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={4}
    >
      <Grid item>
        <Typography variant="caption" color="rgba(233,244,255, 0.6)">
          Privacy & terms
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="caption" color="rgba(233,244,255, 0.6)">
          Terms of Service
        </Typography>
      </Grid>
    </Grid>
  </Box>
);
