import Image from "next/image"

export default function About(){

  return(

    <div>

      <h2>About Dhaarna Computer Education Center</h2>

      <p>
        Dhaarna Computer Education Center was established in 2017.
        The institute provides professional computer training with
        practical learning environment.
      </p>

      <p><b>Owner:</b> Surya Prakash Sharma</p>

      <h3>Our Institute</h3>

      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
        gap:"20px"
      }}>

        <Image src="/images/lab1.jpg" width={400} height={250} alt="Lab"/>
        <Image src="/images/lab2.jpg" width={400} height={250} alt="Lab"/>
        <Image src="/images/building.jpg" width={400} height={250} alt="Building"/>
        <Image src="/images/office.jpg" width={400} height={250} alt="Office"/>

      </div>

    </div>

  )

}