import PageBanner from "@/components/PageBanner";
import Services from "@/components/Services";
import Competences from "@/components/Competences";
import Layout from "@/layouts/Layout";

import dynamic from "next/dynamic";
const OutilsHome = dynamic(() => import("@/components/OutilsHome"), {
    ssr: false,
  });

const CompetencesPage = () => {
  return (
    <Layout>
      <PageBanner pageLink={"/competences"} pageName={"Compétences"} />
      <Services />
      <Competences />
      <OutilsHome />
    </Layout>
  );
};
export default CompetencesPage;
