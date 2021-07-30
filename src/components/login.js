import React, {useState} from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import { useForm } from "react-hook-form";
const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [name, setName] = useState("");
  const [error, setError] = useState("");
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };


  const onChange = (e) => {
    const newValue = e.target.value;
  
    if (!newValue.match(/[%<>\\$ '"]/)){
      setName(newValue); // only set when successful
      setError(" this is wrong s");

    } else {
      // setError("Unforbidden character: %<>$'\"");

    }
  };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Sign In</h2>
        </Grid>

        {/* <TextField
    value={name}
    onChange={onChange}
    helperText={error} // error message
    error={!!error} // set to true to change the border/helperText color to red
  /> */}
        <TextField
          label="Username"
          placeholder="Enter username"
          name="username"
          fullWidth
          required
          // error={Boolean(errors.username)}
          // helperText="user name is required"

          value={name}
          onChange={onChange}
          helperText={error} // error message
          error={!!error} // set to true to change the border/helperText color to red
        />
        <TextField
          label="Password"
          placeholder="Enter password"
          type="password"
          fullWidth
          required
          minLength={8}
        />
        <FormControlLabel
          control={<Checkbox name="checkedB" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          style={btnstyle}
          fullWidth
        >
          Sign in
        </Button>
        <Typography>
          <Link href="#">Forgot password ?</Link>
        </Typography>
        <Typography>
          {" "}
          Do you have an account ?<Link href="#">Sign Up</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
