import * as ui from '@mui/material';

const Copyright = () => {
    return (
      <ui.Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <ui.Link color="inherit" href="https://github.com/Hoooooou-Jun/Web_Dev_Guidebook">
          Web Dev Guideline
        </ui.Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </ui.Typography>
    );
  }

export default Copyright;