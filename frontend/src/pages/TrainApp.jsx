import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCategories, getWorkouts } from '../store/actions/trainAction'
import { CategoryHead } from '../components/CategoryHead'
import { WorkoutPrev } from '../components/WorkoutPrev'
import { Search } from '../components/Search'

// import { Category } from '../components/Category'
// import { CategoryInfo } from '../components/CategoryInfo'

export function TrainApp(props) {

  const [categoryInfo, setCategoryInfo] = useState('')
  // const [categoryId, setCategoryId] = useState('')
  const state = useSelector(state => state.train)
  const {categories, workouts} = state
  const dispatch = useDispatch();

  const { id } = props.match.params

  useEffect(() => {
    getCategoriesForDisplay()
    getCategoryFromUrl()
  }, [id])

  const getCategoriesForDisplay = async () => {
    const startInfo = await dispatch(getCategories())
    setCategoryInfo(startInfo[0])
  }

  const getCategoryFromUrl = () => {
    dispatch(getWorkouts(id))

  }


  const onGetCategoryInfo = (categoryId) => {
    const categoryInfoIdx = categories.findIndex(category => category._id === categoryId)
    setCategoryInfo(categories[categoryInfoIdx])
  }





  return (
    <section className="train-app container">
      <Search/>
      {categories && id && <div>
        <ul className="flex space-around clean-list">
          {categories.map((category, idx) => <CategoryHead key={idx} id={id} category={category} />)}
        </ul>
      </div>}
      {workouts && <div className="workout-container grid">{workouts.map((workout, idx) => <WorkoutPrev key={idx} workout={workout} />)}</div>}
      {/* <h2 className="text-center">Choose your category</h2>
      {categories && <div className="main-container flex space-between">
        <div className="list-container flex column space-around"> {categories.map((category, idx) => <Category category={category} key={idx} onGetCategoryInfo={onGetCategoryInfo} />)}</div>
        {categoryInfo && <div className="info-container"><CategoryInfo categoryInfo={categoryInfo} /></div>}
      </div>} */}

    </section>
  )
}