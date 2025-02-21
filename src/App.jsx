import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Dynmic from "./Dynmic";
import ErrorPage from "./ErrorPage";
import Copied from "./Copied";

const router = createBrowserRouter([
  {
    path : "/",
    element : <App />
  } , 
  {
    path : "/dynmic",
    element : <Dynmic />
  },
  {
    path : "/copied",
    element : <Copied /> 
  },
  {
    path : "*",
    element : <ErrorPage />   
  }
]);

function App() {

    let dataObj = [
    {
      name : "John",
      age : 30,
      city : "New York"
    },
    {
      name : "david",
      age : 25,
      city : "Los Angeles"
    },
    {
      name : "Peter",
      age : 50,
      city : "Chicago"
    },
    {
      name : "Sam",
      age : 45,
      city : "Houston"
    },
    {
      name : "James",
      age : 35,
      city : "Boston"
    },
    {
      name : "Robert",
      age : 40,
      city : "San Francisco"
    },
    {
      name : "Michael",
      age : 55,
      city : "Seattle"
    },
    {
      name : "William",
      age : 60,
      city : "Denver"
    }
  ]
  
return(
  <>
    <h1>Data Collections</h1>

    <table border="1" cellSpacing="3">

    <thead>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>City</th>
      </tr>
    </thead>

    <tbody>
      {

        dataObj.map((data,index) => {
          return(
            <tr key={index}>
              <td>{data.name}</td>
              <td>{data.age}</td>
              <td>{data.city}</td>
            </tr>
          )
        })

      }
    </tbody>



    </table>
     
  </>
)

}

function AppWrapper() {
  return (
    <RouterProvider router={router} />
  );
}

export default AppWrapper;
