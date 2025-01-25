import React from "react";
import eye from '../img/svg/eye.svg';
import githubIcon from '../img/svg/github-logo.svg';

function ProjectCard(props) {
  const { banner, name, describe, repo, demo, stacks } = props.project;

  const maxCharDescribe = () => {
    if (describe.length > 87) {
      const stringCortada = describe.slice(0, 84);
      const ultimoEspaco = stringCortada.lastIndexOf(" ");
      return stringCortada.slice(0, ultimoEspaco)+'...';
  } else {
    return describe;
  }
}

  return (
      <div className=" inline-flex items-center justify-center h-48 rounded-xl m-4">
        <div className="rounded-lg w-44 h-48 flex items-center justify-center mr-2">
          <img alt={name} src={banner} className="max-h-full rounded-md border-solid border-black border-2"/>
        </div>
          <div className="flex flex-col h-40 justify-center">
            <h3 className="w-80 h-6 font-bold text-lg overflow-hidden">{name}</h3>
            <p className="w-80 h-16 text-sm overflow-hidden">
              {
                maxCharDescribe()
              }
            </p>
            <hr className="border-main-orange"/>
            <p className="text-xs max-w-80">{stacks.join(', ')}</p>
              <div className="inline-flex justify-end">
                {
                  demo.length > 0 ? (
                  <>
                    <a href={demo} className="" target="_blank" rel="noreferrer">
                      <img
                        alt={`button to demo ${name}`}
                        src={eye}
                        className={`w-8  rounded-lg hover:invert bg-white p-0.5`}
                      />
                    </a>              
                  </>
                  ) : <></>
                }
                <a href={repo} className="ml-4" target="_blank" rel="noreferrer">
                  <img
                    alt={`button to repo ${name}`}
                    src={githubIcon}
                    className="w-8 hover:invert rounded-lg bg-white p-0.5"
                    />
                </a>
              </div>
          </div>
      </div>
  );
}

export default ProjectCard;