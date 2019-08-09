import React from "react"
import Contact from '../components/contact';
import "../css/index.css";
import * as Info from '../info';
import MainPhoto from '../images/mainphoto.jpg';

const IndexPage = () => {
  return (

    <div class="index-content">

      <div class="short-biography">
        <img id = "user-image" src= {MainPhoto} width = '125' height = '125' />
        <h1>I'm {Info.FullName}</h1>
        <h2>A {Info.StudentMajor} major at <a href={Info.SchoolWebsite}>{Info.SchoolName}</a></h2>

      </div>

      <Contact />

    </div>

  )
}

export default IndexPage

//Created by Zach Hall, https://github.com/ZachJHall
