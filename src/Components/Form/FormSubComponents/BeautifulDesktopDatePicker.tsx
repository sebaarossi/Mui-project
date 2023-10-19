import { TextField } from "@mui/material"
import { AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider, DesktopDatePicker, DatePicker} from "@mui/x-date-pickers"
import { minWidth } from '../ContactForm';
import { CalendarIcon } from "@mui/x-date-pickers"

const popperSx = {
    // color: "yellow"
    "& .MuiPaper-root": {
        color: "yellow"
    },
    " [role-grid]":{
        backgroundColor:"green",
        "& button": {
            backgroundColor: "red"
        }
    }
}

export default function BeautifulDesktopDatePicker (props: {value: string | undefined, onChange: (value: string | null | undefined)=> void}) {

    return(
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
            label="Date"
            format="DD/MM/YYY"
            sx={{
                minWidth: minWidth,
            }}
            views={["day"]}
            // renderInput = {(params: any) => {
            //     return (
            //         <TextField {...params} sx={{minWidth: minWidth}} />
            //     )
            // }}
            components={{
                OpenPickerIcon: CalendarIcon
            }}
            // InputProps={{
            //     sx: {"& .MuiSvgIcon-root": {color: "primary.main"}}
            // }}
            // PopperProps={{
            //     sx : popperSx
            // }}
            />
        </LocalizationProvider>
    )
}