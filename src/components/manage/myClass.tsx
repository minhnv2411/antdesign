import {Typography, Grid, Box, Card, Button} from '@mui/material';
import {useState} from "react";
import {SeverityPill} from "../severity-pill";


interface Class {
    id: string;
    name: string;
    time: string;
    date: Date;
    numberSessions: string;
    member: number;
    status: string;
}

const myClass: Class[] = [
    {
        id: 'b4b19b21656e44b487441c50',
        name: 'Địa Lý 9 (Tháng 8)',
        time: '9h - 10h CN',
        date: new Date(),
        numberSessions: '5/6',
        member: 7,
        status: '1'
    },
    {
        id: 'b4b19b21656e44b487441c51',
        name: 'Địa Lý 9 (Tháng 8)',
        time: '9h - 10h CN',
        date: new Date(),
        numberSessions: '5/6',
        member: 7,
        status: '2'
    },
    {
        id: 'b4b19b21656e44b487441c52',
        name: 'Địa Lý 9 (Tháng 8)',
        time: '9h - 10h CN',
        date: new Date(),
        numberSessions: '5/6',
        member: 7,
        status: '2'
    },
    {
        id: 'b4b19b21656e44b487441c53',
        name: 'Địa Lý 9 (Tháng 8)',
        time: '9h - 10h CN',
        date: new Date(),
        numberSessions: '5/6',
        member: 7,
        status: '1'
    }
];


export const MyClass = () => {
    const [listData, setListData] = useState<any>(myClass);


    const renderStatus = (status) => {

        switch(status) {
            case '1':
                return 'Chờ phê duyệt'
            case '2':
                return 'Đã phê duyệt'
            default:
                return 'Chờ phê duyệt'
        }
    }
    const renderColorStatus = (status) => {
        switch(status) {
            case '1':
                return 'statusWaiting'
            case '2':
                return 'statusSuccess'
            default:
                return 'statusSuccess'
        }
    }
  return (
      <Box>
          <Grid container={true} spacing={2} >
              {listData.map(item=>{

                  return (
                      <Grid xs={4} key={item.id} item={true} md={4}>
                          <Card
                              sx={{
                                  height: '100%',
                                  p: 3,
                                  position: 'relative'
                              }}
                              variant="outlined"
                          >
                              <Typography
                                  sx={{ color: 'textPrimary' }}
                                  variant="h6"
                              >
                                  {item.name}
                              </Typography>
                              <Typography
                                  sx={{
                                      color: 'textPrimary',
                                  }}
                                  variant="body2"
                              >
                                  Thời gian: {item.time}
                              </Typography>
                              <Typography
                                  sx={{
                                      color: 'textPrimary',
                                  }}
                                  variant="body2"
                              >
                                  Khai giảng: 23/10/2021
                              </Typography>
                              <Typography
                                  sx={{
                                      color: 'textPrimary',
                                  }}
                                  variant="body2"
                              >
                                  Số buổi đã dạy: {item.numberSessions}
                              </Typography>
                              <Typography
                                  sx={{
                                      color: 'textPrimary',
                                  }}
                                  variant="body2"
                              >
                                  Sĩ số:  {item.member}
                              </Typography>
                              <SeverityPill color={renderColorStatus(item.status)}>
                                  {renderStatus(item.status)}
                              </SeverityPill>
                          </Card>
                      </Grid>
                  )

              })}

          </Grid>
      </Box>
  );
};
