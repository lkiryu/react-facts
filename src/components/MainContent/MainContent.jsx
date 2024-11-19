import './MainContent.css'

export default function MainContent(props){
    return(
        <main className={props.darkmode ? "dark" : ""}>
            <h1 className="title">Fun facts about React</h1>
            <ul className="list">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 200K stars on GitHub</li>
                <li>Has well over 200K stars on GitHub</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>
    )
}