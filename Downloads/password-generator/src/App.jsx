import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { IconButton } from "@material-ui/core";
import SeoText from "./SeoText";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import AdBanner from "./Adbanner";
import Slider from '@mui/material/Slider';
import Header from "./Header";
import Footer from "./Footer";
import PrivacyConsentPopup from "./PrivacyConsentPopup";
import passwordImage from './images/password.png'
import refreash from './images/refreash.png'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
export default function App() {
  const classes = useStyles();
  const [password, setPassword] = useState("");
  const [open, setOpen] = React.useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [passwordLength, setPasswordLength] = useState(12);
  const [characterSet, setCharacterSet] = useState("standard");
  const characterSets = {
    standard:
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()",
    alphanumeric:
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    alphasymbols:
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()",
    symbolsnumbers: "!@#$%^&*()0123456789",
    cyriliclatinnumbersymbolic: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZабвгдеёжзийклмнопрстуфхцчшщъыьэюяАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ0123456789!@#$%^&*()",
  };
  const [language, setLanguage] = useState("en");

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  function GeneratePassword() {
    let characters = characterSets[characterSet];
    let password = "";

    for (let i = 0; i < passwordLength; i++) {
      password += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }

    setPassword(password);
  }


  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  function handleCopyClick() {
    navigator.clipboard.writeText(password);
    handleClick();
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 500);
  }
  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div className="flex h-auto align-middle flex-col items-center justify-center mx-auto p-3 font-sans w-[100vw] lg:w-[90vw]">
      <Header language={language} onLanguageChange={handleLanguageChange} />
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Password copied successfully"
        action={action}
      />

      <div className=" flex flex-col justify-center items-center mb-4 bg-[#E5F6FF] h-[800px] lg:h-[600px] w-[90%] lg:w-[100%] rounded-[16px] pt-32">
      <h2 className="mb-2 text-[30px] lg:text-[50px] font-bold tracking-tight text-center text-gray-900">{language=='en'?'Need a Unique, Secure':'Потрібен унікальний, безпечний'} <br/>{language=='en'?'Password?':'Пароль?'}</h2>
      <p className="text-center text-[22px] text-[#2A4E63] mb-4">{language=='en'?'With Generate Password to me':'За допомогою Generate Password для мене'}</p>
<div className="w-9/12 flex flex-col bg-white drop-shadow-lg  rounded-xl shadow p-[60px] relative bottom-[-10%]">
  <div className="absolute hidden bg-white drop-shadow-lg  top-[-30px] left-[-140px] border-[#E5F6FF] border-2 border-solid rounded-[120px] px-[10px] py-[2px] w-[200px] text-[#2A4E63] text-[30px] lg:flex items-center gap-2">
          <div className="p-[12px] rounded-full bg-[#E5F6FF] mr-3">
            <img src={passwordImage} alt="password image" width={20} height={20} />
            </div>
            <p>*******</p>
  </div>

  {/* bottom passaword lock */}
  <div className="absolute hidden  bg-white drop-shadow-lg  bottom-[55%] right-[-120px] border-[#E5F6FF] border-2 border-solid rounded-[120px] px-[10px] py-[2px] w-[200px] text-[#2A4E63] text-[30px] lg:flex lg:items-center gap-2">
          <div className="p-[12px] rounded-full bg-[#E5F6FF] mr-3">
            <img src={passwordImage} alt="password image" width={20} height={20} />
            </div>
            <p>*******</p>
  </div>
    
      <div className="flex items-center flex-col lg:flex-row gap-4 h-[70px] w-[100%]">
     <div className="lg:p-5 w-[100%] lg:w-[80%] flex items-center h-full border-2 border-[#E5F6FF] border-solid rounded-[120px] text-[#071016] text-[20px]">
      <input type="text" value={password} className="border-none outline-none h-full w-[80%] py-5 flex-grow-1 "/>
      <button className="bg-[#E5F6FF] text-[#2A4E63] font-semibold text-[24px] rounded-[60px] px-[16px] py-[12px] mx-2 whitespace-nowrap " onClick={()=>GeneratePassword()}>{language=='en'?'View Strong':'View Strong'}</button>
      <img src={refreash} alt=" refreash image" className="flex mr-2" />
     </div>
     <button className="bg-[#2A4E63] w-[100%] lg:w-[20%] text-white font-semibold text-[24px] rounded-[60px] px-[16px] py-[12px] mx-2 cursor-pointer" onClick={handleCopyClick}>{language=='en'?'Copy':'Копіювати'}</button>
      </div>
      <div className=" text-[#2A4E63] text-[18px] mt-20 lg:mt-3 lg:flex">{language=='en'?'Strong! Could take 317,098 years to crack.':'Сильний! На злам може знадобитися 317 098 років.'}</div>
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center mt-1 lg:mt-3">
       <div className="flex flex-col gap-3 items-start mt-8 lg:mt-6">
          <label for="Password" className="text-[22px] text-[#2A4E63]">{language=='en'?'Password length:':'Довжина пароля:'} {passwordLength}</label>
          <div className="flex items-center gap-4 w-full">
            <RemoveCircleOutlineIcon/>
            <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto"  />
            <AddCircleOutlineIcon/>
            </div>
          </div>

          <div className="flex flex-col gap-3 items-start">
          <label for="quantity" className="text-[22px] text-[#2A4E63]">{language=='en'?'Quantity':'Кількість'}</label>
          <input type="number" id="quantity" name="quantity" min="1" max="5" className="border-2 border-[#E5F6FF] border-solid rounded-[18px] text-[#071016] text-[20px] py-5 px-3 outline-none w-full"/>
          </div>
       </div>

       <div className="flex gap-3 flex-col lg:flex-row items-center mt-9 ">
          <label for="Character" className="text-[22px] text-[#2A4E63]">{language=='en'?'Characters used:':'Використані символи:'}</label>
       <div className="flex items-center justify-center gap-4 mx-20">
          <div className="flex items-center gap-2">
            <input type="checkbox" className="border-2 border-[#2A4E63] h-6 w-6 border-solid rounded-[24px] text-[#071016]  p-4"/>
             <h2 className="text-[18px] text-[#071016]">ABC</h2>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" className="border-2 border-[#2A4E63] h-6 w-6 border-solid rounded-[24px] text-[#071016]  p-4"/>
             <h2 className="text-[18px] text-[#071016]">abc</h2>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" className="border-2 border-[#2A4E63] h-6 w-6 border-solid rounded-[24px] text-[#071016]  p-4"/>
             <h2 className="text-[18px] text-[#071016]">123</h2>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" className="border-2 border-[#2A4E63] h-6 w-6 border-solid rounded-[24px] text-[#071016]  p-4"/>
             <h2 className="text-[18px] text-[#071016]">#$%</h2>
          </div>
          </div>
       </div>
</div>

      </div>
      <div className=" mt-48 lg:mt-40">
      <AdBanner />
      </div>
      <div className="my-20">
      <SeoText language={language} />
      </div>
      <div className="mb-4">
      <AdBanner language={language}/>

      </div>
      <Footer language={language} />
      <PrivacyConsentPopup language={language} />
    </div>
  );
}
