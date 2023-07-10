import {  useParams } from 'react-router-dom'

export default function ListDetails() {

     const { id } = useParams();

     return (
          <div>
               <h1>Root Layouts</h1>
               {
                    id && <h2>id: {id}</h2>
               }
          </div>
     )
}
