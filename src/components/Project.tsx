import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { fetchProjects } from '../redux/slices/projectsSlice'

const Project: React.FC = () => {
  const dispatch = useDispatch()
  const { projects, loading, error, searchText } = useSelector(
    (state: RootState) => state.projects
  )
  useEffect(() => {
    dispatch(fetchProjects())
  }, [dispatch])

  const filteredProjects = projects.filter(
    (project: any) =>
      project.title.toLowerCase().includes(searchText) ||
      project.location.toLowerCase().includes(searchText) ||
      project.author.toLowerCase().includes(searchText)
  )

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <div className="flex flex-col gap-8 mb-[300px]">
      {filteredProjects?.length ? (
        <>
          {filteredProjects?.map((project: any) => (
            <div
              key={project.id}
              className="flex w-[100%] md:w[80%] shadow-xl"
              style={{ marginTop: project.id === 1 ? '30px' : '0px' }}
            >
              <div>
                <img
                  src={project.image}
                  alt="project_image"
                  className="md:w-[250px] md:h-[160px] w-[110px] h-[110px] object-cover"
                />
              </div>
              <div className="md:w-[calc(100%-250px)] w-full flex flex-col justify-between p-4">
                <div>
                  <h1 className="text-[17px] sm:text-[20px] sm:font-semibold font-[400]">
                    {project.title}
                  </h1>
                  <p
                    className="text-[15px] font-[500] text-[#9E95A2]
"
                  >
                    {project.description}
                  </p>
                </div>
                <div className="h-[50px] flex justify-between items-center">
                  <div>
                    <p className="font-[400] text-[20px]">{project.author}</p>
                    <p className="font-[400] text-xl text-[#9E95A2]">
                      {project.location}
                    </p>
                  </div>
                  <button className="w-[100px] h-[40px] rounded-md text-white text-sm font-[500]  p-2 bg-[linear-gradient(91.41deg,_#F39519_0%,_#FFCD67_100%)]">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </>
      ) : (
        <div className="w-[100%] mt-10 flex justify-center">
          <p className="text-2xl">No projects found...</p>
        </div>
      )}
    </div>
  )
}

export default Project
