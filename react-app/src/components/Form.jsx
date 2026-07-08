import React, { useEffect, useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [regId, setRegId] = useState("");
  const [city, setCity] = useState("");
  const [designation, setDesignation] = useState("teacher");

  
  // const [data, setData] = useState();
  const [allData, setAllData] = useState([]);
  
  useEffect(() => {
    const localData = localStorage.getItem("allData");
    if(!localData) return;

    setAllData(JSON.parse(localData));
  }, [])
  function showData() {
    const data = {
      name,
      age,
      email,
      regId,
      city,
      designation,
    };

    // setData(data);

    const newData = [...allData, data];
    setAllData(prev => [...prev, data]);
    localStorage.setItem("allData", JSON.stringify(newData));

    setName("");
    setEmail("");
    setAge("");
    setRegId("");
    setDesignation("teacher");
    setCity("");
  }

  return (
    <div>
      <h1>Form</h1>

      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        name="name"
        id="name"
        placeholder="name"
        value={name}
      />
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        name="email"
        id="email"
        placeholder="email"
        value={email}
      />
      <input
        onChange={(e) => setAge(e.target.value)}
        type="number"
        name="age"
        id="age"
        placeholder="age"
        value={age}
      />
      <input
        onChange={(e) => setRegId(e.target.value)}
        type="number"
        name="regId"
        id="regId"
        placeholder="regId"
        value={regId}
      />
      <input
        onChange={(e) => setCity(e.target.value)}
        type="text"
        name="city"
        id="city"
        placeholder="city"
        value={city}
      />
      <select
        onChange={(e) => setDesignation(e.target.value)}
        name="designation"
        id="designation"
        value={designation}
      >
        <option value="teacher">Teacher</option>
        <option value="student">Student</option>
        <option value="scholar">Scholar</option>
      </select>
      <button onClick={showData}>Add Data</button>

      <hr />

      {allData && (
        <div>
          <h1>Show Data</h1>
          
          {
            allData.map((d, i) => (<div key={i}>
            <p>
              <strong>name: </strong>
              {d.name}
            </p>
            <p>
              <strong>email: </strong>
              {d.email}
            </p>
            <p>
              <strong>age: </strong>
              {d.age}
            </p>
            <p>
              <strong>regId: </strong>
              {d.regId}
            </p>
            <p>
              <strong>city: </strong>
              {d.city}
            </p>
            <p>
              <strong>designation: </strong>
              {d.designation}
            </p>
          </div>))
          }
        </div>
      )}
    </div>
  );
};

export default Form;
