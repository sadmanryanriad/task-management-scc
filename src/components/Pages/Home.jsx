import { useAos } from "../../hooks/useAos";
import Banner from "../Header/banner/Banner";
import FAQ from "../Sections/Faq";
import UserTypesSection from "../Sections/UserTypesSection";

const Home = () => {
  useAos();
  return (
    <>
      <Banner></Banner>
      <UserTypesSection></UserTypesSection>
      <FAQ></FAQ>
    </>
  );
};

export default Home;
