const Tweet = (props) =>{
    return (
        <div>
            <h5>{props.user}</h5>
            <h6>{props.name}</h6>
            <p>{props.msg}</p>
            <p>
                <i>{props.date}</i>
            </p>
        </div>
    )
}