import { useCallback } from "react"
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid"
import {useTheme, Theme} from "@mui/material/styles"
import { contactData } from '../../Data/ContactData';

const columns = (theme: Theme) =>  [
    {
        field: "name",
        headerName: "Name",
        minWidth: 150,
        renderCell: (cellValues: GridRenderCellParams<string>) => {
            return (cellValues.value)
        }
    },
    {
        field: "role",
        headerName: "Role",
        minWidth: 150,
        renderCell: (cellValues: GridRenderCellParams<string>) => {
            return (cellValues.value)
        }
    },
    {
        field: "skills",
        headerName: "Skills",
        minWidth: 150,
        renderCell: (cellValues: GridRenderCellParams<string[]>) => {
            return (
                <div style={{color: theme.palette.primary.main}}>
                    {cellValues.value ? cellValues.value[0] : ""}
                </div>
            )
        }
    },
    {
        field: "startDate",
        headerName: "Start Date",
        minWidth: 120,
        renderCell: (cellValues: GridRenderCellParams<string>) => {
            return (cellValues.value)
        }
    },
    {
        field: "preference",
        headerName: "Preference",
        minWidth: 150,
        renderCell: (cellValues: GridRenderCellParams<string>) => {
            return (cellValues.value)
        }
    }
]

export default function ContactDatadGrid() {
    const rows = () => [...contactData]
    const theme = useTheme()
    return (
        <div style={{height: "500"}}>
            <DataGrid
            rows={rows()}
            columns={columns(theme)}
            pageSize={5}
            headerHeight={60}
            rowHeight={120}
            />
        </div>
       
    )
}