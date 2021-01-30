import React, { useState, useEffect } from "react";
import firebase from "../database/firebase";

function useProgram() {
  const [program, setProgram] = useState([]);
  const [programDate, setProgramDate] = useState("");

  const getProgram = () => {
    firebase.db.collection("programs").onSnapshot((data) => {
      const previousPrograms = [];
      data.docs.forEach((program, index) => {
        const url = program.data().url;
        const date = program.data().date;
        previousPrograms.push({ id: index + 1, url, date });
      });
      setProgram(previousPrograms[0].url);
      setProgramDate(previousPrograms[0].date);
    });
  };
  useEffect(() => {
    getProgram();
  }, [program]);

  return { program, programDate };
}

export default useProgram;
