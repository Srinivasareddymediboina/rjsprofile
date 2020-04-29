import React from 'react';
import './App.css';
import Data from './data/data.json';
import logo from './user-3.jpg';

class Profile extends React.Component{
    render(){
        var indexValue=this.props.location.data.id;
        var specificProfile=Data.profiles[indexValue];
        return(
            <section className="parent1">
<div className="card"> 
<div className="card-top mydiv">
<img src={logo} className="App-logo" alt="logo" />
<h1> {specificProfile.basicInformation.name} </h1>

<a href={"mailto:"+specificProfile.basicInformation.email}> 
{specificProfile.basicInformation.email}  </a>

<a href={"tel:"+specificProfile.basicInformation.mobile}> 
{specificProfile.basicInformation.mobile}</a>
</div>
                
</div>

<div className="card2">
    <div className="card-bottom mydiv">
          <h1> Summary </h1>
    </div>
    <div className="card-top">
        {specificProfile.summary.map((i,j)=>(
            <ul>
            
            <p> {i.exp} </p>
            </ul>
            ))}
    </div>

    <div className="card-bottom mydiv">
          <h1> Educational Qualifications</h1>
    </div>

    <div className="card-top">
        {specificProfile.education.map((i,j)=>(
            <ul>
            <p className="c"> {i.degree} </p>
            <p className="u"> {i.institution} </p>
            </ul>
            ))}
    </div>

    <div className="card-bottom mydiv">
          <h1> Skillset</h1>
    </div>
    <div className="card-top">
        {specificProfile.skillset.map((i,j)=>(
            <ul>
            <p className="c">{i.pro} </p><br />
            <p className="c"> {i.fram} </p><br />
            <p className="c">{i.os} </p><br />
            <p className="c"> {i.web} </p><br />
            </ul>
            ))}
    </div>

    <div className="card-bottom mydiv">
          <h1> Global Certifications</h1>
    </div>
    <div className="card-top">
        {specificProfile.certifications.map((i,j)=>(
            <ul>
            <p className="c">{i.python} </p>
            <p className="u"> {i.univercity} </p>
            </ul>
            ))}
    </div>
</div>

            </section>
        )
    }
}

export default Profile;
