import { Component } from 'react';
import { Avatar, Checkbox, Grid, Paper, TextField, FormControlLabel, Button, Typography, Link } from '@mui/material';
// import { useState } from "react";
import { connect } from "react-redux";
import { Authentication} from "../redux/slices/user"

const PaperStyled = { padding: 20, height: '70vh', width: 350, margin: "70px auto" };
const avatarStyle = { backgroundcolor: 'green' };
const btStyle = { margin: "20px 0px" };
const textStyle = { margin: "15px 0px" };
const linkStyle = { margin: "0px 10px", padding: 30 };
const SignupStyle = { margin: "0px 30px" };

class Login extends Component {
  constructor(props) {
    super(props);
    this.onchangeTitle = this.onchangeTitle.bind(this);
    this.onchangePassword=this.onchangePassword.bind(this);
    this.findUser = this.findUser.bind(this);
    this.state = {
      username: "",
      password: "",
    }

  }

  // const onChangSearchUsername = (e) => {
  //   const searchTitle = e.target.value;
  //   this.setState({
  //     searchTitle: searchTitle,
  //   });
  // }
  onchangeTitle(e) {
    this.setState({
      username: e.target.value,
    })
  };
  onchangePassword(e) {
    this.setState({
      password: e.target.value, 
    })
  };
  
  findUser() {
   
  
   const data=this.props.Authentication({userName : this.state.username, passWord: this.state.password});
   console.log(data);
   
  }; 
  // const [userName, setUserName] = useState('');
  // const [passWord, setPassWord] = useState('');
  // const handleSubmit = () => {
  //   const response =  fetch("/api/user");
  //   console.log(userName + passWord);
  //   console.log(response);

  // 
  
  render() {
    return (
      <Grid>
        <Paper elevation={20} style={PaperStyled}>
  
          <Grid align='center'>
            <Avatar style={avatarStyle}>D</Avatar>
            <h2>Sign In</h2>
          </Grid>
          <TextField style={textStyle} label="Username" variant="outlined" onChange={this.onchangeTitle} value={this.state.username} placeholder='Enter username'
            id="userName" fullWidth required >
          </TextField>

          <TextField style={textStyle} type="Password"
            label="Password" variant="outlined" onChange={this.onchangePassword} placeholder='Enter username' fullWidth required value={this.state.password}  />
          <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
          <Button type='submit' color='primary' style={btStyle} fullWidth variant="contained" onClick={this.findUser}>Sign In</Button>
          <hr></hr>
          <Typography style={linkStyle} >
  
            <Link href='#'> Forgot Password?</Link>
            <Link href='/signup' style={SignupStyle} >Sign Up</Link>
          </Typography>
  
        </Paper>
      </Grid>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToProps, { Authentication })(Login);
