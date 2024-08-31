import PageBanner from "@/components/PageBanner";
import Layout from "@/layouts/Layout";

import dynamic from "next/dynamic";
const Projets = dynamic(() => import("@/components/Projets"), {
  ssr: false,
});

const ProjetsPage = () => {
  return (
    <Layout>
      <PageBanner pageName={"Projets"} pageLink={"/projets"} />
      <Projets />
    </Layout>
  );
};
export default ProjetsPage;
