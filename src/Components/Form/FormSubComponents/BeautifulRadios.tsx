import { FormControlLabel, FormGroup, FormHelperText, FormLabel, Radio, RadioGroup } from "@mui/material";
import { minWidth, defaultPreference } from '../ContactForm';

export default function BeautifulRadios(props:{preference: string | undefined, handleRadioChange: (event: React.ChangeEvent<HTMLInputElement>, value: string) => void}){
    return (
        <FormGroup
            sx={{
                minWidth: minWidth,
                marginRight: 2
            }}
        >
            <FormLabel component="legend">
                Work Preference
            </FormLabel>
            <RadioGroup
                id="preference-type-radio"
                name="preference"
            >
                <FormControlLabel 
                    control={<Radio />}
                    label= {defaultPreference}
                    value= {defaultPreference}
                />
                <FormControlLabel 
                    control={<Radio />}
                    label="Hybrid"
                    value="Hybrid"
                />
                <FormControlLabel 
                    control={<Radio />}
                    label="In office"
                    value="In office"
                />

            </RadioGroup>

        </FormGroup>
    )
}