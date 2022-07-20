import * as React from 'react';
import { useNavigate } from "react-router-dom";
import * as ui from '@mui/material';
import Copyright from 'components/copyright';
import TopBar from 'components/topBar';

const Main = () => {
    let navigate = useNavigate()
    const _handleNavigate = (name: String) => {
        navigate(`/${name}`);
    }
  return (
    <div>
        <ui.CssBaseline />
        <TopBar />
        {/* Hero unit */}
        <ui.Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 6, }}>
            <ui.Container maxWidth="sm">
                <ui.Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
                >
                웹 개발 백과사전
                </ui.Typography>
                <ui.Typography variant="h5" align="center" color="text.secondary" paragraph>
                여러분의 웹 개발 지식을 공유해보세요!
                </ui.Typography>
                <ui.Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center">
                    <ui.Button variant="contained" color="secondary" onClick={() => _handleNavigate("register")}>Register</ui.Button>
                    <ui.Button variant="outlined" color="secondary" onClick={() => _handleNavigate("login")}>Login</ui.Button>
                </ui.Stack>
            </ui.Container>
        </ui.Box>
        {/* Footer */}
        <ui.Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
            <ui.Typography variant="h6" align="center" gutterBottom>
                푸터 타이틀
            </ui.Typography>
            <ui.Typography variant="subtitle1" align="center" color="text.secondary" component="p">
                푸터 상세내용
            </ui.Typography>
            <Copyright />
        </ui.Box>
        {/* End footer */}
    </div>
  );
}

export default Main;