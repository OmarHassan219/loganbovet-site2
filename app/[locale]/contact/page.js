import PageBanner from "@/components/PageBanner";
import ContactsInfo from "@/components/ContactsInfo";
import Layout from "@/layouts/Layout";

const ContactPage = () => {
  return (
    <Layout>
      <PageBanner pageLink={"/contact"} pageName={"Contact"} />
      <ContactsInfo />
    </Layout>
  );
};
export default ContactPage;
