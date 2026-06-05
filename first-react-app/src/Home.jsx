// // import React from 'react'

// // const Home = ({a}) => {
// //   console.log(a);
  
// //   return (
// //     <div>{a}</div>
// //   )
// // }

// // export default Home
// //--------------------------------------------

// // import React from 'react'
// // import A from './A';

// // const Home = ({a}) => {
// //   console.log(a);
  
// //   return (
// //     <div><A val={a}/></div>
// //   )
// // }

// // export default Home;

// //--------------------------------------------------------

// import React from 'react'

// const Home = ({count}) => {
//   return (
//     <div style={{ marginTop: '20px', borderTop: '1px solid gray' }}>
//       <h2>Welcome to the Home Component!</h2>
//       <p></p>
//     </div>
//   )
// }

// export default Home
// //--------------------------------------------------------

// import React from 'react'

// const Home = () => {
//   return (
//     <div>Home</div>
//   )
// }
// const New = () => {
//     return (
//       <div>newww fileeeee</div>
//     )
//   }
//   export {New}

// export default Home

import React from "react";

const Home = ({ count }) => {
  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Current Count: {count}</h3>
    </div>
  );
};

export default Home;