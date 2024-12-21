import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { auth } from "../../../components/firebase";
import './EnrolledCourses.css'

const EnrolledCourses = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEnrolledCourses = async () => {
      try {
        const user = auth.currentUser;

        /* if (!user) {
          alert("You must be logged in to view enrolled courses.");
          return;
        } */

        const userDocRef = doc(getFirestore(), "users", user.uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          const userData = userDoc.data();
          setEnrolledCourses(userData.enrollCourses || []);
        } else {
          console.error("User document not found!");
        }
      } catch (error) {
        console.error("Error fetching enrolled courses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEnrolledCourses();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <Container className="mt-5">
      <h3 className="mb-4">Your Enrolled Courses</h3>
      {enrolledCourses.length === 0 ? (
        <p>You haven't enrolled in any courses yet.</p>
      ) : (
        <Row>
          {enrolledCourses.map((course, index) => (
            <Col lg="6" md="6" sm="12" key={index} className="mb-2">
              <div className="enrolled-course-card shadow-sm p-3">
                <h6>{course}</h6>
              </div>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default EnrolledCourses;
