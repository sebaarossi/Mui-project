import {Select, MenuItem, ListItemText, SelectProps, SelectChangeEvent} from "@mui/material"
import {minWidth} from "../ContactForm"

const skills = ['React', 'Angular', 'Mic', 'Bass', 'Guitar', 'Drums']


export default function BeautifulSelect (props: {value: "" | string[] | undefined, onChange: (event: SelectChangeEvent<string[]>, child: React.ReactNode) => void}){
    return(
        <Select
            {...props}
            id="skill-select"
            renderValue={(selected : string[]) => selected.join(', ') }
            sx={{
                minWidth: minWidth,
                marginRight: 2
            }}
            >
                {skills.map((skillName) => {
                    return (
                        <MenuItem value={skillName} key={skillName}>
                            <ListItemText primary={skillName} />
                        </MenuItem>
                    )
                })}
        </Select>
    )
}