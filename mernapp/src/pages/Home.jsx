
import React, { useEffect, useState } from 'react';
import Axios from "axios"
import WorkoutDetails from '../components/workoutDetails';


 const Home = () => {
  const [workouts, setWorkouts] = useState([]);
   useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await Axios.get('http://localhost:4000/api/workouts/');
      
       
      setWorkouts(response.data);
      
    };
    fetchWorkouts();
  }, []);

  
   return (
    <div className='home'>
      <div className='workuts'>
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails  key={workout._id} workout={workout} />
          ))}
      </div>
    </div>
  );
};
 export default Home;