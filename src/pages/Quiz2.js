import React, { useState } from "react";

const Quiz2 = () => {
  const [fields, setFields] = useState({
    field1: "",
    field2: "",
    field3: "",
    field4: "",
    field5: "",
  });

  const handleInputChange = (e, fieldName) => {
    const value = parseFloat(e.target.value) || "";
    const newFields = { field1: "", field2: "", field3: "", field4: "", field5: "" };

    if (value !== "") {
      switch (fieldName) {
        case "field1":
          newFields.field1 = value;
          newFields.field2 = value * 0.37;
          newFields.field3 = value * 1.32;
          newFields.field4 = value * 0.02;
          newFields.field5 = value * 0.15;
          break;
        case "field2":
          newFields.field1 = value * (100/37);
          newFields.field2 = value;
          newFields.field3 = value * (132/37)
          newFields.field4 = value * (2/37);
          newFields.field5 = value * (15/37);
          break;
        case "field3":
          newFields.field1 = value * (100/132);
          newFields.field2 = value * (37/132);
          newFields.field3 = value;
          newFields.field4 = value * (2/132);
          newFields.field5 = value * (15/132);
          break;
        case "field4":
          newFields.field1 = value * (100/2);
          newFields.field2 = value * (37/2);
          newFields.field3 = value * (132/2);
          newFields.field4 = value;
          newFields.field5 = value * (15/2);
          break;
        case "field5":
          newFields.field1 = value * (100/15);
          newFields.field2 = value * (37/15);
          newFields.field3 = value * (132/15);
          newFields.field4 = value * (2/15);
          newFields.field5 = value;
          break;
    
        default:
          break;
      }
    }

    setFields(newFields);
  };

  const clearFields = () => {
    setFields({
      field1: "",
      field2: "",
      field3: "",
      field4: "",
      field5: "",
    });
  };

  return (
    <div>
      <h1>Quiz 2</h1>
      <h3>ผู้ใช้กรอกได้ 1 ช่อง</h3>
      <table border="1" >
        <tbody>
        <tr>
            <td style={{ textAlign: "center" }}><b>100</b></td>
            <td style={{ textAlign: "center" }}><b>37</b></td>
            <td style={{ textAlign: "center" }}><b>132</b></td>
            <td style={{ textAlign: "center" }}><b>2</b></td>
            <td style={{ textAlign: "center" }}><b>15</b></td>
          </tr>
          <tr>
            <td>
              <label>
                <input
                  type="number"
                  value={fields.field1}
                  onChange={(e) => handleInputChange(e, "field1")}
                />
              </label>
            </td>
            <td>
              <label>
                <input
                  type="number"
                  value={fields.field2}
                  onChange={(e) => handleInputChange(e, "field2")}
                />
              </label>
            </td>
            <td>
              <label>
                <input
                  type="number"
                  value={fields.field3}
                  onChange={(e) => handleInputChange(e, "field3")}
                />
              </label>
            </td>
            <td>
              <label>
                <input
                  type="number"
                  value={fields.field4}
                  onChange={(e) => handleInputChange(e, "field4")}
                />
              </label>
            </td>
            <td>
              <label>
                <input
                  type="number"
                  value={fields.field5}
                  onChange={(e) => handleInputChange(e, "field5")}
                />
              </label>
            </td>
          </tr>
        </tbody>
      </table>
      <button onClick={clearFields} style={{ color: "purple", marginLeft: "10px" }}>
        Clear
      </button>
    </div>
  );
};

export default Quiz2;
