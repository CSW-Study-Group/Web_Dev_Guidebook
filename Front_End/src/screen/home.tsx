import * as React from 'react';
import { useNavigate } from "react-router-dom";
import * as ui from '@mui/material';
import Copyright from 'components/copyright';
import TopBar from 'components/topBar';
import { cardDb } from 'utils/cardDb';

const Home = () => {
    let navigate = useNavigate()
    const _handleNavigate = (name: String) => {
        navigate(`/${name}`);
    }

    const _handleBoard = (router: String, stack: String) => {
        // 토큰 검증
        // 라우터 이동
        // 리덕스 스토어 코드
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
                원하는 정보를 클릭해주세요!
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
                            <ui.Button onClick={() => _handleNavigate('board')}>게시글 보기</ui.Button>
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

export default Home;