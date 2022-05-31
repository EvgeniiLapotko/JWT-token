import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useState } from 'react';

export const LoginPage = () => {
  const [signIn, setSignIn] = useState(false);
  const [error, setError] = useState(false);
  const [loginValue, setLoginValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [confirmValue, setConfirmValue] = useState('');

  const onSubmit = () => {
    console.log('enter');
    if ((confirmValue !== passwordValue && signIn) || !loginValue.length || !passwordValue.length) {
      setError(true);
    } else {
      setError(false);
    }
  };
  return (
    <PageWrapper>
      <h3 style={{ marginBottom: '10px' }}> {signIn ? 'Register' : 'Login'}</h3>
      <ButtonGroupWrapper>
        <ButtonGroup variant='contained' aria-label='outlined primary button group' fullWidth>
          <Button onClick={() => setSignIn(true)}>SignIn</Button>
          <Button
            onClick={() => {
              setSignIn(false);
              setError(false);
            }}
          >
            LogIn
          </Button>
        </ButtonGroup>
      </ButtonGroupWrapper>
      <InputWrapper>
        <InputLogin
          label='Login'
          variant='outlined'
          margin='normal'
          color='success'
          value={loginValue}
          onChange={(e) => setLoginValue(e.target.value)}
          onBlur={(e) => {
            e.target.value.length && setError(false);
          }}
        />
        <InputLogin
          label='Password'
          variant='outlined'
          margin='normal'
          color='success'
          value={passwordValue}
          onChange={(e) => setPasswordValue(e.target.value)}
          onBlur={(e) => {
            e.target.value.length && setError(false);
          }}
        />
        {signIn && (
          <InputLogin
            label='Confirm the password'
            variant='outlined'
            margin='normal'
            color='success'
            error={error}
            helperText={error ? 'Passwords do not match' : ''}
            value={confirmValue}
            onChange={(e) => setConfirmValue(e.target.value)}
            onBlur={(e) => {
              if (e.target.value !== passwordValue && signIn) {
                setError(true);
              } else {
                setError(false);
              }
            }}
          />
        )}
      </InputWrapper>

      <ButtonSubmit
        onClick={onSubmit}
        variant='contained'
        style={{ width: '250px' }}
        disabled={error}
      >
        {signIn ? 'register' : 'Login'}
      </ButtonSubmit>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const InputWrapper = styled.div`
  min-height: 260px;
  display: flex;
  flex-direction: column;
  align-items: center;
  //justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const InputLogin = styled(TextField)`
  color: #fff;
  border-color: aliceblue;
  width: 400px;
  & label{
    color: #fff
  }
  & .MuiOutlinedInput-root {
    & input{
      color: #fff;
    },
    & fieldset {
      border-color: #fff;
    },
    &:hover fieldset{
      border-color: green;
    },
    &.Mui-focused fieldset {
      border-color: green;
    },
    
  },
`;

const ButtonGroupWrapper = styled.div`
  margin-top: 20px;
  width: 400px;
  & .MuiButton-root {
    background-color: green;
    border-color: #aaa !important;
    &:hover {
      background-color: limegreen;
    }
  }
`;

const ButtonSubmit = styled(Button)`
  width: 400px;

  &.MuiButton-root {
    background-color: #2b73a5;
    border-color: #aaa !important;

    &:hover {
      background-color: #0e718f;
    }

    &:disabled {
      background-color: #aedbe8;
    }
  }
`;
