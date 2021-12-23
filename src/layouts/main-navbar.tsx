import {AppBar, Box, Container, IconButton, Link, Toolbar, Grid, Divider} from '@mui/material';
import NextLink from 'next/link';
import type {FC} from 'react';
import {Menu as MenuIcon} from '../icons/menu';
import {Cart as CartIcon} from '../icons/cart';
import {Chat as ChatIcon} from '../icons/chat';
import {Search as SearchIcon} from '../icons/search';
import {Bell as BellIcon} from '../icons/bell';

interface MainNavbarProps {
    onOpenSidebar?: () => void;
}


const TopHeader = () => {
    return (
        <Box sx={{
            height: 60,
            lineHeight: '60px',
            display: {
                md: 'block',
                xs: 'none'
            }
        }}>
            <Container maxWidth="lg">
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <NextLink href="/" passHref>
                            <Link color="#1E2E50" underline="none" variant="subtitle2"
                                  sx={{
                                      marginRight: 3,
                                      height: 24
                                  }}>
                                Trở thành Giáo viên
                            </Link>
                        </NextLink>
                        {'|'}
                        <NextLink href="/" passHref>
                            <Link color="#1E2E50" underline="none" variant="subtitle2"
                                  sx={{
                                      marginLeft: 3,
                                      marginRight: 3,
                                      height: 24
                                  }}>
                                Tải ứng dụng
                            </Link>
                        </NextLink>
                    </Grid>
                    <Grid item xs={6}  container  direction="row" justifyContent="flex-end"
                          alignItems="flex-end">
                        <Box>
                            <NextLink href="/" passHref>
                                <Link color="#1E2E50" underline="none" variant="subtitle2"
                                      sx={{
                                          marginRight: 3,
                                          height: 24
                                      }}>
                                    <BellIcon sx={{position: 'relative', top: 10, left: 4}}/>   Thông báo
                                </Link>
                            </NextLink>
                            {'|'}
                            <NextLink href="/register" passHref>
                                <Link color="#1E2E50" underline="none" variant="subtitle2"
                                      sx={{
                                          marginLeft: 3,
                                          marginRight: 3,
                                          height: 24
                                      }}>
                                    Đăng ký
                                </Link>
                            </NextLink>
                            {'|'}
                            <NextLink href="/" passHref>
                                <Link color="#1E2E50" underline="none" variant="subtitle2"
                                      sx={{
                                          marginLeft: 3,
                                          height: 24
                                      }}>
                                    Đăng nhập
                                </Link>
                            </NextLink>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
);
};
export const MainNavbar: FC<MainNavbarProps> = (props) => {
    const {onOpenSidebar} = props;

    return (
        <AppBar
            elevation={0}
            sx={{
                backgroundColor: 'background.paper',
                borderBottomColor: 'divider',
                borderBottomStyle: 'solid',
                borderBottomWidth: 1,
                color: 'text.secondary',
                position: 'relative'
            }}
        >
            <TopHeader/>
            <Divider
                sx={{
                    borderColor: '#F0F1F3', // dark divider
                }}
            />
            <Container maxWidth="lg">
                <Toolbar
                    disableGutters
                    sx={{
                        height: {
                            md: 120,
                            xs: 60
                        },

                    }}>
                    <NextLink href="/" passHref>
                        <Link sx={{display: 'flex'}}>
                            <img width="189" height="30" src="/images/logo.webp" alt="logo"/>
                        </Link>
                    </NextLink>
                    <Box sx={{flexGrow: 1}}/>
                    <IconButton
                        aria-label="Right Align"
                        color="inherit"
                        onClick={onOpenSidebar}
                        sx={{
                            display: {
                                md: 'none',
                            },
                        }}>
                        <MenuIcon fontSize="small"/>
                    </IconButton>
                    <Box
                        sx={{
                            alignItems: 'center',
                            display: {
                                md: 'flex',
                                xs: 'none',
                            },
                        }}>
                        <NextLink href="/" passHref>
                            <Link color="#1E2E50" underline="none" variant="subtitle1"
                                  sx={{
                                      marginLeft: 2,
                                      marginRight: 2
                                  }}>
                                Giáo viên
                            </Link>
                        </NextLink>
                        <NextLink href="/" passHref>
                            <Link color="#1E2E50" underline="none" variant="subtitle1"
                                  sx={{
                                      marginLeft: 2,
                                      marginRight: 2
                                  }}>
                                Lớp học
                            </Link>
                        </NextLink>
                        <NextLink href="/" passHref>
                            <Link color="textPrimary" underline="none" variant="subtitle1"
                                  sx={{
                                      marginLeft: 2,
                                      marginRight: 2,
                                      height: 24
                                  }}>
                                <SearchIcon/>
                            </Link>
                        </NextLink>
                        <NextLink href="/" passHref>
                            <Link color="textPrimary" underline="none" variant="subtitle1"
                                  sx={{
                                      marginLeft: 2,
                                      marginRight: 2,
                                      height: 24
                                  }}>
                                <ChatIcon/>
                            </Link>
                        </NextLink>
                        <NextLink href="/" passHref>
                            <Link color="textPrimary" underline="none" variant="subtitle1"
                                  sx={{
                                      marginLeft: 2,
                                      height: 24
                                  }}>
                                <CartIcon/>
                            </Link>
                        </NextLink>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
