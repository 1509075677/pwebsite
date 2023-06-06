import './main.css';

function Landing() {
    function tolinkedin(){
        window.location="https://www.linkedin.com/in/jason-chen-395523221/";
    }
    function togithub(){
        window.location="https://github.com/1509075677";
    }
    function toinstagram(){
        window.location="https://www.instagram.com/chenosaj/";
    }
    return(
        <div class="main">
            <nav>
                <ul>
                    <li><a href="/pwebsite">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Experience</a></li>
                </ul>
            </nav>
            <div style={{width:'18%'}}>
                <img src={require('./images/profile/me.jpg')} alt="Your Photo" style={{ maxWidth: '100%', height: 'auto' }} />
                <div class="centered">JASON CHEN</div>
                <div class= "contacts">CONTACTS</div>
                <div class="info">Email: Chen1509075677@gmail.com</div>
                <div class="info">Number: 646-662-0534</div>
                <div class='icon'>
                    <div class="iconp" onClick={toinstagram}>
                        <img src={require('./images/contacts/contactsinstagram.svg').default}/></div>
                    <div class="iconp" onClick={tolinkedin}>
                        <img src={require('./images/contacts/contactslinkedin.svg').default}/></div>
                    <div class="iconp" onClick={togithub}>
                        <img src={require('./images/contacts/contactsgithub.svg').default}/></div>
                </div>
            </div>
            <div class="timeline">
            <div class="timeline-item">
                <div class="timeline-item-content">
                <h3>2018</h3>
                <p>-Worked as Technology Institute Internship at Brooklyn Public Library Backend Team. </p>
                <span class="timeline-date">June 2018 - August 2018</span>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-item-content">
                <h3>2018 - 2019</h3>
                <p>-Worked as Information Technology at Brooklyn Public Library IT Department.</p>
                <span class="timeline-date">August 2018 - June 2019</span>
                </div>
            </div>

            <div class="timeline-item">
                <div class="timeline-item-content">
                <h3>2019</h3>
                <p>-Starting college at the University at Buffalo studying Bachelors of Science Computer Science. </p>
                <span class="timeline-date">August 26, 2019</span>
                </div>
            </div>

            <div class="timeline-item">
                <div class="timeline-item-content">
                <h3>2020</h3>
                <p>-Made a Chatting Website using React, JavaScript, HTML, SQL CSS, SocketIOServer, IOS Dev, mySQL.</p>
                <p>-Features includes anonymous chatting, user profiles, public/private posts, and algorithmic hashing to secure login, passwords, and other information in a SQL database.</p>
                <span class="timeline-date">June 2020 - August 2020</span>
                </div>
            </div>

            <div class="timeline-item">
                <div class="timeline-item-content">
                <h3>2021</h3>
                <p>-Made a Machine Translator Website using Python, NumPy Library, Pandas Library, Transformer Module, Linguistics.</p>
                <p>-Features includes accurate translation between English and Finnish languages by evaluating quality and comparing monolingual embeddings</p>
                <span class="timeline-date">June 2020 - August 2020</span>
                </div>
            </div>

            <div class="timeline-item">
                <div class="timeline-item-content">
                <h3>2022</h3>
                <p>-Made a Live Assessment Website using Java, Play Framework, HTML, CSS, JSON, Websockets, Javascript, mySQL.</p>
                <p>-Features includes gradebooks, class management, question assignment, live chat, and secure hashed password storage in a MySQL database.</p>
                <span class="timeline-date">June 2020 - August 2020</span>
                </div>
            </div>

            <div class="timeline-item">
                <div class="timeline-item-content">
                <h3>2023</h3>
                <p>-Made a Digital Asset Website Website using Solidity, Javascript, HTML, Node.js, Infura, Remix, Web3, NFT, Ganache, Metamask, Heroku.</p>
                <p>-Features includes leveraged blockchain technology on Ethereum to facilitate the purchase, sale, and trading of wine NFTs.</p>
                <p>-Wrote acceptance and unit-level tests to evaluate smart contract and frontend connectivity and function malfunctions</p>
                <span class="timeline-date">June 2020 - August 2020</span>
                </div>
            </div>

            <div class="timeline-item">
                <div class="timeline-item-content">
                <h3>2023</h3>
                <p>-Graduated from University at Buffalo with degree in Bachelors of Science Computer Science. </p>
                <span class="timeline-date">May 25, 2023</span>
                </div>
            </div>

            </div>
        
        </div>
    );
}
export default Landing;