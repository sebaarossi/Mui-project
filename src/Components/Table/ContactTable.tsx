import { Table, TableContainer, TableCell, TableBody, TableHead, TableRow, Tab} from "@mui/material"
import { contactData } from "../../Data/ContactData"


export default function ContactTable() {
    return (
       <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Role</TableCell>
                        <TableCell>Skills</TableCell>
                        <TableCell>Start Date</TableCell>
                        <TableCell>Preference</TableCell>
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
                                                    <TableCell key={contact.id+key}>{value.join(", ")}</TableCell>
                                            )}
                                            if(key !== "id"){
                                            return (
                                                <TableCell>{value}</TableCell>
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