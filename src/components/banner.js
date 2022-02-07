import React from 'react';

const banner = (handleLogout) => {
    return (
        <section className="banner">
            <nav>
                <h2>kunaka</h2>
                <button onClick={handleLogout}>Logout</button>
            </nav>
        </section>
    );
}  

export default banner;  