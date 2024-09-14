import "./timeline.css";

const Timeline = () => {
    return (
        <div className="timeline-box">
            <p className="timeline-title">Timeline of Education</p>
            <div className="timeline">
                <div className="timeline-container right">
                    <div className="content">
                        <h2>High School</h2>
                        <h3>Year of Passing: 2019</h3>
                        <p>Pursued class 10th from Lucknow Public School, Raebareli (UP) and secured 96.6% in it.</p>
                    </div>
                </div>
                <div className="timeline-container right">
                    <div className="content">
                        <h2>Intermediate</h2>
                        <h3>Year of Passing: 2021</h3>
                        <p>Pursued class 12th from Lucknow Public School, Raebareli (UP) and secured 96.8% in it.</p>
                    </div>
                </div>
            </div>
            <div className="timeline">
                <div className="timeline-container right">
                    <div className="content">
                        <h2>JEE Preparation</h2>
                        <h3>2021-2022</h3>
                        <p>Took a one-year drop for JEE preparation, secured 63K rank with a percentile of 93, and appeared in JEE Advanced.</p>
                    </div>
                </div>
                <div className="timeline-container right">
                    <div className="content">
                        <h2>Bachelor of Technology</h2>
                        <h3>2022-2026</h3>
                        <p>Currently pursuing my B.Tech Degree in Computer Science and Engineering at ABES Engineering College, Ghaziabad.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Timeline;