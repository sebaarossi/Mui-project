import { TextField } from "@mui/material"
import { AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider, DesktopDatePicker } from "@mui/x-date-pickers"
import { minWidth } from "../ContactForm"

export default function BeautifulDesktopDatePicker (props: {value: string | undefined, onChange: (value: string | null | undefined)=> void}) {

    return(
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
            label="Date"
            format="DD/MM/YYY"
            sx={{
                minWidth: minWidth,
            }}
            //  renderInput={(params) => {
            //     return (
            //         <TextField {...params}/>
            //     )
            //  }}
            />
        </LocalizationProvider>
    )
}