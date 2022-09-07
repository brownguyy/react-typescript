type PersonListProps ={
    list :{
        name : string,
        age : number
    }[]
}
export const PersonList =(props : PersonListProps)=>{
    return (
        <ul>
            {props.list.map((el,index)=><li key={index}>{el.name}</li>)}
        </ul>
    )
}