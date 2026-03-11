export default function Home(){
  return(

    <div>

      <div style={{
        backgroundImage:"url('/images/lab-empty.jpg')",
        backgroundSize:"cover",
        backgroundPosition:"center",
        color:"white",
        padding:"120px 30px",
        borderRadius:"10px"
      }}>
        <h2>Welcome to Dhaarna Computer Education Center</h2>
        <p>Professional Computer Training Institute</p>
      </div>

      <br/>

      <h2>About Institute</h2>

      <p>
        Dhaarna Computer Education Center provides quality computer
        education with practical training to make students job ready.
      </p>

      <p><b>Owner :</b> Surya Prakash Sharma</p>
      <p><b>Established :</b> 2017</p>

      <h3>Course Duration</h3>

      <ul>
        <li>3 Months Courses</li>
        <li>6 Months Courses</li>
        <li>1 Year Courses</li>
      </ul>

    </div>

  )
}