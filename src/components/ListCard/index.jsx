import { Card } from "../Card"

//Exemple in React to run in the App.jsx
export const ListCard = ({data}) => { 
  console.log(data)
  return (
    <>
      {data.map(item => (
        <Card key={item.id} data={item}/>
      ))}
    </>
  )
}