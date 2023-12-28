const Index = () =>{
    return (
        <div>
            <Person name="Bob" age="27" hobbies={["Skiing","Snowboarding","Sledding"]} />
            <Person name="Johnathanielson" age="2" hobbies={["Crawling","Baby-Talking","Napping"]} />
            <Person name="Jane" age="18" hobbies={["Voting"]} />
        </div>
    )
}

ReactDOM.render(<Index />, document.getElementById('root'))