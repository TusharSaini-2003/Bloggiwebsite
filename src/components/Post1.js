import React from 'react'
import download from "../assets/download.jpg"
import image from "../assets/image.jpg"

function Post1() {
  return (
    <div className='Blog-post'>

      <div className="post">
        <img
          src={download}
          alt="Proffesor"
          width="300"
          height="150"

          className="post-image"
        />
        <p className="post-title">Professor: If only you knew that I will win. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias blanditiis ducimus at incidunt? Cumque dolor unde impedit repellendus magni sequi, laboriosam dolorum ad quod illo..</p>

        <div className='foter'>
          <img src={image} alt="professor"
            height={40}
            width={40}
            className='professor'

          />
          <div className="post-footer">
            <p className="head-name">Professor</p>
            <div className="flex post-addition-info">
              <p className="post-created-date">Jan10, 2022</p>
              <p className="post-like">
                <i className="fa fa-heart" ariaHidden="true"></i>
                03
              </p>
              <p className="post-comment">
                <i className="fa fa-comment"></i>
                12
              </p>

            </div>
          </div>
        </div>




      </div>
    </div>




  )
}

export default Post1;
