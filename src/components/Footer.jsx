import React from "react";
import { BrowserRouter, Link } from 'react-router-dom';

const convertAToLink = (children) =>
	React.Children.map(children, (child) => {
		if (child.type === 'a') {
			return <Link to={child.props.href}>{child.props.children}</Link>;
		}
		return child;
	});
export default function Footer() {
	return (
		<footer>
			<div id="bigfooter">
				<div className="clearfix">
					<div className="width100p bg-grey">
						<div className="container foot-menu">
							<div className="clearfix">
								<div className="row">
									<div className="mt-5 mb-5 col-6 col-sm-3 col-md-3">
										<h4 className="mar-bot20">Charagh Din Site</h4>
										<p>
											<Link to="/customers/login">Login/Register</Link ></p>
										<p>
											<Link to="/">Home</Link ></p>
										<p>
											<Link to="/products/shopping-cart" title="My Cart">Shopping Cart</Link >
										</p>
										<p>
											<Link to="/products/wishlist">Wishlist</Link ></p>
										<p>
											<Link to="/about-charagh-din">About Charagh Din</Link ></p>
										<p>
											<Link to="/testimonials/view-testimonial-list">Testimonials</Link ></p>
										<p>
											<Link to="/celebrities">Hall Of Fame</Link ></p>
										<p>
											<Link to="/view-cd-in-action">View Charagh Din in action</Link ></p>
										<p>
											<Link to="/contact-charagh-din">Contact Charagh Din</Link ></p>
										<p>
											<Link to="/faqs/">FAQ</Link >
										</p>
										<p>
											<Link to="/privacy-policy/">Privacy Policy</Link >
										</p>
									</div>
									<div className="mt-5 mb-5 col-xs-6 col-sm-3 col-md-3">
										<h4 className="mar-bot20">My Charagh Din Account</h4>
										<p>
											<Link to="/myaccount/my_profile">My Profile</Link ></p>
										<p>
											<Link to="/customers/change_password">Change Password</Link ></p>
										<p>
											<Link to="/myaccount/order_lists">Shirt / T'shirt Orders</Link ></p>
										<p>
											<Link to="/myaccount/gift_voucher_lists">Gift Voucher Orders</Link ></p>
										<p>
											<Link to="/myaccount/order_lists/incomplete">Incomplete Orders</Link ></p>
										<p>
											<Link to="/myaccount/issues_lists">Manage Issues</Link ></p>
										<p>
											<Link to="/gift_reminders/gift_reminder_list">Gift Reminders</Link ></p>
										<h4 className="mar-top15 text-white">Product Search</h4>
										<p className="clearfix input-group mar-top10 nosearchproduct">
											<input name="data[Product][search_products]" className="form-control sub SearchProducts" aria-describedby="basic-addon2" placeholder="Product Code" type="text" id="ProductSearchProducts" />
											<span className="input-group-addon btn-subscribe btnsearch">
												<button type="button" className="btn btn-subscribe">
													<span className="glyphicon glyphicon-play font16"></span>
												</button></span>
										</p>
									</div>
									<div className="mt-5 mb-5 col-xs-6 col-sm-3 col-md-3">
										<h4 className="mar-bot20">Charagh Din Community</h4>
										<p>
											<Link to="/participate/">Participate</Link ></p>
										<p>
											<Link to="/home/community-hub">Charagh Din Community Hub</Link >
										</p>


										<h4 className="mar-bot20">Email Subscription</h4>

										<div className="input-group">
											<input
												type="text"
												className="form-controlsub txtSubscribe form-control"
												aria-describedby="basic-addon2"
												id="txtSubscribe"
												name="data[txtSubscribe]"
											/>

											<span className="input-group-addon btn-subscribe" id="basic-addon2">
												<button
													type="button"
													id="btnSubscribe"
													className="btn btn-subscribe btnSubscribe"
												>
													<span className="glyphicon glyphicon-play font16"></span>
												</button>
											</span>
										</div>
										<div className="msgsub" style={{ display: "none" }}></div>
									</div>
									<div className="mt-5 mb-5 col-xs-6 col-sm-3 col-md-3">
										<h4 className="uppercase mar-bot20">Follow Us</h4>

										<ul className="footer_social padding0">
											<li>
												<Link to="https://www.facebook.com/cdshirts" target="_new">
													<img src="/img/fb-icon.png" className="img-responsive" onMouseOver={e => e.currentTarget.src = "/img/fb-icon1.png"} onMouseOut={e => e.currentTarget.src = "/img/fb-icon.png"} alt="facebook" title="facebook" />
												</Link >
											</li>
											<li>
												<Link to="https://www.instagram.com/charaghdinshirts/" target="_new">
													<img src="/img/instagram-icon.png" className="img-responsive" onMouseOver={e => e.currentTarget.src = "/img/instagram-icon1.png"} onMouseOut={e => e.currentTarget.src = "/img/instagram-icon.png"} alt="instagram" title="instagram" />
												</Link >
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div id="smallfooter" className="bg-grey">
				<ul className="nav nav-tabs nav-tabs1 nav-stacked">
					<li className="dropdown">
						<Link to="/customers/login" className="dropdown-toggle js-activated uppercase">Login/Register</Link ></li>
					<li className="dropdown"><Link to="/" className="dropdown-toggle js-activated uppercase">Home</Link ></li>
					<li className="dropdown"><Link to="/products/shopping-cart" title="My Cart" className="dropdown-toggle js-activated uppercase">Shopping Cart</Link ></li>
					<li className="dropdown"><Link to="/products/wishlist" className="dropdown-toggle js-activated uppercase">Wishlist</Link ></li>
					<li className="dropdown"><Link to="/about-charagh-din" className="dropdown-toggle js-activated uppercase">About Charagh Din</Link ></li>
					<li className="dropdown"><Link to="/testimonials/view-testimonial-list" className="dropdown-toggle js-activated uppercase">Testimonials</Link ></li>
					<li className="dropdown"><Link to="/celebrities" className="dropdown-toggle js-activated uppercase">Hall Of Fame</Link ></li>
					<li className="dropdown"><Link to="/view-cd-in-action" className="dropdown-toggle js-activated uppercase">View Charagh Din in action</Link ></li>
					<li className="dropdown"><Link to="/contact-charagh-din" className="dropdown-toggle js-activated uppercase">Contact / Feedback /	Street Map</Link ></li>
					<li className="dropdown"><Link to="#" className="dropdown-toggle js-activated uppercase" data-toggle="dropdown">MY CHARAGH DIN ACCOUNT<b className="caret"></b></Link >
						<ul className="dropdown-menu">
							<li><Link to="/myaccount/my_profile" tabIndex="-1">My Profile</Link ></li>
							<li><Link to="/customers/change_password" tabIndex="-1">Change Password</Link ></li>
							<li><Link to="/myaccount/order_lists" tabIndex="-1">Shirt / T'shirt Orders</Link ></li>
							<li><Link to="/myaccount/gift_voucher_lists" tabIndex="-1">Gift Voucher Orders</Link ></li>
							<li><Link to="/myaccount/order_lists/incomplete" tabIndex="-1">Incomplete Orders</Link ></li>
							<li><Link to="/myaccount/issues_lists" tabIndex="-1">Manage Issues</Link ></li>
							<li><Link to="/gift_reminders/gift_reminder_list" tabIndex="-1">Gift Reminders</Link ></li>
						</ul></li>
					<li><Link to="/faqs/" className="dropdown-toggle js-activated uppercase">FAQ</Link ></li>
					<li><Link to="/privacy-policy/" className="dropdown-toggle js-activated uppercase">Privacy Policy</Link ></li>
					<li><Link to="/participate/" className="dropdown-toggle js-activated uppercase">Participate</Link ></li>

					<li><Link to="/home/community-hub" className="dropdown-toggle js-activated uppercase">Charagh Din Community
						Hub</Link ></li>
					<li>
						<ul className="footer_social mar-top10">
							<li><Link to="https://www.facebook.com/cdshirts" target="_new"><img src="/img/fb-icon.png" className="img-responsive" alt="facebook" title="facebook" /></Link ></li>
							<li><Link to="https://www.instagram.com/charaghdinshirts/" target="_new"><img src="/img/instagram-icon.png" className="img-responsive" alt="instagram" title="instagram" /></Link ></li>
						</ul>
					</li>
					<li className="pad-lt10 pad-rt10">
						<h4 className="mar-top15 text-white">Email Subscription</h4>
						<div className="input-group mar-top10">
							<input type="text" name="data[txtSubscribe]" className="form-controlsub txtSubscribe" aria-describedby="basic-addon2" id="txtSubscribe" />
							<span className="input-group-addon btn-subscribe" id="basic-addon2">
								<button type="button" id="btnSubscribe" className="btn btn-subscribe btnSubscribe"><span className="glyphicon glyphicon-play font16"></span></button>
							</span>
						</div>
						<div className="msgsub" style={{ display: "none" }}></div>
					</li>
					<li className="clearfix pad-lt10 bord-botwht pad-rt10 mar-top10">
						<h4 className="mar-top15 text-white">Product Search</h4>
						<p className="clearfix input-group mar-top10 nosearchproduct">
							<input
								name="data[Product][search_products]"
								id="ProductSearchProducts1"
								className="form-controlsub SearchProducts"
								aria-describedby="basic-addon2"
								placeholder="Product Code"
								type="text"
							/>
							<span className="input-group-addon btn-subscribe btnsearch">
								<button className="btn btn-subscribe">
									<span className="glyphicon glyphicon-play font16"></span>
								</button>
							</span>
						</p>
					</li>
				</ul>
			</div>
		</footer>
	);
}