
import React, { useEffect, useState } from 'react';
import Axios from "axios"
import WorkoutDetails from '../components/workoutDetails';
import WorkoutsForm from '../components/WorkoutsForm';
import { useWorkoutContext } from '../hooks/useWorkoutContext';

const Home = () => {
  const { workouts, dispatch } = useWorkoutContext()
  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await Axios.get('http://localhost:4000/api/workouts/');


      dispatch({ type: 'SET_WORKOUTS', payload: response.data });

    };
    fetchWorkouts();
  }, []);


  return (
    <div className='home'>
      <div className='workouts'>
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
      </div>
      <WorkoutsForm />
    </div>
  );
};
export default Home;