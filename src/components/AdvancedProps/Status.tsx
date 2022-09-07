type StatusProps ={
    status : "loading" | "success" | "error"
}
export const Status =(props:StatusProps)=>{
    let status =""
    if(props.status === "loading"){
        status ="Loading..."
    }else if(props.status === "success"){
        status ="Data Fetched Successfully."
    }else if(props.status === "error"){
        status ="Error during fetching data."
    }
    return (
        <h4>{status}</h4>
    )
}