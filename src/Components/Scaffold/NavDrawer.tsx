import {AppBar, Drawer, IconButton, List, ListItem, Toolbar, Typography, useMediaQuery} from "@mui/material"
import { BrowserRouter, Link, Routes, Route } from "react-router-dom"
import ContactForm from '../Form/ContactForm';
import ContatctCardGrid from '../Grid/ContactCardGrid';
import ContactDataGrid from '../DataGrid/ContactDataGrid';
import ContactTable from '../Table/ContactTable';
import { useTheme, Theme, ThemeProvider } from "@mui/material/styles"
import { BeautifulTheme } from "../../Theme/BeautifulTheme";
import { blue } from "@mui/material/colors";
import BeautifulAutocomplete from '../Form/FormSubComponents/BeautifulAutocomplete';
import { useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { minWidth } from '../Form/ContactForm';

const drawerWidth = 240;
const transitionDuration = 1000

const themeStyles = (theme: Theme, responsiveDreawerWidth: number | string) => {
    return {
        menuButton: {
            marginRight: 2
        },
        appBar: {
            zIndex: theme.zIndex.drawer + 1
        },
        drawer: {
            width: responsiveDreawerWidth,
            "& .MuiBackdrop-root" : {
                display: "none",
            } 
        },
        drawerPaper: {
            width: responsiveDreawerWidth,
            backgroundColor: "white"
        },
        content: { 
            marginLeft:responsiveDreawerWidth,
            padding: 3,
            maxWidth: 720,
            minWidth: 375,
            transition: theme.transitions.create("margin", {
                easing: theme.transitions.easing.easeOut,
                duration: transitionDuration
            })
        },
        contentShift: {
            marginLeft: responsiveDreawerWidth,
            transition: theme.transitions.create("margin", {
                easing: theme.transitions.easing.easeOut,
                duration: transitionDuration
            })
        }
    }
}



export default function NavDrawer(){
    
    const theme = useTheme()
    const greaterThan375 = useMediaQuery("(min-width: 376px)")
    const[open, setOpen] = useState(greaterThan375)
    const responsiveDreawerWidth = greaterThan375 ? drawerWidth : "100%"

    useEffect(() => {
        setOpen(greaterThan375)
    }, [greaterThan375])

    return (
        <BrowserRouter>
            <div>
                <AppBar position="fixed" sx={themeStyles(theme, responsiveDreawerWidth).appBar}>
                    <Toolbar>
                        <IconButton
                            color= "inherit"
                            edge= "start"
                            onClick={() => {setOpen(!open)}}
                            sx={{...themeStyles(theme, responsiveDreawerWidth).menuButton, display: greaterThan375 ? "none" : ""}}
                        >
                           <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap>
                        Advanced Material UI Styling
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    disableEnforceFocus
                    variant="temporary"
                    open={open}
                    sx={themeStyles(theme, responsiveDreawerWidth).drawer}
                    PaperProps={{
                        sx: themeStyles(theme, responsiveDreawerWidth).drawerPaper,
                        elevation: 9
                    }}
                    transitionDuration={{
                        enter: transitionDuration,
                        exit: transitionDuration
                    }}
                >
                    <Toolbar />
                    
                    <List>
                        {[{text: "Input Form", route: "/form"}, {text: "Contact Card Grid", route: "/grid"}, {text: "Contact table", route: "/table"}, {text: "Contact Data Grid", route: "/data"}].map((nav, index) => 
                            <ListItem key={nav.text} sx={{borderBottom: "1px solid black", borderBottomColor: "primary.main"}} >
                                <Link to={nav.route}>{nav.text}</Link>
                            </ListItem>
                        )}
                    </List>
                
                </Drawer>

                <main style={{...themeStyles(theme, responsiveDreawerWidth).content, ...(open ? themeStyles(theme, responsiveDreawerWidth).contentShift : {} )}}>
                    <Toolbar />
                    <ThemeProvider theme={BeautifulTheme}>
                        <Routes>
                            <Route path={"/"} element={<ContactForm />} />
                            <Route path={"/form"} element={<ContactForm />} />
                            <Route path={"/grid"} element={<ContatctCardGrid />} />
                            <Route path={"/table"} element={<ContactTable />} />
                            <Route path={"/data"} element={<ContactDataGrid />} />
                        </Routes>
                    </ThemeProvider>
                    
                
                </main>
            </div>
        </BrowserRouter>
    )
}