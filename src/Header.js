function Header({toggleSidebar}) {
    return (
        <header id = "main-header">
            <div id = "header-menu" className = "clickable" onClick = {toggleSidebar}>&#9776;</div>
            <div id  = "header-title">
                <h1>Motion</h1>
                <p>Like Notion and Lotion, but unbelievably worse.</p>
            </div>
        </header>
    );
}

export default Header;