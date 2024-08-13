import { useQuery } from "@apollo/client";
import {ME} from '../utils/queries'
import ParentHomePage from "./ParentHomePage";
import ChildHomePage from "./ChildHomePage";

const Home = () => {
  const {loading, error, data} = useQuery(ME)
  const userType = data?.me.__typename || 'user'
  let relaventPage;

  if (data){
    if (userType === 'Parent'){
      relaventPage = <ParentHomePage/>
    }else if (userType === 'Child'){
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
