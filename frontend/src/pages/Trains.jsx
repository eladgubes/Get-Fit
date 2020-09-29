import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTrains } from '../store/actions/trainAction'
import { Stooper } from '../components/Stooper'
import { Train } from '../components/Train'

export function Trains() {

  const trains = useSelector((state) => state.train.trains)
  const dispatch = useDispatch();

  useEffect(() => {
    getTrainsForDisplay()
  })

  const getTrainsForDisplay = () => {
    dispatch(getTrains())
  }



  return (
    <section className="container">
      <h2 className="text-center">Lets start train</h2>
      <div className="text-center">
        <Stooper />
      </div>

      {trains && <div> {trains.map((train, idx) => <Train train={train} key={idx} />)}
      </div>}
    </section>
  )
}