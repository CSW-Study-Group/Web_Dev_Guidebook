import React, { useState } from 'react'
import * as ui from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import { requestLogin } from 'utils/request';

const Login = () => {
	const [email, setEmail] = useState<String>('');
	const [password, setPassword] = useState<String>('');

	const _handleLogin = () => {
		requestLogin(email, password).then((response) => {
			console.log(response);
		}).catch((error) => {
			console.log(error);
		});
	};

	return (
		<ui.Container component="main" maxWidth="xs">
			<ui.CssBaseline />
			<ui.Box
				sx={{
					marginTop: 8,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<ui.Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
					<LockOutlinedIcon />
				</ui.Avatar>
				<ui.Typography component="h1" variant="h4">
					웹 개발 백과사전
				</ui.Typography>
				<ui.Typography sx={{ color: 'text.secondary' }} component="h1" variant="h6">
					Sign in
				</ui.Typography>
				<ui.Box component="form" noValidate sx={{ mt: 1 }}>
					<ui.TextField
						margin="normal"
						required
						fullWidth
						id="email"
						label="아이디"
						name="email"
						autoComplete="email"
						autoFocus
						onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setEmail(e.target.value)}
					/>
					<ui.TextField
						sx={{ borderColor: 'info.main' }}
						margin="normal"
						required
						fullWidth
						name="password"
						label="비밀번호"
						type="password"
						id="password"
						autoComplete="current-password"
						onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setPassword(e.target.value)}
					/>
					<ui.FormControlLabel
						control={<ui.Checkbox value="remember" color="primary" />}
						label="아이디 저장"
					/>
					<ui.Button
						type="button"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2, bgcolor: 'secondary.main', color: 'text.primary' }}
						onClick={() => _handleLogin()}
					>
						로그인
					</ui.Button>
					<ui.Grid container>
						<ui.Grid item xs>
							<ui.Link sx={{ color: 'info.main' }} href="#" variant="body2">
								비밀번호를 잊어버렸나요?
							</ui.Link>
						</ui.Grid>
						<ui.Grid item>
							<ui.Link sx={{ color: 'info.main' }} href="register" variant="body2">
								{"계정이 없으신가요?"}
							</ui.Link>
						</ui.Grid>
					</ui.Grid>
				</ui.Box>
			</ui.Box>
			{/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
		</ui.Container>
	)
}

export default Login;