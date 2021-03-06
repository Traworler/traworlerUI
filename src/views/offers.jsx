import React, { Component } from 'react';
import logo from "../images/logo.png";
import ab1 from "../images/about_background.jpg";
import suit from "../images/suitcase.png"; 
import bus from "../images/bus.png";
import dive from "../images/diving.png";
import depart from "../images/departure.png";
import cruise from "../images/cruise.png";
import island from "../images/island.png";
import fb1 from "../images/footer_blog_1.jpg";
import fb2 from "../images/footer_blog_2.jpg";
import fb3 from "../images/footer_blog_3.jpg";
import place from "../images/placeholder.svg";
import phone from "../images/phone-call.svg";
import message from "../images/message.svg";
import planet from "../images/planet-earth.svg";
import post from "../images/post.png";
import compass from "../images/compass.png";
import bicycle from "../images/bicycle.png";
import sailboat from "../images/sailboat.png";

class Offer extends Component {
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
                                    <li className="main_nav_item"><a href="/about">about us</a></li>
                                    <li className="main_nav_item"><a href="/offers">Offers</a></li>
                                    <li className="main_nav_item"><a href="/blog">news</a></li>
                                    <li className="main_nav_item"><a href="/contact">contact</a></li>
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
                            <li className="menu_item"><a href="index.html">home</a></li>
                            <li className="menu_item"><a href="about.html">about us</a></li>
                            <li className="menu_item"><a href="#">offers</a></li>
                            <li className="menu_item"><a href="blog.html">news</a></li>
                            <li className="menu_item"><a href="contact.html">contact</a></li>
                          </ul>
                        </div>
                      </div>
                      {/* Home */}
                      <div className="home">
                        <div className="home_background2 parallax-window" data-parallax="scroll"><a href="#"><img src={ab1} alt /></a>
                        <div className="home_content">
                          <div className="home_title2">our offers</div>
                        </div>
                      </div>
                      </div>
                      {/* Offers */}
                      <div className="offers">

                      <div className="search">
        <div className="search_inner">
          {/* Search Contents */}
          <div className="container fill_height no-padding">
            <div className="row fill_height no-margin">
              <div className="col fill_height no-padding">
                {/* Search Tabs */}
                <div className="search_tabs_container">
                  <div className="search_tabs d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start">
                    <div className="search_tab active d-flex flex-row align-items-center justify-content-lg-center justify-content-start"><img src={suit} alt /><span>hotels</span></div>
                    <div className="search_tab d-flex flex-row align-items-center justify-content-lg-center justify-content-start"><img src={bus} alt />car rentals</div>
                    <div className="search_tab d-flex flex-row align-items-center justify-content-lg-center justify-content-start"><img src={depart} alt />flights</div>
                    <div className="search_tab d-flex flex-row align-items-center justify-content-lg-center justify-content-start"><img src={island} alt />trips</div>
                    <div className="search_tab d-flex flex-row align-items-center justify-content-lg-center justify-content-start"><img src={cruise} alt />cruises</div>
                    <div className="search_tab d-flex flex-row align-items-center justify-content-lg-center justify-content-start"><img src={dive} alt />activities</div>
                  </div>		
                </div>
                {/* Search Panel */}
                <div className="search_panel active">
                  <form action="#" id="search_form_1" className="search_panel_content d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start">
                    <div className="search_item">
                      <div>destination</div>
                      <input type="text" className="destination search_input" required="required" />
                    </div>
                    <div className="search_item">
                      <div>check in</div>
                      <input type="text" className="check_in search_input" placeholder="YYYY-MM-DD" />
                    </div>
                    <div className="search_item">
                      <div>check out</div>
                      <input type="text" className="check_out search_input" placeholder="YYYY-MM-DD" />
                    </div>
                    <div className="search_item">
                      <div>adults</div>
                      <select name="adults" id="adults_1" className="dropdown_item_select search_input">
                        <option>01</option>
                        <option>02</option>
                        <option>03</option>
                      </select>
                    </div>
                    <div className="search_item">
                      <div>children</div>
                      <select name="children" id="children_1" className="dropdown_item_select search_input">
                        <option>0</option>
                        <option>02</option>
                        <option>03</option>
                      </select>
                    </div>
                    <br/>
                    <div className="extras">
                      <ul className="search_extras clearfix">
                        <li className="search_extras_item">
                          <div className="clearfix">
                            <input type="checkbox" id="search_extras_1" className="search_extras_cb" />
                            <label htmlFor="search_extras_1">Pet Friendly</label>
                          </div>	
                        </li>
                        <li className="search_extras_item">
                          <div className="clearfix">
                            <input type="checkbox" id="search_extras_2" className="search_extras_cb" />
                            <label htmlFor="search_extras_2">Car Parking</label>
                          </div>
                        </li>
                        <li className="search_extras_item">
                          <div className="clearfix">
                            <input type="checkbox" id="search_extras_3" className="search_extras_cb" />
                            <label htmlFor="search_extras_3">Wireless Internet</label>
                          </div>
                        </li>
                        <li className="search_extras_item">
                          <div className="clearfix">
                            <input type="checkbox" id="search_extras_4" className="search_extras_cb" />
                            <label htmlFor="search_extras_4">Reservations</label>
                          </div>
                        </li>
                        <li className="search_extras_item">
                          <div className="clearfix">
                            <input type="checkbox" id="search_extras_5" className="search_extras_cb" />
                            <label htmlFor="search_extras_5">Private Parking</label>
                          </div>
                        </li>
                        <li className="search_extras_item">
                          <div className="clearfix">
                            <input type="checkbox" id="search_extras_6" className="search_extras_cb" />
                            <label htmlFor="search_extras_6">Smoking Area</label>
                          </div>
                        </li>
                        <li className="search_extras_item">
                          <div className="clearfix">
                            <input type="checkbox" id="search_extras_7" className="search_extras_cb" />
                            <label htmlFor="search_extras_7">Wheelchair Accessible</label>
                          </div>
                        </li>
                        <li className="search_extras_item">
                          <div className="clearfix">
                            <input type="checkbox" id="search_extras_8" className="search_extras_cb" />
                            <label htmlFor="search_extras_8">Pool</label>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="more_options">
                      <div className="more_options_trigger">
                        <a href="#">load more options</a>
                      </div>
                      <ul className="more_options_list clearfix">
                        <li className="more_options_item">
                          <div className="clearfix">
                            <input type="checkbox" id="more_options_1" className="search_extras_cb" />
                            <label htmlFor="more_options_1">Pet Friendly</label>
                          </div>	
                        </li>
                        <li className="more_options_item">
                          <div className="clearfix">
                            <input type="checkbox" id="more_options_2" className="search_extras_cb" />
                            <label htmlFor="more_options_2">Car Parking</label>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <button className="button search_button">search<span /><span /><span /></button>
                  </form>
                </div>
            </div>
          </div>	
        </div>	
      </div>
      </div>
        
