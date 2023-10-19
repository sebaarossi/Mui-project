import { Table, TableContainer, TableCell, TableBody, TableHead, TableRow, Tab} from "@mui/material"
import { contactData } from "../../Data/ContactData"


export default function ContactTable() {
    return (
       <TableContainer sx={{backgroundColor: "white"}}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{fontSize: "16px", fontWeight: "bold", textAlign: "center"}}>Name</TableCell>
                        <TableCell sx={{fontSize: "16px", fontWeight: "bold", textAlign: "center"}}>Role</TableCell>
                        <TableCell sx={{fontSize: "16px", fontWeight: "bold", textAlign: "center"}}>Skills</TableCell>
                        <TableCell sx={{fontSize: "16px", fontWeight: "bold", textAlign: "center"}}>Start Date</TableCell>
                        <TableCell sx={{fontSize: "16px", fontWeight: "bold", textAlign: "center"}}>Preference</TableCell>
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
                                                    <TableCell sx={{textAlign: "center"}} key={contact.id+key}>{value.join(", ")}</TableCell>
                                            )}
                                            if(key !== "id"){
                                            return (
                                                <TableCell sx={{textAlign: "center"}}>{value}</TableCell>
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