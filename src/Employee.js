function Employee(props){
    return (
        <>    
        <h3>{props.name}</h3>
        <p>{props.role ? props.role : <p>No role</p>}</p>
        </>
    )
}

export default Employee;