// import React from "react";

// export default function Session3() {
//   return (
//     <>
//       <h2>Api through useEffect</h2>
//       <div className="container-fluid mt-5">
//         <div className="row text-center">
//           <div className="col-10 col-md-4 mt-5">
//             <div className="card p-2">
//               <div className="d-flex align-item-center">
//                 <div className="image">
//                   <img scr="" className="rounded" width="155"></img>
//                   <div className="ml-3 w-100">
//                     <h2 className="mb-0 mt-0 textLeft">Shallu Khatak</h2>
//                     <span className="textLeft">Hello!</span>
//                     <div className="p-2 mt-0 bg-primary d-flex justify-content-between rounded text-white stats">
//                       <div className="d-flex flex-column">
//                         <span className="articies">Articies</span>
//                         <span className="number1">38</span>
//                       </div>
//                       <div className="d-flex flex-column">
//                         <span className="followers">Followers</span>
//                         <span className="number2">980</span>
//                       </div>
//                       <div className="d-flex flex-column">
//                         <span className="rating">Rating</span>
//                         <span className="number3">386</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


import React, { useState, useEffect } from 'react'
// import Loading from './github/loading';
import Session3_loading from './Session3_loading';
// import GithubUsers from "./github/githubUsers";
import Session3_user from './Session3_user';

const UseEffectAPI = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const getUsers = async () => {
        try {
            const response = await fetch('https://api.github.com/users');
             setLoading(false);
            setUsers(await response.json());
        } catch (error) {
            setLoading(false);
            console.log("my error is "+ error);
        }
    }

    useEffect(() => {
        getUsers();
    }, []);

    if (loading) {
        return <Session3_loading />
    }

    return (
        <>
            <Session3_user users={users}/>
        </>
    )
}

export default UseEffectAPI