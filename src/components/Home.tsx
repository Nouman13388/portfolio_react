import type { JSX } from "react";
import "/src/App.css"
// import vector1 from "./vector-1.svg";

export const Home = (): JSX.Element => {
    return (
        <div className="main-container">
            <div className="depth-frame">
                <div className="depth-frame-1">
                    <div className="depth-frame-2">
                        <div className="depth-frame-3">
                            <div className="depth-frame-4">
                                <div className="depth-frame-5" />
                            </div>
                            <div className="depth-frame-6">
                                <span className="math-portfolio">Math Portfolio</span>
                            </div>
                        </div>
                        <div className="depth-frame-7">
                            <div className="depth-frame-8">
                                <div className="depth-frame-9">
                                    <span className="home-a">Home</span>
                                </div>
                                <div className="depth-frame-b">
                                    <span className="research">Research</span>
                                </div>
                                <div className="depth-frame-c">
                                    <span className="publications">Publications</span>
                                </div>
                                <div className="depth-frame-d">
                                    <span className="about">About</span>
                                </div>
                                <div className="depth-frame-e">
                                    <span className="contact">Contact</span>
                                </div>
                            </div>
                            <div className="depth-frame-f" />
                        </div>
                    </div>
                    <div className="depth-frame-10">
                        <div className="depth-frame-11">
                            <div className="depth-frame-12">
                                <div className="depth-frame-13">
                                    <div className="depth-frame-14">
                                        <div className="depth-frame-15" />
                                        <div className="depth-frame-16">
                                            <div className="depth-frame-17">                                <span className="dr-evelyn-reed">Aqsa Farooq</span>
                                            </div>
                                            <div className="depth-frame-18">
                                                <span className="graph-theory-mathematician">
                                                    Mathematics Lecturer specializing in Graph Theory
                                                </span>
                                            </div>
                                            <div className="depth-frame-19">
                                                <span className="uc-berkeley-phd">
                                                    MS/MPhil in Mathematics, COMSATS University Islamabad
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="depth-frame-1a">
                            <div className="depth-frame-1b" />
                            <div className="depth-frame-1c">                                <span className="dr-evelyn-reed-1d">
                                    Aqsa Farooq is a dedicated Mathematics Lecturer at COMSATS University Islamabad with an MS/MPhil 
                                    in Mathematics from the same institution. Her research primarily focuses on graph theory, discrete 
                                    mathematics, and their applications in network analysis. With a passion for mathematical education 
                                    and research, Aqsa has made significant contributions to the field, including publications on 
                                    metric dimensions in honeycomb networks and line graphs. Her expertise lies in developing 
                                    theoretical frameworks for graph structures and applying mathematical concepts to solve 
                                    real-world problems in network science, combinatorial optimization, and discrete mathematics.
                                </span>
                            </div>
                            <div className="depth-frame-1e">
                                <span className="research-focus">Research Focus</span>
                            </div>
                            <div className="depth-frame-1f">                                <span className="research-areas">
                                    Aqsa's research is centered around the following key
                                    areas:
                                </span>
                            </div>
                            <div className="depth-frame-20">
                                <div className="depth-frame-21">
                                    <span className="graph-theory">Graph Theory</span>
                                </div>
                            </div>
                            <div className="depth-frame-22">
                                <div className="depth-frame-23">
                                    <span className="combinatorics">Combinatorics</span>
                                </div>
                            </div>
                            <div className="depth-frame-24">
                                <div className="depth-frame-25">
                                    <span className="network-science">Network Science</span>
                                </div>
                            </div>
                            <div className="depth-frame-26">                                <div className="depth-frame-27">
                                    <span className="algorithmic-applications">
                                        Mathematics Education
                                    </span>
                                </div>
                            </div>
                            <div className="depth-frame-28" />                            <div className="depth-frame-29">
                                <button 
                                    className="btn-primary" 
                                    onClick={() => {
                                        const cvSection = document.getElementById('cv');
                                        if (cvSection) {
                                            cvSection.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }}
                                    style={{
                                        padding: '12px 24px',
                                        fontSize: '16px',
                                        fontWeight: '600',
                                        backgroundColor: '#2563eb',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '8px',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        margin: '20px auto'
                                    }}
                                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#1d4ed8'}
                                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
                                >
                                    📄 View CV
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
