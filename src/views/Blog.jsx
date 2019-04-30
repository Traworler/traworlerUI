import React, { Component } from 'react';
import logo from "../images/logo.png";
import bkg1 from "../images/blog_background.jpg";
import blog1 from "../images/blog_1.jpg";
import blog2 from "../images/blog_2.jpg";
import blog3 from "../images/blog_3.jpg";
import latest1 from "../images/latest_1.jpg";
import latest2 from "../images/latest_2.jpg";
import latest3 from "../images/latest_3.jpg";
import latest4 from "../images/latest_4.jpg";
import gallery1 from "../images/gallery_1.jpg";
import gallery2 from "../images/gallery_2.jpg";
import gallery3 from "../images/gallery_3.jpg";
import gallery4 from "../images/gallery_4.jpg";
import gallery5 from "../images/gallery_5.jpg";
import gallery6 from "../images/gallery_6.jpg";
import fb1 from "../images/footer_blog_1.jpg";
import fb2 from "../images/footer_blog_2.jpg";
import fb3 from "../images/footer_blog_3.jpg";
import place from "../images/placeholder.svg";
import phone from "../images/phone-call.svg";
import message from "../images/message.svg";
import planet from "../images/planet-earth.svg";
class Blogs extends Component {
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
                            <li className="main_nav_item"><a href="#">news</a></li>
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
                    <li className="menu_item"><a href="/about">about us</a></li>
                    <li className="menu_item"><a href="/offers">offers</a></li>
                    <li className="menu_item"><a href="#">news</a></li>
                    <li className="menu_item"><a href="/contact">contact</a></li>
                  </ul>
                </div>
              </div>
              {/* Home */}
              <div className="home">
                <div className="home_background" data-parallax="scroll"><a href="#"><img src={bkg1} alt /></a>
                <div className="home_content">
                  <div className="home_title3">the blog</div>
                </div>
              </div>
              </div>
              {/* Blog */}
              <div className="blog">
                <div className="container">
                  <div className="row">
                    {/* Blog Content */}
                    <div className="col-lg-8">
                      <div className="blog_post_container">
                        {/* Blog Post */}
                        <div className="blog_post">
                          <div className="blog_post_image">
                            <img src={blog1} alt="https://unsplash.com/@anniespratt" />
                            <div className="blog_post_date d-flex flex-column align-items-center justify-content-center">
                              <div className="blog_post_day">01</div>
                              <div className="blog_post_month">Dec, 2017</div>
                            </div>
                          </div>
                          <div className="blog_post_meta">
                            <ul>
                              <li className="blog_post_meta_item"><a href>by Lore Papp</a></li>
                              <li className="blog_post_meta_item"><a href>Uncategorized</a></li>
                              <li className="blog_post_meta_item"><a href>3 Comments</a></li>
                            </ul>
                          </div>
                          <div className="blog_post_title"><a href="#">Try these new dream destinations</a></div>
                          <div className="blog_post_text">
                            <p>Aenean in lacus ligula. Phasellus euismod gravida eros. Aenean nec ipsum aliquet, pharetra magna id, interdum sapien. Etiam id lorem eu nisl pellentesque semper. Nullam tincidunt metus placerat, suscipit leo ut, tempus nulla. Fusce at eleifend tellus. Ut eleifend dui nunc, non fermentum qua.</p>
                          </div>
                          <div className="blog_post_link"><a href="#">read more</a></div>
                        </div>
                        {/* Blog Post */}
                        <div className="blog_post">
                          <div className="blog_post_image">
                            <img src={blog2} alt="https://unsplash.com/@tschax" />
                            <div className="blog_post_date d-flex flex-column align-items-center justify-content-center">
                              <div className="blog_post_day">01</div>
                              <div className="blog_post_month">Dec, 2017</div>
                            </div>
                          </div>
                          <div className="blog_post_meta">
                            <ul>
                              <li className="blog_post_meta_item"><a href>by Lore Papp</a></li>
                              <li className="blog_post_meta_item"><a href>Uncategorized</a></li>
                              <li className="blog_post_meta_item"><a href>3 Comments</a></li>
                            </ul>
                          </div>
                          <div className="blog_post_title"><a href="#">Try these new dream destinations</a></div>
                          <div className="blog_post_text">
                            <p>Aenean in lacus ligula. Phasellus euismod gravida eros. Aenean nec ipsum aliquet, pharetra magna id, interdum sapien. Etiam id lorem eu nisl pellentesque semper. Nullam tincidunt metus placerat, suscipit leo ut, tempus nulla. Fusce at eleifend tellus. Ut eleifend dui nunc, non fermentum qua.</p>
                          </div>
                          <div className="blog_post_link"><a href="#">read more</a></div>
                        </div>
                        {/* Blog Post */}
                        <div className="blog_post">
                          <div className="blog_post_image">
                            <img src={blog3} alt="https://unsplash.com/@stilclassics" />
                            <div className="blog_post_date d-flex flex-column align-items-center justify-content-center">
                              <div className="blog_post_day">01</div>
                              <div className="blog_post_month">Dec, 2017</div>
                            </div>
                          </div>
                          <div className="blog_post_meta">
                            <ul>
                              <li className="blog_post_meta_item"><a href>by Lore Papp</a></li>
                              <li className="blog_post_meta_item"><a href>Uncategorized</a></li>
                              <li className="blog_post_meta_item"><a href>3 Comments</a></li>
                            </ul>
                          </div>
                          <div className="blog_post_title"><a href="#">Try these new dream destinations</a></div>
                          <div className="blog_post_text">
                            <p>Aenean in lacus ligula. Phasellus euismod gravida eros. Aenean nec ipsum aliquet, pharetra magna id, interdum sapien. Etiam id lorem eu nisl pellentesque semper. Nullam tincidunt metus placerat, suscipit leo ut, tempus nulla. Fusce at eleifend tellus. Ut eleifend dui nunc, non fermentum qua.</p>
                          </div>
                          <div className="blog_post_link"><a href="#">read more</a></div>
                        </div>
                      </div>
                      <div className="blog_navigation">
                        <ul>
                          <li className="blog_dot active"><div />01.</li>
                          <li className="blog_dot"><div />02.</li>
                          <li className="blog_dot"><div />03.</li>
                        </ul>
                      </div>
                    </div>
                    {/* Blog Sidebar */}
                    <div className="col-lg-4 sidebar_col">
                      {/* Sidebar Search */}
                      <div className="sidebar_search">
                        <form action="#">
                          <input id="sidebar_search_input" type="search" className="sidebar_search_input" placeholder required="required" />
                          <button id="sidebar_search_button" type="submit" className="sidebar_search_button trans_300" value="Submit">
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
                          </button>
                        </form>
                      </div>
                      {/* Sidebar Archives */}
                      <div className="sidebar_archives">
                        <div className="sidebar_title">Archives</div>
                        <div className="sidebar_list">
                          <ul>
                            <li><a href="#">March 2017</a></li>
                            <li><a href="#">April 2017</a></li>
                            <li><a href="#">May 2017</a></li>
                          </ul>
                        </div>
                      </div>
                      {/* Sidebar Archives */}
                      <div className="sidebar_categories">
                        <div className="sidebar_title">Categories</div>
                        <div className="sidebar_list">
                          <ul>
                            <li><a href="#">Travel</a></li>
                            <li><a href="#">Exotic Destinations</a></li>
                            <li><a href="#">City Breaks</a></li>
                            <li><a href="#">Travel Tips</a></li>
                            <li><a href="#">Lifestyle &amp; Travel</a></li>
                            <li><a href="#">City Breaks</a></li>
                            <li><a href="#">Uncategorized</a></li>
                          </ul>
                        </div>
                      </div>
                      {/* Sidebar Latest Posts */}
                      <div className="sidebar_latest_posts">
                        <div className="sidebar_title">Latest Posts</div>
                        <div className="latest_posts_container">
                          <ul>
                            {/* Latest Post */}
                            <li className="latest_post clearfix">
                              <div className="latest_post_image">
                                <a href="#"><img src={latest1} alt /></a>
                              </div>
                              <div className="latest_post_content">
                                <div className="latest_post_title trans_200"><a href="#">A simple blog post</a></div>
                                <div className="latest_post_meta">
                                  <div className="latest_post_author trans_200"><a href="#">by Jane Smith</a></div>
                                  <div className="latest_post_date trans_200"><a href="#">Aug 25, 2016</a></div>
                                </div>
                              </div>
                            </li>
                            {/* Latest Post */}
                            <li className="latest_post clearfix">
                              <div className="latest_post_image">
                                <a href="#"><img src={latest2} alt /></a>
                              </div>
                              <div className="latest_post_content">
                                <div className="latest_post_title trans_200"><a href="#">Dream destination for you</a></div>
                                <div className="latest_post_meta">
                                  <div className="latest_post_author trans_200"><a href="#">by Jane Smith</a></div>
                                  <div className="latest_post_date trans_200"><a href="#">Aug 25, 2016</a></div>
                                </div>
                              </div>
                            </li>
                            {/* Latest Post */}
                            <li className="latest_post clearfix">
                              <div className="latest_post_image">
                                <a href="#"><img src={latest3} alt /></a>
                              </div>
                              <div className="latest_post_content">
                                <div className="latest_post_title trans_200"><a href="#">Tips to travel light</a></div>
                                <div className="latest_post_meta">
                                  <div className="latest_post_author trans_200"><a href="#">by Jane Smith</a></div>
                                  <div className="latest_post_date trans_200"><a href="#">Aug 25, 2016</a></div>
                                </div>
                              </div>
                            </li>
                            {/* Latest Post */}
                            <li className="latest_post clearfix">
                              <div className="latest_post_image">
                                <a href="#"><img src={latest4} alt /></a>
                              </div>
                              <div className="latest_post_content">
                                <div className="latest_post_title trans_200"><a href="#">How to pick your vacation</a></div>
                                <div className="latest_post_meta">
                                  <div className="latest_post_author trans_200"><a href="#">by Jane Smith</a></div>
                                  <div className="latest_post_date trans_200"><a href="#">Aug 25, 2016</a></div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* Sidebar Gallery */}
                      <div className="sidebar_gallery">
                        <div className="sidebar_title">Instagram</div>
                        <div className="gallery_container">
                          <ul className="gallery_items d-flex flex-row align-items-start justify-content-between flex-wrap">
                            <li className="gallery_item">
                              <a className="colorbox" href="https://images.unsplash.com/photo-1473625247510-8ceb1760943f?ixlib=rb-0.3.5&s=c0996cd16eda8c6f54c398de02d03cd3&auto=format&fit=crop&w=720&q=80">
                                <img src={gallery1} alt="https://unsplash.com/@mantashesthaven" />
                              </a>
                            </li>
                            <li className="gallery_item">
                              <a className="colorbox" href="https://images.unsplash.com/photo-1495162048225-6b3b37b8a69e?ixlib=rb-0.3.5&s=861dd3c7b9d3e735d7fd7cbb1eefed64&auto=format&fit=crop&w=720&q=80">
                                <img src={gallery2} alt="https://unsplash.com/@kensuarez" />
                              </a>
                            </li>
                            <li className="gallery_item">
                              <a className="colorbox" href="https://images.unsplash.com/photo-1502646275263-04be86afa386?ixlib=rb-0.3.5&s=682a41d7d9bf6e3feabc73a5fdd61dd2&auto=format&fit=crop&w=720&q=80">
                                <img src={gallery3} alt="https://unsplash.com/@jakobowens1" />
                              </a>
                            </li>
                            <li className="gallery_item">
                              <a className="colorbox" href="https://images.unsplash.com/photo-1484820301304-0b43512779dc?ixlib=rb-0.3.5&s=7a3393e9f507fb4718c36337a8014c52&auto=format&fit=crop&w=720&q=80">
                                <img src={gallery4} alt="https://unsplash.com/@seefromthesky" />
                              </a>
                            </li>
                            <li className="gallery_item">
                              <a className="colorbox" href="https://images.unsplash.com/photo-1490380169520-0a4b88d52565?ixlib=rb-0.3.5&s=7e6b68b1911fb4ffeea4c0750b8a5269&auto=format&fit=crop&w=720&q=80">
                                <img src={gallery5} alt="https://unsplash.com/@deannaritchie" />
                              </a>
                            </li>
                            <li className="gallery_item">
                              <a className="colorbox" href="https://images.unsplash.com/photo-1504434026032-a7e440a30b68?ixlib=rb-0.3.5&s=2cc35bf903b78ba4f7f7ed69bc2abe3f&auto=format&fit=crop&w=720&q=80">
                                <img src={gallery6} alt="https://unsplash.com/@benobro" />
                              </a>
                            </li>
                          </ul>
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
 
export default Blogs;