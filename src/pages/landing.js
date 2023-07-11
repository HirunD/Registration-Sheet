import React from "react";
import "bulma/css/bulma.min.css";


function Landing(){
    const goToSchool = () => window.location.href = "/schools"
    const goToStudents = () => window.location.href = "/students"

    return(
            <><div class="card dragable" onClick={goToSchool} >
            <div class="card-content">
                <div class="media">
                    <div class="media-content">
                        <p class="title is-4"><a>Schools</a></p>
                        <p class="subtitle is-6"></p>
                    </div>
                </div>
            </div>
        </div><div class="card dragable" onClick={goToStudents}>
                <div class="card-content">
                    <div class="media">
                        <div class="media-content">
                            <p class="title is-4"><a>Students</a></p>
                            <p class="subtitle is-6"></p>
                        </div>
                    </div>
                </div>
            </div></>
    )
}

export default Landing;