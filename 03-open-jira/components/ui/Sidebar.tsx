import { useContext } from 'react';
import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, Divider } from "@mui/material"
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { UIContext } from '@/context/ui';

const menuItems: string[] = [ "Inbox", "Starred", "Send Mail", "Drafts" ];

export const Sidebar = () => {
  const { sidemenuOpen, closeSideMenu  } = useContext( UIContext );

  return (
    <Drawer anchor="left" open={ sidemenuOpen } onClose={ closeSideMenu }>
      <Box sx={{ padding: "5px 10px" }}>
        <Typography variant="h4">Menú</Typography>
      </Box>

      <Box sx={{ width: 250 }}>
        <List>
          {
            menuItems.map( (text, index) => (
              <ListItem button key={ text }>
                <ListItemIcon>
                  { index % 2 ? <InboxOutlinedIcon /> : <EmailOutlinedIcon />}
                </ListItemIcon>

                <ListItemText primary={ text } />
              </ListItem>
            ))
          }
        </List>

        <Divider />

        <List>
          {
            menuItems.map( (text, index) => (
              <ListItem button key={ text }>
                <ListItemIcon>
                  { index % 2 ? <InboxOutlinedIcon /> : <EmailOutlinedIcon />}
                </ListItemIcon>

                <ListItemText primary={ text } />
              </ListItem>
            ))
          }
        </List>
      </Box>
      
    </Drawer>
  )
}
