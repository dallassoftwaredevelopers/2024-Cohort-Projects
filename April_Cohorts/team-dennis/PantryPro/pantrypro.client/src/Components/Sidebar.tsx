import { useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import AutoAwesomeMosaicOutlinedIcon from "@mui/icons-material/AutoAwesomeMosaicOutlined";
import KitchenOutlinedIcon from "@mui/icons-material/KitchenOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import RestaurantOutlinedIcon from "@mui/icons-material/RestaurantOutlined";
import pantryproimg from "../assets/pantrypro.png";

export default function SideBar() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <div className="logo">
          <img src={pantryproimg}></img>
        </div>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <AutoAwesomeMosaicOutlinedIcon />
            </ListItemIcon>
            <ListItemText
              primary={
                <Link className="link" to={"/"}>
                  Dashboard
                </Link>
              }
            />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <KitchenOutlinedIcon />
            </ListItemIcon>
            <ListItemText
              primary={
                <Link className="link" to={"/pantry"}>
                  Pantry
                </Link>
              }
            />
          </ListItemButton>
        </ListItem>
        {/* <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <ShoppingCartOutlinedIcon />
            </ListItemIcon>
            <ListItemText className="link" primary={"Grocery"} />
          </ListItemButton>
        </ListItem> */}
        {/* <ListItem>
          <ListItemButton>
            <ListItemIcon><RestaurantOutlinedIcon /></ListItemIcon>
            <ListItemText className="link" primary={"Recepie"} />
          </ListItemButton>
        </ListItem> */}
      </List>
    </Box>
  );

  return (
    <div className="navbar">
      <MenuIcon className="menu-icon" onClick={toggleDrawer(true)} />
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
