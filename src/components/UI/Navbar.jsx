export default function Nav({ links }) {
    return (
      <nav className="navbar navbar-expand-lg mt-2 pt-1 pb-2 bg-secondary">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {links.map((link) => link)}
            </ul>
          </div>
        </div>
      </nav>
    );
  }

//updated to ReactRouter so this code not used 

// function NavTabs({ currentPage, handlePageChange }) {
//     return (

// <div>
//         <ul className="nav nav-tabs">
//             <li className="nav-item">
//                 <a href="#about"
//                 onClick={() => handlePageChange('About')}
//                 className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
//             >
//                 About Me
//             </a>
//             </li>
//             <li className="nav nav-tabs">
//                 <a href='#portfolio'
//                 onClick={() => handlePageChange('Portfolio')}
//                 className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
//             >
//                 Portfolio
//             </a>
//             </li>
//             <li className="nav-item">
//                 <a
//                 href="#contact"
//                 onClick={() => handlePageChange('Contact')}
//                 className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
//             >
//                 Contact Me
//             </a>
//             </li>
//             <li className="nav-item">
//                 <a
//                     href='#resume'
//                     onClick={() => handlePageChange('Resume')}
//                     className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
//                 >
//                     Resume
//                 </a>
//             </li>
//         </ul>


//     <p>
//         <a className="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Toggle first element</a>
//         <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Toggle second element</button>
//         <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Toggle both elements</button>
//     </p>
//         <div className="row">
//             <div className="col">
//                 <div className="collapse multi-collapse" id="multiCollapseExample1">
//                     <div className="card card-body">
//                         Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
//                     </div>
//                 </div>
//             </div>
//             <div className="col">
//                 <div className="collapse multi-collapse" id="multiCollapseExample2">
//                     <div className="card card-body">
//                         Some placeholder content for the second collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
//                     </div>
//                 </div>
//             </div>
//         </div>
// </div>



//     );
// }

// export default NavTabs;
