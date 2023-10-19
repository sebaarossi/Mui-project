import {AppBar, Drawer, List, ListItem, Toolbar, Typography} from "@mui/material"
import { BrowserRouter, Link, Routes, Route } from "react-router-dom"
import ContactForm from '../Form/ContactForm';
import ContatctCardGrid from '../Grid/ContactCardGrid';
import ContactDataGrid from '../DataGrid/ContactDataGrid';
import ContactTable from '../Table/ContactTable';
import { useTheme, Theme } from "@mui/material/styles"
import { blue } from "@mui/material/colors";

const drawerWidth = 240;

const themeStyles = (theme: Theme) => {
    return {
        appBar: {
            zIndex: theme.zIndex.drawer + 1
        }
    }
}

const simpleStyles = {
    drawer: {
        width: drawerWidth,
        "& .MuiBackdrop-root" : {
            // display: "none",
        } 
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: "rgba(120,120,120,0.2)"
    },
    content: {
        marginLeft: drawerWidth,
        padding: 3,
        maxWidth: 720
    }
}


export default function NavDrawer(){
    const theme = useTheme()
    return (
        <BrowserRouter>
            <div>
                <AppBar position="fixed" sx={themeStyles(theme).appBar}>
                    <Toolbar>
                        <Typography variant="h6" noWrap>
                        Advanced Material UI Styling
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    disableEnforceFocus
                    variant="temporary"
                    open={true}
                    sx={simpleStyles.drawer}
                    PaperProps={{
                        sx: simpleStyles.drawerPaper,
                        elevation: 9
                    }}
                >
                    <Toolbar />
                    
                    <List>
                        {[{text: "Input Form", route: "/form"}, {text: "Contact Card Grid", route: "/grid"}, {text: "Contact table", route: "/table"}, {text: "Contact Data Grid", route: "/data"}].map((nav, index) => 
                            <ListItem key={nav.text}><Link to={nav.route}>{nav.text}</Link></ListItem>
                        )}
                    </List>
                
                </Drawer>

                <main style={simpleStyles.content}>
                    <Toolbar />
                    <Routes>
                        <Route path={"/"} element={<ContactForm />} />
                        <Route path={"/form"} element={<ContactForm />} />
                        <Route path={"/grid"} element={<ContatctCardGrid />} />
                        <Route path={"/table"} element={<ContactTable />} />
                        <Route path={"/data"} element={<ContactDataGrid />} />
                    </Routes>
                
                </main>
            </div>
        </BrowserRouter>
    )
}