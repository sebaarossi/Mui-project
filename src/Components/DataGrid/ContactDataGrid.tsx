import { useCallback } from "react"
import { DataGrid, GridRenderCellParams, GridToolbar, GridToolbarContainer, GridToolbarExport } from "@mui/x-data-grid"
import {useTheme, Theme} from "@mui/material/styles"
import { contactData } from '../../Data/ContactData';
import { Box, Button } from "@mui/material";

const handlePrintClick = (cellValues: GridRenderCellParams) => {
    console.log(cellValues)
}

const dataGridSx = {
    "& .MuiDataGrid-columnHeaders":{
        backgroundColor: "primary.main",
        fontWeight: "bold",
        fontSize: 20
    },
    "& .MuiDataGrid-virtualScrollerRenderZone": {
        "& .MuiDataGrid-row": {
            "&:nth-of-type(2n)":{backgroundColor: "grid.main"}
        }
    }
}

const columns = (theme: Theme) =>  [
    {
        field: "name",
        headerName: "Name",
        minWidth: 150,
        // renderCell: (cellValues: GridRenderCellParams<string>) => {
        //     return (
        //         <Box
        //             sx={{color: "primary.main",
        //                 fontWeight: "bold",
        //             }}    
        //         >
        //             {cellValues.value}
        //         </Box>
        //     )
        // }
    },
    {
        field: "role",
        headerName: "Role",
        minWidth: 150,
        // renderCell: (cellValues: GridRenderCellParams<string>) => {
        //     return (cellValues.value)
        // }
    },
    {
        field: "skills",
        headerName: "Skills",
        minWidth: 150,
        // renderCell: (cellValues: GridRenderCellParams<string[]>) => {
        //     return (
        //         <div style={{color: theme.palette.primary.main}}>
        //             {cellValues.value ? cellValues.value[0] : ""}
        //         </div>
        //     )
        // }
    },
    {
        field: "startDate",
        headerName: "Start Date",
        minWidth: 120,
        // renderCell: (cellValues: GridRenderCellParams<string>) => {
        //     return (cellValues.value)
        // }
    },
    {
        field: "preference",
        headerName: "Preference",
        minWidth: 150,
        // renderCell: (cellValues: GridRenderCellParams<string>) => {
        //     return (cellValues.value)
        // }
    },
    {
        field: "Print",
        // renderCell: (cellValues: GridRenderCellParams) => {
        //     return (
        //         <Button
        //             variant="contained"
        //             color="primary"
        //             onClick={() => {
        //                 handlePrintClick(cellValues)
        //             }}
        //         >
        //             Print
        //         </Button>
        //     )
        // }
    }
]

export default function ContactDatadGrid() {
    const rows = () => [...contactData]
    const theme = useTheme()
    return (
        <div style={{height: "500", backgroundColor: "white"}}>
            <DataGrid
                rows={rows()}
                columns={columns(theme)}
                // pageSize={5}
                // headerHeight={60}
                rowHeight={70}
                // sx={{
                //     boxShadow: 2,
                //     border: 2,
                //     borderColor: 'primary.light',
                //     '& .MuiDataGrid-cell:hover': {
                //       color: 'primary.main',
                //     },
                // }}
                sx={dataGridSx}
                components={
                    {
                        // Toolbar: () => (<GridToolbar sx={{justifyContent: "flex-end", "& button":{border: "none"}, "& .MuiBox-root": {display: "none"}}}></GridToolbar>)
                        Toolbar: () => (<GridToolbarContainer sx={{justifyContent: "flex-end", "& button":{border: "none"}, "& .MuiBox-root": {display: "none"}}}><GridToolbarExport></GridToolbarExport></GridToolbarContainer>)
                    }
                }
                initialState={{
                    sorting: { sortModel: [{field: "name", sort: "asc"}]}
                }}
            />
        </div>
       
    )
}