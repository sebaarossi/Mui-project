import { Table, TableContainer, TableCell, TableBody, TableHead, TableRow, Tab} from "@mui/material"
import { contactData } from "../../Data/ContactData"

const borderColor = {
    borderBottomColor: "primary.main"
}

export default function ContactTable() {
    return (
       <TableContainer sx={{backgroundColor: "white", borderRadius: 1, boxShadow: 4}}>
            <Table>
                <TableHead>
                    <TableRow sx={{backgroundColor: "grid.main"}}>
                        <TableCell sx={{...borderColor, width: "30%"}} >Name</TableCell>
                        <TableCell sx={{...borderColor, width: "17%"}}>Role</TableCell>
                        <TableCell sx={{...borderColor, width: "17%"}}>Skills</TableCell>
                        <TableCell sx={{...borderColor, width: "17%"}}>Start Date</TableCell>
                        <TableCell sx={{...borderColor, width: "19%"}}>Preference</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        contactData.map((contact) => {
                            return (
                                <TableRow key={contact.id}>
                                    {
                                        Object.entries(contact).map(([key, value]) =>{
                                            if(key === "skills"){
                                                return (
                                                    <TableCell sx={{...borderColor}} key={contact.id+key}>{value.join(", ")}</TableCell>
                                            )}
                                            if(key === "name"){
                                                return (
                                                    <TableCell 
                                                        sx={{...borderColor, backgroundColor: "primary.light"}}
                                                        key={contact.id + key}
                                                        onClick={(event: React.MouseEvent<HTMLElement>) => {
                                                            console.log((event.target as Element).innerHTML)
                                                        }}

                                                    >
                                                        {value}
                                                    </TableCell>
                                            )}
                                            if(key !== "id"){
                                                return (
                                                    <TableCell sx={{}}>{value}</TableCell>
                                            )}
                                            return ""
                                        })
                                    }
                                </TableRow>
                            )
                        })
                    }

                </TableBody>
            </Table>
       </TableContainer>
    )
}