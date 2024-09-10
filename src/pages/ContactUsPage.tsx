import {
  BaleIcon,
  EitaaIcon,
  AparatIcon,
  WhatsappIcon,
  FacebookIcon,
  InstagramIcon,
} from "../assets/iconComponent/ExportIcons";
import {
  Box,
  Grid,
  Link,
  Stack,
  Button,
  Container,
  TextField,
  InputLabel,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Daroghe from "../assets/images/darogheRotate.svg";
import HeadingPages from "../components/ReUseableComponent/HeadingPages";
/////////////////////////////////////////////////////////////////////
const ContactUsPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  /////////////////////////////////////////////////////////////////////
  return (
    <>
      <Stack direction="column" height="100%">
        <Header />
        <Container maxWidth="lg" sx={{ flexGrow: "1" }}>
          <HeadingPages title="تماس با پایگاه خبری داروغه" />
          <Stack direction="column" sx={{ padding: "16px 0 32px" }}>
            <Box
              sx={{
                width: "100%",
                height: "4px",
                display: { xs: "none", sm: "block" },
                background: "linear-gradient(270deg, #D1232A 0%, #FFF4F5 100%)",
              }}
            ></Box>
            <Box
              sx={{
                display: "grid",
                gap: { xs: "32px", md: "40px" },
                gridTemplateColumns: { xs: "1fr", lg: "6fr 6fr" },
              }}
            >
              <Grid container>
                <Grid item xs={12} sm={2} lg={3}>
                  <Box
                    sx={{
                      height: "100%",
                      padding: "10px",
                      overflow: "hidden",
                      position: "relative",
                      alignItems: "center",
                      background: "#212121ED",
                      justifyContent: "center",
                      display: { xs: "none", sm: "flex" },
                    }}
                  >
                    <Box component="img" src={Daroghe} />
                    <Box
                      sx={{
                        width: "0",
                        bottom: "0",
                        height: "0",
                        zIndex: "100",
                        position: "absolute",
                        borderLeft: {
                          sm: "85px solid transparent",
                          lg: "70px solid transparent",
                        },
                        borderRight: {
                          sm: "85px solid transparent",
                          lg: "70px solid transparent",
                        },
                        borderBottom: {
                          sm: "50px solid #fff",
                          lg: "40px solid #fff",
                        },
                      }}
                    ></Box>
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={10}
                  lg={9}
                  component={Stack}
                  sx={{
                    gap: "12px",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: { xs: "0px", sm: "42px 0 50px" },
                  }}
                >
                  <Stack
                    spacing="12px"
                    direction="column"
                    sx={{
                      width: "100%",
                      padding: "16px",
                      alignItems: "center",
                      background: "#D1232AF0",
                      justifyContent: "center",
                      borderRadius: { xs: "8px", sm: "8px 0 0 8px" },
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#fff",
                        fontWeight: "600",
                        lineHeight: "25px",
                        textAlign: "justify",
                        fontSize: { xs: ".875rem", sm: "1rem" },
                      }}
                    >
                      شماره روابط عمومی
                    </Typography>
                    <Typography
                      sx={{
                        color: "#fff",
                        fontWeight: "500",
                        lineHeight: "30px",
                        textAlign: "center",
                        fontSize: { xs: ".875rem", sm: "1rem" },
                      }}
                    >
                      ۰۵۱۳۸۴۶۹۱۵۳
                    </Typography>
                  </Stack>
                  <Stack
                    spacing="12px"
                    sx={{
                      padding: "16px",
                      alignItems: "center",
                      flexDirection: "column",
                      background: "#D1232AF0",
                      justifyContent: "center",
                      borderRadius: { xs: "8px", sm: "8px 0 0 8px" },
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#fff",
                        fontWeight: "600",
                        lineHeight: "25px",
                        textAlign: "justify",
                        fontSize: { xs: ".875rem", sm: "1rem" },
                      }}
                    >
                      تبلیغات در داروغه
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: "500",
                        lineHeight: "30px",
                        color: "#fff",
                        textAlign: "center",
                        fontSize: { xs: ".875rem", sm: "1rem" },
                      }}
                    >
                      ۰۵۱۳۸۴۶۹۱۵۳
                    </Typography>
                  </Stack>
                  <Stack
                    direction="column"
                    spacing="12px"
                    sx={{
                      padding: "16px",
                      alignItems: "center",
                      flexDirection: "column",
                      background: "#D1232AF0",
                      justifyContent: "center",
                      borderRadius: { xs: "8px", sm: "8px 0 0 8px" },
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#fff",
                        fontWeight: "600",
                        lineHeight: "25px",
                        textAlign: "justify",
                        fontSize: { xs: ".875rem", sm: "1rem" },
                      }}
                    >
                      پیام رسان
                    </Typography>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      sx={{ gap: { xs: "8px", sm: "16px" } }}
                    >
                      <Link href="#">
                        <WhatsappIcon color="#fff" width="32px" xsSize />
                      </Link>
                      <Link href="#">
                        <InstagramIcon color="#fff" width="32px" xsSize />
                      </Link>
                      <Link href="#">
                        <BaleIcon color="#fff" width="32px" xsSize />
                      </Link>
                      <Link href="#">
                        <FacebookIcon color="#fff" width="32px" xsSize />
                      </Link>
                      <Link href="#">
                        <EitaaIcon color="#fff" width="32px" xsSize />
                      </Link>
                      <Link href="#">
                        <AparatIcon color="#fff" width="32px" xsSize />
                      </Link>
                    </Stack>
                  </Stack>
                  <Stack
                    direction="column"
                    spacing="12px"
                    sx={{
                      padding: "16px",
                      alignItems: "center",
                      background: "#D1232AF0",
                      justifyContent: "center",
                      borderRadius: { xs: "8px", sm: "8px 0 0 8px" },
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#fff",
                        fontWeight: "600",
                        lineHeight: "25px",
                        textAlign: "justify",
                        fontSize: { xs: ".875rem", sm: "1rem" },
                      }}
                    >
                      آدرس
                    </Typography>
                    <Typography
                      sx={{
                        color: "#fff",
                        fontWeight: "500",
                        lineHeight: "30px",
                        textAlign: "center",
                        fontSize: { xs: ".875rem", sm: "1rem" },
                      }}
                    >
                      مشهد خیابان احمداباد، احمداباد۱۳، پلاک ۵، واحد ۲۰۱
                    </Typography>
                  </Stack>
                </Grid>
              </Grid>
              <Stack
                direction="column"
                gap={2}
                sx={{ padding: { xs: "0px", lg: "42px 0 50px" } }}
              >
                <Typography
                  sx={{
                    color: "#080F18",
                    fontWeight: "600",
                    lineHeight: "22px",
                  }}
                >
                  فرم ارسال سوالات، پیشنهادات و انتقادات
                </Typography>

                <form
                  onSubmit={handleSubmit(onSubmit)}
                  style={{
                    gap: "10px",
                    padding: "16px",
                    direction: "rtl",
                    borderRadius: "16px",
                    boxShadow: " 0px 8px 16px 0px #D1232A3D",
                  }}
                >
                  <InputLabel
                    htmlFor="name"
                    sx={{
                      color: "#2C3333",
                      fontWeight: "500",
                      lineHeight: "18px",
                      fontSize: "0.75rem",
                      marginBottom: "5px",
                    }}
                  >
                    نام و نام خانوادگی*
                  </InputLabel>
                  <TextField
                    inputProps={{
                      style: {
                        padding: "12px",
                        borderRadius: "10px",
                      },
                    }}
                    sx={{
                      marginBottom: "16px",
                      "&fieldset": {
                        outline: "none",
                        borderRadius: "8px",
                        border: "1px solid #B7BFC7",
                      },
                      "& .MuiFormHelperText-root.Mui-error": {
                        left: 0,
                        margin: "0",
                        bottom: "-22px",
                        position: "absolute",
                      },
                    }}
                    id="name"
                    {...register("name", {
                      required: "نام و نام خانوادگی الزامی می باشد .",
                    })}
                    fullWidth
                    error={Boolean(errors.name)}
                    helperText={errors.name?.message}
                    placeholder="نام و نام خانوادگی خود را وارد کنید"
                  />

                  <InputLabel
                    htmlFor="email"
                    sx={{
                      color: "#2C3333",
                      fontWeight: "500",
                      lineHeight: "18px",
                      marginBottom: "5px",
                      fontSize: "0.75rem",
                    }}
                  >
                    ایمیل*
                  </InputLabel>
                  <TextField
                    inputProps={{
                      style: {
                        padding: "12px",
                        borderRadius: "10px",
                      },
                    }}
                    sx={{
                      marginBottom: "16px",
                      "& .fieldset": {
                        outline: "none",
                        border: "1px solid #B7BFC7",
                      },
                      "& .MuiFormHelperText-root.Mui-error": {
                        left: 0,
                        margin: "0",
                        bottom: "-22px",
                        position: "absolute",
                      },
                    }}
                    id="email"
                    {...register("email", {
                      required: "ایمیل الزامی می باشد .",
                      pattern: {
                        value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                        message: "آدرس ایمیل معتبر نمی باشد .",
                      },
                    })}
                    fullWidth
                    error={Boolean(errors.email)}
                    helperText={errors.email?.message}
                    placeholder="ایمیل خود را وارد کنید"
                  />
                  <InputLabel
                    htmlFor="message"
                    sx={{
                      color: "#2C3333",
                      fontWeight: "500",
                      lineHeight: "18px",
                      fontSize: "0.75rem",
                      marginBottom: "5px",
                    }}
                  >
                    پیغام*
                  </InputLabel>
                  <TextField
                    sx={{
                      marginBottom: "16px",
                      "&fieldset": {
                        outline: "none",
                        border: "1px solid #B7BFC7",
                      },
                    }}
                    id="message"
                    {...register("message")}
                    multiline
                    rows={4}
                    fullWidth
                    placeholder="پیغام خود را بنویسید"
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      width: "100%",
                      color: "#fff",
                      fontWeight: "500",
                      background: "#D1232A",
                      boxShadow: "0px 8px 16px 0px #D1232A3D",
                      "&:hover": {
                        background: "#8B0000",
                        boxShadow: "0px 8px 16px 0px #D1232A3D",
                      },
                    }}
                  >
                    ارسال
                  </Button>
                </form>
              </Stack>
            </Box>
          </Stack>
        </Container>
        <Footer />
      </Stack>
    </>
  );
};

export default ContactUsPage;