                        {/* Offers */}
                        <div className="container">
                          <div className="row">
                           <div className="col-lg-1 temp_col" />
                            <div className="col-lg-11">
                              {/* Offers Sorting */}
                              <div className="offers_sorting_container">
                                <ul className="offers_sorting">
                                  <li>
                                    <span className="sorting_text">price</span>
                                    <i className="fa fa-chevron-down" />
                                    <ul>
                                      <li className="sort_btn" data-isotope-option="{ &quot;sortBy&quot;: &quot;original-order&quot; }" data-parent=".price_sorting"><span>show all</span></li>
                                      <li className="sort_btn" data-isotope-option="{ &quot;sortBy&quot;: &quot;price&quot; }" data-parent=".price_sorting"><span>ascending</span></li>
                                    </ul>
                                  </li>
                                  <li>
                                    <span className="sorting_text">location</span>
                                    <i className="fa fa-chevron-down" />
                                    <ul>
                                      <li className="sort_btn" data-isotope-option="{ &quot;sortBy&quot;: &quot;original-order&quot; }"><span>default</span></li>
                                      <li className="sort_btn" data-isotope-option="{ &quot;sortBy&quot;: &quot;name&quot; }"><span>alphabetical</span></li>
                                    </ul>
                                  </li>
                                  <li>
                                    <span className="sorting_text">stars</span>
                                    <i className="fa fa-chevron-down" />
                                    <ul>
                                      <li className="filter_btn" data-filter="*"><span>show all</span></li>
                                      <li className="sort_btn" data-isotope-option="{ &quot;sortBy&quot;: &quot;stars&quot; }"><span>ascending</span></li>
                                      <li className="filter_btn" data-filter=".rating_3"><span>3</span></li>
                                      <li className="filter_btn" data-filter=".rating_4"><span>4</span></li>
                                      <li className="filter_btn" data-filter=".rating_5"><span>5</span></li>
                                    </ul>
                                  </li>
                                  <li className="distance_item">
                                    <span className="sorting_text">distance from center</span>
                                    <i className="fa fa-chevron-down" />
                                    <ul>
                                      <li className="num_sorting_btn"><span>distance</span></li>
                                      <li className="num_sorting_btn"><span>distance</span></li>
                                      <li className="num_sorting_btn"><span>distance</span></li>
                                    </ul>
                                  </li>
                                  <li>
                                    <span className="sorting_text">reviews</span>
                                    <i className="fa fa-chevron-down" />
                                    <ul>
                                      <li className="num_sorting_btn"><span>review</span></li>
                                      <li className="num_sorting_btn"><span>review</span></li>
                                      <li className="num_sorting_btn"><span>review</span></li>
                                    </ul>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-lg-12">
                              {/* Offers Grid */}
                              <div className="offers_grid">
                                {/* Offers Item */}
                                <div className="offers_item rating_4">
                                  <div className="row">
                                    <div className="col-lg-1 temp_col" />
                                    <div className="col-lg-3 col-1680-4">
                                      <div className="offers_image_container">
                                        {/* Image by https://unsplash.com/@kensuarez */}
                                        <div className="offers_image_background1"/>
                                        <div className="offer_name"><a href="single_listing.html">grand castle</a></div>
                                      </div>
                                    </div>
                                    <div className="col-lg-8">
                                      <div className="offers_content">
                                        <div className="offers_price">$70<span>per night</span></div>
                                        <div className="rating_r rating_r_4 offers_rating" data-rating={4}>
                                          <i />
                                          <i />
                                          <i />
                                          <i />
                                          <i />
                                        </div>
                                        <p className="offers_text">Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor. Lorem ipsum dolor sit amet.</p>
                                        <div className="offers_icons">
                                          <ul className="offers_icons_list">
                                            <li className="offers_icons_item"><img src={post} alt /></li>
                                            <li className="offers_icons_item"><img src={compass} alt /></li>
                                            <li className="offers_icons_item"><img src={bicycle} alt /></li>
                                            <li className="offers_icons_item"><img src={sailboat} alt /></li>
                                          </ul>
                                        </div>
                                        <div className="button book_button"><a href="#">book<span /><span /><span /></a></div>
                                        <div className="offer_reviews">
                                          <div className="offer_reviews_content">
                                            <div className="offer_reviews_title">very good</div>
                                            <div className="offer_reviews_subtitle">100 reviews</div>
                                          </div>
                                          <div className="offer_reviews_rating text-center">8.1</div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* Offers Item */}
                                <div className="offers_item rating_3">
                                  <div className="row">
                                    <div className="col-lg-1 temp_col" />
                                    <div className="col-lg-3 col-1680-4">
                                      <div className="offers_image_container">
                                        {/* Image by https://unsplash.com/@thoughtcatalog */}
                                        <div className="offers_image_background5" />
                                        <div className="offer_name"><a href="single_listing.html">eurostar hotel</a></div>
                                      </div>
                                    </div>
                                    <div className="col-lg-8">
                                      <div className="offers_content">
                                        <div className="offers_price">$50<span>per night</span></div>
                                        <div className="rating_r rating_r_3 offers_rating" data-rating={3}>
                                          <i />
                                          <i />
                                          <i />
                                          <i />
                                          <i />
                                        </div>
                                        <p className="offers_text">Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor. Lorem ipsum dolor sit amet.</p>
                                        <div className="offers_icons">
                                          <ul className="offers_icons_list">
                                            <li className="offers_icons_item"><img src="images/post.png" alt /></li>
                                            <li className="offers_icons_item"><img src="images/compass.png" alt /></li>
                                            <li className="offers_icons_item"><img src="images/bicycle.png" alt /></li>
                                            <li className="offers_icons_item"><img src="images/sailboat.png" alt /></li>
                                          </ul>
                                        </div>
                                        <div className="button book_button"><a href="#">book<span /><span /><span /></a></div>
                                        <div className="offer_reviews">
                                          <div className="offer_reviews_content">
                                            <div className="offer_reviews_title">very good</div>
                                            <div className="offer_reviews_subtitle">100 reviews</div>
                                          </div>
                                          <div className="offer_reviews_rating text-center">8.1</div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* Offers Item */}
                                <div className="offers_item rating_5">
                                  <div className="row">
                                    <div className="col-lg-1 temp_col" />
                                    <div className="col-lg-3 col-1680-4">
                                      <div className="offers_image_container">
                                        {/* Image by https://unsplash.com/@mindaugas */}
                                        <div className="offers_image_background6" />
                                        <div className="offer_name"><a href="single_listing.html">grand castle</a></div>
                                      </div>
                                    </div>
                                    <div className="col-lg-8">
                                      <div className="offers_content">
                                        <div className="offers_price">$110<span>per night</span></div>
                                        <div className="rating_r rating_r_5 offers_rating" data-rating={5}>
                                          <i />
                                          <i />
                                          <i />
                                          <i />
                                          <i />
                                        </div>
                                        <p className="offers_text">Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor. Lorem ipsum dolor sit amet.</p>
                                        <div className="offers_icons">
                                          <ul className="offers_icons_list">
                                            <li className="offers_icons_item"><img src="images/post.png" alt /></li>
                                            <li className="offers_icons_item"><img src="images/compass.png" alt /></li>
                                            <li className="offers_icons_item"><img src="images/bicycle.png" alt /></li>
                                            <li className="offers_icons_item"><img src="images/sailboat.png" alt /></li>
                                          </ul>
                                        </div>
                                        <div className="button book_button"><a href="#">book<span /><span /><span /></a></div>
                                        <div className="offer_reviews">
                                          <div className="offer_reviews_content">
                                            <div className="offer_reviews_title">very good</div>
                                            <div className="offer_reviews_subtitle">100 reviews</div>
                                          </div>
                                          <div className="offer_reviews_rating text-center">8.1</div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* Offers Item */}
                                <div className="offers_item rating_4">
                                  <div className="row">
                                    <div className="col-lg-1 temp_col" />
                                    <div className="col-lg-3 col-1680-4">
                                      <div className="offers_image_container">
                                        {/* Image by https://unsplash.com/@rktkn */}
                                        <div className="offers_image_background7" />
                                        <div className="offer_name"><a href="single_listing.html">eurostar hotel</a></div>
                                      </div>
                                    </div>
                                    <div className="col-lg-8">
                                      <div className="offers_content">
                                        <div className="offers_price">$50<span>per night</span></div>
                                        <div className="rating_r rating_r_4 offers_rating" data-rating={4}>
                                          <i />
                                          <i />
                                          <i />
                                          <i />
                                          <i />
                                        </div>
                                        <p className="offers_text">Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor. Lorem ipsum dolor sit amet.</p>
                                        <div className="offers_icons">
                                          <ul className="offers_icons_list">
                                            <li className="offers_icons_item"><img src="images/post.png" alt /></li>
                                            <li className="offers_icons_item"><img src="images/compass.png" alt /></li>
                                            <li className="offers_icons_item"><img src="images/bicycle.png" alt /></li>
                                            <li className="offers_icons_item"><img src="images/sailboat.png" alt /></li>
                                          </ul>
                                        </div>
                                        <div className="button book_button"><a href="#">book<span /><span /><span /></a></div>
                                        <div className="offer_reviews">
                                          <div className="offer_reviews_content">
                                            <div className="offer_reviews_title">very good</div>
                                            <div className="offer_reviews_subtitle">100 reviews</div>
                                          </div>
                                          <div className="offer_reviews_rating text-center">8.1</div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* Offers Item */}
                                <div className="offers_item rating_3">
                                  <div className="row">
                                    <div className="col-lg-1 temp_col" />
                                    <div className="col-lg-3 col-1680-4">
                                      <div className="offers_image_container">
                                        {/* Image by https://unsplash.com/@itsnwa */}
                                        <div className="offers_image_background8" />
                                        <div className="offer_name"><a href="single_listing.html">grand castle</a></div>
                                      </div>
                                    </div>
                                    <div className="col-lg-8">
                                      <div className="offers_content">
                                        <div className="offers_price">$90<span>per night</span></div>
                                        <div className="rating_r rating_r_3 offers_rating" data-rating={3}>
                                          <i />
                                          <i />
                                          <i />
                                          <i />
                                          <i />
                                        </div>
                                        <p className="offers_text">Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor. Lorem ipsum dolor sit amet.</p>
                                        <div className="offers_icons">
                                          <ul className="offers_icons_list">
                                            <li className="offers_icons_item"><img src="images/post.png" alt /></li>
                                            <li className="offers_icons_item"><img src="images/compass.png" alt /></li>
                                            <li className="offers_icons_item"><img src="images/bicycle.png" alt /></li>
                                            <li className="offers_icons_item"><img src="images/sailboat.png" alt /></li>
                                          </ul>
                                        </div>
                                        <div className="button book_button"><a href="#">book<span /><span /><span /></a></div>
                                        <div className="offer_reviews">
                                          <div className="offer_reviews_content">
                                            <div className="offer_reviews_title">very good</div>
                                            <div className="offer_reviews_subtitle">100 reviews</div>
                                          </div>
                                          <div className="offer_reviews_rating text-center">8.1</div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
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
                              <div><div className="contact_info_icon"><img src={place} alt /></div></div>
                              <div className="contact_info_text">4127 Raoul Wallenber 45b-c Gibraltar</div>
                            </li>
                            <li className="contact_info_item d-flex flex-row">
                              <div><div className="contact_info_icon"><img src={phone} alt /></div></div>
                              <div className="contact_info_text">2556-808-8613</div>
                            </li>
                            <li className="contact_info_item d-flex flex-row">
                              <div><div className="contact_info_icon"><img src={message} alt /></div></div>
                              <div className="contact_info_text"><a href="mailto:contactme@gmail.com?Subject=Hello" target="_top">contactme@gmail.com</a></div>
                            </li>
                            <li className="contact_info_item d-flex flex-row">
                              <div><div className="contact_info_icon"><img src={planet} alt /></div></div>
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
 
export default Offer;