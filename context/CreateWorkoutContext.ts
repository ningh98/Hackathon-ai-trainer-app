import React from "react";
import { createContext } from "react";

interface CreateWorkoutContextType {
    infoData: any;
    setInfoData: React.Dispatch<any>;
  }
const CreateWorkoutContext = React.createContext<CreateWorkoutContextType | null>(null);


export default CreateWorkoutContext;