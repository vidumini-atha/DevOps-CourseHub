import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { auth, googleProvider, signInWithPopup } from "../../components/firebase";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"; // Firestore functions
import "./login.css";

const db = getFirestore(); // Initialize Firestore

const LoginPage = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // Check if user exists in Firestore
      const userDocRef = doc(db, "users", user.uid);
      const userDoc = await getDoc(userDocRef);

      if (!userDoc.exists()) {
        // Save user to Firestore if not already in database
        await setDoc(userDocRef, {
          email: user.email,
          name: user.displayName || "Anonymous User",
          profilePicture: user.photoURL || null,
          createdAt: new Date().toISOString(),
        });
        console.log("User added to Firestore:", user.email);
      } else {
        console.log("User already exists in Firestore.");
      }

      // Navigate to the next page after successful login
      navigate('/home'); // Replace with your desired path
    } catch (error) {
      console.error("Error during Google login:", error);
    }
  };

  const handleSignIn = () => {
    navigate("/sign-in");
  };

  return (
    <div className="login-page">
      <Container className="h-100">
        <Row className=" justify-content-center align-items-center h-100 ">
          <Col lg="8" md="6" sm="8">
            <div className="login-box shadow-sm">
              <div className="d-flex justify-content-center">
                <h2 className="d-flex align-items-center gap-1">
                  <i className="custom-icon"></i> CourseHub
                </h2>
              </div>
              <h3 className="login-title mb-4">
                Log in to continue your learning journey
              </h3>
              <div className="d-flex justify-content-center">
                <Button
                  color="primary"
                  className="w-100 mb-3"
                  onClick={handleGoogleLogin}
                >
                  <FaGoogle className="google-icon" />
                  Login with Google
                </Button>
              </div>
              <p className="text-center">
                Don't have an account?{" "}
                <span
                  className="text-primary sign-in-link"
                  onClick={handleSignIn}
                  style={{ cursor: "pointer" }}
                >
                  Sign In
                </span>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginPage;
