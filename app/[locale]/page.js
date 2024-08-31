import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Competences from "@/components/Competences";
import Layout from "@/layouts/Layout";
import ContactsInfo from "@/components/ContactsInfo";
import Avis from "@/components/Avis";

import dynamic from "next/dynamic";
const ClientsHome = dynamic(() => import("@/components/ClientsHome"), {
  ssr: false,
});
const OutilsHome = dynamic(() => import("@/components/OutilsHome"), {
  ssr: false,
});
const Blog = dynamic(() => import("@/components/Blog"), {
  ssr: false,
});
const Projets = dynamic(() => import("@/components/Projets"), {
  ssr: false,
});


import ExpDiplCertif from "@/components/Experience";
import Apropos from "@/components/Apropos";

const Page = () => {
  return (
    <Layout onepage={true}>
      <Hero mouse={true} />
      <Apropos />
      <ExpDiplCertif /> 
      <Avis /> 
      <Services />
      <Competences />
      <OutilsHome />
      <ClientsHome />
      <Projets />      
      <Blog />
      <ContactsInfo/>
    </Layout>
  );
};
export default Page;
