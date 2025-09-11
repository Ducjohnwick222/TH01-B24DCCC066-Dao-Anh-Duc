import React, { useState } from "react";

function StudentCard({ name, age, className }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "15px",
        marginBottom: "15px",
        maxWidth: "400px",
      }}
    >
      <h3>{name}</h3>
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Ẩn chi tiết" : "Xem chi tiết"}
      </button>
      {showDetails && (
        <div style={{ marginTop: "10px" }}>
          <p>Tuổi: {age}</p>
          <p>Lớp: {className}</p>
        </div>
      )}
    </div>
  );
}

function StudentList() {
  const students = [
    { id: 1, name: "Nguyễn Văn A", age: 20, className: "Lớp 10A" },
    { id: 2, name: "Trần Thị B", age: 21, className: "Lớp 11B" },
    { id: 3, name: "Lê Văn C", age: 22, className: "Lớp 12C" },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Danh sách sinh viên</h2>
      {students.map((student) => (
        <StudentCard
          key={student.id}
          name={student.name}
          age={student.age}
          className={student.className}
        />
      ))}
    </div>
  );
}

export default StudentList;
