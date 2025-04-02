import React from "react";
import NavigatorBar from "../components/NavigatorBar";
import FooterSection from "../components/FooterSection";
import MainBanner from "../components/MainBanner";
import ServiceList from "../components/ServiceList";

const HomePage = () => {
    return (
        <div>
          < NavigatorBar/>
       <main>
       <MainBanner/>
         <section className="features">
           <h2 className="sr-only">Our Advantages</h2>
           <ServiceList />
         </section>
       </main>
      <FooterSection/>

        </div>
    );
};

export default HomePage;