import react,{useState,useEffect} from "react";
import './App.css';
import axios from "axios";
import UserBlock from "./UserBlock";
import Loader from './Loader';
import SearchIcon from '@material-ui/icons/Search';


function App() {

  const [users,setusers] = useState([]);
  const [input,setinput] = useState("");
  const [singleusers,setsingleuser] = useState([]);
  const [loading,setLoading] = useState(false);

  useEffect(()=>{

    const headers = {
      'app-id': '60b6023c98e5768341aefad0'
    } 

    const fetchdata = async ()=>{
        const response = await axios.get('https://dummyapi.io/data/api/user',{headers});
        setusers(response.data.data);
        setLoading(true);
    }

    fetchdata();
  },[])



  useEffect(()=>{

    const headers = {
      'app-id': '60b6023c98e5768341aefad0'
    } 

    const fetchdata = async ()=>{
        const response = await axios.get('https://dummyapi.io/data/api/user',{headers});
        setusers(response.data.data);
        setLoading(true);
    }

    fetchdata();
  },[])

  

  // ***************   Filter name  ******************

  useEffect(() => {
    const filterarray = users.filter(user => user.firstName.toLowerCase().indexOf(input) != -1);
    setsingleuser(filterarray);
  }, [input])




  return (
    <div className="App">

      {loading ? (
            <>
              <div className="header-input-container">
                <input type="text" placeholder="Search user..." onChange={(e)=> setinput(e.target.value)} />
                <SearchIcon className="search"/>
              </div>

              <div className="userblock-container">

                  {singleusers.length == 0 ? (
                       users.map(user =>(
                        <UserBlock key={user.id} user={user} />
                      ))
                  ) : (
                      singleusers.map(user => (
                         <UserBlock key={user.id} user={user} />
                      ))
                  )}

              </div> 
            </>
      ) : (
        <Loader/>
      )}

    </div>
  );
}

export default App;
