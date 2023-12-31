import React from 'react';
import Radio from '@material-ui/core/Radio';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

function LanguageSelector({ language, setLanguage }) {
  return (
    <ListItem>
      <ListItemText primary="Select Language" />
      <Radio
        value="en"
        checked={language === "en"}
        onChange={(e) => setLanguage(e.target.value)}
        size="large" // Make the radio button larger
      />
      <label htmlFor="English" className="mx-5 font-bold text-lg">
        English
      </label>
      <Radio
        value="ua"
        checked={language === "ua"}
        onChange={(e) => setLanguage(e.target.value)}
        size="large" // Make the radio button larger
      />
      <label htmlFor="ua" className="mx-5 font-bold text-lg">
        ua
      </label>
    </ListItem>
  );
}

export default LanguageSelector;
