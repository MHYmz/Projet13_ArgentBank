import React, { useEffect, useState } from "react";
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
  const [userName, setUserName] = useState("");

  useEffect(() => {
    if (profile) {
      setUserName(`${profile.firstName} ${profile.lastName}`);
    }
  }, [profile]);

  const handleNameUpdate = async (newName) => {
    const jwtToken = localStorage.getItem("jwtToken");
  
    if (!jwtToken) return;
  
    const updatedProfile = {
      firstName: newName.split(" ")[0],
      lastName: newName.split(" ").slice(1).join(" "),
    };
  
    try {
      await dispatch(refreshUserProfile({ token: jwtToken, updatedProfile }));
    } catch (error) {
      console.error("Profile update failed:", error);
    }
  };

  const handleNameCancel = () => {};

  useEffect(() => {
    const authToken = localStorage.getItem("jwtToken");
    if (!authToken) {
      window.location.href = "/connect";
    } else {
      dispatch(getUserProfile(authToken));
    }
  }, [dispatch]);

  return (
    <>
      <NavigatorBar userName={userName} />

      {error && <ErrorMessage>Error: {error}</ErrorMessage>}

      <UserMainProfile>
        <UserProfileTitle>
          <h1>
            Welcome back
            {profile && (
              <NameEditor
                fullName={`${profile.firstName} ${profile.lastName}`}
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
