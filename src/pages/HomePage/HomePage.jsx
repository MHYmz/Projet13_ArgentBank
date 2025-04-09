import React from "react";
import NavigatorBar from "../../components/NavigatorBar/NavigatorBar";
import FooterSection from "../../components/FooterSection/FooterSection";
import MainBanner from "../../components/MainBanner/MainBanner";
import ServiceList from "../../components/ServiceList/ServiceList";
import { 
  PageWrapper, 
  Content } from "./HomePageDesign";


const HomePage = () => {
    return (
        <PageWrapper>
          < NavigatorBar/>
       <Content>
       <MainBanner/>
         <section>
           <ServiceList />
         </section>
       </Content>
      <FooterSection/>

        </PageWrapper>
    );
};

export default HomePage;