import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  layout: {
    width: 'auto',
    display: 'block', // Fix IE11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

class SignIn extends Component<Props> {
  state = {
    email: '',
    password: '',
    error: ' '
  }

  handleEmailChange = (email) => {
    this.setState({email: email.target.value});
  }

  handlePasswordChange = (password) => {
    this.setState({password: password.target.value});
  }

  async signUp(){
    const settings = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'email': this.state.email,
        'password': this.state.password
      })
    };

    //const url = 'https://my-social-network-api.herokuapp.com/login';
    const url = 'http://127.0.0.1:3333/login';

    try {
      const response = await fetch(url, settings);
      let data = await response.json();

      if (data) {
        alert('ae mizeravis!');
      }

    } catch (err) {
      this.setState({error: 'Erro while try to login.'}, () => false);
    }
  }

  render() {
    return (
      <Fragment>
        <CssBaseline />
        <main className={styles.layout}>
          <Paper className={styles.paper}>
            <Avatar className={styles.avatar}>
              <LockIcon />
            </Avatar>
            <Typography variant="headline">Sign in</Typography>
            <form className={styles.form}>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="email">Email Address</InputLabel>
                <Input id="email" name="email" autoComplete="email" autoFocus onChange={this.handleEmailChange} />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="password"  onChange={this.handlePasswordChange}>Password</InputLabel>
                <Input
                  name="password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </FormControl>
              {this.state.error.length !== 0 && <p>{this.state.error}</p>}
              <Button
                onClick={() => this.signUp()}
                fullWidth
                variant="raised"
                color="primary"
                className={styles.submit}
              >
                Sign in
              </Button>
            </form>
          </Paper>
        </main>
      </Fragment>
    )
  }
}

SignIn.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignIn);