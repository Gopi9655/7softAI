import React from 'react'
import './product.css'


function Product (){
    return(

                <div>
                     <meta charset="UTF-8"></meta>
                    <meta name='viewport' content='width=device-width, initial-scale=1.0' />
                    <div className='container__product '>
                        <div>
                            <div className='head'  style={{marginBottom:'3rem'}}><h1><b>Brand your Customer Engagement with Branded Calls and SMS</b></h1></div>
                            <p className='head1' style={{marginBottom:'3rem'}}>Enable brand authenticity with enhanced layouts, clear branding, and exceptional features.</p>
                                <div className='btn-wrap marginT20'>
                                    <button className='btn btn-1' style={{padding:'1rem 2rem'}}>Download Brochure</button></div>
                              </div>
                            <video src="https://routemobile.com/wp-content/uploads/2021/05/Route-Mobile_Products-Services_Identity-and-Veriffication_Brandi5_Banner.mp4" className='image_1' preload="auto" autoplay="" muted="" loop="" playsinline=""></video>                    
                      </div>
                   <div className='content1'>
                        <div className='para1'><center>Transform your native SMS or a Dialler App into an engaging communications platform for enterprises, delivering greater brand authenticity and higher customer engagement with Branded Calls and Messages. Modify your SMS conversation into an enriched business interaction, or better your calls for enhanced communication and brand presence.</center>
                        <center><button className='btn btn-2' style={{padding:'1rem 2rem'}}>Get Started</button></center>
                     </div>
                   </div>
                    <h1 className='head head2' >Features of Brandi5</h1>
                   <div className='row' style={{margin:'2rem 5rem'}}>
                        <div className='coloumn1'>
                            <div className='col-md3'>
                                <div class="fea_icon">
                                    <img decoding="async"  src="https://routemobile.b-cdn.net/wp-content/uploads/2021/06/Brandi5-_Displays-_-Verifies-Brand-Logo-and-Name-.svg" alt="Displays &amp; Verifies Brand Logo and Name" data-lazy-src="https://routemobile.b-cdn.net/wp-content/uploads/2021/06/Brandi5-_Displays-_-Verifies-Brand-Logo-and-Name-.svg" data-ll-status="loaded"></img>
                                </div>
                                <div className='icon_content'>Displays & Verifies Brand Logo and Name</div>                              
                            </div>  
                            <div className='col-md3'>
                                <div class="fea_icon">
                                    <img decoding="async"  src="https://routemobile.b-cdn.net/wp-content/uploads/2021/06/Brandi5-_Simple-to-Use-Standard-Menu-.svg" alt="Displays &amp; Verifies Brand Logo and Name" data-lazy-src="https://routemobile.b-cdn.net/wp-content/uploads/2021/06/Brandi5-_Displays-_-Verifies-Brand-Logo-and-Name-.svg" data-ll-status="loaded"></img>
                                </div>
                                <div className='icon_content'>Simple to Use Standard Menu</div>                              
                            </div>        
                       </div>
                       <div className='coloumn2'>
                            <div className='col-md6'>
                                    <img src="https://routemobile.b-cdn.net/wp-content/uploads/2021/06/Brandi5.svg" alt="" />
                            </div>                            
                        </div>  
                        <div className='coloumn3'>
                        <div className='col-md3'>
                                <div className='fea_icon'>
                                    <img decoding="async"  src="https://routemobile.b-cdn.net/wp-content/uploads/2021/06/Brandi5-_Call-Filtration-to-Avoid-Spam.svg" alt="Displays &amp; Verifies Brand Logo and Name" data-lazy-src="https://routemobile.b-cdn.net/wp-content/uploads/2021/06/Brandi5-_Displays-_-Verifies-Brand-Logo-and-Name-.svg" data-ll-status="loaded"></img>
                                </div>
                                <div className='icon_content'>Call Filtration to Avoid Spam</div>                              
                            </div>  
                            <div className='col-md3'>
                                <div class="fea_icon">
                                    <img src="https://routemobile.b-cdn.net/wp-content/uploads/2021/06/Brandi5-_Better-Metrics-to-Evaluate-the-Performance.svg" alt="Displays"></img>
                                </div>
                                <div className='icon_content'>Better Metrics to Evaluate the Performance</div>                              
                            </div>    

                        </div>              
                   </div>
                   <div className='container3'>
                        <div className='producttrivia'>
                            <h1 className='first'>Product Trivia</h1>
                            <span className='second'>4.8 Million</span>
                            <h5 className='third'>frauds and identity thefts were reported by Federal Trade Commission in the year 2020</h5>
                        </div>
                        <div className='image1'>
                            <img src="https://routemobile.b-cdn.net/wp-content/uploads/2021/06/Trivia-Brandi5.svg" alt="" />
                        </div>
                   </div>
                   <div className='container4'>
                         <h1 className='head h1'>How it Works?</h1>
                         <div>
                            <img src="https://routemobile.b-cdn.net/wp-content/uploads/2021/07/Brandi5_How-it-works.png" alt="" className='h2' />
                         </div>
                   </div>
                  
                    </div>

    );
}
export default Product;
