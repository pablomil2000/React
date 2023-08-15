import React from 'react'
import * as S from './Projects.styled'
import { projectsPortfolio } from './ProectsData'
import logoGit from '../../svg/github.svg'
import logoSite from '../../svg/website.svg'

// console.log(projectsPortfolio);
const Projects = () => {
    return (
        <S.ContainerProjects id='projects'>
            <S.Title>Algunos de {" "}<span>{" "} <br />Mis proyectos</span></S.Title>

            <S.ContentProject>
                {projectsPortfolio.map((project, index) => (
                    <S.ProjectContent key={index}>
                        <S.TitleProject>{project.title}</S.TitleProject>
                        <S.ContainerImage><img src={project.image} alt={project.title} loazy="true" /></S.ContainerImage>
                        <S.ContainerTechs>
                            {project.techs.map((tech, index) => (
                                <div key={index}>
                                    <img src={tech.src} alt={tech.name} loazy="true" />
                                    <p>{tech.name}</p>
                                </div>
                            ))}
                        </S.ContainerTechs>
                        <S.Description>{project.description}</S.Description>
                        <S.ContainerFooter>
                            {project.repository && (
                                <a href={project.repository} target="_blank" rel="noreferrer"><img src={logoGit} alt={project.description} /></a>
                            )}

                            {project.website && (
                                <a href={project.website} target="_blank" rel="noreferrer"><img src={logoSite} alt={project.description} /></a>
                            )}
                        </S.ContainerFooter>
                    </S.ProjectContent>
                ))}
            </S.ContentProject>
        </S.ContainerProjects>
    )
}

export default Projects
