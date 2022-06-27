import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ItineraryHistoryList from '../History/ItineraryHistoryList'

const activeUrl ="https://goomtaxibackendapi.herokuapp.com/api/v1";


export  default class Dashboard extends Component {
  
  

  componentDidMount() {
     let mainNav;
     if (document.getElementById("loggedInOnly") ) {
            mainNav = document.getElementById("loggedInOnly");
            mainNav.style.display="block";
            mainNav.style.opacity=1;

    }

    

  }

  render() {
    const style1 ={
        visibility:"hidden", 
        display:"none"
    }
   
    return (
      

      <div className="content-page page-wrap" id="spread-out" >
                
                <div className="content animated animatedFadeInUp fadeInUp " id="plan-history">
                    <div className="container">

                        
                     

                   
                        
                        
                      



                        <div className="row">

                            

                            <div className="col-lg-12">
                                <div className="card-box animated animatedFadeInUp fadeInUp ">
                                    
                                    <h4 className="text-dark header-title m-t-0">Plan History</h4>

                                     <div className="form-group ">
                                                        <input id="foo-table-input2" type="text" placeholder="Search by location" className="product-search form-control input-sm" autoComplete="on" />
                                                    </div>
                                    <p className="text-muted m-b-30 font-13">
                                        
                                    </p>

                                    <div className="table-responsive card-box">
                                         <br/>
                                              <div className="col-sm-6 text-lg-center text-right pull-right">
                                                    <div className="form-group">
                                                        <input id="foo-table-input2" type="hidden" placeholder="Search by plan id" className="form-control input-sm" autoComplete="on" />
                                                    </div>
                                                </div>
                                     <div className="clearfix"></div>
                            <div className="m-t-10" style={{border:"1px solid #4c3392"}}></div>
                                        <table id="demo-foo-pagination" data-page-size="5" 
                       data-search="true" className="table table-actions-bar table toggle-circle table-hover">
                                            <thead>
                                                <tr>
                                                    <th data-toggle="true">Plan ID</th>
                                                    <th data-hide="phone">Plan Type</th>
                                                    <th data-hide="phone">Duration</th>
                                                    <th data-hide="phone">Total Itineraries</th>
                                                    <th data-hide="phone">Total Amount</th>
                                                    <th data-hide="all" style={{minWidth: "80px"}}></th>
                                                </tr>
                                            </thead>
                                            <tbody id="tablebodyB">
                                                
                                               

                                            </tbody>
                                            <tfoot>
                                            <tr>
                                                <td colSpan="5">
                                                    <div className="text-right">
                                                        <ul className="pagination pagination-split m-t-30"></ul>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tfoot>
                                        </table>
                                    </div>

                                </div>
                            </div>
                        

                        </div>
                       
                    <a id="portfolio" style={{textAlign:"center",fontSize:"15px"}} href="./create-plan" className="link-to-portfolio hover-target "><i className="md md-add text-info"></i></a>

                    </div> 

                </div>


            </div>


           
            
            
            
            
    );
  }

}






