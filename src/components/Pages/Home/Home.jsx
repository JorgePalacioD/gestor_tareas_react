import React, { useContext } from 'react'
import { Header } from '../../Layouts/Header/Header'
import profile from '../../../images/profile.jpg'
import { Main } from '../../Layouts/Main/Main'
import { InfoTasks } from '../../Layouts/InfoTasks/InfoTasks'
import { NewTask } from '../../NewTask/NewTask'
import { FilterTasks } from '../../FilterTasks/FilterTasks'
import { ContainerTasks } from '../../Layouts/ContainerTasks/ContainerTasks'
import { ItemTask } from '../../ItemTask/ItemTask'
import { taskContext } from '../../Context/Context'

export const Home = () => {

  const context = useContext(taskContext)


  return (
    <>
      <Header>
        <div className="container-header-1">
          <div className="container-title">
            <h1 className='title-header'>Gestor de Tareas</h1>
          </div>
        </div>
      <NewTask />
      <InfoTasks />
      <FilterTasks />
      </Header>
      <Main>
        <ContainerTasks>
          {
            context.filteredTasks.map( (task,idx) => (
              <ItemTask 
                key={task+idx}
                titleTask={task.title}
                content={task.description}
                idTask={task.id}
              />
            ))
          }
        </ContainerTasks>
      </Main>
    </>
  )
}