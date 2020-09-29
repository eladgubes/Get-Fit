import trainService from '../../services/trainService'



export function getCategories() {
    try {
        return async dispatch => {
            const categories = await trainService.getCategories()
            dispatch({ type: 'SET_CATEGORIES', categories })
            return categories
        }
    } catch (err) {
        console.log('had problem with load categories')
        throw err
    }
}
export function getTrains() {
    try {
        return async dispatch => {
            const trains = await trainService.getTrains()
            dispatch({ type: 'SET_TRAINS', trains })
            return trains
        }
    } catch (err) {
        console.log('had problem with load categories')
        throw err
    }
}

export function getWorkouts(categoryId) {
    try {
        return async dispatch => {
            const workouts = await trainService.getWorkouts(categoryId)
            dispatch({ type: 'SET_WORKOUTS', workouts })
            return workouts
        }
    } catch (err) {
        console.log('had problem with load categories')
        throw err
    }
}



// export function getCategoryInfo(CategoryId) {
//     try {
//         return async dispatch => {
//             const category = await trainService.getCategoryInfo(CategoryId)
//             // dispatch({ type: 'SET_TRAINS', trains })
//             // return trains
//         }
//     } catch (err) {
//         console.log('had problem with load categories')
//         throw err
//     }
// }