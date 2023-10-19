import {Avatar, Card, CardContent, CardHeader, Grid, List, ListSubheader, Typography, Box, Collapse, Button} from "@mui/material"
import { contactData } from "../../Data/ContactData"
import { useState } from "react"

const contactHeight = 24
var maxSkills = 1

export default function ContactDataGrid() {
    
    const [open, setOpen] = useState(true)

    const gridAlignProps = open? {} : {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
    
    return (
        <Box m={1}>
            <Button sx={{margin: 6}} variant="contained" onClick={() => setOpen(false)}>Collapse</Button>
            <Button sx={{margin: 6}} variant="contained" onClick={() => setOpen(true)}>Expand</Button>
            <Grid container spacing={2} sx={{width: 900, height: 500}}>
                    {
                        contactData.map((contact) => {
                            maxSkills = (contact.skills?.length || 0) > maxSkills ? contact.skills?.length || 0 : maxSkills
                            return (
                                <Grid Item key={contact.name} xs={open? 6 : 12} sx={{...gridAlignProps}}>
                                    <Card sx={{width: 300, margin: 6, boxShadow: 6}}>
                                        <CardHeader
                                            title={contact.name}
                                            subheader={contact.role}
                                            avatar={
                                                <Avatar sx={{backgroundColor: "primary.main"}}>{contact.name?.substring(0,1).toUpperCase() || "A"}</Avatar>
                                            }
                                            sx={{borderBottom: "1px solid", borderBottomColor: "primary.main"}}
                                        />
                                        <Collapse in={open} timeout={1000} orientation="vertical">
                                            <CardContent sx={{height: (104 + maxSkills * contactHeight)}}>
                                                <Typography>
                                                    <b>Start Date: </b> {contact.startDate}
                                                </Typography>
                                                <Typography>
                                                    <b>Preference: </b> {contact.preference}
                                                </Typography>
                                                <List
                                                    sx={{ listStyle: "list-item", listStyleType: "circle", padding: 2}}
                                                    subheader={
                                                        <ListSubheader
                                                            sx={{rigth: 16, position: "inherit", fontSize: "1.25rem", color: "black", paddingLeft: 0,textAlign: "left"}}
                                                        >
                                                            Skills:
                                                        </ListSubheader>
                                                    }
                                                >
                                                    {contact.skills.map((skill) => {
                                                        return(
                                                            <li style={{paddingBottom: 2, fontSize: 16, textAlign: "left"}}>{skill}</li>
                                                        )
                                                    })}
                                                    
                                                </List>
                                            </CardContent>
                                        </Collapse>
                                    </Card>
                                </Grid>
                            )
                        })
                    }

            </Grid>
        </Box>
    )
}