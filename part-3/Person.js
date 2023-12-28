const Person = (props) =>{
    let shortName;
    if(props.name.length >8){
        shortName = props.name.slice(0,6);
    }

    return (
        <div>
            <p>Learn some info about this person:
                <ul>
                    <li>Name: {shortName ? shortName : props.name}</li>
                    <li>Age: {props.age}</li>
                    <li>Hobbies:
                        <ul>
                            {props.hobbies.map(item => <li>{item}</li>)}
                        </ul>
                    </li>
                </ul>
            </p>
            <h3>{props.age >= 18 ? "Please go vote" : "You must be 18"}</h3>
        </div>
    )
}