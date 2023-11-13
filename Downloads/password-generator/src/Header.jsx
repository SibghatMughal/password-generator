import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Select, MenuItem, FormControl, InputLabel, Box } from "@material-ui/core";
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import  hamburger from './images/hamburger.png'
import Logo from "./logo.svg";
import LanguageSelector from "./LanguageSelect";

const useStyles = makeStyles(() => ({
  languageSelect: {
    color: "black",
    "&:before": {
      borderColor: "black",
    },
    "&:after": {
      borderColor: "black",
    },
  },
}));

const Header = ({ onLanguageChange }) => {
  const classes = useStyles();
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem("language");
    return savedLanguage ? savedLanguage : "en";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
    onLanguageChange(language);
  }, [language]);


  const [state, setState] = React.useState({
    top: false,

  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['About', 'Why Choose Us', 'Uses'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text}  sx={{fontSize:'22px',fontWeight:'bolder',color:'black'}}/>
            </ListItemButton>
          </ListItem>
        ))}
        <Divider/>
        <ListItem>
      <LanguageSelector language={language} setLanguage={setLanguage}/> 
      </ListItem>  
      </List>
    </Box>
  );


  console.log('language selected',language)

  const handleLanguageChange = (event) => {
    const lang = event.target.value;
    setLanguage(lang);
  };

  return (
    <header className="w-[90vw] py-4 px-2 flex justify-between items-center">
      <div className="flex items-center">
        <img
          src={Logo}
          alt="generatepasswordtome"
          className="w-6 h-6 mr-1 logo"
        />
        <h3 className=" text-[#2A4E63] text-3xl font-bold">Generate</h3>
        <h3 className=" text-[#96DBFF] text-3xl font-bold">Password</h3>
      </div>
      <ul className="lg:flex items-center hidden text-decoration-none gap-5 text-[#071016] text-xl font-semibold">
        <li className=" cursor-pointer">{language=='en'? 'About':'про'}</li>
        <li className=" cursor-pointer">{language=='en'?'Why Choose Us':'Чому обирають нас?'}</li>
        <li className=" cursor-pointer">{language=='en'?'Uses':'Використання'}</li>
      </ul>

      <select name="English" value={language} onChange={handleLanguageChange} id="eng" className=" py-3 lg:flex hidden px-4 border-2 border-[#2A4E63] rounded-[60px] bg-transparent">
         <option value="en">English</option>
        <option value="ua">Українська</option>
       </select>

       <div className=" flex lg:hidden">
      {[ 'top'].map((anchor) => (
        <React.Fragment key={anchor}>
          <img src={hamburger} alt="hamburger" onClick={toggleDrawer(anchor, true)} className=" cursor-pointer"/>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
      
      
    </header>
  );
};

export default Header;
