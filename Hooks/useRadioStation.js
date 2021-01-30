import React, { useState, useEffect } from "react";
import firebase from "../database/firebase";

function useRadioStation() {
  const [radioStation, setRadioStation] = useState("");

  const getRadioStation = async () => {
    firebase.db.collection("radioStation").onSnapshot((querySnapshot) => {
      querySnapshot.docs.forEach((doc) => {
        const radioStation = doc.data().url;
        setRadioStation(radioStation);
      });
    });
  };

  useEffect(() => {
    getRadioStation();
  }, []);

  return radioStation;
}

export default useRadioStation;
