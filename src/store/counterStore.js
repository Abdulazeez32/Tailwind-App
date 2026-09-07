import { create } from "zustand";
import toast from "react-hot-toast";
 import {persist } from "zustand/middleware"

const useCounterStore = create(
    persist(
        (set,get) => ({
  // State
  count: 0,

  // Actions
  increment: () =>
    set((state) => ({
      count: state.count + 1,
    })),


  decrement: () =>
    set((state) => ({
      count: state.count - 1,
    })),

  reset: () =>{
    set({
      count: 0,
   
    }),
       toast.success("Now it is reseted ");
       
    },
    value: ()=>{
     const count=get().count;
            console.log(`Clicked ${count}`);
            toast.success(`your Current Value is ${count}`)
        }
}),
  {
       name: "counter-storage",
     }
)
);

export default useCounterStore;
