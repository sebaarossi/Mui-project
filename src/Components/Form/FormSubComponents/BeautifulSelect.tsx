import {Select, MenuItem, ListItemText, SelectProps, SelectChangeEvent, Checkbox} from "@mui/material"
import {minWidth} from "../ContactForm"
import { ReactNode, useRef, useState, useEffect } from "react"



export default function BeautifulSelect (
    props: {
        value: "" | string[] | undefined, 
        onChange: (event: SelectChangeEvent<string[]>, child: React.ReactNode) => void
        children: ReactNode[]
    }){
    
    const selectInputComponent = useRef<HTMLInputElement>(null)
    
    const [position, setPosition] = useState(0)

    useEffect(() => {

        setPosition(selectInputComponent.current ? (selectInputComponent.current.getBoundingClientRect().left + 20) : 0)
    }, [selectInputComponent])

    return(
        <Select
            ref={selectInputComponent}
            {...props}
            id="skill-select"
            renderValue={(selected : string[]) => selected.join(', ') }
            sx={{
                minWidth: minWidth,
                marginRight: 2
            }}
            multiple
            MenuProps={{
                PaperProps: {
                    sx: {
                        left:`${position}px !important`,
                        maxHeight: 180
                    }
                }
            }}
            >
            {props.children}
        </Select>
    )
}