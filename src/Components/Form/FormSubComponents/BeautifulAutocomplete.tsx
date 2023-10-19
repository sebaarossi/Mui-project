import { Autocomplete, TextField, AutocompleteProps, AutocompleteInputChangeReason } from "@mui/material";
import { minWidth } from "../ContactForm";

const roles = ['dev', 'Bass', 'Guitarist', 'Drummer']

export default function BeautifulAutocomplete(props: {value: string, onInputChange: (event: React.SyntheticEvent<Element, Event>, value: string, reason: AutocompleteInputChangeReason) => void}){
    return (
        <Autocomplete 
            {...props}
            options={roles}
            sx={{
                minWidth: minWidth,
            }}
            renderInput={(params)=>{
                return (
                    <TextField 
                    name="role"
                    sx={{
                        "& .MuiOulinedInput-root.Mui-focused":{
                            color: "primary.dark"
                        }
                    }}
                    {...params}
                    />
                )
            }}
            getOptionLabel={(roleOption) => `${roleOption}`}
            renderOption={(props, option) => {
                return(
                    <li {...props}>
                        `${option}`
                    </li>
                )
            }}
            ListboxProps={{
                sx:{
                    height:100,
                    color: "yellow",
                    "& li.MuiAutocomplete-option:nth-child(even)": {backgroundColor: "green"},
                    "& li.MuiAutocomplete-option:hover": {backgroundColor: "gold"},
                    "& li.MuiAutocomplete-option[aria-selected-'true'].Mui-focused": {backgroundColor: "green"},
                }
            }}
            isOptionEqualToValue={(option, value) => option === value || value === ""}
        />
    )
}