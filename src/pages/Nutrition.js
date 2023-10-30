import SquareRoundedIcon from '@mui/icons-material/SquareRounded';
import { Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';

function Nutrition() {   

    return (
        <Box sx={{ p: 3}}>
        <h1>Nutrition</h1>
        <List>
            <ListItem>
                <ListItemText primary="Total Calories: 0" />
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <SquareRoundedIcon sx={{color: '#FFF600'}}/>
                </ListItemIcon>
                <ListItemText primary="Protein" />
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <SquareRoundedIcon sx={{color: '#3427E6'}}/>
                </ListItemIcon>
                <ListItemText primary="Carbohydrates" />
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <SquareRoundedIcon sx={{color: '#9C27E6'}}/>
                </ListItemIcon>
                <ListItemText primary="Fat" />
            </ListItem>
        </List>
    </Box>
  )
}

export default Nutrition