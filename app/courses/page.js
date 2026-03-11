import { courses } from "../../data/courses";

export default function Courses() {
  return (
    <div>
      <h2>Our Courses</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
        gap: "20px"
      }}>
        {courses.map((course, index) => (
          <div key={index} style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
          }}>
            <h3>{course}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}