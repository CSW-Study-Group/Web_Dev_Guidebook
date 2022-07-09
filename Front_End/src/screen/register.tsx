import React, { useState } from 'react';
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
					Sign Up
				</Typography>
				<Box component="form" noValidate sx={{ mt: 3 }}>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								autoComplete="given-name"
								name="firstName"
								required
								fullWidth
								id="firstName"
								label="이름"
								autoFocus
								onChange={(e) => setUsername(e.target.value)}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								id="email"
								label="이메일 주소"
								name="email"
								autoComplete="email"
								onChange={(e) => setEmail(e.target.value)}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								required
								fullWidth
								name="password"
								label="비밀번호"
								type="password"
								id="password"
								autoComplete="new-password"
								onChange={(e) => setPassword(e.target.value)}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								required
								fullWidth
								name="passwordCheck"
								label="비밀번호 확인"
								type="password"
								id="passwordCheck"
								autoComplete="new-password"
								onChange={(e) => setPasswordCheck(e.target.value)}
							/>
						</Grid>
						<Grid item xs={12}>
							<FormControlLabel control={<Checkbox value="allowExtraEmails" color="primary" />} label="개인정보수집동의서 약관 동의" />
						</Grid>
					</Grid>
					<Button
						type='button'
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2, bgcolor: 'secondary.main', color: 'text.primary' }}
						onClick={() => _handleRegister()}
					>
						회원가입
					</Button>
					<Grid container justifyContent="flex-end">
						<Grid item>
							<Link href="/login" variant="body2" sx={{ color: 'info.main' }}>
								이미 계정이 있습니까? 로그인
							</Link>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</Container>
	);
}

export default Register;