import { Autocomplete, FilledTextFieldProps, FormControl, FormGroup, ListItemText, MenuItem, OutlinedTextFieldProps, Paper, Select, StandardTextFieldProps, TextField, TextFieldVariants, Stack, Button, FormLabel, RadioGroup, FormControlLabel, Radio, AutocompleteChangeReason, AutocompleteInputChangeReason, SelectChangeEvent, Dialog, Alert, AlertTitle } from "@mui/material"
import { DesktopDatePicker} from "@mui/x-date-pickers"
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider"
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs"
import dayjs from 'dayjs';
import { FormValues, contactData } from '../../Data/ContactData';
import React, { useState } from "react"
import BeautifulTextField from "./FormSubComponents/BeautifulTextField";
import BeautifulAutocomplete from "./FormSubComponents/BeautifulAutocomplete";
import BeautifulSelect from "./FormSubComponents/BeautifulSelect"
import BeautifulDesktopDatePicker from "./FormSubComponents/BeautifulDesktopDatePicker";
import BeautifulRadios from "./FormSubComponents/BeautifulRadios";

export const minWidth = 300
const today = new Date()
export const defaultPreference = "Work from home"


export default function ContactForm() {
    
    const getDefaultFormValues = () => {
        return {id: contactData.length + 1, name: "", skills: ['React'], startDate: `${today.getDay()}/${today.getMonth() + 1}/${today.getFullYear()}`, preference: defaultPreference}
    }

    // useStates

    const[formValues, setFormValues] = useState <FormValues>(
        getDefaultFormValues()
    )

    const [alertOpen, setAlertOpen] = useState(false)


    // Handlers

    const handleTextFieldChange = (event : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = event.target
        setFormValues({
            ...formValues,
            [name]: value
        })
    }

    const handleAutocompleteChange = (event: React.SyntheticEvent<Element, Event>, value: string, reason: AutocompleteInputChangeReason) => {
        setFormValues({
            ...formValues,
            role: value || ""
        })
    }

    const handleSelectChange = (event: SelectChangeEvent<string[]>, child: React.ReactNode) => {
        const {target: {value}} = event
        setFormValues({
            ...formValues,
            skills: typeof value === "string" ? value.split(", ") : value
        })
    }

    const handleDatePickerChange = (value: string | null | undefined) => {
        const startDate = value as unknown as {month: () => string, date: () => string, year: () => string}
        setFormValues({
            ...formValues,
            startDate: `${startDate.date()}/${startDate.month() + 1}/${startDate.year()}`
        })
    }

    const handleRadioChange = ( event: React.ChangeEvent<HTMLInputElement>, value: string) => {
        const { name } = event.target
        setFormValues({
            ...formValues,
            [name]: value
        })
    }
    
    const handleSumbit = () => {
        contactData.push(formValues)
        setAlertOpen(true)
        clearValues()

    }

    const handleClearClick = () => {
        clearValues
    }

    const clearValues = () => {
        setFormValues({...getDefaultFormValues()})
    }

    const handleAlertClick = () => {
        setAlertOpen(false)
    }

    return (
        <>
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
                            <BeautifulTextField
                                value={formValues.name}
                                onChange={handleTextFieldChange}
                            />
                            <BeautifulAutocomplete 
                                value={formValues.role || ""}
                                onInputChange={handleAutocompleteChange}
                            />
                        </FormGroup>
                        <FormGroup
                        row
                        sx={{
                            padding: 2,
                            justifyContent: 'space-between'
                        }}
                        >
                            <BeautifulSelect 
                                value={formValues.skills || ""}
                                onChange={handleSelectChange}
                            />

                            < BeautifulDesktopDatePicker
                                value={formValues.startDate}
                                onChange={handleDatePickerChange}
                            />

                        </FormGroup>
                        <FormGroup
                        row
                        sx={{
                            padding: 2,
                            justifyContent: 'space-between'

                        }}
                        >
                            <BeautifulRadios 
                                preference={formValues.preference}
                                handleRadioChange={handleRadioChange}
                            />
                            <Stack>
                                <Button onClick={handleSumbit}>Sumbit</Button>
                                <Button>Clear</Button>
                            </Stack>
                    

                        </FormGroup>
                    </FormControl>
                </form>
            </Paper>
            <Dialog open={alertOpen} onClose={handleAlertClick}>
                <Alert>
                    <AlertTitle>
                        Success!
                    </AlertTitle>
                    Form Submitted
                </Alert>
            </Dialog>
       </>
    )
}