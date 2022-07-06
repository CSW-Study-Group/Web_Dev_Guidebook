import React from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Login = () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get('email'),
          password: data.get('password'),
        });
      };
      return (
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h4">
                웹 개발 백과사전
              </Typography>
              <Typography sx={{ color: 'text.secondary' }} component="h1" variant="h6">
                Sign in
              </Typography>
              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="아이디"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                    sx={{ borderColor: 'info.main' }}
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="비밀번호"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="아이디 저장"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, bgcolor: 'secondary.main', color: 'text.primary' }}
                >
                  로그인
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link sx={{ color: 'info.main' }} href="#" variant="body2">
                      비밀번호를 잊어버렸나요?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link sx={{ color: 'info.main' }} href="register" variant="body2">
                      {"계정이 없으신가요?"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
          </Container>
    )
}

export default Login;