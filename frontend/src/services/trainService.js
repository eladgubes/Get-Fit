var trains = [
    {
        _id: '1',
        taskName: 'pushups',
        taskVideo: 'www.sj.ddkd',
        taskMuscles: 'hands',
        taskCategory: 'strength',
        timeForOne: 5,
        muscles: ['chest', 'hands'],
        taskImg: 'wwwdd'

    },
    {
        _id: '2',
        taskName: 'pullups',
        taskVideo: 'www.sj.ddkd',
        taskMuscles: 'hands',
        taskCategory: 'strength',
        timeForOne: 8,
        muscles: ['chest', 'hands', 'stomach'],
        taskImg: 'wwwdd'
    },
    {
        _id: '3',
        taskName: 'situp',
        taskVideo: 'www.sj.ddkd',
        taskMuscles: 'stamina',
        taskCategory: 'strength',
        timeForOne: 5,
        muscles: ['chest', 'stomach'],
        taskImg: 'wwwdd'
    },
    {
        _id: '4',
        taskName: 'running',
        taskVideo: 'www.sj.ddkd',
        taskMuscles: 'stamina',
        taskCategory: 'aerobe',
        timeForOne: 100,
        muscles: ['stamina', 'legs', 'stomach', 'back'],
        taskImg: 'wwwdd'
    },
]




async function getTrains(workOutDetails) {
    return trains
}

async function getTrain(trainId) {
    const currTrain = trains.filter(train => train._id === trainId)
    return currTrain
}

async function addTrain(trainDetails) {
    trains.unshift(trainDetails)
}

async function removeTask(trainId) {
    const idx = trains.findIndex(train => train._id === trainId)
    trains.splice(idx, 1)
    return trains
}

var categories = [
    {
        _id: '1',
        name: 'strength',
        img: 'https://youcandance.al/wp-content/uploads/2015/10/aerobic.jpg'
    },
    {
        _id: '2',
        name: 'aerobe',
        img: 'https://youcandance.al/wp-content/uploads/2015/10/aerobic.jpg'
    },
    {
        _id: '3',
        name: 'yoga',
        img: 'https://youcandance.al/wp-content/uploads/2015/10/aerobic.jpg'
    },
    {
        _id: '4',
        name: 'gym',
        img: 'https://youcandance.al/wp-content/uploads/2015/10/aerobic.jpg'
    },
    {
        _id: '5',
        name: 'loose weight',
        img: 'https://youcandance.al/wp-content/uploads/2015/10/aerobic.jpg'
    },
    {
        _id: '6',
        name: 'home workout',
        img: 'https://youcandance.al/wp-content/uploads/2015/10/aerobic.jpg'
    },
]

async function getCategories() {
    return categories
}

var homeGallery = [
    'https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/11/14/12/2ex.jpg?w968h681',
    'https://image.freepik.com/free-photo/muscular-man-working-out-gym-doing-exercises-with-barbell-biceps-strong-male_34777-262.jpghttps://image.freepik.com/free-photo/muscular-man-working-out-gym-doing-exercises-with-barbell-biceps-strong-male_34777-262.jpg',
    'https://i.ytimg.com/vi/36G3xvIH73M/maxresdefault.jpg',
    'https://im.rediff.com/getahead/2018/oct/08health1.jpg'
]

export default {
    getCategories,
    getTrains,
    getWorkouts
}

_setTrain('strength')

function _setTrain(categoryId) {

    console.log('this is categoryId: ', categoryId);
    const workout = {
        workoutWormUpSeconds: null,
        workoutMainTrainingSeconds: null,
        warmUpTrains: 5,
        warmUp:
            [
                {
                    _id: '',
                    taskName: '',
                    timeForOne: null,
                }
            ],
        mainTrainingTrains: 8,
        mainTraining:
            [
                {
                    _id: '',
                    taskName: '',
                    timeForOne: null,
                }
            ]
    }

    console.log('this is workout before switch: ', workout);


    switch (categoryId) {
        case 'strength':
            workout.workoutWormUpSeconds = 10 * 60
            workout.workoutMainTrainingSeconds = 50 * 60
            break;
        case 'aerobe':

            workout.workoutWormUpSeconds = 20 * 60
            workout.workoutMainTrainingSeconds = 40 * 60
            break;

    }


    console.log('this is workout: ', workout);






}



var imgs =
    [
        // 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/kettlebell-training-in-gym-royalty-free-image-982355146-1552313588.jpg',
        // 'https://i.dailymail.co.uk/1s/2018/11/14/14/6175584-0-image-a-13_1542205362696.jpg',
        // 'https://simplifaster.com/wp-content/uploads/2016/11/Front-Squat-Bar-Velocity.jpg',
        // 'https://i0.wp.com/www.society19.com/wp-content/uploads/2015/07/feature14.jpg?fit=1920%2C1080&ssl=1',
        // 'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/topic_centers/2018-6/Back_Dumbbell_Workout_Weights-1296x728-Header.jpg?w=1155'
    ]


async function getWorkouts(categoryId) {
    return workouts
}


var workouts =
    [
        {
            _id:'6',
            workoutName: 'upper body',
            workoutImg: 'https://youcandance.al/wp-content/uploads/2015/10/aerobic.jpg',
            warmUp:
                [
                    {
                        _id: '',
                        taskName: '',
                        times: 10
                    }
                ],
            mainTraining:
                [
                    {
                        _id: '',
                        taskName: '',
                        times: 10

                    }
                ]
        },
        {
            _id:'6',
            workoutName: 'upper body',
            workoutImg: 'https://youcandance.al/wp-content/uploads/2015/10/aerobic.jpg',
            warmUp:
                [
                    {
                        _id: '',
                        taskName: '',
                        times: 10
                    }
                ],
            mainTraining:
                [
                    {
                        _id: '',
                        taskName: '',
                        times: 10

                    }
                ]
        },
        {
            _id:'6',
            workoutName: 'upper body',
            workoutImg: 'https://youcandance.al/wp-content/uploads/2015/10/aerobic.jpg',
            warmUp:
                [
                    {
                        _id: '',
                        taskName: '',
                        times: 10
                    }
                ],
            mainTraining:
                [
                    {
                        _id: '',
                        taskName: '',
                        times: 10

                    }
                ]
        },
        {
            _id:'6',
            workoutName: 'upper body',
            workoutImg: 'https://youcandance.al/wp-content/uploads/2015/10/aerobic.jpg',
            warmUp:
                [
                    {
                        _id: '',
                        taskName: '',
                        times: 10
                    }
                ],
            mainTraining:
                [
                    {
                        _id: '',
                        taskName: '',
                        times: 10

                    }
                ]
        },
        {
            _id:'6',
            workoutName: 'upper body',
            workoutImg: 'https://youcandance.al/wp-content/uploads/2015/10/aerobic.jpg',
            warmUp:
                [
                    {
                        _id: '',
                        taskName: '',
                        times: 10
                    }
                ],
            mainTraining:
                [
                    {
                        _id: '',
                        taskName: '',
                        times: 10

                    }
                ]
        },
        {
            _id:'6',
            workoutName: 'upper body',
            workoutImg: 'https://youcandance.al/wp-content/uploads/2015/10/aerobic.jpg',
            warmUp:
                [
                    {
                        _id: '',
                        taskName: '',
                        times: 10
                    }
                ],
            mainTraining:
                [
                    {
                        _id: '',
                        taskName: '',
                        times: 10

                    }
                ]
        }
    ]