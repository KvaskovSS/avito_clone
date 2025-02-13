import { useEffect } from "react";
import { Item } from "../types/types";

export const useSaveData = ({formState, setFormState} : {formState : Item, setFormState: (Item : Item) => void}) => {
    useEffect(() => {
        if (Object.values(formState).some(val => val === "")) { return }
        localStorage.setItem("draft", JSON.stringify(formState))
      }, [formState]);
    
      useEffect(() => {
        const data = JSON.parse(localStorage.getItem("draft"));
        console.log(data);
        if(data){
          setFormState(data);
        }
      }, []);
}