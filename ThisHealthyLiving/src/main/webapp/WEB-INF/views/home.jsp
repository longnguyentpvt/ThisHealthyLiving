<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html lang="en">
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="icon" type="image/x-icon" href="rs/img/favicon.ico">

        <title>Live good, Eat great, Think simple - This Healthy Living</title>
        <meta name="description"
              content="This site is about a simple and healthy lifestyle. Our goal is to reach out to people who desire a real happiness in life, which include whole foods, exercises, meditation, and clutter-free.">

        <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700,700i&amp;subset=vietnamese"
              rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Roboto:400,400i,500,500i,700,700i&amp;subset=vietnamese"
              rel="stylesheet">

        <!-- Bootstrap -->
        <link href="/rs/css/bootstrap-theme.min.css" rel="stylesheet">
        <link href="/rs/css/bootstrap.min.css" rel="stylesheet">

        <!-- Icons -->
        <link href="/rs/css/font-awesome.css" rel="stylesheet">

        <!-- Healthy CSS -->
        <link rel="stylesheet" href="/rs/css/healthyliving.css">
        <link rel="stylesheet" href="/rs/css/healthyliving-responsive.css">

        <%--React JS--%>
        <script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
        <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
        <script src="/rs/js/compiled-js/home.js"></script>
    </head>
    <body>
        <%--Common Header--%>
        <header>
            <!--SEARCH-->
            <div id="header-search">
                <div class="healthyLivingContainer">
                    <div class="clearfix">
                        <div class="socials">
                            <ul class="clearfix">
                                <li>
                                    <a href="" title="">
                                        <i class="fa fa-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="" title="">
                                        <i class="fa fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="" title="">
                                        <i class="fa fa-instagram"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="" title="">
                                        <i class="fa fa-pinterest-p"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="" title="">
                                        <i class="fa fa-youtube"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div id="search-input">
                            <div class="tb hidden-xs">
                                <div class="tb-cell">
                                    <input type="text" placeholder="Search..." class="healthy-input"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--END SEARCH-->

            <!--SLOGAN-->
            <div id="header-slogan" style="background-image: url(/rs/img/homepage-banner.jpg);">
                <div class="healthyLivingContainer">
                    <div id="slogan-container" class="hidden-xs">
                        <div id="slogan">
                            <!--<h1 style="opacity: 0">LIVE GOOD. EAT GREAT. THINK SIMPLE</h1>-->
                        </div>
                    </div>
                </div>
            </div>
            <!--END SLOGAN-->

            <!--HEADER MENU-->
            <div id="header-menu">
                <div class="healthyLivingContainer">
                    <div class="menu clearfix">
                        <ul class="clearfix hidden-xs">
                            <li class="home-bg-hover">
                                <a href="/" title="">Home</a>
                            </li>
                            <li class="health-bg-hover">
                                <a href="/Health" title="">Health</a>
                            </li>
                            <li class="mind-bg-hover">
                                <a href="/Mind" title="">Mind</a>
                            </li>
                            <li class="food-bg-hover">
                                <a href="/Food" title="">Food</a>
                            </li>
                            <li class="fitness-bg-hover">
                                <a href="/Fitness" title="">Fitness</a>
                            </li>
                            <li class="beauty-bg-hover">
                                <a href="/Beauty" title="">Beauty</a>
                            </li>
                            <li class="life-bg-hover">
                                <a href="/Life" title="">Life</a>
                            </li>
                            <li class="giveaway-bg-hover">
                                <a href="/Giveaway" title="">Giveaway</a>
                            </li>
                            <li class="home-bg-hover">
                                <a href="/About" title="">About</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <!--END HEADER MENU-->

            <!--HEADER LOGO-->
            <div id="header-logo">
                <div class="healthyLivingContainer">
                    <a href="/" title="">
                        <img src="/rs/img/logo-top.png" alt="" title=""/>
                    </a>
                </div>
            </div>
            <!--END HEADER LOGO-->
        </header>
        <%--End Common Header--%>

        <!--CONTENT-->
        <div id="home-content">
            <div class="healthyLivingContainer">

                <div id="healthy-posts-grid">

                </div>
                <!--SIDE BAR-->
                <div id="healthy-sidebar">

                    <!--NEWSLETTER BOX-->
                    <div class="sidebar-box">
                        <div class="sidebar-box-container">
                            <div id="newsletter-box">
                                <div id="newsletter-box-container">
                                    <div class="sidebar-row">
                                        <div class="sidebar-box-title">
                                            Stay connected
                                        </div>
                                    </div>

                                    <div class="sidebar-row">
                                        <div class="newsletter-form">
                                            <form action="" method="GET">
                                                <div class="input">
                                                    <input type="text" class="healthy-input"
                                                           placeholder="Your email address"/>
                                                </div>
                                                <div class="input">
                                                    <input type="submit" value="Sign Up" class="green-btn"/>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--END NEWSLETTER BOX-->

                    <!--QUOTE BOX-->
                    <div class="sidebar-box">
                        <div class="sidebar-box-container">
                            <div id="quote-box" class="image-box">
                                <div id="quote-box-container">
                                    <div class="sidebar-row">
                                        <div class="sidebar-box-title">
                                            Quote of the day
                                        </div>
                                    </div>

                                    <p id="quote-stc">The purpose of our lives<br/>is to to be happy</p>

                                    <p id="quote-person">- Dalai Lama -</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--END QUOTE BOX-->

                    <!--TIPS BOX-->
                    <div class="sidebar-box">
                        <div class="sidebar-box-container">
                            <div id="tips-box" class="image-box">
                                <div id="tips-box-container">
                                    <div class="sidebar-row">
                                        <div class="sidebar-box-title">
                                            Facts & Tips
                                        </div>
                                    </div>

                                    <p id="tips-stc">The ellagic acid contained<br/>
                                        in fresh raspberries as well as<br/>
                                        processed preserves or spreads of<br/>
                                        the same is alleged by studies<br/>
                                        to hamper cancer growth
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--END TIPS BOX-->

                    <!--TOP BOOKS BOX-->
                    <div class="sidebar-box">
                        <div class="sidebar-box-container">
                            <div id="top-favarite-box" class="link-box">
                                <div id="top-favarite-container">
                                    <a href="" title="">My All Time Favorite
                                        Health & Wellness
                                        Books
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--END TOP BOOKS BOX-->

                    <!--TOP BOOKS BOX-->
                    <div class="sidebar-box">
                        <div class="sidebar-box-container">
                            <div id="top-improve-box" class="link-box">
                                <div id="top-improve-container">
                                    <a href="" title="">The Self-Improvement
                                        Books that
                                        Changed
                                        My Life
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--END TOP BOOKS BOX-->

                    <!--MOST POPULAR POSTS-->
                    <div class="sidebar-box">
                        <div class="sidebar-box-container">
                            <div id="recents-box">
                                <div id="recents-container">

                                    <div class="sidebar-row">
                                        <div class="home-txt-color sidebar-box-title">
                                            Most Popular Posts
                                        </div>
                                    </div>

                                    <div class="sidebar-row sidebar-posts"></div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <!--END MOST POPULAR POST-->

                </div>
                <!--END SIDE BAR-->
            </div>
        </div>
        <!--END CONTENT-->

        <footer>
            <div id="healthy-footer">
                <div class="healthyLivingContainer">
                    <div class="content">
                        <!--FOOTER MENU-->
                        <div class="row">
                            <div class="col-xs-12">
                                <div id="footer-menu">
                                    <ul class="clearfix">

                                        <li>
                                            <h5>
                                                <a href="" title="">
                                                    Home
                                                </a>
                                            </h5>
                                        </li>

                                        <li>
                                            <h5>
                                                <a href="" title="">
                                                    Health
                                                </a>
                                            </h5>
                                        </li>

                                        <li>
                                            <h5>
                                                <a href="" title="">
                                                    Mind
                                                </a>
                                            </h5>
                                        </li>

                                        <li>
                                            <h5>
                                                <a href="" title="">
                                                    Food
                                                </a>
                                            </h5>
                                        </li>

                                        <li>
                                            <h5>
                                                <a href="" title="">
                                                    Fitness
                                                </a>
                                            </h5>
                                        </li>

                                        <li>
                                            <h5>
                                                <a href="" title="">
                                                    Beauty
                                                </a>
                                            </h5>
                                        </li>

                                        <li>
                                            <h5>
                                                <a href="" title="">
                                                    Life
                                                </a>
                                            </h5>
                                        </li>

                                        <li>
                                            <h5>
                                                <a href="" title="">
                                                    Giveaway
                                                </a>
                                            </h5>
                                        </li>

                                        <li>
                                            <h5>
                                                <a href="" title="">
                                                    About
                                                </a>
                                            </h5>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!--END FOOTER MENU-->

                        <div id="footer-middle">
                            <div class="logo">
                                <a href="" title="">
                                    <img src="/rs/img/logo-bottom.png" alt=""/>
                                </a>
                            </div>
                            <div class="yt-slogan">
                                <h1>LIVE GOOD. EAT GREAT. THINK SIMPLE</h1>
                            </div>
                            <div class="email">
                                <a href="" title="">
                                    blog@thishealthyliving.com
                                </a>
                            </div>
                            <div class="socials">
                                <ul class="clearfix">
                                    <li>
                                        <a href="" title="">
                                            <i class="fa fa-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="" title="">
                                            <i class="fa fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="" title="">
                                            <i class="fa fa-instagram"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="" title="">
                                            <i class="fa fa-pinterest-p"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="" title="">
                                            <i class="fa fa-youtube"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div id="foot-copyright">
                            <p>© 2016 This Healthy Living Blog. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </body>
</html>