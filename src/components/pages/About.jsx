// export default function About() {
//     return (
//       <div className="row">
//         <div className="column">
//           <h2>About Me</h2>
//           <div className="row">
//               <div>
//                   <img className="css-img img-responsive" src='/assets/headshot-filmstyle.jpg'/>
//               </div>
             
//               <p>
//                   I have developed a wealth of skills in a variety of areas that contribute to the value of her work. She enjoys tackling problem solving, both alone and in a team. She is a great team player who asks many questions and spends time considering the ideas of others. 
//               </p> 
//           </div>

//       </div>
//     </div>
//   );
// }

// 1 new message

// Loading history...


// Amy
//   10:00 PM
// export default function About() {
//     return (
//       <div className="row">
//         <div className="column">
//           <h2>About Me</h2>
//           <div className="row">
//               <div>
//                   <img className="css-img img-responsive" src='/assets/headshot-filmstyle.jpg'/>
//               </div>
//               <p>
//                   I have developed a wealth of skills in a variety of areas that contribute to the value of her work. She enjoys tackling problem solving, both alone and in a team. She is a great team player who asks many questions and spends time considering the ideas of others.
//               </p>
//           </div>
//       </div>
//     </div>
//   );
// }

export default function About() {
  return (
    <div className="row">
      <div className="col-md-3">
        {/* Column for the image */}
        <img className="css-img img-responsive" src="/assets/headshot-filmstyle.jpg" alt="Headshot" />
      </div>
      <div className="col-md-9">
        {/* Column for the paragraph */}
        <div>
          <h2>About Me</h2>
          <p>
            I have developed a wealth of skills in a variety of areas that contribute to the value of her work. She enjoys tackling problem solving, both alone and in a team. She is a great team player who asks many questions and spends time considering the ideas of others.
          </p>
        </div>
      </div>
    </div>
  );
}