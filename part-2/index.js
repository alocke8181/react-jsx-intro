const Index = () =>{
    return (
        <div>
            <Tweet user="user1" name="User One" msg="I am User One! Hello!" date="12/18/2023"/>
            <Tweet user="user2" name="User Two" msg="I am User Two! Hi!" date="12/17/2023"/>
            <Tweet user="user3" name="User Three" msg="I am User Three! Greetings!" date="12/16/2023"/>
        </div>
    )
}

ReactDOM.render(<Index />, document.getElementById('root'))