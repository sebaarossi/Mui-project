import { Autocomplete, FilledTextFieldProps, FormControl, FormGroup, ListItemText, MenuItem, OutlinedTextFieldProps, Paper, Select, StandardTextFieldProps, TextField, TextFieldVariants, Stack, Button, FormLabel, RadioGroup, FormControlLabel, Radio } from "@mui/material"
import { DesktopDatePicker} from "@mui/x-date-pickers"
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider"
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs"
import { FormValues, contactData } from '../../Data/ContactData';
import { useState } from "react"

const roles = ['dev', 'Bass', 'Guitarist', 'Drummer']
const skills = ['React', 'Angular', 'Mic', 'Bass', 'Guitar', 'Drums']
const minWidth = 300
const today = new Date()
const defaultPreference = "Work from home"


export default function ContactForm() {
    
    const getDefaultFormValues = () => {
        return {id: contactData.length + 1, name: "", skills: [], startDate: `${today.getDay()}/${today.getMonth() + 1}/${today.getFullYear()}`, preference: defaultPreference}
    }
    const[formValues, setFormValues] = useState <FormValues>(
        getDefaultFormValues()
    )
    
    return (
       <Paper>
        <form>
            <FormControl>
                <FormGroup
                    row
                    sx={{
                        padding: 2,
                        justifyContent: 'space-between'

                    }}
                >
                    <TextField 
                     id="name"
                     name="name"
                     label="Name"
                     variant="outlined"
                     sx={{
                        minWidth: minWidth,
                        marginRight: 2
                     }}
                     value={formValues.name}
                    />
                    <Autocomplete 
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
                     value={formValues.role}
                    />
                </FormGroup>
                <FormGroup
                 row
                 sx={{
                    padding: 2,
                    justifyContent: 'space-between'
                }}
                >
                    <Select
                     id="skill-select"
                     renderValue={(selected : string[]) => selected.join(', ') }
                     sx={{
                        minWidth: minWidth,
                        marginRight: 2
                     }}
                     value={formValues.skills}
                    >
                        {skills.map((skillName) => {
                            return (
                                <MenuItem value={skillName} key={skillName}>
                                    <ListItemText primary={skillName} />
                                </MenuItem>
                            )
                        })}

                    </Select>

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
                        value={formValues.startDate}
                        onChange={() => {}}
                        />
                    </LocalizationProvider>

                </FormGroup>
                <FormGroup
                 row
                 sx={{
                    padding: 2,
                    justifyContent: 'space-between'

                }}
                >
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
                         value={formValues.preference}
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
                    <Stack>
                        <Button>Sumbit</Button>
                        <Button>Clear</Button>
                    </Stack>
            

                </FormGroup>
            </FormControl>
        </form>
       </Paper>
    )
}