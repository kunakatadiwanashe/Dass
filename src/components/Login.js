import React from 'react';

const Login = (props) => {

    const {
        email, setEmail, password, setPassword, handleLogin, 
        hasAccount, passwordError, emailError, setHasAccount, handleSignup, } = props;

    return (
        <section className='login'>
            <div className='loginContainer'>
                 <label>Username</label>
                 <input type="text" autoFocus required value={email} onChange={(e) => setEmail(e.target.value)} />
                 <p className="errorMsg">{emailError}</p>


                 <label>password</label>
                 <input type="password" value={password} required onChange={(e) => setPassword(e.target.value)} />
                 <p className="errorMsg">{passwordError}</p>

                 <div className="btnContainer">
                  {hasAccount ? (
                      <>
                      <button onClick={handleLogin}>sign in</button>
                      <p>Don't have an account 
                          <span onClick={() => setHasAccount(!hasAccount)} >sign up</span>
                      </p>
                      </>
                  ) : (
                      <>
                      <button onClick={handleSignup}>sign up</button>
                      <p>have an account ?
                          <span onClick={() => setHasAccount(!hasAccount)}>sign in</span>
                      </p>
                      </>
                  )

                  }
                 </div>

               
                 
            </div>

        </section>
    );
}

export default Login;