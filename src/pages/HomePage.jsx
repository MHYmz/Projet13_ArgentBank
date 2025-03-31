import React from "react";
import NavigatorBar from "../components/NavigatorBar";

const HomePage = () => {
    return (
        <div>
          < NavigatorBar/>
       <main>
       <div className="hero">
        <section className="hero-content">
          <h2 className="sr-only">Exclusive Offers</h2>
          <p className="subtitle">No fees.</p>
          <p className="subtitle">No minimum deposit.</p>
          <p className="subtitle">Your money is fully secure and protected.</p>
          <p className="text"> Open a account with Argent Bank today! </p>
          </section>
          </div>



         <section className="features">
           <h2 className="sr-only">Our Advantages</h2>
           <div className="feature-item">
             <img
               src="/img/icon-chat.png"
               alt="Chat Icon"
               className="feature-icon"
             />
             <h3 className="feature-item-title">Your satisfaction is important to us !</h3>  
             <p> Need assistance? Our team is available 24/7 via chat or a quick phone call within minutes.</p>
           </div>

           <div className="feature-item">
             <img
               src="/img/icon-money.png"
               alt="Chat Icon"
               className="feature-icon"
             />
             <h3 className="feature-item-title">
              Your money, safely secured
             </h3>
            <p>
             We ensure that your money is protected and managed responsibly, with no risk to your funds.
            </p>
           </div>

           <div className="feature-item">
             <img
               src="/img/icon-security.png"
               alt="Chat Icon"
               className="feature-icon"
             />
             <h3 className="feature-item-title">Trusted and reliable security</h3>
             <p>
               We use strong encryption to keep your data and money safe at all times.
             </p>
           </div>

         </section>

       </main>
       <footer className="footer">
         <p className="footer-text">Copyright 2023 Argent Bank</p>
       </footer>

        </div>
    );
};

export default HomePage;