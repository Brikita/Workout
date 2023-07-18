import { WorkoutsContext } from "../context/WorkoutContext";
import { useContext } from "react";

export const useWorkoutContext = () => {
    const context = useContext(WorkoutsContext)

    if (!context){
        throw Error('useWorkoutsContext must be used inside of a workoutscontextprovider')
    }

    return context
}