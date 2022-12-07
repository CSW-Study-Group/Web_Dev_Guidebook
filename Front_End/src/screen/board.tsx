import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { rootReducerType } from 'module/types';
import * as ui from '@mui/material';
import Copyright from 'components/copyright';
import TopBar from 'components/topBar';
import { cardDb } from 'utils/cardDb';
import { fetchBoardListReset } from 'module/board/action';

const Board = () => {
    let navigate = useNavigate()
    const dispatch = useDispatch();

    const boardList = useSelector((state: rootReducerType) => state.boardReducer.boardList);

    useEffect(() => {
      return () => {
        console.log('초기화 작동');
        dispatch<any>(fetchBoardListReset());
      }
    }, [])

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
                    {boardList.tip[0].stack}
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
                                    height: 450,
                                    maxWidth: 360,
                                    bgcolor: 'background.paper',
                                    overflow: 'auto',
                            }}>
                                {boardList.tip.map((item: any, key: any) =>
                                    <ui.ListItem disablePadding>
                                        <ui.ListItemButton>
                                            <ui.ListItemIcon>
                                                {key + 1}
                                            </ui.ListItemIcon>
                                            <ui.Typography sx={{ width: 250 }} noWrap={true}>{item.title}</ui.Typography>
                                        </ui.ListItemButton>
                                    </ui.ListItem>
                                )}
                            </ui.List>
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
                                    height: 450,
                                    maxWidth: 360,
                                    bgcolor: 'background.paper',
                                    overflow: 'auto',
                            }}>
                                {boardList.question.map((item: any, key: any) =>
                                    <ui.ListItem disablePadding>
                                        <ui.ListItemButton>
                                            <ui.ListItemIcon>
                                                {key + 1}
                                            </ui.ListItemIcon>
                                            <ui.Typography sx={{ width: 250 }} noWrap={true}>{item.title}</ui.Typography>
                                        </ui.ListItemButton>
                                    </ui.ListItem>
                                )}
                            </ui.List>
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
                                    height: 450,
                                    maxWidth: 360,
                                    bgcolor: 'background.paper',
                                    overflow: 'auto',
                            }}>
                                {boardList.share.map((item: any, key: any) =>
                                    <ui.ListItem disablePadding>
                                        <ui.ListItemButton>
                                            <ui.ListItemIcon>
                                                {key + 1}
                                            </ui.ListItemIcon>
                                            <ui.Typography sx={{ width: 250 }} noWrap={true}>{item.title}</ui.Typography>
                                        </ui.ListItemButton>
                                    </ui.ListItem>
                                )}
                            </ui.List>
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