import React, { useState, useRef } from "react";
import firebase from "../../firebase";
import md5 from "md5";
import {
  getAuth,
  updateProfile,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import {
  Grid,
  Form,
  Segment,
  Button,
  Header,
  Message,
  Icon,
} from "semantic-ui-react";

import { Link } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassowrd] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  // const userRef = firebase.database().useRef("users");
  const auth = getAuth();

  // Validation

  // isFormValid = () => {
  //   let errors = [];
  //   let error;

  //   if (this.isFormEmpty(this.state)) {
  //     error = { message: "Fill in all fields" };
  //     this.setState({ errors: errors.concat(error) });
  //     return false;
  //   } else if (!this.isPasswordValid(this.state)) {
  //     error = { message: "Password is invalid" };
  //     this.setState({ errors: errors.concat(error) });
  //     return false;
  //   } else {
  //     return true;
  //   }
  // };

  // isFormEmpty = ({ username, email, password, passwordConfirmation }) => {
  //   return (
  //     !username.length ||
  //     !email.length ||
  //     !password.length ||
  //     !passwordConfirmation.length
  //   );
  // };

  // isPasswordValid = ({ password, passwordConfirmation }) => {
  //   if (password.length < 6 || passwordConfirmation.length < 6) {
  //     return false;
  //   } else if (password !== passwordConfirmation) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // };

  // displayErrors = (errors) =>
  //   errors.map((error, i) => <p key={i}>{error.message}</p>);

  const submitHandler = async (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((createdUser) => {
        updateProfile(auth.currentUser, {
          displayName: "Ami Bal",
        })
          .then(() => {
            console.log("profile updated");
          })
          .catch((error) => console.log(error));
      })
      .catch((err) => {
        console.error(err);
        this.setState({
          errors: this.state.errors.concat(err),
          loading: false,
        });
      });
  };

  // const saveUser = async (createdUser) => {
  //   return userRef.child(createdUser.user.uid).set({
  //     name: createdUser.user.displayName,
  //     avatar: createdUser.user.photoURL,
  //   });
  // };

  return (
    <>
      <Header
        style={{ backgroundColor: "#eee", paddingTop: "100px" }}
        as='h1'
        icon
        color='orange'
        textAlign='center'
      >
        Fahim's Whatsapp Clone
      </Header>
      <Grid
        style={{ paddingBottom: "200px" }}
        className='app'
        textAlign='center'
        verticalAlign='middle'
      >
        {errors && errors}
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' icon color='' textAlign='left'>
            Register User
          </Header>
          <Form onSubmit={submitHandler} size='large'>
            <Segment stacked>
              <Form.Input
                fluid
                icon='user'
                iconPosition='left'
                placeholder='Username'
                onChange={(e) => setUsername(e.target.value)}
                type='text'
              ></Form.Input>
              <Form.Input
                fluid
                icon='mail'
                iconPosition='left'
                placeholder='Email'
                onChange={(e) => setEmail(e.target.value)}
                type='text'
              ></Form.Input>
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='password'
                onChange={(e) => setPassowrd(e.target.value)}
                type='text'
              ></Form.Input>
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Passoword Confirmation'
                onChange={(e) => setConfirmPassword(e.target.value)}
                type='text'
              ></Form.Input>
              <Button disabled={loading} color='orange' fluid size='large'>
                Submit
              </Button>
            </Segment>
          </Form>
          <Message>
            Already a user? <Link to='/login'>Login</Link>
          </Message>
        </Grid.Column>
      </Grid>
    </>
  );
};

export default Register;
