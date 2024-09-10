import {
  Box,
  Stack,
  Select,
  MenuItem,
  TextField,
  InputLabel,
  FormControl,
} from "@mui/material";
import { useState } from "react";
import {ArrowIcon,CalenderIcon} from "../../assets/iconComponent/ExportIcons";
import DatePicker from "@amir04lm26/react-modern-calendar-date-picker";
import "@amir04lm26/react-modern-calendar-date-picker/lib/DatePicker.css";
/////////////////////////////////////////////////////////////////////
const DatePickerAndSelect = ({ label, DatePickerComponent = false, data }) => {
  const [option, setOption] = useState("");
  const [openSelect, setOpenSelect] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedValue, setSelectedValue] = useState("");
  ///////////////////////////
  const handleChange = (event) => {
    setOption(event.target.value as string);
    setSelectedValue(event.target.value);
  };
  /////////////////////////
  const renderCustomInput = ({ ref }) => (
    <TextField
      ref={ref}
      placeholder="انتخاب کنید ..."
      value={
        selectedDay
          ? `${selectedDay.year}/${selectedDay.month}/${selectedDay.day}`
          : ""
      }
      InputLabelProps={{
        style: { color: "#fff" },
      }}
      sx={{
        "& input::placeholder": {
          color: "#7C8484",
          opacity: "1",
        },
        width: "100%",
      }}
      InputProps={{
        style: {
          width: "100%",
          height: "49px",
          borderRadius: "8px",
          background: "#fff",
          color: "#7C8484",
          fontSize: ".875rem",
        },
        endAdornment: <CalenderIcon style={{ marginLeft: "20px" }} />,
      }}
    />
  );
  //////////////////////
  return (
    <>
      <Stack direction="column" gap="4px">
        <InputLabel
          variant="standard"
          sx={{
            color: "#2C3333",
            fontWeight: "500",
            textAlign: "right",
            fontSize: "0.75rem",
          }}
        >
          {label}
        </InputLabel>
        {!DatePickerComponent && (
          <FormControl fullWidth>
            <Select
              displayEmpty
              open={openSelect}
              value={selectedValue}
              onChange={handleChange}
              onOpen={() => setOpenSelect(true)}
              onClose={() => setOpenSelect(false)}
              sx={{
                outline: "none",
                color: "#7C8484",
                background: "#fff",
                borderRadius: "8px",
                fontSize: ".875rem",
              }}
              SelectDisplayProps={{ style: { padding: "13px 20px" } }}
              IconComponent={() =>
                !openSelect ? (
                  <Box sx={{ display: "flex", marginLeft: "8px" }}>
                    <Box component={ArrowIcon}></Box>
                  </Box>
                ) : (
                  <Box
                    sx={{
                      display: "flex",
                      marginLeft: "8px",
                      transform: "rotate(180deg)",
                    }}
                  >
                    <Box component={ArrowIcon}></Box>
                  </Box>
                )
              }
              MenuProps={{ disableScrollLock: true }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={option || 1}
            >
              {data?.map((menuItem, i) => (
                <MenuItem value={i + 1}>{menuItem.option}</MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
        {DatePickerComponent && (
          <DatePicker
            locale="fa"
            value={selectedDay}
            shouldHighlightWeekends
            onChange={setSelectedDay}
            renderInput={renderCustomInput}
          />
        )}
      </Stack>
    </>
  );
};
export default DatePickerAndSelect;
