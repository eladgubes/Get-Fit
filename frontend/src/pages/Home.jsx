import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCategories } from '../store/actions/trainAction'
import { Category } from '../components/Category'
import {Link} from 'react-router'

export function Home() {

    const categories = useSelector((state) => state.train.categories)
    const dispatch = useDispatch();

    useEffect(() => {
        getCategoriesForDisplay()
    }, [])

    const getCategoriesForDisplay = () => {
        dispatch(getCategories())
    }

    return (
        <section className="home ">
            <img className="hero-img" src="https://i.pinimg.com/originals/25/2a/51/252a51fb83d4be02796efbc5de0d7216.png" alt="" />


            <div className="hero container">
                <div className="hero-text">
                    <h1>Are you ready?</h1>
                    <h3>Take your body to a new level</h3>
                    <p>This app can give you all the secrets of great workout, all you need to do is follow the train</p>
                    <div>
                        <button>start your training</button>
                    </div>
                </div>
            </div>
            <div className="home-down">
                <div className="home-down-header text-center">
                    <h3>choose your category</h3>
                    <p>star start start</p>
                </div>
                {categories && <div className="category-container grid container">
                    {categories.map((category, idx) => <Category key={idx} category={category} />)}
                </div>}
            </div>
            {/* <div className="home-story flex space-between">
                    <div className="story">
                        <div className="sticky-story">
                            <h3>read this!</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate voluptatum omnis facere doloremque officiis! Possimus maiores ratione est id quas ut dolores iusto, vero non natus quod iste, quam ipsam?</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate voluptatum omnis facere doloremque officiis! Possimus maiores ratione est id quas ut dolores iusto, vero non natus quod iste, quam ipsam?</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate voluptatum omnis facere doloremque officiis! Possimus maiores ratione est id quas ut dolores iusto, vero non natus quod iste, quam ipsam?</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate voluptatum omnis facere doloremque officiis! Possimus maiores ratione est id quas ut dolores iusto, vero non natus quod iste, quam ipsam?</p>
                        </div>
                    </div>
                    <div className="img-gallery flex column justify-center">
                        <img src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/11/14/12/2ex.jpg?w968h681" alt="" />
                        <img src="https://image.freepik.com/free-photo/muscular-man-working-out-gym-doing-exercises-with-barbell-biceps-strong-male_34777-262.jpg" alt="" />
                        <img src="https://i.ytimg.com/vi/36G3xvIH73M/maxresdefault.jpg" alt="" />
                        <img src="https://im.rediff.com/getahead/2018/oct/08health1.jpg" alt="" />
                    </div>
                </div> */}

        </section>
    )
}