import react from 'react'



const people = [
   {
    id:2,
    name:'john',
    age:34,
    school:'webster'
   },
   {
    id:3,
    name:'peter',
    age:'20',
    school:'champ'
   }
]


const Checks = (props) => {
  return (
    <div onClick={()=> props.chez(props.id)}>
      <h1>{props.name}</h1>
        <p>{props.email}</p>
    </div>
  )
}



export default people;
export {Checks};

