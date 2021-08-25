import './Header.css';

function Header () {
    
    return (
        <>
            <header className="header main-grid">

                <img className="header-logo" src="./imgs/logo-white.png" alt="" />
                <div className="header-content-container">
                    <h1 className="header-primary-title">OUTDOORS</h1>
                    <h2 className="header-sub-title">IS WHERE LIFE HAPPENS</h2>
                    <button className="btn-animation header-btn">DISCOVER OUR TOURS</button>
                </div>
            </header>
        </>
    )
}

export default Header;