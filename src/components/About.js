import React from 'react';

export default function About(props) {
    return (
        <div
            className="about-card container py-4"
            style={{
                color: props.mode === 'dark' ? 'white' : '#042743',
                backgroundColor: props.mode === 'dark' ? '#23272b' : 'white'
            }}
        >
        <div className="container py-4" style={{
            color: props.mode === 'dark' ? 'white' : '#042743',
            backgroundColor: props.mode === 'dark' ? '#23272b' : 'white',
            borderRadius: '1rem',
            boxShadow: '0 4px 24px rgba(60, 72, 88, 0.08)'
        }}>
            <h1 className="my-3">About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item" style={{
                    backgroundColor: props.mode === 'dark' ? '#23272b' : 'white',
                    color: props.mode === 'dark' ? 'white' : '#042743',
                    border: 'none'
                }}>
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button"
                            style={{
                                backgroundColor: props.mode === 'dark' ? '#343a40' : 'white',
                                color: props.mode === 'dark' ? 'white' : '#042743'
                            }}
                            data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Meet Our Professionals
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">  It consists of unique individuals who are experts in their respective fields. Our team is dedicated to providing top-notch services and solutions tailored to meet the needs of our clients. We believe in continuous learning and improvement, ensuring that we stay ahead in the industry.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={{
                    backgroundColor: props.mode === 'dark' ? '#23272b' : 'white',
                    color: props.mode === 'dark' ? 'white' : '#042743',
                    border: 'none'
                }}>
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button"
                            style={{
                                backgroundColor: props.mode === 'dark' ? '#343a40' : 'white',
                                color: props.mode === 'dark' ? 'white' : '#042743'
                            }}
                            data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Our Mission and Vision
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">We are committed to delivering exceptional value to our clients through innovative solutions and unparalleled service. Our mission is to empower businesses and individuals by providing the tools and expertise they need to succeed. We value integrity, excellence, and collaboration, ensuring that we build lasting relationships with our clients and partners.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={{
                    backgroundColor: props.mode === 'dark' ? '#23272b' : 'white',
                    color: props.mode === 'dark' ? 'white' : '#042743',
                    border: 'none'
                }}>
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button"
                            style={{
                                backgroundColor: props.mode === 'dark' ? '#343a40' : 'white',
                                color: props.mode === 'dark' ? 'white' : '#042743'
                            }}
                            data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Our Committment and Future Plans
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body"> We are dedicated to maintaining the highest standards of quality and service. Our team works tirelessly to ensure that we meet and exceed the expectations of our clients. We believe in transparency and accountability, and we strive to build trust through our actions. Looking ahead, we plan to expand our services and reach, continuously adapting to the changing needs of our clients and the industry.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}