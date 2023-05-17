import React, {useState} from 'react';
import { FormControl, Input, FormHelperText } from '@mui/material';
import Grid from '@mui/material/Grid';

const Login = () => {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  return(
    <><Grid item xs={12}>
      <FormControl fullWidth>
        <Input id="login_nome" aria-describedby="login_nome_helper_text" value={login}
          onChange={e => { setLogin(e.target.value); } } />
        <FormHelperText id="login_nome_helper_text">Login.</FormHelperText>
      </FormControl>
    </Grid><Grid item xs={12}>
        <FormControl fullWidth>
          <Input id="senha_nome" aria-describedby="senha_nome_helper_text" value={senha}
            onChange={e => { setSenha(e.target.value); } } />
          <FormHelperText id="senha_nome_helper_text">Senha.</FormHelperText>
        </FormControl>
      </Grid></>
  );
  
  
}

export default Login;
