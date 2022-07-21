import React, { useState } from 'react';
import * as ui from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { requestRegister } from 'utils/request';

const Register = () => {
	const [username, setUsername] = useState<String>('');
	const [email, setEmail] = useState<String>('');
	const [password, setPassword] = useState<String>('');
	const [passwordCheck, setPasswordCheck] = useState<String>('');

	const _handleRegister = () => {
		if ( password === passwordCheck ) {
			requestRegister(username, email, password).then((response) => {
				console.log(response);
			}).catch((error) => {
				console.log(error);
			});
		}
		else {
			console.log('pw 불일치')
		}
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
					Sign Up
				</ui.Typography>
				<ui.Box component="form" noValidate sx={{ mt: 3 }}>
					<ui.Grid container spacing={2}>
						<ui.Grid item xs={12}>
							<ui.TextField
								autoComplete="given-name"
								name="firstName"
								required
								fullWidth
								id="firstName"
								label="이름"
								autoFocus
								onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setUsername(e.target.value)}
							/>
						</ui.Grid>
						<ui.Grid item xs={12}>
							<ui.TextField
								required
								fullWidth
								id="email"
								label="이메일 주소"
								name="email"
								autoComplete="email"
								onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setEmail(e.target.value)}
							/>
						</ui.Grid>
						<ui.Grid item xs={12} sm={6}>
							<ui.TextField
								required
								fullWidth
								name="password"
								label="비밀번호"
								type="password"
								id="password"
								autoComplete="new-password"
								onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setPassword(e.target.value)}
							/>
						</ui.Grid>
						<ui.Grid item xs={12} sm={6}>
							<ui.TextField
								required
								fullWidth
								name="passwordCheck"
								label="비밀번호 확인"
								type="password"
								id="passwordCheck"
								autoComplete="new-password"
								onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setPasswordCheck(e.target.value)}
							/>
						</ui.Grid>
						<ui.Grid item xs={12}>
							<ui.FormControlLabel control={<ui.Checkbox value="allowExtraEmails" color="primary" />} label="개인정보수집동의서 약관 동의" />
						</ui.Grid>
					</ui.Grid>
					<ui.Button
						type='button'
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2, bgcolor: 'secondary.main', color: 'text.primary' }}
						onClick={() => _handleRegister()}
					>
						회원가입
					</ui.Button>
					<ui.Grid container justifyContent="flex-end">
						<ui.Grid item>
							<ui.Link href="login" variant="body2" sx={{ color: 'info.main' }}>
								이미 계정이 있습니까? 로그인
							</ui.Link>
						</ui.Grid>
					</ui.Grid>
				</ui.Box>
			</ui.Box>
		</ui.Container>
	);
}

export default Register;