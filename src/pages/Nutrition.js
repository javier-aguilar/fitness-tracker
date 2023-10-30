import SquareRoundedIcon from '@mui/icons-material/SquareRounded';
import { Box, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';

function Nutrition() {   

    return (
        <Box sx={{ p: 3}}>
        <h1>Calories</h1>
        <List>
            <ListItem>
                <ListItemText primary="Total Calories"  secondary="0/1750" />
            </ListItem>
            <Button variant="contained">Log Calories</Button>

        </List>
        <h1>Macros</h1>
        <List>
            <ListItem>
                <ListItemIcon>
                    <SquareRoundedIcon sx={{color: '#FFF600'}}/>
                </ListItemIcon>
                <ListItemText primary="Protein" secondary="0 / 175g"/>
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <SquareRoundedIcon sx={{color: '#3427E6'}}/>
                </ListItemIcon>
                <ListItemText primary="Carbohydrates" secondary="0 / 140g"/>
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <SquareRoundedIcon sx={{color: '#9C27E6'}}/>
                </ListItemIcon>
                <ListItemText primary="Fat" secondary="0 / 54g" />
            </ListItem>
        </List>

        <Button variant="contained">Log Macros</Button>
    </Box>
  )
}

export default Nutrition