import React from "react";

class NavBar extends React.Component{
    render(){
        return(
            <div>
                <div>Title</div>
                <div>
                    <img alt="cart icon"/>
                    <span>0</span>
                </div>
            </div>
        )
    }
}

export default NavBar;