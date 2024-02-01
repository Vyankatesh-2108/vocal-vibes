import React from 'react'
import ReactPlayer from 'react-player'
import "./ServicesStyle.css"

function Services() {
  return (
       <>
    <header>
         <h1>Community Services</h1>
    </header>
    <div className="app-container">
      {/* Left side: YouTube video */}
      <div className="video-container">
        <ReactPlayer
          url="https://youtu.be/07-KpEv7nqM?si=li36w3f12VMa7pbt"
          controls={true}
          width="100%"
          height="100%"
        />
      </div>

      {/* Right side: Video description */}
      <div className="description-container">
        <h2>How to help blind people</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, eaque nulla, laboriosam natus tempore quod animi reprehenderit recusandae molestias consectetur maxime inventore voluptatibus molestiae deserunt? Omnis, consequatur itaque recusandae ullam nostrum fuga! Accusamus ea corporis aliquam, corrupti ab repudiandae dolor, distinctio earum veritatis esse eligendi optio, vel debitis hic dignissimos laboriosam culpa praesentium maxime numquam sed ipsam laudantium. Impedit, ipsa?
        </p>
      </div>
    </div>

    <div className='app-container2'>
      {/* Left side: YouTube video */}
      <div className="video-container">
        <ReactPlayer
          url="https://youtu.be/zypQZLnLYJE?si=LJwQLkdsCdkUt9DK"
          controls={true}
          width="100%"
          height="100%"
        />
      </div>

      {/* Right side: Video description */}
      <div className="description-container">
        <h2>Guiding the blinds</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, eaque nulla, laboriosam natus tempore quod animi reprehenderit recusandae molestias consectetur maxime inventore voluptatibus molestiae deserunt? Omnis, consequatur itaque recusandae ullam nostrum fuga! Accusamus ea corporis aliquam, corrupti ab repudiandae dolor, distinctio earum veritatis esse eligendi optio, vel debitis hic dignissimos laboriosam culpa praesentium maxime numquam sed ipsam laudantium. Impedit, ipsa?
        </p>
      </div>
    </div>

   </>  
   )
}

export default Services
