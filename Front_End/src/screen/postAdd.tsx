import React, { useEffect, useState } from 'react'
import * as ui from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { rootReducerType } from 'module/types';
import Copyright from 'components/copyright';
import TopBar from 'components/topBar';
import { useDispatch } from 'react-redux';
import { fetchBoardList } from 'module/board/action';
import { requestPostAdd } from 'utils/request';

const PostAdd = () => {
    const dispatch = useDispatch();
    let navigate = useNavigate();

    const userInfo = useSelector((state: rootReducerType) => state.authReducer.user);

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [stack, setStack] = useState('Node.js');
    const [tag, setTag] = useState('tip');


    const _handleNavigate = (name: String) => {
        navigate(`/${name}`);
    };

    const _handlePostAdd = () => {
        requestPostAdd(title, content, stack, tag, userInfo.id).then((res) => {
            alert("게시물을 성공적으로 작성하였습니다.")
            _handleNavigate('home/board');
            dispatch<any>(fetchBoardList(stack));
        }).catch((err) => {
            alert("게시물 작성을 실패하였습니다.")
        });
    }

  return (
    <div>
        <ui.CssBaseline />
        <TopBar />
        {/* Hero unit */}
        <ui.Box sx={{ bgcolor: 'background.paper', pt: 4, pb: 4, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <ui.Box sx={{ bgcolor: 'white', width: '95%', height: 55, mb: 3, }}>
                <ui.TextField
                    onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setTitle(e.target.value)}
                    sx={{ width: '100%', height: '100%' }}
                    label="게시글 제목"
                    variant="outlined"
                />
            </ui.Box>
            <ui.Box sx={{ bgcolor: 'white', width: '95%', height: 500, padding: 3 }}>
                <ui.TextField
                    onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setContent(e.target.value)}
                    sx={{ width: '100%', height: '100%' }}
                    label="글 내용"
                    variant="standard"
                    multiline
                    rows={18}
                />
            </ui.Box>
        </ui.Box>
        {/* Comment */}
        <ui.Box sx={{ bgcolor: 'background.paper', pb: 6, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <ui.Box sx={{ bgcolor: 'white', width: '95%', height: '', display: 'flex', flexDirection: 'column' }}>
                <ui.Grid container spacing={0}>
                    <ui.Grid sx={{ display: 'flex', alignItems: 'center' }} item xs={6}>
                        <ui.Select
                            sx={{ width: '100%' }}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={stack}
                            label="스택"
                            onChange={(e) => setStack(e.target.value)}
                        >
                            <ui.MenuItem value={'Node.js'}>Node.js</ui.MenuItem>
                            <ui.MenuItem value={'React.js'}>React.js</ui.MenuItem>
                            <ui.MenuItem value={'Vue.js'}>Vue.js</ui.MenuItem>
                            <ui.MenuItem value={'Spring'}>Spring</ui.MenuItem>
                            <ui.MenuItem value={'MySQL'}>MySQL</ui.MenuItem>
                            <ui.MenuItem value={'mongoDB'}>mongoDB</ui.MenuItem>
                        </ui.Select>
                    </ui.Grid>
                    <ui.Grid item xs={6}>
                    <ui.Select
                            sx={{ width: '100%' }}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={tag}
                            label="태그"
                            onChange={(e) => setTag(e.target.value)}
                        >
                            <ui.MenuItem value={'tip'}>팁</ui.MenuItem>
                            <ui.MenuItem value={'share'}>정보공유</ui.MenuItem>
                            <ui.MenuItem value={'question'}>질문 / 답변</ui.MenuItem>
                        </ui.Select>
                    </ui.Grid>
                </ui.Grid>
            </ui.Box>
        </ui.Box>
        <ui.Box sx={{ bgcolor: 'background.paper', pb: 6, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <ui.Box sx={{ bgcolor: 'white', width: '95%', height: '', display: 'flex', flexDirection: 'column' }}>
                <ui.Button onClick={_handlePostAdd}>게시물 작성하기</ui.Button>
            </ui.Box>
        </ui.Box>
        {/* Footer */}
        <ui.Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
            <ui.Typography variant="h6" align="center" gutterBottom>
                웹 개발 백과사전
            </ui.Typography>
            <ui.Typography variant="subtitle1" align="center" color="text.secondary" component="p">
                Web Dev Guideline
            </ui.Typography>
            <Copyright />
        </ui.Box>
        {/* End footer */}
    </div>
  );
}

export default PostAdd;