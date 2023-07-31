import React from "react";
import ProfileCards from "../components/ProfileCards";

export default function GroupUser({ navigation }) {
  return (
    <ProfileCards
      Name={"User 2"}
      navigation={navigation}
      Phone={"+91 2087599036"}
      Email={"user@gmail.com"}
      PAN={"AAAAA8888A"}
      VoterId={"ABC1234567"}
      Aadhar={"3977 8800 0234"}
      Company={"MesoTek Solution"}
      Occupation={"H/W Developer"}
      Address={
        "Central Facility Building II, APMC II, Sector 19, Vashi, Navi Mumbai, Maharashtra 400705"
      }
      Alternate={"+913738473738"}
      ownProfile={false}
    />
  );
}
