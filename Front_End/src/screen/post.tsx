import React, { useEffect, useState } from 'react'
import * as ui from '@mui/material';
import { useSelector } from 'react-redux';
import { rootReducerType } from 'module/types';
import Copyright from 'components/copyright';
import TopBar from 'components/topBar';
import Comment from 'components/comment';
import { requestPostComment } from 'utils/request';

const Post = () => {
    const post = useSelector((state: rootReducerType) => state.postReducer.data);
    const token = useSelector((state: rootReducerType) => state.authReducer.user.access_token);

    const [content, setContent] = useState('');

    const _handleComment = () => {
        requestPostComment(post.id, content, token).then((res) => {
            alert("댓글이 성공적으로 작성되었습니다.");
        }).catch((error) => {
            alert("댓글 작성을 실패하였습니다.");
        })
    }

  return (
    <div>
        <ui.CssBaseline />
        <TopBar />
        {/* Hero unit */}
        <ui.Box sx={{ bgcolor: 'background.paper', pt: 4, pb: 4, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <ui.Box sx={{ bgcolor: 'white', width: '95%', height: 70, mb: 3, display: 'flex', alignItems: 'center' }}>
                <ui.Grid container spacing={0}>
                    <ui.Grid sx={{ display: 'flex', justifyContent: 'center' }} item xs={0.6}>
                        <ui.Typography>{post.id}</ui.Typography>
                    </ui.Grid>
                    <ui.Grid item xs={9}>
                        <ui.Typography>{post.title}</ui.Typography>
                    </ui.Grid>
                    <ui.Grid sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }} item xs={2}>
                        <ui.Typography>{post.createdAt}</ui.Typography>
                    </ui.Grid>
                </ui.Grid>
            </ui.Box>
            <ui.Box sx={{ bgcolor: 'white', width: '95%', height: 500, padding: 3 }}>
                <ui.Grid sx={{ mb: 1 }} container spacing={0}>
                    <ui.Grid item xs={10}>
                        <ui.Typography variant="h6" >작성자 : {post.userkey}</ui.Typography>
                    </ui.Grid>
                    <ui.Grid sx={{ display: 'flex', flexDirection: 'row' }} item xs={2}>
                        <ui.Typography variant="h6" sx={{ mr: 2 }}>추천수 : 1</ui.Typography>
                        <ui.Typography variant="h6" >조회수 : {post.view}</ui.Typography>
                    </ui.Grid>
                </ui.Grid>
                <ui.Divider sx={{ mb: 2 }} />
                <ui.Typography>{post.content}</ui.Typography>
            </ui.Box>
        </ui.Box>
        {/* Comment */}
        <ui.Box sx={{ bgcolor: 'background.paper', pb: 6, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <ui.Box sx={{ bgcolor: 'white', width: '95%', height: '100%', display: 'flex', flexDirection: 'column' }}>
                {post.Comments.map((item: any, key: any) => <Comment userkey={item.userkey} createdAt={item.createdAt} content={item.content}/>)}
            </ui.Box>
        </ui.Box>
        {/* Comment Input */}
        <ui.Box sx={{ bgcolor: 'background.paper', pb: 6, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <ui.Box sx={{ bgcolor: 'white', width: '95%', height: '100%', mb: 3, display: 'flex', flexDirection: 'column' }}>
                <ui.TextField onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setContent(e.target.value)} />
                <ui.Button variant="outlined" onClick={_handleComment}>댓글 추가</ui.Button>
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

export default Post;