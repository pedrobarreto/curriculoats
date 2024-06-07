import React, { useState, createContext, useContext } from "react";
import Language from "../components/form/Language";
import Meta from "../components/meta/Meta";
import FormCP from "../components/form/FormCP";
import LoadUnload from "../components/form/LoadUnload";
import Preview from "../components/preview/Preview";
import DefaultResumeData from "../components/utility/DefaultResumeData";
import SocialMedia from "../components/form/SocialMedia";
import WorkExperience from "../components/form/WorkExperience";
import Skill from "../components/form/Skill";
import PersonalInformation from "../components/form/PersonalInformation";
import Summary from "../components/form/Summary";
import Projects from "../components/form/Projects";
import Education from "../components/form/Education";
import dynamic from "next/dynamic";
import Certification from "../components/form/certification";

const ResumeContext = createContext(DefaultResumeData);

// server side rendering false
const Print = dynamic(() => import("../components/utility/WinPrint"), {
  ssr: false,
});

export default function Builder(props) {
  // resume data
  const [resumeData, setResumeData] = useState(DefaultResumeData);

  // form hide/show
  const [formClose, setFormClose] = useState(false);

  // profile picture
  const handleProfilePicture = (e) => {
    const file = e.target.files[0];

    if (file instanceof Blob) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setResumeData({ ...resumeData, profilePicture: event.target.result });
      };
      reader.readAsDataURL(file);
    } else {
      console.error("Invalid file type");
    }
  };

  const handleChange = (e) => {
    setResumeData({ ...resumeData, [e.target.name]: e.target.value });
    console.log(resumeData);
  };

  return (
    <>
      <ResumeContext.Provider
        value={{
          resumeData,
          setResumeData,
          handleProfilePicture,
          handleChange,
        }}
      >
        <Meta
    title="Construa currículos otimizados para ATS e conquiste as melhores vagas em plataformas como Gupy, 99Jobs, entre outras"
    description="CurriculoATS é uma ferramenta avançada de construção de currículos que ajuda profissionais a criar currículos profissionais e compatíveis com sistemas de rastreamento de candidatos (ATS) em minutos. Utilizamos tecnologia de ponta para analisar e otimizar seu currículo para máxima visibilidade e sucesso com os sistemas de rastreamento de candidatos. Diga adeus à frustração e ao tempo desperdiçado com a formatação manual de currículos. Crie seu currículo vencedor com CurriculoATS hoje e seja notado pelos empregadores."
    keywords="ATS-friendly, Otimização de currículo, Currículo rico em palavras-chave, Sistema de rastreamento de candidatos, Construtor de currículo ATS, Modelos de currículo ATS, Currículo compatível com ATS, CV otimizado para ATS, Formato amigável para ATS, Dicas de currículo ATS, Serviços de redação de currículo, Orientação de carreira, Busca de emprego no Brasil, Dicas de currículo para o Brasil, Construtor de currículo profissional, Redação de carta de apresentação, Preparação para entrevistas, Dicas de entrevistas de emprego, Crescimento profissional, Candidaturas de emprego online, construtor de currículo gratuito, construtor de currículo ats, melhor construtor de currículo gratuito, criador de currículo, currículo cv, design de currículo, editor de currículo, criador de currículo online"
  />

        <div className="f-col gap-4 md:flex-row justify-evenly max-w-7xl md:mx-auto md:h-screen">
          {!formClose && (
            <form className="p-4 bg-blue-600 exclude-print md:max-w-[40%] md:h-screen md:overflow-y-scroll">
              <LoadUnload/>
              <PersonalInformation />
              <SocialMedia />
              <Summary />
              <Education />
              <WorkExperience />
              <Projects />
              {
                resumeData.skills.map((skill, index) => (
                  <Skill
                    title={skill.title}
                    key={index}
                  />
                ))
              }
              <Language />
              <Certification />
            </form>
          )}
          <Preview />
        </div>
        <FormCP formClose={formClose} setFormClose={setFormClose} />
        <Print />
      </ResumeContext.Provider>
    </>
  );
}
export { ResumeContext };
