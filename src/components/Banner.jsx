import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

export default function Banner() {
    return (
        <>
            <BrowserRouter>
                <div className="row no-padding-ltrt  mar-top20 ">
                    <div className="d-flex gap-20">
                        <div className="no-padding-ltrt ">
                            <Link to="/category/8-Ditto"><img src={new URL('../assets/casual-shirts-2.webp', import.meta.url).href} alt="Stripe Shirts" className="img-responsive" /></Link>
                        </div>
                        <div className="no-padding-ltrt ">
                            <Link to="/category/7-party"><img src={new URL('../assets/party-shirts-2.webp', import.meta.url).href} alt="Party shirts" className="img-responsive" /></Link>
                        </div>
                    </div>
                </div>
                <div className="row no-padding-ltrt  mar-top20 ">
                    <div className="d-flex gap-20">
                        <div className="no-padding-ltrt ">
                            <div className="no-padding-ltrt ">
                                <Link to="/category/16-Festive"><img src={new URL('../assets/kurti-kraze.webp', import.meta.url).href} alt="Kurti Kraze" className="img-responsive" /></Link>
                            </div>
                            <div className="no-padding-ltrt d-flex mar-top20 gap-20">
                                <div className="no-padding-ltrt ">
                                    <Link to="/category/13-Itutu-(Slim-Fit)"><img src={new URL('../assets/sleek-itutu.webp', import.meta.url).href} alt="Sleek Itutu" className="img-responsive" /></Link>
                                </div>
                                <div className="no-padding-ltrt ">
                                    <Link to="/category/8-Ditto"><img src={new URL('../assets/ditto-mode.webp', import.meta.url).href} alt="Ditto Mode" className="img-responsive" /></Link>
                                </div>
                            </div>
                        </div>

                        <div className="no-padding-ltrt ">
                            <div className="">
                                <Link to="/category/11-Regular">
                                    <video autoPlay="" muted="" loop="" className="img-responsive center-block">
                                        <source src={new URL('../assets/everyday.mp4', import.meta.url).href} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </Link>

                            </div>
                        </div>
                    </div>

                    <div className=" no-padding-ltrt  mar-top20 ">
                        <div className="d-flex gap-20">
                            <div className="no-padding-ltrt ">
                                <Link to="/category/16-Festive"><img src={new URL('../assets/trending-styles.webp', import.meta.url).href} alt="Trending Styles" className="img-responsive" /></Link>
                            </div>
                            <div className="no-padding-ltrt ">
                                <div className="">
                                    <Link to="/category/16-Festive">
                                        <video autoPlay="" muted="" loop="" className="img-responsive center-block">
                                            <source src={new URL('../assets/video.mp4', import.meta.url).href} type="video/mp4" /> Your browser does not support the video tag
                                        </video>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=" no-padding-ltrt  mar-top20 ">
                        <div className="d-flex gap-20">
                            <div className="no-padding-ltrt ">
                                <Link to="/category/8-Ditto"><img src={new URL('../assets/stripe-shirts.webp', import.meta.url).href} alt="Stripe Shirts" className="img-responsive" /></Link>
                            </div>
                            <div className="no-padding-ltrt ">
                                <Link to="/category/9-Slim"><img src={new URL('../assets/plain-shirts.webp', import.meta.url).href} alt="Plain shirts" className="img-responsive" /></Link>
                            </div>
                            <div className="no-padding-ltrt ">
                                <Link to="/category/11-Regular"><img src={new URL('../assets/printed-t-shirts.webp', import.meta.url).href} alt="Printed T-shirts" className="img-responsive" /></Link>
                            </div>
                        </div>
                    </div>

                    <div className="no-padding-ltrt  mar-top20 ">
                        <div className="d-flex gap-20">
                            <div className="no-padding-ltrt ">
                                <Link to="/category/7-Party"><img src={new URL('../assets/printed-shirts-2.webp', import.meta.url).href} alt="Printed Shirts" className="img-responsive" /></Link>
                            </div>
                            <div className="no-padding-ltrt ">
                                <Link to="/category/10-Business"><img src={new URL('../assets/formal-shirts.webp', import.meta.url).href} alt="Formal T-shirts" className="img-responsive" /></Link>
                            </div>
                        </div>
                    </div>

                    <div className="no-padding-ltrt  mar-top20 ">
                        <div className="no-padding-ltrt ">
                            <Link to="/about-charagh-din"><img src={new URL('../assets/come-to-chiragdin.webp', import.meta.url).href} alt="come-to-chiragdin" className="img-responsive" /></Link>
                        </div>
                    </div>


                    <div className="col-xs-12 col-md-offset-3 mt-2 mb-5 text-center">
                        <div className="heading">
                            <h4 className="text-bold uppercase">Testimonials</h4>
                        </div>
                        <div className="mar-top30">				</div>
                        <div style={{textAlign: 'center'}} className="text-center mar-top20">Beautiful creations love you CD</div>
                        <div style={{textAlign: 'center'}} className="mar-top20 text-bold">&nbsp;&nbsp;NAMIT DHAWAN</div>
                        <div style={{textAlign: 'center'}} className="text-center mar-top20"><Link to="/testimonials/view-testimonial-list" className="btn button-red" role="button">View All</Link>				</div>
                    </div>
                </div>
            </BrowserRouter>
        </>
    );
}