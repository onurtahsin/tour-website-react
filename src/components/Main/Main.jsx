// import './Main.scss'
// import {data} from '../../helpers/data'
// import Card from './Card'

// const Main = () =>{
//     return(
//             <div className="card-container">
//                 {data.map((item)=>
//                 {
//                     const{id,title,image,desc} = item;
//                     return(
//                         <div className="cards">
//                             <h1>{title}</h1>
//                             <img src={image} alt="" />
//                             <p>{desc}</p>
//                         </div>
//                     )
//                 }
//                 )}
//             </div>
    
//     )
// }

// export default Main;

import './Main.scss';
import { data } from '../../helpers/data'
import Card from './Card'

const Main = () => {
    console.log(data)
  return (
    <div className="card-container">
        {data.map((item) => <Card{...item} />)}
    </div>
  ) 
}

export default Main;