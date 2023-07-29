import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoutes() {

  const trainer = useSelector(reducer => reducer.trainer)

  if(trainer.length >= 3){
    return <Outlet/>
  }else{
    return <Navigate to='/'/>
  }

}
