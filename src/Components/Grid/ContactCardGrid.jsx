import {Avatar, Card, CardContent, CardHeader, Grid, List, ListSubheader, Typography} from "@mui/material"
import { contactData } from "../../Data/ContactData"


export default function ContactDataGrid() {
    return (
       <Grid container spacing={2} sx={{width: 700}}>
            {
                contactData.map((contact) => {
                    return (
                        <Grid Item key={contact.name}>
                            <Card sx={{width: 300}}>
                                <CardHeader
                                    title={contact.name}
                                    subheader={contact.role}
                                    avatar={
                                        <Avatar>{contact.name?.substring(0,1).toUpperCase() || "A"}</Avatar>
                                    }
                                />
                                <CardContent>
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
                                                sx={{rigth: 16, position: "inherit", fontSize: "1.25rem", color: "black", paddingLeft: 0}}
                                            >
                                                Skills:
                                            </ListSubheader>
                                        }
                                    >
                                        {contact.skills.map((skill) => {
                                            return(
                                                <li style={{paddingBottom: 2}}>{skill}</li>
                                            )
                                        })}
                                        
                                    </List>
                                </CardContent>
                            </Card>
                        </Grid>
                    )
                })
            }

       </Grid>
    )
}