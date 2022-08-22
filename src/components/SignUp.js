import { Grid, Paper, TextField, Button, Avatar, Typography, Link } from '@mui/material';
import { useState } from 'react';
function SignUp() {
    const [userName, setUserName] = useState('')
    const [password, setPassWord] = useState('')
    const [comfirmPassword, setComfirmPassword] = useState('')
    const handleSignUp = () => {
        console.log("username : " + userName + "password: " + password + "confirmPassword: " + comfirmPassword)
    }
    const PaperStyle = { padding: 20, height: '70vh', width: 350, margin: "70px auto" }
    const btStyle = { margin: "20px 0px" }
    const TextStyle = { margin: "15px 0px" }
    return (
        <Grid>
            <Paper elevation={20} style={PaperStyle}>
                <Grid align='center'>
                    <Avatar>U</Avatar>
                    <h2>Sign Up</h2>
                    <TextField style={TextStyle} label="Username" variant='outlined' placeholder='Enter Username' id="username"
                        fullWidth required onChange={(e) => setUserName(e.target.value)}></TextField>
                </Grid>

                <TextField type="password" style={TextStyle} label="Password" variant='outlined' placeholder='Enter Password'
                    id='password' fullWidth required onChange={(e) => setPassWord(e.target.value)}></TextField>

                <TextField type="password" style={TextStyle} label="Confirm Password" variant='outlined'
                    placeholder='Enter Password' id='confirmpassword' fullWidth required onChange={(e) => setComfirmPassword(e.target.value)}></TextField>
                    
                <Button type='submit' color='primary' variant="contained" fullWidth style={btStyle} onClick={handleSignUp}> Sign Up</Button>
                <hr>
                </hr>
                <Typography align='center'>

                    <Link href='/' >Login here</Link>
                </Typography>

            </Paper>
        </Grid>

    )
}
export default SignUp;