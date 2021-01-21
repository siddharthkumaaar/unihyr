import React, { Component } from 'react'

class Main extends Component{

    render(){
        const {vdo,address,mob} = this.props
        return(
            <>
            <div id="main">

            <section id="one">
                <header class="major">
                    <h2>I am a React JS Developer</h2>
                </header>
                <p>More than Six month of experience in the IT industry. Logical and results-driven Full Stack
Web Developer dedicated to building and optimizing user-focused web apps for customers
with various business objectives. Judicious and creative when crafting effective websites,
apps, and platforms to propel competitive advantage and revenue growth. Technically
proficient and analytical solver with a calm and focused demeanor.</p>
                
                <h3>Introduction Video</h3>
                <iframe width="420" height="250" src={vdo}>
                </iframe>
            </section>

            <section id="two">
                <h2>Recent Work</h2>
                <div class="row">
                    <article class="6u 12u$(xsmall) work-item">
                        <a href="images/fulls/01.jpg" class="image fit thumb"><img src="images/thumbs/01.jpg" alt="" /></a>
                        <h3>Magna sed consequat tempus</h3>
                        <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
                    </article>
                    <article class="6u$ 12u$(xsmall) work-item">
                        <a href="images/fulls/02.jpg" class="image fit thumb"><img src="images/thumbs/02.jpg" alt="" /></a>
                        <h3>Ultricies lacinia interdum</h3>
                        <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
                    </article>
                </div>
                <ul class="actions">
                    <li><a href="#" class="button">Full Portfolio</a></li>
                </ul>
            </section>

            <section id="three">
                <h2>Get In Touch</h2>
                <p>Accumsan pellentesque commodo blandit enim arcu non at amet id arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem vulputate lorem neque lorem ipsum dolor.</p>
                <div class="row">
                    <div class="8u 12u$(small)">
                        <form method="post" action="#">
                            <div class="row uniform 50%">
                                <div class="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
                                <div class="6u$ 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                                <div class="12u$"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                            </div>
                        </form>
                        <ul class="actions">
                            <li><input type="submit" value="Send Message" /></li>
                        </ul>
                    </div>
                    <div class="4u$ 12u$(small)">
                        <ul class="labeled-icons">
                            <li>
                                <h3 class="icon fa-home"><span class="label">Address</span></h3>
                                {address}<br />
                                Uttar Pradesh<br />
                                India
                            </li>
                            <li>
                                <h3 class="icon fa-mobile"><span class="label">Phone</span></h3>
                                {mob}
                            </li>
                            <li>
                                <h3 class="icon fa-envelope-o"><span class="label">Email</span></h3>
                                <a href="#">deepak@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
            </>
        )
    }
}

export default Main