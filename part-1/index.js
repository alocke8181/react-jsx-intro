const Index = () =>{
    return(
        <div>
            <FirstComponent />
            <NamedComponent name="named component" />
        </div>
    )
}

ReactDOM.render(<Index />, document.getElementById('root'));