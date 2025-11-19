import { AppBar, IconButton, Toolbar, Typography } from "@mui/material"



export const Welcome = () => {
    return (
        <>

            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>

                    </IconButton>
                    <Typography variant="h6" color="inherit" component="div">
                        Photos
                    </Typography>
                </Toolbar>
            </AppBar>





        </>

    )
}
