import { GET_CAROUSEL_IMG } from "../types/carouselType";

const initState = {
    arrHinhAnh :[
        
      ],
}

export const caroselReducer = (state = initState, action) =>{
    switch (action.type) {
      case GET_CAROUSEL_IMG:
        {
          state.arrHinhAnh =  action.data
          return {...state}
        }  
      default:
        return {...state}
    }   
}