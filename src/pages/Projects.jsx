import React, { useState } from 'react';
import { projects } from '../database/projects';
import ProjectCard from '../components/ProjectCard';
import { useParams } from 'react-router-dom';

export default function Projects() {
  const {filter=''} = useParams();
  console.log(filter);
  
  const [ selectedCategory, setSelectedCategory ] = useState('');
  const [ selectedStack, setSelectedStack ] = useState(filter);
  const handleChangeStack = (event) => {
    setSelectedStack(event.target.value);
    console.log(event.target.value);
    console.log(selectedStack);
    
  }
  const handleChangeCategory = (event) => {
    setSelectedCategory(event.target.value);
    console.log(event.target.value);
    console.log(selectedCategory);
  }
  const stackss = projects.map((project)=> project.stacks).reduce((a, sub) => a.concat(sub), []);
  const categories = projects.map((project)=> project.category);

  return (
    <div>
      <h1 className='font-extrabold text-3xl my-4 text-center'>Meus Projetos (até o momento)</h1>
      <div className='flex justify-center space-x-4 mt-4'>
        <select value={selectedStack} onChange={handleChangeStack}>
          <option value="">Todas Stacks</option>
          {
            [...new Set(stackss)].map((stack, index)=> <option key={index+stack} value={stack}>
              {stack}
            </option>)
          }
        </select>
        <select value={selectedCategory} onChange={handleChangeCategory}>
          <option value="">Todas Categorias</option>
          {
            [...new Set(categories)].map((category, index)=> <option key={index+category} value={category}>
              {category}
            </option>)
          }
        </select>
      </div>
      <hr className='border-main-orange border-2 my-3'/>
      <div className='flex justify-between flex-wrap mx-10'>
        {
          projects
            .filter((filterStack)=> selectedStack === '' ? true : filterStack.stacks.includes(selectedStack))
            .filter((filterCategory)=>filterCategory.category.includes(selectedCategory))
            .map((project, index) => <ProjectCard project={project} key={index}/>)
        }
      </div>
    </div>
  )
}
