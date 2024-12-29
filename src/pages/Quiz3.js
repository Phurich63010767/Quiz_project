import React, { useState } from "react";

const Quiz3Table = () => {
  const [array1, setArray1] = useState([
    { Code: 101, Name: "AAA" },
    { Code: 102, Name: "BBB" },
    { Code: 103, Name: "CCC" },
  ]);

  const [array2, setArray2] = useState([
    { Code: 103, City: "Singapore" },
    { Code: 102, City: "Tokyo" },
    { Code: 101, City: "Bangkok" },
  ]);

  const [output, setOutput] = useState([]);
  const [editing, setEditing] = useState({ array: null, index: null, field: null });
  const [newArray1, setNewArray1] = useState({ Code: "", Name: "" });
  const [newArray2, setNewArray2] = useState({ Code: "", City: "" });

  const handleMapping = () => {
    const result = array1.map((item1) => {
      const matchedItem = array2.find((item2) => item2.Code === item1.Code);
      return {
        ...item1,
        City: matchedItem ? matchedItem.City : "Not Found",
      };
    });
    setOutput(result);
  };

  const handleReset = () => {
   setArray1([
    { Code: 101, Name: "AAA" },
    { Code: 102, Name: "BBB" },
    { Code: 103, Name: "CCC" },
   ]);
   setArray2([
    { Code: 103, City: "Singapore" },
    { Code: 102, City: "Tokyo" },
    { Code: 101, City: "Bangkok" },
   ]);
   setOutput([]);
  };

  const handleEditChange = (e, arrayName, index, field) => {
    const updatedArray = [...(arrayName === "array1" ? array1 : array2)];
    updatedArray[index][field] = e.target.value;

    if (arrayName === "array1") {
      setArray1(updatedArray);
    } else {
      setArray2(updatedArray);
    }
  };

  const handleDoubleClick = (arrayName, index, field) => {
    setEditing({ array: arrayName, index, field });
  };

  const handleBlur = () => {
    setEditing({ array: null, index: null, field: null });
  };

  const handleAddToArray1 = () => {
   if (newArray1.Code && newArray1.Name) {
     setArray1([...array1, { ...newArray1, Code: parseInt(newArray1.Code) }]);
     setNewArray1({ Code: "", Name: "" });
   }
 };

 const handleAddToArray2 = () => {
   if (newArray2.Code && newArray2.City) {
     setArray2([...array2, { ...newArray2, Code: parseInt(newArray2.Code) }]);
     setNewArray2({ Code: "", City: "" });
   }
 };

  return (
    <div>
      <h1>Quiz 3</h1>

      <div>
        <h3>Array1</h3>
        <table border="1" cellPadding="5">
          <thead>
            <tr>
              <th>Code</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {array1.map((item, index) => (
              <tr key={index}>
                <td>
                  {editing.array === "array1" && editing.index === index && editing.field === "Code" ? (
                    <input
                      type="number"
                      value={item.Code}
                      onChange={(e) => handleEditChange(e, "array1", index, "Code")}
                      onBlur={handleBlur}
                      autoFocus
                    />
                  ) : (
                    <span onDoubleClick={() => handleDoubleClick("array1", index, "Code")}>
                      {item.Code}
                    </span>
                  )}
                </td>
                <td>
                  {editing.array === "array1" && editing.index === index && editing.field === "Name" ? (
                    <input
                      type="text"
                      value={item.Name}
                      onChange={(e) => handleEditChange(e, "array1", index, "Name")}
                      onBlur={handleBlur}
                      autoFocus
                    />
                  ) : (
                    <span onDoubleClick={() => handleDoubleClick("array1", index, "Name")}>
                      {item.Name}
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div style={{ marginTop: "10px" }}>
          <input
            type="number"
            placeholder="Code"
            value={newArray1.Code}
            onChange={(e) =>
              setNewArray1({ ...newArray1, Code: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Name"
            value={newArray1.Name}
            onChange={(e) =>
              setNewArray1({ ...newArray1, Name: e.target.value })
            }
          />
          <button onClick={handleAddToArray1}>Add to Array1</button>
        </div>

      <div style={{ marginTop: "20px" }}>
        <h3>Array2</h3>
        <table border="1" cellPadding="5">
          <thead>
            <tr>
              <th>Code</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {array2.map((item, index) => (
              <tr key={index}>
                <td>
                  {editing.array === "array2" && editing.index === index && editing.field === "Code" ? (
                    <input
                      type="number"
                      value={item.Code}
                      onChange={(e) => handleEditChange(e, "array2", index, "Code")}
                      onBlur={handleBlur}
                      autoFocus
                    />
                  ) : (
                    <span onDoubleClick={() => handleDoubleClick("array2", index, "Code")}>
                      {item.Code}
                    </span>
                  )}
                </td>
                <td>
                  {editing.array === "array2" && editing.index === index && editing.field === "City" ? (
                    <input
                      type="text"
                      value={item.City}
                      onChange={(e) => handleEditChange(e, "array2", index, "City")}
                      onBlur={handleBlur}
                      autoFocus
                    />
                  ) : (
                    <span onDoubleClick={() => handleDoubleClick("array2", index, "City")}>
                      {item.City}
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ marginTop: "10px" }}>
          <input
            type="number"
            placeholder="Code"
            value={newArray2.Code}
            onChange={(e) =>
              setNewArray2({ ...newArray2, Code: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="City"
            value={newArray2.City}
            onChange={(e) =>
              setNewArray2({ ...newArray2, City: e.target.value })
            }
          />
          <button onClick={handleAddToArray2}>Add to Array2</button>
        </div>      

      <div style={{ marginTop: "20px" }}>
        <button onClick={handleMapping}>Map Arrays</button>
        <button onClick={handleReset}>Reset</button>
      </div>

      <div style={{ marginTop: "20px" }}>
        <h3>Output</h3>
        {output.length > 0 ? (
          <table border="1" cellPadding="5">
            <thead>
              <tr>
                <th>Code</th>
                <th>Name</th>
                <th>City</th>
              </tr>
            </thead>
            <tbody>
              {output.map((item, index) => (
                <tr key={index}>
                  <td>{item.Code}</td>
                  <td>{item.Name}</td>
                  <td>{item.City}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No output yet. Click "Map Arrays" to generate output.</p>
        )}
      </div>
    </div>
  );
};

export default Quiz3Table;
