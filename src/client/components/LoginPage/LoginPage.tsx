import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';

export const LoginPage = () => {
  return (
    <PageWrapper>
      <InputLogin label='Login' variant='outlined' margin='normal' color='success' />
      <InputLogin label='Password' variant='outlined' margin='normal' color='success' />
      <ButtonGroupWrapper>
        <ButtonGroup variant='contained' aria-label='outlined primary button group' fullWidth>
          <Button>SignIn</Button>
          <Button>LogIn</Button>
        </ButtonGroup>
      </ButtonGroupWrapper>
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
