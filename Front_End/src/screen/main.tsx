import * as React from 'react';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import Copyright from 'components/copyright';
import TopBar from 'components/topBar';

const Main = () => {
    let navigate = useNavigate()
    const _handleNavigate = (name: String) => {
        navigate(`/${name}`);
    }
  return (
    <div>
        <CssBaseline />
        <TopBar />
        {/* Hero unit */}
        <Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 6, }}>
            <Container maxWidth="sm">
                <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
                >
                웹 개발 백과사전
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" paragraph>
                여러분의 웹 개발 지식을 공유해보세요!
                </Typography>
                <Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center">
                    <Button variant="contained" color="secondary" onClick={() => _handleNavigate("register")}>Register</Button>
                    <Button variant="outlined" color="secondary" onClick={() => _handleNavigate("login")}>Login</Button>
                </Stack>
            </Container>
        </Box>
        {/* Footer */}
        <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
            <Typography variant="h6" align="center" gutterBottom>
                푸터 타이틀
            </Typography>
            <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
                푸터 상세내용
            </Typography>
            <Copyright />
        </Box>
        {/* End footer */}
    </div>
  );
}

export default Main;