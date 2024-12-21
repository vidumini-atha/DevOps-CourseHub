import React, { Fragment, useState, useEffect } from "react";
import Footer from "../../../components/Footer/Footer";
import NewHeader from "../../../components/Header/new-header";
import CourseDropDown from "../../../components/Header/courseDropDown";
import { Container, Row, Col } from "reactstrap";
import geeksImage from './GeeksforGeeks.png';
import Breadcrumb from "./Breadcrumb";
import ReactPlayer from "react-player";
import "./course-content.css";
import { useParams } from "react-router-dom";
import { getFirestore, doc, updateDoc, arrayUnion, getDoc } from "firebase/firestore";
import {auth} from "../../../components/firebase";

const IconStyle = {
  display: "inline-block",
  width: "120px",
  height: "30px",
  backgroundImage: `url(${geeksImage})`,
  backgroundSize: "cover",
};


const CourseContent= ({ heading }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const { courseId } = useParams(); // Get courseId from URL
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const db = getFirestore();
  
  const handleScroll = () => {
    if (window.scrollY > window.innerHeight) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  const handleEnroll = async () => {
    try {
      const user = auth.currentUser; // Get the currently logged-in user
  
      if (!user) {
        console.error("User is not logged in!");
        return;
      }
  
      if (!course || !course.heading) {
        console.error("Course heading is undefined!");
        return;
      }
  
      const userDocRef = doc(db, "users", user.uid); // Reference to the user document
  
      // Add the course heading to the 'enrollCourses' field using arrayUnion
      await updateDoc(userDocRef, {
        enrollCourses: arrayUnion(course.heading),
      });
  
      alert(`${course.heading} has been successfully added to your enrolled courses!`);
  } catch (error) {
    alert("An error occurred while enrolling in the course. Please try again.");
    console.error("Error enrolling in course:", error);
  }
  };
  
  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const docRef = doc(db, "courses", courseId); // Reference Firestore document
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setCourse(docSnap.data()); // Set course data
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching document:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [courseId]);

  // Handle scroll event
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Conditional rendering based on loading and course data
  if (loading) {
    return <p>Loading...</p>;
  }

  if (!course) {
    return <p>Course not found!</p>;
  }

  return (
    <Fragment>
      <NewHeader isScrolled={isScrolled}/>
      <br></br><br></br><br></br>
      <CourseDropDown/>
      <Breadcrumb url={course.url}/>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="choose__content">
              <h2 className="heading">{course.heading}</h2>
              <p className="choosePara">
              {course.description}
              </p>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="choose__img">
              {showVideo ? (
                <ReactPlayer
                  url={course.videoUrl}
                  controls
                  width="100%"
                  height="350px"
                />
              ) : (
                <img src={course.image} alt="" className="w-100" />
              )}

              {!showVideo && (
                <span className="play__icon">
                  <i
                    class="ri-play-circle-line"
                    onClick={() => setShowVideo(!showVideo)}
                  ></i>
                </span>
              )}
              
                <button className="btn" onClick={handleEnroll} disabled={!course || !course.heading}>Enroll Now</button>
             
            </div>
            
          </Col>
        </Row>
      </Container>
      <Container>
        <h4 className="title" style={{fontSize:"14px", textAlign:"center", lineHeight:"60px", color:"#5f5858"
    }}>Powered by Resources</h4>
        <Row className="d-flex align-items-center justify-content-center text-center">
          <Col lg="2" md="3" sm="4" xs="6">
            <h3 className=" d-flex align-items-center gap-1">
            <i className="geeks-icon" style={IconStyle}></i>

            </h3>
          </Col>
          </Row>
         </Container>
      
         <Footer/>
    </Fragment>
  );
};

export default CourseContent;
