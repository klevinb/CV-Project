import React from "react";
import { Container, Image, Button, FormControl, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function SignUpComponent({ toggleLogin, handleOptionChange, selectedOption }) {
  return (
    <>
      <Container fluid className='signupPage'>
        <Image src='/spotify_navigation_logo_black.png' alt='black logo' />
      </Container>
      <Container>
        <div className='signupContent d-flex flex-column'>
          <span id='title'>Sign up for free to start listening.</span>
          <Button id='facebookBtn'>SIGN UP WITH FACEBOOK</Button>
          <div className='d-flex justify-content-between'>
            <hr />
            <p>OR</p>
            <hr />
          </div>
          <span>Sign up with your email address</span>
          <Form>
            <Form.Group controlId='formBasicEmail'>
              <Form.Label>What's your email</Form.Label>
              <FormControl
                type='email'
                placeholder='Enter your email.'
                className='mr-sm-2'
              />
            </Form.Group>
            <Form.Group controlId='formBasicEmailCheck'>
              <Form.Label>Confirm your email</Form.Label>
              <FormControl
                type='email'
                placeholder='Enter your email again.'
                className='mr-sm-2'
              />
            </Form.Group>
            <Form.Group controlId='formBasicPassword'>
              <Form.Label>Create a password</Form.Label>
              <FormControl
                type='password'
                placeholder='Create a password.'
                className='mr-sm-2'
              />
            </Form.Group>
            <Form.Group controlId='formBasicName'>
              <Form.Label>What should we call you?</Form.Label>
              <FormControl
                type='text'
                placeholder='Enter a profile name.'
                className='mr-sm-2'
              />
              <Form.Text className='text-muted'>
                This appears on your profile.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId='formBasicDate'>
              <Form.Label>What's your date of birth?</Form.Label>
              <FormControl type='date' className='mr-sm-2' />
            </Form.Group>
            <Form.Group controlId='formBasicDate'>
              <Form.Label>What's your gender?</Form.Label>
              <div className='d-flex justify-content-between'>
                <div className='radio'>
                  <label>
                    <input
                      type='radio'
                      value='male'
                      checked={selectedOption === "male"}
                      onChange={(e) => handleOptionChange(e)}
                    />
                    Male
                  </label>
                </div>
                <div className='radio'>
                  <label>
                    <input
                      type='radio'
                      value='female'
                      checked={selectedOption === "female"}
                      onChange={(e) => handleOptionChange(e)}
                    />
                    Female
                  </label>
                </div>
                <div className='radio'>
                  <label>
                    <input
                      type='radio'
                      value='non-binary'
                      checked={selectedOption === "non-binary"}
                      onChange={(e) => handleOptionChange(e)}
                    />
                    Non-binary
                  </label>
                </div>
              </div>
            </Form.Group>

            <Form.Group controlId='formBasicCheckbox'>
              <Form.Check
                type='checkbox'
                value='check'
                label={`Share my registration data with Spotify's content providers for marketing purposes. Note that your data may be transferred to a country outside of the EEA as described in our privacy policy.`}
              />
            </Form.Group>
            <div className='signupSection  d-flex flex-column'>
              <span className='terms'>
                By clicking on Sign up, you agree to{" "}
                <span>Spotify's Terms and Conditions of Use</span>.
              </span>
              <span className='terms'>
                To learn more about how Spotify collects, uses, shares and
                protects your personal data please read Spotify's
                <span> Privacy Policy</span>.
              </span>
              <Button id='registerButton'>SIGN UP</Button>
              <div className='d-flex justify-content-center'>
                <span>
                  Have an account?{" "}
                  <span onClick={() => toggleLogin()}>Log in</span> .
                </span>
              </div>
            </div>
          </Form>
        </div>
      </Container>
    </>
  );
}

export default SignUpComponent;
