import {
  BaleIcon,
  EitaaIcon,
  AparatIcon,
  WhatsappIcon,
  FacebookIcon,
  InstagramIcon,
} from "../assets/iconComponent/ExportIcons";
import { useEffect, useState } from "react";
import Logo from "../assets/images/logo.png";
import Leaders from "../assets/images/leaders.png";
import { Box, Typography, Stack, Link } from "@mui/material";
/////////////////////////////////////////////////////////////////////
const MainHeader = () => {
  // get time RealTime
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const hour = time.getHours();
  const minute = time.getMinutes();
  const second = time.getSeconds();
  const formattedTime = `${hour.toString().padStart(2, "0")}:${minute
    .toString()
    .padStart(2, "0")}:${second.toString().padStart(2, "0")}`;
  /////////////////////
  return (
    <Box
      sx={{
        gap: "20px",
        display: "flex",
        justifyContent: "space-between",
        padding: { xs: "15px 20px", sm: "15px 40px" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: { xs: "8px", lg: "24px" },
        }}
      >
        <Box
          component="img"
          sx={{
            width: { xs: "100px", lg: "145px" },
            height: { xs: "50px", lg: "72px" },
          }}
          src={Logo}
        />
        <Box sx={{ width: "1px", height: "100%", background: "#D1232A" }}></Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: "4px", lg: "12px" },
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            sx={{
              color: "#D1232A",
              fontWeight: "700",
              lineHeight: "26px",
              fontSize: { xs: ".875rem", lg: "1.5rem" },
            }}
          >
            پایگاه خبری داروغه
          </Typography>
          <Typography
            sx={{
              fontWeight: "700",
              lineHeight: "18px",
              fontSize: { xs: "0.75rem", lg: "0.875rem" },
            }}
          >
            اولین پایگاه اختصاصی حوضه حقوق و قضایی
          </Typography>
        </Box>
      </Box>
      <Box
        src={Leaders}
        component="img"
        sx={{
          transform: "translate(0,14px)",
          display: { xs: "none", lg: "block" },
        }}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          width: { sm: "200px", lg: "445px" },
        }}
      >
        <Box
          sx={{
            gap: "12px",
            display: "flex",
            maxWidth: "265px",
            alignSelf: "center",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              alignSelf: "end",
              borderRadius: "6px",
              border: "1px solid #D1232A",
              display: { xs: "none", lg: "flex" },
            }}
          >
            <Typography
              sx={{
                color: "#fff",
                fontWeight: "700",
                lineHeight: "20px",
                textWrap: "nowrap",
                padding: "4px 8px",
                fontSize: ".875rem",
                background: "#D1232A",
              }}
            >
              ساعت ایران
            </Typography>
            <Typography
              sx={{
                width: "100px",
                color: "#212121",
                fontWeight: "700",
                textWrap: "nowrap",
                lineHeight: "20px",
                padding: "4px 0px",
                fontSize: ".875rem",
                textAlign: "center",
              }}
            >
              {formattedTime}
            </Typography>
          </Box>
          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{
              display: { xs: "none", sm: "flex" },
              width: { sm: "200px", lg: "265px" },
              height: "24px",
            }}
          >
            <Link href="#">
              <WhatsappIcon />
            </Link>
            <Link href="#">
              <InstagramIcon />
            </Link>
            <Link href="#">
              <BaleIcon />
            </Link>
            <Link href="#">
              <FacebookIcon />
            </Link>
            <Link href="#">
              <EitaaIcon />
            </Link>
            <Link href="#">
              <AparatIcon />
            </Link>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};
export default MainHeader;
