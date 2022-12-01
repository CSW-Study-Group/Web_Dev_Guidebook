import * as React from 'react';
import { useNavigate } from "react-router-dom";
import * as ui from '@mui/material';
import Copyright from 'components/copyright';
import TopBar from 'components/topBar';
import { cardDb } from 'utils/cardDb';

const Board = () => {
    let navigate = useNavigate()
    const _handleNavigate = (name: String) => {
        navigate(`/${name}`);
    }
  return (
    <div>
        <ui.CssBaseline />
        <TopBar />
        {/* Hero unit */}
        <ui.Box sx={{ bgcolor: 'grey', pt: 4, pb: 6, }}>
            <ui.Container maxWidth="sm">
                <ui.Typography
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                >
                Node.js
                </ui.Typography>
            </ui.Container>
            <ui.Container>
                <ui.Grid container spacing={2}>
                    <ui.Grid item xs>
                        <ui.Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                            <ui.Typography sx={{ mb: 1 }} variant="h4">
                                팁
                            </ui.Typography>
                            <ui.List
                                  sx={{
                                    width: '100%',
                                    maxWidth: 360,
                                    bgcolor: 'background.paper',
                                    overflow: 'auto',
                                    maxHeight: 360,
                                  }}>
                                <ui.ListItem disablePadding>
                                    <ui.ListItemButton>
                                    <ui.ListItemIcon>
                                        1
                                    </ui.ListItemIcon>
                                    <ui.ListItemText primary="게시글입니다 안녕하세요." />
                                    </ui.ListItemButton>
                                </ui.ListItem>
                                <ui.ListItem disablePadding>
                                    <ui.ListItemButton>
                                    <ui.ListItemIcon>
                                        2
                                    </ui.ListItemIcon>
                                    <ui.ListItemText primary="게시글입니다 안녕하세요." />
                                    </ui.ListItemButton>
                                </ui.ListItem>
                                <ui.ListItem disablePadding>
                                    <ui.ListItemButton>
                                    <ui.ListItemIcon>
                                        3
                                    </ui.ListItemIcon>
                                    <ui.ListItemText primary="게시글입니다 안녕하세요." />
                                    </ui.ListItemButton>
                                </ui.ListItem>
                                <ui.ListItem disablePadding>
                                    <ui.ListItemButton>
                                    <ui.ListItemIcon>
                                        4
                                    </ui.ListItemIcon>
                                    <ui.ListItemText primary="게시글입니다 안녕하세요." />
                                    </ui.ListItemButton>
                                </ui.ListItem>
                                <ui.ListItem disablePadding>
                                    <ui.ListItemButton>
                                    <ui.ListItemIcon>
                                        5
                                    </ui.ListItemIcon>
                                    <ui.ListItemText primary="게시글입니다 안녕하세요." />
                                    </ui.ListItemButton>
                                </ui.ListItem>
                                <ui.ListItem disablePadding>
                                    <ui.ListItemButton>
                                    <ui.ListItemIcon>
                                        6
                                    </ui.ListItemIcon>
                                    <ui.ListItemText primary="게시글입니다 안녕하세요." />
                                    </ui.ListItemButton>
                                </ui.ListItem>
                                <ui.ListItem disablePadding>
                                    <ui.ListItemButton>
                                    <ui.ListItemIcon>
                                        7
                                    </ui.ListItemIcon>
                                    <ui.ListItemText primary="게시글입니다 안녕하세요." />
                                    </ui.ListItemButton>
                                </ui.ListItem>
                            </ui.List>
                            <ui.Grid sx={{ width: '50%' }} container>
                                <ui.Grid item xs>
                                    <ui.Link variant="body2">
                                        1
                                    </ui.Link>
                                </ui.Grid>
                                <ui.Grid item xs>
                                    <ui.Link variant="body2">
                                        2
                                    </ui.Link>
                                </ui.Grid>
                                <ui.Grid item xs>
                                    <ui.Link variant="body2">
                                        3
                                    </ui.Link>
                                </ui.Grid>
                                <ui.Grid item xs>
                                    <ui.Link variant="body2">
                                        4
                                    </ui.Link>
                                </ui.Grid>
                                <ui.Grid item xs>
                                    <ui.Link variant="body2">
                                        5
                                    </ui.Link>
                                </ui.Grid>
                                <ui.Grid item xs>
                                    <ui.Link variant="body2">
                                        6
                                    </ui.Link>
                                </ui.Grid>
                                <ui.Grid item xs>
                                    <ui.Link variant="body2">
                                        7
                                    </ui.Link>
                                </ui.Grid>
                                <ui.Grid item xs>
                                    <ui.Link variant="body2">
                                        8
                                    </ui.Link>
                                </ui.Grid>
                                <ui.Grid item xs>
                                    <ui.Link variant="body2">
                                        9
                                    </ui.Link>
                                </ui.Grid>
                            </ui.Grid>
                        </ui.Box>
                    </ui.Grid>
                    <ui.Grid item xs>
                        <ui.Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                            <ui.Typography sx={{ mb: 1 }} variant="h4">
                                질문 / 답변
                            </ui.Typography>
                            <ui.List
                                  sx={{
                                    width: '100%',
                                    maxWidth: 360,
                                    bgcolor: 'background.paper',
                                    overflow: 'auto',
                                    maxHeight: 360,
                                  }}>
                                <ui.ListItem disablePadding>
                                    <ui.ListItemButton>
                                    <ui.ListItemIcon>
                                        1
                                    </ui.ListItemIcon>
                                    <ui.ListItemText primary="게시글입니다 안녕하세요." />
                                    </ui.ListItemButton>
                                </ui.ListItem>
                                <ui.ListItem disablePadding>
                                    <ui.ListItemButton>
                                    <ui.ListItemIcon>
                                        2
                                    </ui.ListItemIcon>
                                    <ui.ListItemText primary="게시글입니다 안녕하세요." />
                                    </ui.ListItemButton>
                                </ui.ListItem>
                                <ui.ListItem disablePadding>
                                    <ui.ListItemButton>
                                    <ui.ListItemIcon>
                                        3
                                    </ui.ListItemIcon>
                                    <ui.ListItemText primary="게시글입니다 안녕하세요." />
                                    </ui.ListItemButton>
                                </ui.ListItem>
                                <ui.ListItem disablePadding>
                                    <ui.ListItemButton>
                                    <ui.ListItemIcon>
                                        4
                                    </ui.ListItemIcon>
                                    <ui.ListItemText primary="게시글입니다 안녕하세요." />
                                    </ui.ListItemButton>
                                </ui.ListItem>
                                <ui.ListItem disablePadding>
                                    <ui.ListItemButton>
                                    <ui.ListItemIcon>
                                        5
                                    </ui.ListItemIcon>
                                    <ui.ListItemText primary="게시글입니다 안녕하세요." />
                                    </ui.ListItemButton>
                                </ui.ListItem>
                                <ui.ListItem disablePadding>
                                    <ui.ListItemButton>
                                    <ui.ListItemIcon>
                                        6
                                    </ui.ListItemIcon>
                                    <ui.ListItemText primary="게시글입니다 안녕하세요." />
                                    </ui.ListItemButton>
                                </ui.ListItem>
                                <ui.ListItem disablePadding>
                                    <ui.ListItemButton>
                                    <ui.ListItemIcon>
                                        7
                                    </ui.ListItemIcon>
                                    <ui.ListItemText primary="게시글입니다 안녕하세요." />
                                    </ui.ListItemButton>
                                </ui.ListItem>
                            </ui.List>
                            <ui.Grid sx={{ width: '50%' }} container>
                                <ui.Grid item xs>
                                    <ui.Link variant="body2">
                                        1
                                    </ui.Link>
                                </ui.Grid>
                                <ui.Grid item xs>
                                    <ui.Link variant="body2">
                                        2
                                    </ui.Link>
                                </ui.Grid>
                                <ui.Grid item xs>
                                    <ui.Link variant="body2">
                                        3
                                    </ui.Link>
                                </ui.Grid>
                                <ui.Grid item xs>
                                    <ui.Link variant="body2">
                                        4
                                    </ui.Link>
                                </ui.Grid>
                                <ui.Grid item xs>
                                    <ui.Link variant="body2">
                                        5
                                    </ui.Link>
                                </ui.Grid>
                                <ui.Grid item xs>
                                    <ui.Link variant="body2">
                                        6
                                    </ui.Link>
                                </ui.Grid>
                                <ui.Grid item xs>
                                    <ui.Link variant="body2">
                                        7
                                    </ui.Link>
                                </ui.Grid>
                                <ui.Grid item xs>
                                    <ui.Link variant="body2">
                                        8
                                    </ui.Link>
                                </ui.Grid>
                                <ui.Grid item xs>
                                    <ui.Link variant="body2">
                                        9
                                    </ui.Link>
                                </ui.Grid>
                            </ui.Grid>
                        </ui.Box>
                    </ui.Grid>
                    <ui.Grid item xs>
                        <ui.Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                            <ui.Typography sx={{ mb: 1 }} variant="h4">
                                정보공유
                            </ui.Typography>
                            <ui.List
                                  sx={{
                                    width: '100%',
                                    maxWidth: 360,
                                    bgcolor: 'background.paper',
                                    overflow: 'auto',
                                    maxHeight: 360,
                                  }}>
                                <ui.ListItem disablePadding>
                                    <ui.ListItemButton>
                                    <ui.ListItemIcon>
                                        1
                                    </ui.ListItemIcon>
                                    <ui.ListItemText primary="게시글입니다 안녕하세요." />
                                    </ui.ListItemButton>
                                </ui.ListItem>
                                <ui.ListItem disablePadding>
                                    <ui.ListItemButton>
                                    <ui.ListItemIcon>
                                        2
                                    </ui.ListItemIcon>
                                    <ui.ListItemText primary="게시글입니다 안녕하세요." />
                                    </ui.ListItemButton>
                                </ui.ListItem>
                                <ui.ListItem disablePadding>
                                    <ui.ListItemButton>
                                    <ui.ListItemIcon>
                                        3
                                    </ui.ListItemIcon>
                                    <ui.ListItemText primary="게시글입니다 안녕하세요." />
                                    </ui.ListItemButton>
                                </ui.ListItem>
                                <ui.ListItem disablePadding>
                                    <ui.ListItemButton>
                                    <ui.ListItemIcon>
                                        4
                                    </ui.ListItemIcon>
                                    <ui.ListItemText primary="게시글입니다 안녕하세요." />
                                    </ui.ListItemButton>
                                </ui.ListItem>
                                <ui.ListItem disablePadding>
                                    <ui.ListItemButton>
                                    <ui.ListItemIcon>
                                        5
                                    </ui.ListItemIcon>
                                    <ui.ListItemText primary="게시글입니다 안녕하세요." />
                                    </ui.ListItemButton>
                                </ui.ListItem>
                                <ui.ListItem disablePadding>
                                    <ui.ListItemButton>
                                    <ui.ListItemIcon>
                                        6
                                    </ui.ListItemIcon>
                                    <ui.ListItemText primary="게시글입니다 안녕하세요." />
                                    </ui.ListItemButton>
                                </ui.ListItem>
                                <ui.ListItem disablePadding>
                                    <ui.ListItemButton>
                                    <ui.ListItemIcon>
                                        7
                                    </ui.ListItemIcon>
                                    <ui.ListItemText primary="게시글입니다 안녕하세요." />
                                    </ui.ListItemButton>
                                </ui.ListItem>
                            </ui.List>
                            <ui.Grid sx={{ width: '50%' }} container>
                                <ui.Grid item xs>
                                    <ui.Link variant="body2">
                                        1
                                    </ui.Link>
                                </ui.Grid>
                                <ui.Grid item xs>
                                    <ui.Link variant="body2">
                                        2
                                    </ui.Link>
                                </ui.Grid>
                                <ui.Grid item xs>
                                    <ui.Link variant="body2">
                                        3
                                    </ui.Link>
                                </ui.Grid>
                                <ui.Grid item xs>
                                    <ui.Link variant="body2">
                                        4
                                    </ui.Link>
                                </ui.Grid>
                                <ui.Grid item xs>
                                    <ui.Link variant="body2">
                                        5
                                    </ui.Link>
                                </ui.Grid>
                                <ui.Grid item xs>
                                    <ui.Link variant="body2">
                                        6
                                    </ui.Link>
                                </ui.Grid>
                                <ui.Grid item xs>
                                    <ui.Link variant="body2">
                                        7
                                    </ui.Link>
                                </ui.Grid>
                                <ui.Grid item xs>
                                    <ui.Link variant="body2">
                                        8
                                    </ui.Link>
                                </ui.Grid>
                                <ui.Grid item xs>
                                    <ui.Link variant="body2">
                                        9
                                    </ui.Link>
                                </ui.Grid>
                            </ui.Grid>
                        </ui.Box>
                    </ui.Grid>
                </ui.Grid>
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

export default Board;