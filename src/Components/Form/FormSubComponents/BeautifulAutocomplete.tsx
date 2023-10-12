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
            isOptionEqualToValue={(option, value) => option === value || value === ""}
        />
    )
}