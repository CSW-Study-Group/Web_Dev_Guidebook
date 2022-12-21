import * as React from 'react';
import { useNavigate } from "react-router-dom";
import * as ui from '@mui/material';
import Copyright from 'components/copyright';
import TopBar from 'components/topBar';
import { cardDb } from 'utils/cardDb';
import { useDispatch } from 'react-redux';
import { fetchBoardList } from 'module/board/action';
import { useSelector } from 'react-redux';
import { rootReducerType } from 'module/types';

const Home = () => {
    const dispatch = useDispatch();
    let navigate = useNavigate();

    const _handleNavigate = (name: String) => {
        navigate(`/${name}`);
    };

    const _handleBoard = (router: String, stack: String) => {
        _handleNavigate(router);
        dispatch<any>(fetchBoardList(stack));
    };

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
                원하는 정보를 클릭해주세요!
                </ui.Typography>
                <ui.Typography variant="h5" align="center" paragraph>
                    <ui.Button sx={{ color: 'white' }} variant="contained" onClick={() =>_handleNavigate('home/board/postAdd')}>게시물 작성하기</ui.Button>
                </ui.Typography>
            </ui.Container>
            <ui.Container sx={{ py: 8 }} maxWidth="md">
                <ui.Grid container spacing={4}>
                    {cardDb.map((card) => (
                    <ui.Grid item key={card.cardName} xs={12} sm={6} md={4}>
                        <ui.Card
                        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                        >
                        <ui.CardMedia
                            component="img"
                            sx={{
                                backgroundColor: 'white',
                                width: '100%',
                                height: '50%'
                            }}
                            image={card.imgUrl}
                            alt="img"
                        />
                        <ui.CardContent sx={{ flexGrow: 1 }}>
                            <ui.Typography gutterBottom variant="h5" component="h2">
                                {card.cardName}
                            </ui.Typography>
                            <ui.Typography>
                                {card.cardContent}
                            </ui.Typography>
                        </ui.CardContent>
                        <ui.CardActions>
                            <ui.Button onClick={() => _handleBoard('home/board', card.cardName)}>게시글 보기</ui.Button>
                        </ui.CardActions>
                        </ui.Card>
                    </ui.Grid>
                    ))}
                </ui.Grid>
            </ui.Container>
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

export default Home;