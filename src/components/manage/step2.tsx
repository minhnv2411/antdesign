import {
    Typography,
    Box,
    Card,
    Button,
    Container,
    CardContent,
    CardActions, List, ListItem, ListItemIcon, ListItemText
} from '@mui/material';
import {useState} from "react";
import NextLink from "next/link";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {PlusColor} from "../../icons/plusColor";

export const Step2 = () => {

    const [checked, setChecked] = useState(['wifi']);
    const [listNumberSession, setListNumberSession] = useState([
        {
            name: 'Buổi 1',
            id: 1
        }, {
            name: 'Buổi 2',
            id: 2
        }, {
            name: 'Buổi 3',
            id: 3
        }, {
            name: 'Buổi 4',
            id: 4
        }, {
            name: 'Buổi 5',
            id: 5
        }, {
            name: 'Buổi 6',
            id: 6
        }

    ]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };
  return (
      <Box>
          <Box sx={{pb: 12}}>
              <Container>
                  <Typography variant="body2" color="#1F2738" align="center">
                      Thầy/Cô vui lòng nhập thông tin cho từng buổi. Nội dung buổi học có thể được yêu cầu chỉnh sửa trước khi hệ thống duyệt mở lớp.<br/>
                      <NextLink href="/application" passHref>
                          Tài liệu hướng dẫn tạo lớp
                      </NextLink>
                  </Typography>
                  <List
                      sx={{ mt: 4, borderRadius: 1, width: '100%', maxWidth: '100%', bgcolor: 'background.paper'}}
                  >
                      <ListItem >
                          <ListItemIcon>
                              <PlusColor></PlusColor>
                          </ListItemIcon>
                          <ListItemText primary="Thêm buổi học"  primaryTypographyProps={{
                              color: '#5768FF',
                              fontWeight: 'medium'
                          }}/>
                      </ListItem>
                      {
                          listNumberSession.map(item=>{
                              return (
                                  <ListItem key={item.id} sx={{borderTop: '1px solid #F2F3F4', pl: 4}}>
                                      <ListItemText id="switch-list-label-wifi" primary={item.name} />
                                      <ListItemIcon>
                                          <ArrowForwardIosIcon fontSize="small"></ArrowForwardIosIcon>
                                      </ListItemIcon>
                                  </ListItem>
                              )
                          })
                      }

                  </List>

              </Container>
          </Box>
          <Box sx={{position: 'fixed', bottom: 0, width: '100%', paddingLeft: '280px', left: 0}}>
              <Container>
                  <Card>
                      <CardActions sx={{justifyContent: 'space-between'}}>
                          <Button
                              sx={{ m: 1 }}
                              variant="contained"
                              startIcon={<ArrowBackIosIcon fontSize="small"/>}
                          >
                              Quay lại
                          </Button>
                          <Button
                              sx={{ m: 1 }}
                              type="submit"
                              variant="outlined"
                              endIcon={<ArrowForwardIosIcon fontSize="small"/>}
                          >
                              Tiếp tục
                          </Button>
                      </CardActions>
                  </Card>
              </Container>
          </Box>
      </Box>
  );
};
