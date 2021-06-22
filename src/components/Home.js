import React from 'react';

function Home() {
    return (
        <section>
            <div className="center" id="home">
                <h1 className="page-header">Home</h1>
            </div>
            <div>
                <h2>Welcome to Green Stream</h2>
                <h3>Please login then start searching for you favorite shows/movies to see what platform and what country they are streaming on!</h3>
            </div>
            <form>
                <label>
                    Login:
                    <input type="text" name="login" />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" />
                </label>
                <input type="submit" value="Submit" />
            </form>	
            </section>
    );
}

export default Home;