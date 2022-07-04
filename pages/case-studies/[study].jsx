import React from "react";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import Footer from "../../components/Footer";
import {
  caseStudyScopes,
  collaborators,
  roles,
  similarProjects,
} from "../../data";
import CaseStudyCard from "../../components/CaseStudyCard";
import SimilarProjectTemplate from "../../components/SimliarProjectTemplate";
import InfoCollector from "../../components/organism/InfoCollector";
import CaseStudies from "../../data/CaseStudies";

export async function getServerSideProps(ctx) {
  const study = ctx.query.study.toLowerCase();
  if (CaseStudies[study]) {
    return {
      props: {
        ...CaseStudies[study],
      },
    };
  }
}

const CaseStudy = (props) => {
  return (
    <div>
      <div>
        <Navbar dropDownBg="white" bg="#fff" textColor="#000" darkLogo />
      </div>
      <Image
        // layout="fill"
        src={props.header}
        objectFit="contain"
        width={1920}
        height={1027}
        alt={`${props.name}-img`}
      />
      <main className="lg:px-36 px-10">
        <div className="header text-center mt-[11rem] mb-[7rem]">
          <h2 className="text-[4.5rem] font-semibold leading-none">
            {props.name}
          </h2>
          <span className="text-[3rem]">Case Study</span>
        </div>
        <section className="lg:grid grid-cols-[auto,1fr] gap-x-40 contents">
          <aside className="section-header">
            <h3 className="font-semibold text-[4.5rem] max-w-[26rem] leading-none">
              Exploring projects of all systems and sizes
            </h3>
            <div className="flex flex-col">
              <span className="mt-[4.6rem] mb-[1.1rem] text-5xl">Scope</span>
              <div className="scopes flex flex-col gap-y-1">
                {caseStudyScopes.map((scope, scopeIndex) => (
                  <span key={`${scope}-scope_${scopeIndex}`}>{scope}</span>
                ))}
              </div>
            </div>
          </aside>
          <aside className="flex-grow flex flex-col pt-20 ">
            <div className="challenge-analysis ">
              <div className="lg:grid grid-cols-2 gap-x-28 mb-12 contents">
                <div className="flex flex-col">
                  <span className="text-4xl ">Challenge</span>
                  <div className="flex flex-col mt-6 gap-y-2">
                    {props.challenge.map((challenge, index) => {
                      return <p key={`challenge-${index}`}>{challenge}</p>;
                    })}
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-4xl ">Analysis</span>
                  <div className="flex flex-col mt-6 gap-y-2">
                    {props.analysis.map((analysis, analysisIndex) => (
                      <p key={`analysis-${analysisIndex}`}>{analysis}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div>
              {props.assets.analysisImg && (
                <Image
                  width={1028}
                  height={420}
                  src={props.assets.analysisImg}
                  alt="challenge-analysis"
                />
              )}
              {props.strategy && (
                <CaseStudyCard title="Strategy" contents={props.strategy} />
              )}
              {props.assets.strategyImg && (
                <Image
                  width={1028}
                  height={420}
                  src={props.assets.strategyImg}
                  alt="strategy"
                />
              )}
              {props.production && (
                <CaseStudyCard title="Production" contents={props.production} />
              )}
              {props.assets.productionImg && (
                <Image
                  src={props.assets.productionImg}
                  width={1028}
                  height={420}
                  alt="editing"
                />
              )}
              {props.editing && (
                <CaseStudyCard title="Editing" contents={props.editing} />
              )}
              {props.assets.editingImg && (
                <Image
                  src={props.assets.editingImg}
                  width={1028}
                  height={420}
                  alt="editing"
                />
              )}
              {props.content && (
                <CaseStudyCard title="Content" contents={props.content} />
              )}
            </div>
          </aside>
        </section>
        <section className="flex gap-x-[22rem]">
          <div className="flex flex-col max-w-[28.5rem]">
            <h3 className="text-4xl">Collaborators</h3>
            <div className="flex flex-col mt-8 gap-y-6 ">
              {collaborators.map(({ type, name }, cIndex) => (
                <div key={`collaborator${cIndex}`} className="flex flex-col">
                  <h4 className="font-black">{type}</h4>
                  <span className="mt-1">{name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col max-w-[28.5rem]">
            <h3 className="text-4xl">Roles</h3>
            <div className="flex flex-col mt-8 gap-y-6">
              {roles.map(({ type, name }, roleIndex) => (
                <div key={`role${roleIndex}`} className="flex flex-col ">
                  <h4 className="font-black">{type}</h4>
                  <span className="mt-1">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="text-[4.5rem] font-bold mt-[14.5rem]">
          <h2 className="mb-20">Similar projects</h2>
          <div className="flex lg:flex-row flex-col items-center lg:gap-x-[2.3rem]">
            {similarProjects.map((project) => (
              <SimilarProjectTemplate
                key={`similar-${project.text}`}
                {...project}
              />
            ))}
          </div>
        </section>

        <InfoCollector
          title="Let’s work Together"
          buttonText="START A PROJECT"
        />
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudy;
