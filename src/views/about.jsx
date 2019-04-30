import React, { Component } from 'react';
import logo from "../images/logo.png";
import fb1 from "../images/footer_blog_1.jpg";
import fb2 from "../images/footer_blog_2.jpg";
import fb3 from "../images/footer_blog_3.jpg";
import ml1 from "../images/milestone_1.png";
import ml2 from "../images/milestone_2.png";
import ml3 from "../images/milestone_3.png";
import ml4 from "../images/milestone_4.png";
import st1 from "../images/stats_1.png";
import st2 from "../images/stats_2.png";
import st3 from "../images/stats_3.png";
import st4 from "../images/stats_4.png";
import int from "../images/intro.png";
class About extends Component {
    state = {  }
    render() { 
        return ( 
                    <div className="super_container">
                      {/* Header */}
                      <header className="header">
                        {/* Top Bar */}
                        <div className="top_bar">
                          <div className="container">
                            <div className="row">
                              <div className="col d-flex flex-row">
                                <div className="phone">+45 345 3324 56789</div>
                                <div className="social">
                                  <ul className="social_list">
                                    <li className="social_list_item"><a href="#"><i className="fa fa-pinterest" aria-hidden="true" /></a></li>
                                    <li className="social_list_item"><a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                                    <li className="social_list_item"><a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                                    <li className="social_list_item"><a href="#"><i className="fa fa-dribbble" aria-hidden="true" /></a></li>
                                    <li className="social_list_item"><a href="#"><i className="fa fa-behance" aria-hidden="true" /></a></li>
                                    <li className="social_list_item"><a href="#"><i className="fa fa-linkedin" aria-hidden="true" /></a></li>
                                  </ul>
                                </div>
                                <div className="user_box ml-auto">
                                  <div className="user_box_login user_box_link"><a href="#">login</a></div>
                                  <div className="user_box_register user_box_link"><a href="#">register</a></div>
                                </div>
                              </div>
                            </div>
                          </div>		
                        </div>
                        {/* Main Navigation */}
                        <nav className="main_nav">
                          <div className="container">
                            <div className="row">
                              <div className="col main_nav_col d-flex flex-row align-items-center justify-content-start">
                                <div className="logo_container">
                                  <div className="logo"><a href="#"><img src={logo} alt />travelix</a></div>
                                </div>
                                <div className="main_nav_container ml-auto">
                                  <ul className="main_nav_list">
                                    <li className="main_nav_item"><a href="/landingpage">home</a></li>
                                    <li className="main_nav_item"><a href="#">about us</a></li>
                                    <li className="main_nav_item"><a href="/offers">offers</a></li>
                                    <li className="main_nav_item"><a href="blog">news</a></li>
                                    <li className="main_nav_item"><a href="contact.html">contact</a></li>
                                  </ul>
                                </div>
                                <div className="content_search ml-lg-0 ml-auto">
                                  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="17px" height="17px" viewBox="0 0 512 512" enableBackground="new 0 0 512 512" xmlSpace="preserve">
                                    <g>
                                      <g>
                                        <g>
                                          <path className="mag_glass" fill="#FFFFFF" d="M78.438,216.78c0,57.906,22.55,112.343,63.493,153.287c40.945,40.944,95.383,63.494,153.287,63.494
                                                          s112.344-22.55,153.287-63.494C489.451,329.123,512,274.686,512,216.78c0-57.904-22.549-112.342-63.494-153.286
                                                          C407.563,22.549,353.124,0,295.219,0c-57.904,0-112.342,22.549-153.287,63.494C100.988,104.438,78.439,158.876,78.438,216.78z
                                                          M119.804,216.78c0-96.725,78.69-175.416,175.415-175.416s175.418,78.691,175.418,175.416
                                                          c0,96.725-78.691,175.416-175.416,175.416C198.495,392.195,119.804,313.505,119.804,216.78z" />
                                        </g>
                                      </g>
                                      <g>
                                        <g>
                                          <path className="mag_glass" fill="#FFFFFF" d="M6.057,505.942c4.038,4.039,9.332,6.058,14.625,6.058s10.587-2.019,14.625-6.058L171.268,369.98
                                                          c8.076-8.076,8.076-21.172,0-29.248c-8.076-8.078-21.172-8.078-29.249,0L6.057,476.693
                                                          C-2.019,484.77-2.019,497.865,6.057,505.942z" />
                                        </g>
                                      </g>
                                    </g>
                                  </svg>
                                </div>
                                <form id="search_form" className="search_form bez_1">
                                  <input type="search" className="search_content_input bez_1" />
                                </form>
                                <div className="hamburger">
                                  <i className="fa fa-bars trans_200" />
                                </div>
                              </div>
                            </div>
                          </div>	
                        </nav>
                      </header>
                      <div className="menu trans_500">
                        <div className="menu_content d-flex flex-column align-items-center justify-content-center text-center">
                          <div className="menu_close_container"><div className="menu_close" /></div>
                          <div className="logo menu_logo"><a href="#"><img src={logo} alt /></a></div>
                          <ul>
                            <li className="menu_item"><a href="/landingpage">home</a></li>
                            <li className="menu_item"><a href="#">about us</a></li>
                            <li className="menu_item"><a href="/offers">offers</a></li>
                            <li className="menu_item"><a href="/blog">news</a></li>
                            <li className="menu_item"><a href="contact.html">contact</a></li>
                          </ul>
                        </div>
                      </div>
                      {/* Home */}
                      <div className="home">
                        <div className="home_background1 parallax-window" data-parallax="scroll"/>
                        <div className="home_content">
                          <div className="home_title1">about us</div>
                        </div>
                      </div>
                      {/* Intro */}
                      <div className="intro">
                        <div className="container">
                          <div className="row">
                            <div className="col-lg-7">
                              <div className="intro_image"><img src={int} alt /></div>
                            </div>
                            <div className="col-lg-5">
                              <div className="intro_content">
                                <div className="intro_title">we have the best tours</div>
                                <p className="intro_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis vulputate eros, iaculis consequat nisl. Nunc et suscipit urna. Integer elementum orci eu vehicula pretium. Donec bibendum tristique condimentum. Aenean in lacus ligula. Phasellus euismod gravida eros. Aenean nec ipsum aliquet, pharetra magna id, interdum sapien. Etiam id lorem eu nisl pellentesque semper. Nullam tincidunt metus placerat, suscipit leo ut, tempus nulla. Fusce at eleifend tellus. Ut eleifend dui nunc, non fermentum quam placerat non. Etiam venenatis nibh augue, sed eleifend justo tristique eu</p>
                                <div className="button intro_button"><div className="button_bcg" /><a href="#">explore now<span /><span /><span /></a></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Stats */}
                      <div className="stats">
                        <div className="container">
                          <div className="row">
                            <div className="col text-center">
                              <div className="section_title">years statistics</div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-10 offset-lg-1 text-center">
                              <p className="stats_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis vulputate eros, iaculis consequat nisl. Nunc et suscipit urna. Integer elementum orci eu vehicula pretium. Donec bibendum tristique condimentum. Aenean in lacus ligula. </p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col">
                              <div className="stats_years">
                                <div className="stats_years_last">2016</div>
                                <div className="stats_years_new float-right">2017</div>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col">
                              <div className="stats_contents">
                                {/* Stats Item */}
                                <div className="stats_item d-flex flex-md-row flex-column clearfix">
                                  <div className="stats_last order-md-1 order-3">
                                    <div className="stats_last_icon d-flex flex-column align-items-center justify-content-end">
                                      <img src={st1} alt />
                                    </div>
                                    <div className="stats_last_content">
                                      <div className="stats_number">1642</div>
                                      <div className="stats_type">Clients</div>
                                    </div>
                                  </div>
                                  <div className="stats_bar order-md-2 order-2" data-x={1642} data-y={3527} data-color="#31124b">
                                    <div className="stats_bar_perc">
                                      <div>
                                        <div className="stats_bar_value" />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="stats_new order-md-3 order-1 text-right">
                                    <div className="stats_new_icon d-flex flex-column align-items-center justify-content-end">
                                      <img src={st1} alt />
                                    </div>
                                    <div className="stats_new_content">
                                      <div className="stats_number">3527</div>
                                      <div className="stats_type">Clients</div>
                                    </div>
                                  </div>
                                </div>
                                {/* Stats Item */}
                                <div className="stats_item d-flex flex-md-row flex-column clearfix">
                                  <div className="stats_last order-md-1 order-3">
                                    <div className="stats_last_icon d-flex flex-column align-items-center justify-content-end">
                                      <img src={st2} alt />
                                    </div>
                                    <div className="stats_last_content">
                                      <div className="stats_number">768</div>
                                      <div className="stats_type">Returning Clients</div>
                                    </div>
                                  </div>
                                  <div className="stats_bar order-md-2 order-2" data-x={768} data-y={145} data-color="#a95ce4">
                                    <div className="stats_bar_perc">
                                      <div>
                                        <div className="stats_bar_value" />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="stats_new order-md-3 order-1 text-right">
                                    <div className="stats_new_icon d-flex flex-column align-items-center justify-content-end">
                                      <img src={st2} alt />
                                    </div>
                                    <div className="stats_new_content">
                                      <div className="stats_number">145</div>
                                      <div className="stats_type">Returning Clients</div>
                                    </div>
                                  </div>
                                </div>
                                {/* Stats Item */}
                                <div className="stats_item d-flex flex-md-row flex-column clearfix">
                                  <div className="stats_last order-md-1 order-3">
                                    <div className="stats_last_icon d-flex flex-column align-items-center justify-content-end">
                                      <img src={st3} alt />
                                    </div>
                                    <div className="stats_last_content">
                                      <div className="stats_number">11546</div>
                                      <div className="stats_type">Reach</div>
                                    </div>
                                  </div>
                                  <div className="stats_bar order-md-2 order-2" data-x={11546} data-y={9321} data-color="#fa6f1b">
                                    <div className="stats_bar_perc">
                                      <div>
                                        <div className="stats_bar_value" />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="stats_new order-md-3 order-1 text-right">
                                    <div className="stats_new_icon d-flex flex-column align-items-center justify-content-end">
                                      <img src={st3} alt />
                                    </div>
                                    <div className="stats_new_content">
                                      <div className="stats_number">9321</div>
                                      <div className="stats_type">Reach</div>
                                    </div>
                                  </div>
                                </div>
                                {/* Stats Item */}
                                <div className="stats_item d-flex flex-md-row flex-column clearfix">
                                  <div className="stats_last order-md-1 order-3">
                                    <div className="stats_last_icon d-flex flex-column align-items-center justify-content-end">
                                      <img src={st4} alt />
                                    </div>
                                    <div className="stats_last_content">
                                      <div className="stats_number">3729</div>
                                      <div className="stats_type">Items</div>
                                    </div>
                                  </div>
                                  <div className="stats_bar order-md-2 order-2" data-x={3729} data-y={17429} data-color="#fa9e1b">
                                    <div className="stats_bar_perc">
                                      <div>
                                        <div className="stats_bar_value" />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="stats_new order-md-3 order-1 text-right">
                                    <div className="stats_new_icon d-flex flex-column align-items-center justify-content-end">
                                      <img src={st4} alt />
                                    </div>
                                    <div className="stats_new_content">
                                      <div className="stats_number">17429</div>
                                      <div className="stats_type">More Items</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Add */}
                      <div className="add">
                        <div className="container">
                          <div className="row">
                            <div className="col">
                              <div className="add_container">
                                <div className="add_background" />
                                <div className="add_content">
                                  <h1 className="add_title">thailand</h1>
                                  <div className="add_subtitle">From <span>$999</span></div>
                                  <div className="button add_button"><div className="button_bcg" /><a href="#">explore now<span /><span /><span /></a></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Milestones */}
                      <div className="milestones">
                        <div className="container">
                          <div className="row">
                            {/* Milestone */}
                            <div className="col-lg-3 milestone_col">
                              <div className="milestone text-center">
                                <div className="milestone_icon"><img src={ml1} alt /></div>
                                <div className="milestone_counter" data-end-value={255}>0</div>
                                <div className="milestone_text">Clients</div>
                              </div>
                            </div>
                            {/* Milestone */}
                            <div className="col-lg-3 milestone_col">
                              <div className="milestone text-center">
                                <div className="milestone_icon"><img src={ml2} alt /></div>
                                <div className="milestone_counter" data-end-value={1176}>0</div>
                                <div className="milestone_text">Projects</div>
                              </div>
                            </div>
                            {/* Milestone */}
                            <div className="col-lg-3 milestone_col">
                              <div className="milestone text-center">
                                <div className="milestone_icon"><img src={ml3} alt /></div>
                                <div className="milestone_counter" data-end-value={39}>0</div>
                                <div className="milestone_text">Countries</div>
                              </div>
                            </div>
                            {/* Milestone */}
                            <div className="col-lg-3 milestone_col">
                              <div className="milestone text-center">
                                <div className="milestone_icon"><img src={ml4} alt /></div>
                                <div className="milestone_counter" data-end-value={127}>0</div>
                                <div className="milestone_text">Coffees</div>
                              </div>
                            </div>
                           
                          </div>
                        </div>
                      </div>
                      
                      
                       {/* Footer */}
              <footer className="footer">
                <div className="container">
                  <div className="row">
                    {/* Footer Column */}
                    <div className="col-lg-3 footer_column">
                      <div className="footer_col">
                        <div className="footer_content footer_about">
                          <div className="logo_container footer_logo">
                            <div className="logo"><a href="#"><img src={logo} alt />travelix</a></div>
                          </div>
                          <p className="footer_about_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis vu lputate eros, iaculis consequat nisl. Nunc et suscipit urna. Integer eleme ntum orci eu vehicula pretium.</p>
                          <ul className="footer_social_list">
                            <li className="footer_social_item"><a href="#"><i className="fa fa-pinterest" /></a></li>
                            <li className="footer_social_item"><a href="#"><i className="fa fa-facebook-f" /></a></li>
                            <li className="footer_social_item"><a href="#"><i className="fa fa-twitter" /></a></li>
                            <li className="footer_social_item"><a href="#"><i className="fa fa-dribbble" /></a></li>
                            <li className="footer_social_item"><a href="#"><i className="fa fa-behance" /></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* Footer Column */}
                    <div className="col-lg-3 footer_column">
                      <div className="footer_col">
                        <div className="footer_title">blog posts</div>
                        <div className="footer_content footer_blog">
                          {/* Footer blog item */}
                          <div className="footer_blog_item clearfix">
                            <div className="footer_blog_image"><img src={fb1} alt="https://unsplash.com/@avidenov" /></div>
                            <div className="footer_blog_content">
                              <div className="footer_blog_title"><a href="blog.html">Travel with us this year</a></div>
                              <div className="footer_blog_date">Nov 29, 2017</div>
                            </div>
                          </div>
                          {/* Footer blog item */}
                          <div className="footer_blog_item clearfix">
                            <div className="footer_blog_image"><img src={fb2} alt="https://unsplash.com/@deannaritchie" /></div>
                            <div className="footer_blog_content">
                              <div className="footer_blog_title"><a href="blog.html">New destinations for you</a></div>
                              <div className="footer_blog_date">Nov 29, 2017</div>
                            </div>
                          </div>
                          {/* Footer blog item */}
                          <div className="footer_blog_item clearfix">
                            <div className="footer_blog_image"><img src={fb3} alt="https://unsplash.com/@bergeryap87" /></div>
                            <div className="footer_blog_content">
                              <div className="footer_blog_title"><a href="blog.html">Travel with us this year</a></div>
                              <div className="footer_blog_date">Nov 29, 2017</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Footer Column */}
                    <div className="col-lg-3 footer_column">
                      <div className="footer_col">
                        <div className="footer_title">tags</div>
                        <div className="footer_content footer_tags">
                          <ul className="tags_list clearfix">
                            <li className="tag_item"><a href="#">design</a></li>
                            <li className="tag_item"><a href="#">fashion</a></li>
                            <li className="tag_item"><a href="#">music</a></li>
                            <li className="tag_item"><a href="#">video</a></li>
                            <li className="tag_item"><a href="#">party</a></li>
                            <li className="tag_item"><a href="#">photography</a></li>
                            <li className="tag_item"><a href="#">adventure</a></li>
                            <li className="tag_item"><a href="#">travel</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* Footer Column */}
                    <div className="col-lg-3 footer_column">
                      <div className="footer_col">
                        <div className="footer_title">contact info</div>
                        <div className="footer_content footer_contact">
                          <ul className="contact_info_list">
                            <li className="contact_info_item d-flex flex-row">
                              <div><div className="contact_info_icon"><img src="images/placeholder.svg" alt /></div></div>
                              <div className="contact_info_text">4127 Raoul Wallenber 45b-c Gibraltar</div>
                            </li>
                            <li className="contact_info_item d-flex flex-row">
                              <div><div className="contact_info_icon"><img src="images/phone-call.svg" alt /></div></div>
                              <div className="contact_info_text">2556-808-8613</div>
                            </li>
                            <li className="contact_info_item d-flex flex-row">
                              <div><div className="contact_info_icon"><img src="images/message.svg" alt /></div></div>
                              <div className="contact_info_text"><a href="mailto:contactme@gmail.com?Subject=Hello" target="_top">contactme@gmail.com</a></div>
                            </li>
                            <li className="contact_info_item d-flex flex-row">
                              <div><div className="contact_info_icon"><img src="images/planet-earth.svg" alt /></div></div>
                              <div className="contact_info_text"><a href="https://colorlib.com">www.colorlib.com</a></div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </footer>
              {/* Copyright */}
              <div className="copyright">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-3 order-lg-1 order-2  ">
                      <div className="copyright_content d-flex flex-row align-items-center">
                        <div>{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                          Copyright © All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                          {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</div>
                      </div>
                    </div>
                    <div className="col-lg-9 order-lg-2 order-1">
                      <div className="footer_nav_container d-flex flex-row align-items-center justify-content-lg-end">
                        <div className="footer_nav">
                          <ul className="footer_nav_list">
                            <li className="footer_nav_item"><a href="index.html">home</a></li>
                            <li className="footer_nav_item"><a href="about.html">about us</a></li>
                            <li className="footer_nav_item"><a href="offers.html">offers</a></li>
                            <li className="footer_nav_item"><a href="#">news</a></li>
                            <li className="footer_nav_item"><a href="contact.html">contact</a></li>
                          </ul>
                        </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
        
    
}
 
export default About;