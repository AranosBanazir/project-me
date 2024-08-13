import { useQuery } from "@apollo/client";
import {ME} from '../utils/queries'
import { useNavigate } from "react-router-dom";
import ParentHomePage from "./ParentHomePage";
import ChildHomePage from "./ChildHomePage";
import { useEffect } from "react";
const Home = () => {
  const {loading, error, data} = useQuery(ME)
  // const navigate = useNavigate()
  let relaventPage;
  // //redirecting to login page if not logged in
  // useEffect(()=>{
  //   if (!data){
  //     navigate('/login')
  //   }
  // }, [])
  
  if (data){
    if (data.__typename === 'Parent'){
      relaventPage = <ParentHomePage/>
    }else if (data.__typename === 'Child'){
      relaventPage = <ChildHomePage/>
    }
  }

  return (
    <main>
      {relaventPage}
    </main>
  );
};

export default Home;
