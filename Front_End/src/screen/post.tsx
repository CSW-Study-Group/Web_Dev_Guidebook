import * as React from 'react';
import { useNavigate } from "react-router-dom";
import * as ui from '@mui/material';
import Copyright from 'components/copyright';
import TopBar from 'components/topBar';

const Post = () => {
    let navigate = useNavigate()
    const _handleNavigate = (name: String) => {
        navigate(`/${name}`);
    }
  return (
    <div>
        <ui.CssBaseline />
        <TopBar />
        {/* Hero unit */}
        <ui.Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 6, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <ui.Box sx={{ bgcolor: 'white', width: '95%', height: 70, mb: 3, display: 'flex', alignItems: 'center' }}>
                <ui.Grid container spacing={0}>
                    <ui.Grid sx={{ display: 'flex', justifyContent: 'center' }} item xs={0.6}>
                        <ui.Typography>1</ui.Typography>
                    </ui.Grid>
                    <ui.Grid item xs={9}>
                        <ui.Typography>글 제목입니다</ui.Typography>
                    </ui.Grid>
                    <ui.Grid sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }} item xs={2}>
                        <ui.Typography>2022-05-30</ui.Typography>
                    </ui.Grid>
                </ui.Grid>
            </ui.Box>
            <ui.Box sx={{ bgcolor: 'white', width: '95%', height: 500, padding: 3 }}>
                <ui.Typography>
                    안녕하세요 저는 노드제이에슬르 배우고싶은데어떤거를해야할지 몰그ㅔㅅㅇㄱ멛럼ㄴ래ㅣ
                </ui.Typography>
            </ui.Box>
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

export default Post;