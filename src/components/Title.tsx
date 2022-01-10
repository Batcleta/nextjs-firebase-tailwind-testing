function Title(props) {
    return (
        <div className={`
            flex flex-col justify-center
        `}> 
            <h1 className={`
            justify-center px-5 py-2 text-2xl
            `} >
                {props.title}
                </h1>
            <hr className={`border-2 border-purple-500`}/>
        </div>
    )
}

export default Title
