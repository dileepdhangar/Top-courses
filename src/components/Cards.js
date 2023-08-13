import React from 'react';
import Ticket from './Ticket'



const Cards = (props) => {
  let courses = props.courses ;
 console.log("printing data ") ;
 console.log( courses ) ;

  return ( 
  <div>
      {/* {
        getCourses().map((course) => { return <Ticket key ={course.id} course= { course}/>
        }  )

      } */}
     </div>
  )
}

export default Cards;

// let allCourses = [];

// // return you a list of all courses received from the api reponses 

// const getCourses = () => {
      
//     console.log("printing courses") ;
//     console.log(courses) ;
//   Object.values(courses).forEach((courseCategory) => {

//     courseCategory.forEach((course) => {

//       allCourses.push(course);
//     }  
//     )

//   })

//   return allCourses;

// }