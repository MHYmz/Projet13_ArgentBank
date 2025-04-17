import React, { useEffect, useState } from "react";
import { Navigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { refreshUserProfile, getUserProfile } from "../../store/authenticationSlice";
import NameEditor from "../../components/NameEditor/NameEditor";
import FooterSection from "../../components/FooterSection/FooterSection";
import BankAccount from "../../components/BankAccount/BankAccount";
import bankAccounts from "../../data/bankAccounts";
import NavigatorBar from "../../components/NavigatorBar/NavigatorBar";
import {
  UserMainProfile,
  UserProfileTitle,
  ErrorMessage,
} from "./UserProfileDesign.js"

const UserProfilePage = () => {
  const profile = useSelector((state) => state.authentication.userProfile);
  const error = useSelector((state) => state.authentication.loginError);
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const  [lastName, setLastName] = useState("");
  const authToken = localStorage.getItem("jwtToken");

  useEffect(() => {
    if(authToken) {
      dispatch(getUserProfile(authToken));
    }
  }, [dispatch, authToken]);

  useEffect(() => {
    if (profile) {
     setFirstName(profile.firstName);
     setLastName(profile.lastName);
    }
  }, [profile]);
  

  const handleNameUpdate = (newFirstName,newLastName) => {
    const jwtToken = localStorage.getItem("jwtToken");
  
    if (!jwtToken) return;
  
    const updatedProfile = {
      firstName: newFirstName,
      lastName: newLastName,
    };
  
    try {
    dispatch(refreshUserProfile({ token: jwtToken, updatedProfile }));
    } catch (error) {
      console.error("Profile update failed:", error);
    }
  };

  const handleNameCancel = () => {
    setFirstName(profile.firstName);
    setLastName(profile.lastName);
  };


  // Redirection conditionnelle si pas de token 
  if (!authToken) {
    return <Navigate to="/connect" replace/> 
  }

  return (
    <>
      <NavigatorBar userName={`${firstName} ${lastName}`} />

      {error && <ErrorMessage>Error: {error}</ErrorMessage>}

      <UserMainProfile>
        <UserProfileTitle>
          <h1>
            Welcome back
            {profile && (
              <NameEditor
                firstName={firstName}
                lastName={lastName}
                onSave={handleNameUpdate}
                onCancel={handleNameCancel}
              />
            )}
          </h1>
        </UserProfileTitle>

        <h2 className="sr-only">Accounts</h2>
        {bankAccounts.map((acc) => (
          <BankAccount
            key={`${acc.name}-${acc.number}`}
            name={acc.name}
            number={acc.number}
            balance={acc.balance}
            details={acc.details}
          />
        ))}
      </UserMainProfile>

      <FooterSection />
    </>
  );
};

export default UserProfilePage;
