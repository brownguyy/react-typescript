type GreetProps ={
    name : string,
    count : number,
    isLoggedIn : boolean
}

export const Greet =(props: GreetProps)=>{
    return  (<div>{props.isLoggedIn ? `Welcome ${props.name} You have ${props.count} Messages!` : "Welcome Guest"}</div>)
}