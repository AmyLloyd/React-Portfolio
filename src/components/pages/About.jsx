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
      <div className="col-sm-6 col-md-6 col-lg-4">
        {/* Column for the image */}
        <img className="css-img mx-auto" src="/assets/headshot-filmstyle.jpg" alt="Headshot" />
      </div>
      <div className="col-sm-6 col-md-6 col-lg-8">
        {/* Column for the paragraph */}
        <div>
          <h2>About Me</h2>
          <p>
            Hi! I'm Amy!
            I am a Full stack developer with fast-growing skills. I enjoy being involved in a project from its inception to completion. I love to apply problem solving skills and creativity to meet the design needs of clients. I am a great team player who communicates well with colleagues and clients. 
            Look forward to working with you soon!
          </p>
        </div>
      </div>
    </div>
  );
}