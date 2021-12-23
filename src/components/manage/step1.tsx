import {
    Typography,
    Grid,
    Box,
    Card,
    Button,
    Container,
    CardContent,
    TextField,
    FormControl,
    Select, MenuItem, ListItem, Chip, CardMedia, CardActions
} from '@mui/material';
import {useState} from "react";
import {SeverityPill} from "../severity-pill";
import {LocalizationProvider} from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import {FileDropzone} from "../file-dropzone";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export const Step1 = () => {

    const [files, setFiles] = useState<any[]>([]);
    const [startDate, setStartDate] = useState<Date | null>(
        new Date('2021-09-22T11:41:50')
    );
    const [endDate, setEndDate] = useState<Date | null>(
        new Date('2022-01-11T12:41:50')
    );

    const handleStartDateChange = (newValue: Date | null): void => {
        setStartDate(newValue);
    };

    const handleEndDateChange = (newValue: Date | null): void => {
        setEndDate(newValue);
    };


    const [chipData, setChipData] = useState([
        { key: 0, label: 'Chủ nhật: 4-6h' },
        { key: 1, label: 'Thứ 2: 8-10h' },
        { key: 2, label: 'Thứ 3: 10-12h' },
        { key: 3, label: 'Thứ 4: 14-16h' },
        { key: 4, label: 'Thứ 5: 12-14h' },
        { key: 5, label: 'Thứ 5: 12-14h' },
        { key: 6, label: 'Thứ 5: 12-14h' },
        { key: 7, label: 'Thứ 5: 12-14h' },
        { key: 8, label: 'Thứ 5: 12-14h' },
    ]);

    const handleDelete = (chipToDelete) => () => {
        setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    };


    const handleDrop = (newFiles: any): void => {
        setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    };

    const handleRemove = (file): void => {
        setFiles((prevFiles) => prevFiles.filter((_file) => _file.path !== file.path));
    };

    const handleRemoveAll = (): void => {
        setFiles([]);
    };
  return (
      <Box>
          <Box sx={{pb: 12}}>
              <Container>
                  <Card>
                      <CardContent>
                          <LocalizationProvider dateAdapter={AdapterDateFns}>
                              <Grid container spacing={3}>
                                  <Grid item md={4} xs={12}>
                                      <Typography variant="body2">
                                          Tên lớp *
                                      </Typography>
                                  </Grid>
                                  <Grid item md={8} xs={12}>
                                      <TextField fullWidth name="name" variant="standard"/>
                                  </Grid>

                                  <Grid item md={4} xs={12}>
                                      <Typography variant="body2">
                                          Trình độ *
                                      </Typography>
                                  </Grid>
                                  <Grid item md={8} xs={12}>
                                      <FormControl variant="standard" sx={{ minWidth: '100%' }}>
                                          <Select
                                              labelId="demo-simple-select-standard-label"
                                              id="demo-simple-select-standard"
                                              label="Age"
                                          >
                                              <MenuItem value="">
                                                  <em>Chọn trình độ</em>
                                              </MenuItem>
                                              <MenuItem value={10}>Ten</MenuItem>
                                              <MenuItem value={20}>Twenty</MenuItem>
                                              <MenuItem value={30}>Thirty</MenuItem>
                                          </Select>
                                      </FormControl>
                                  </Grid>


                                  <Grid item md={4} xs={12}>
                                      <Typography variant="body2">
                                          Chuyên môn *
                                      </Typography>
                                  </Grid>
                                  <Grid item md={8} xs={12}>
                                      <TextField fullWidth name="name" variant="standard"/>
                                  </Grid>


                                  <Grid item md={4} xs={12}>
                                      <Typography variant="body2">
                                          Tổng số buổi học *
                                      </Typography>
                                  </Grid>
                                  <Grid item md={8} xs={12}>
                                      <TextField fullWidth name="name" variant="standard"/>
                                  </Grid>
                                  <Grid item md={4} xs={12}>
                                      <Typography variant="body2">
                                          Ngày khai giảng *
                                      </Typography>
                                  </Grid>
                                  <Grid item md={8} xs={12}>
                                      <DesktopDatePicker
                                          inputFormat="MM/dd/yyyy"
                                          value={startDate}
                                          onChange={handleStartDateChange}
                                          renderInput={(inputProps) => <TextField variant="standard" fullWidth  {...inputProps} />}
                                      />
                                  </Grid>


                                  <Grid item md={4} xs={12}>
                                      <Typography variant="body2">
                                          Lịch học *
                                      </Typography>
                                  </Grid>
                                  <Grid item md={8} xs={12} >
                                      <Box sx={{
                                          display: 'flex',
                                          flexWrap: 'wrap',
                                          listStyle: 'none',
                                          m: 0,
                                      }}>
                                          {chipData.map((data) => {
                                              let icon;

                                              return (
                                                  <ListItem key={data.key} sx={{width: 'auto', p: 0, mr: 0.5, mb: 0.5}}>
                                                      <Chip
                                                          icon={icon}
                                                          label={data.label}
                                                          onDelete={handleDelete(data)}
                                                      />
                                                  </ListItem>
                                              );
                                          })}
                                      </Box>

                                  </Grid>

                                  <Grid item md={4} xs={12}>
                                      <Typography variant="body2">
                                          Ngày kết thúc *
                                      </Typography>
                                  </Grid>
                                  <Grid item md={8} xs={12}>
                                      <DesktopDatePicker
                                          inputFormat="MM/dd/yyyy"
                                          value={endDate}
                                          onChange={handleEndDateChange}
                                          renderInput={(inputProps) => <TextField variant="standard" fullWidth  {...inputProps} />}
                                      />
                                  </Grid>



                                  <Grid item md={4} xs={12}>
                                      <Typography variant="body2">
                                          Sĩ số tối đa *
                                      </Typography>
                                  </Grid>
                                  <Grid item md={8} xs={12}>
                                      <TextField fullWidth name="name" variant="standard"/>
                                  </Grid>


                                  <Grid item md={4} xs={12}>
                                      <Typography variant="body2">
                                          Độ tuổi học sinh *
                                      </Typography>
                                  </Grid>
                                  <Grid item md={8} xs={12}>
                                      <TextField fullWidth name="name" variant="standard"/>
                                  </Grid>
                              </Grid>
                          </LocalizationProvider>
                      </CardContent>
                  </Card>

                  <Card sx={{mt: 4}}>
                      <CardMedia sx={{p: 1}}>
                          <FileDropzone
                              title="Ảnh đại diện lớp học *"
                              accept="image/*"
                              files={files}
                              onDrop={handleDrop}
                              onRemove={handleRemove}
                              onRemoveAll={handleRemoveAll}
                          />
                      </CardMedia>
                  </Card>
                  <Box sx={{textAlign: 'right'}}>
                      <Typography variant="caption">
                          Định dạng hỗ trợ:  jpg / jpeg / png . Dung lượng mỗi tệp không quá 4.5 MB
                      </Typography>
                  </Box>

                  <Card sx={{mt: 4}}>
                      <CardMedia  sx={{p: 1}}>
                          <FileDropzone
                              title="Video giới thiệu lớp học"
                              accept="video/*"
                              files={files}
                              onDrop={handleDrop}
                              onRemove={handleRemove}
                              onRemoveAll={handleRemoveAll}
                          />
                      </CardMedia>
                  </Card>
                  <Box sx={{textAlign: 'right'}}>
                      <Typography variant="caption">
                          Định dạng hỗ trợ: .mp4. Dung lượng mỗi tệp không quá 50 MB
                      </Typography>
                  </Box>

                  <Card sx={{mt: 4}}>
                      <CardContent>
                          <Typography
                              sx={{ mb: 1 }}
                              variant="subtitle2"
                          >
                              Mô tả chung
                          </Typography>
                          <TextField
                              fullWidth
                              name="message"
                              placeholder="(tối đa 200 ký tự) *"
                              required
                              multiline
                              rows={6}
                          />
                      </CardContent>
                  </Card>
                  <Box sx={{textAlign: 'right'}}>
                      <Typography variant="caption">
                          0/200
                      </Typography>
                  </Box>
              </Container>
          </Box>
          <Box sx={{position: 'fixed', bottom: 0, width: '100%', paddingLeft: '280px', left: 0}}>
              <Container>
                  <Card>
                      <CardActions sx={{justifyContent: 'space-between'}}>
                          <Button
                              sx={{ m: 1 }}
                              variant="outlined"
                              startIcon={<ArrowBackIosIcon fontSize="small"/>}
                          >
                              Quay lại
                          </Button>
                          <Button
                              sx={{ m: 1 }}
                              type="submit"
                              variant="contained"
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
