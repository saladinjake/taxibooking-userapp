/* eslint-disable global-require */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';







//facebook
let client_id = "1438251769712975";
let client_sec = "93b9f3a55a6dd95b15643e3745cc65fb"
let redirect_uri = 'https://goomtaxibackendapi.herokuapp.com/api/v1/auth/facebook/callback/';

import * as queryString from 'query-string';

const stringifiedParams = queryString.stringify({
  client_id: client_id,
  redirect_uri: redirect_uri,
  scope: ['email'].join(','), // comma seperated string
  response_type: 'code',
  auth_type: 'rerequest',
  display: 'popup',
});

const facebookLoginUrl = `https://www.facebook.com/v4.0/dialog/oauth?${stringifiedParams}`;










export class Home extends Component {
  render() {
    const styleM= { background:'#fff url("https://goomtaxiuser.herokuapp.com/public/assets/images/banner-home.jpg") no-repeat fixed left', backgroundSize:'contain', height:"100%",position:"fixed"};  
    const styleY ={padding:"43% 0px" }
    return (
       <React.Fragment>

            <div id="main-content" className="col-lg-8 col-md-6 hidden-md-down hidden-xs hidden-sm "  id="loginpage" style={styleM}>

  
    


              <div style={styleY} ></div>
            </div>

            


            
          
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 pull-right" >
                <div className="card-box animated animatedFadeInUp fadeInUp ">
                      <div className="panel-heading">
          <h1 className="text-custom m-t-40 m-b-20 text-left" style={{fontWeight:'700', letterSpacing:"3px", color: "rgb(126, 87, 194)"}}>Sign in</h1>
                <a href="https://goomtaxiuser.herokuapp.com/signup" className="btn-link" style={{textDecoration:"none"}}>or create an account</a>
                {/* <a href={facebookLoginUrl}>
    Login with Facebook
  </a> */}

  {/* <a href={googleLoginUrl}>Login with Google</a> */}
               
        </div>

                      <div className="panel-body">
                                  <div className="info-msg">
                                  <i className="fa fa-info-circle"></i>
                                  
                                </div>

                                <div className="success-msg" id="msg-suc">
                                  <i className="fa fa-check"></i>
                                  
                                </div>

                                <div className="warning-msg">
                                  <i className="fa fa-warning"></i>
                                  
                                </div>

                                <div className="error-msg" id="msg" >
                                  <i className="fa fa-times-circle"></i>
                                  
                                </div>

                                <form className="form-horizontal m-t-20 animated animatedFadeInUp fadeInUp " method="POST" >
                                



                                  
                                  <div className="form-group ">
                                    <div className="col-xs-12">
                                      <input className="form-control" type="text" id="userName" required="" placeholder="Email " />
                                    </div>
                                  </div>



                                  <div className="form-group">
                                    <div className="col-xs-12">
                                      <input className="form-control" id="userPw" type="password" required="" placeholder="Password" />
                                      <span toggle="#userPw" className="fa fa-fw fa-eye field-icon toggle-password"></span>
                                    </div>
                                  </div>

                               

                                  <div className="form-group text-center m-t-40">
                                    <div className="col-xs-12">
                                      <button style={{backgroundColor: "#7e57c2"}} id="login_btn" className="btn btn-info btn-block text-uppercase waves-effect waves-light btn-facebook waves-effect waves-light m-t-20" type="submit">
                                        Log In
                                      </button>
                                    </div>
                                  </div>

                                  <div className="form-group m-t-20 m-b-0">
                                    <div className="col-sm-12">
                                      <a href="./recovery" className="text-dark"><i className="fa fa-lock m-r-5"></i> Forgot your password?</a>
                                    </div>
                                  </div>
                                  
                                  <div className="form-group m-t-20 m-b-0">
                                    <div className="col-sm-12 text-center">
                                      <h4><b>Sign in with</b></h4>
                                    </div>
                                  </div>
                                  
                                  <div className="form-group m-b-0 text-center">
                                    <div className="col-sm-12">

                                      {/* <a style={{width:"60px",marginRight:"5px", height:"40px"}}  href="http://localhost:12000/api/v1/auth/google/" className=""><img style={{width:"40px",height:"40px"}} src="public/assets/images/google.png"  />
                                                
                                                  </a>

                                                   <a style={{width:"60px",marginRight:"5px", height:"40px"}} href="https://demouserapp.commute.ng:12000/api/v1/auth/instagram/" className="">
                                                    <img style={{width:"30px",height:"30px"}} src="public/assets/images/instagram.png"  />
                                                  </a>

                                                  <a style={{width:"60px",marginRight:"5px", height:"40px"}}   href="https://demouserapp.commute.ng:12000/api/v1/auth/facebook/" className="">
                                                    <img style={{width:"25px",height:"25px"}} src="public/assets/images/facebook2.png"  />
                                                  </a> */}
                                    </div>
                                  </div>
                                </form>

                                <div id="loader-container" className="loader-close">
    <div className="loader"></div>
    <div className="loader-text">loading...</div>
  </div>
  <div id="confirmation-container" className="confirmation-close">
    <div className="confirmation">Login Successful</div>
  </div>


                            </div>
                
                            <div className="row m-t-20">
                            <div className="col-sm-12 text-center">
                              <p>
                                Don't have an account? <a href="./signup" className="text-primary m-l-5"><b>Sign Up</b></a>
                              </p>
                            </div>
                          </div>
            

            </div>

                             
            </div>
         </React.Fragment>
    );
  }
}



export default Home;
