import '../App.css';
import { SPACE_ID, ACCESS_TOKEN } from "../credentials";
import {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';


const endpoint = "https://graphql.contentful.com/content/v1/spaces/" + SPACE_ID;
//Here's our query we constructed in the GraphiQL interface
const query = `
{
  completedProjectCollection {
    items {
      title
      slug
      location {
        lat
        lon
      }
      description
      image1 {
        url
      }
      image2 {
        url
      }
      image3 {
        url
      }
      image4 {
        url
      }
      
      }
    }
  }

`;

// Here are our options to use with fetch
const fetchOptions = {
  method: "POST",
  headers: {
    Authorization: "Bearer " + ACCESS_TOKEN,
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ query })
};

// Let's fetch the data - check out the browser console!

const Portfolio = () => {
  const [myData,setMyData] = useState([]);
  useEffect( ()=> {
    fetch(endpoint, fetchOptions)
    .then((response) => response.json())
    .then((data) => {
      setMyData(data.data.completedProjectCollection.items);
    });
  }, [])

  return (
    <div>
            <div className="menu-bar-div">
                <NavLink to="/Home"  className="fa fa-solid fa-bars" id="menubars"></NavLink>
                <p>Portfolio</p>
            </div>
            <br/><br/>

    {myData.map( (item, index) => {
      return (
      <div key={index} className='port-item'>

      <div className="port-images">
      <div><img className="portimage" src={item.image1.url}/></div>
      <div ><img className="portimage" src={item.image2.url}/></div>
      <div ><img className="portimage" src={item.image3.url}/></div>
      <div ><img className="portimage" src={item.image4.url}/></div>
        </div>

      <div className="port-title">
      <div ><h6>{item.title}</h6></div>
        </div>
      <div className="port-desc">
      <div>{item.description}</div>
        </div>

      </div>)
    })}




    </div>
  )
}

export default Portfolio;
