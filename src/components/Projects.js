import './allstyle.css';

export function Projects() {
    return (
        <div className="bg-white" id="Project">
            <div className="text-center text-black p-5">
                <span className=" fw-bold display-5 ">My Projects:</span>
                <p>(Click on the image to go to the deployed link of the project.)</p>
            </div>
            <div className="row gx-5 justify-content-center">
                <div className="col-xl-5 col-11 b">
                    <div className="card overflow-hidden bg-black shadow rounded-4 border-0 mb-5">
                        <div className="card-body p-0 c">
                            <div className="align-items-center">
                                <div className="p-5">
                                    <a href="https://github.com/Balaji-Sabbineni/Book-Borrowing-System-Backend">
                                        <img className="img-fluid rounded-3 f mb-2" src={require('./projectimgs/lib-1.png')} alt='' />
                                    </a>
                                    <br/><br/><br/>
                                    <h2 className="fw-bolder text-light">Book Borrowing System Backend</h2>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-5 col-11 b">
                    <div className="card overflow-hidden bg-black shadow rounded-4 border-0 mb-5">
                        <div className="card-body p-0 c">
                            <div className="align-items-center">
                                <div className="p-5">
                                    <a href="https://github.com/Balaji-Sabbineni/Captcha_Generator_and_validator_in_javafx">
                                        <img className="img-fluid rounded-3 f mb-2" src={require('./projectimgs/captcha.png')} alt='' />
                                    </a><br/><br/><br/>
                                    <h2 className="fw-bolder text-light">Captcha Generator and Validator in JavaFx</h2>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-5 col-11 b">
                    <div className="card overflow-hidden bg-black shadow rounded-4 border-0 mb-5">
                        <div className="card-body p-0 c">
                            <div className="align-items-center">
                                <div className="p-5">
                                    <a href="https://github.com/Balaji-Sabbineni/Todo-app-Backend-Node.js">
                                        <img className="img-fluid rounded-3 f mb-2" src={require('./projectimgs/todo.png')} alt='' />
                                    </a><br/><br/><br/>
                                    <h2 className="fw-bolder text-light">To-Do app Backend</h2>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-5 col-11 b">
                    <div className="card overflow-hidden bg-black shadow rounded-4 border-0 mb-5">
                        <div className="card-body p-0 c">
                            <div className="align-items-center">
                                <div className="p-5">
                                    <a href="https://github.com/Balaji-Sabbineni/loginpage">
                                        <img className="img-fluid rounded-3 f mb-2" src={require('./projectimgs/login.png')} alt='' />
                                    </a><br/><br/><br/>
                                    <h2 className="fw-bolder text-light">Login Page in JavaFx</h2>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}