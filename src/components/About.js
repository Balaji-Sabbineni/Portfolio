import './allstyle.css';

export function About() {
    return (
        <div className="bg-white">
            <section className="py-5 mt-5" id='About'>
                <div className="container px-5">
                    <div className="row gx-5 justify-content-center">
                        <div className="col-7">
                            <div className="my-5">
                                <h2 className="display-4 fw-bolder text-center"><span className="text-primary d-inline">About Me</span></h2><br /><br />
                                <p className=" fs-4 m-4 text-center">Hello! This is Balaji. <br />Passionate Software Developer.</p><br /><br /><br />
                                <p className="about">
                                    I am currently a student with a growing passion for Software development, particularly in the Backend.
                                    My academic journey has been complemented by my academic intrests, such as Projects I have done so far. I've had the opportunity to explore programming,
                                    including Java and Python basics, which have equipped me with a strong foundation in coding. As I continue to progress through my education, I am dedicated to further
                                    enhancing my skills in software development, and I am excited about the potential for innovative projects and future opportunities in the field.
                                </p>
                                <br/>
                                <br/>
                                <div className="row">
                                    <ul className="col-12 col-xxl-6 list-group">
                                        
                                    <li className="list-group-item"><span className="fw-bold">Full Name: </span>Balaji Sabbineni</li>
                                        <li className="list-group-item"><span className="fw-bold">Birthday: </span>4th June 2004</li>
                                        <li className="list-group-item"><span className="fw-bold">City: </span>Hyderabad</li>
                                    </ul>
                                    <ul className="col-12 col-xxl-6 list-group">
                                        <li className="list-group-item"><span className="fw-bold">Git Profile: </span><a className="link" href="https://github.com/Balaji-Sabbineni">Click Here</a></li>
                                        <li className="list-group-item"><span className="fw-bold">Age: </span>20</li>
                                        <li className="list-group-item"><span className="fw-bold">Education: </span>B.Tech till 2025</li>
                                    </ul>
                                </div>
                            </div>
                            <br />
                            <br />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}