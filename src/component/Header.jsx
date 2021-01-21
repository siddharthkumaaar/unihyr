import React, { Component } from 'react'
import Main from './Main'
import axios from 'axios'

class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"",
            dob:"",
            mob:"",
            vdo:"",
            work1:"",
            work2:"",
            address:"",
            exp:""
        }
    }

    componentDidMount(){

        axios({
            method:'get',
            url:'http://pandora.unihyr.com/pandora-service/v1/candidate/0f8f0fe1-84ae-43ee-b8d2-1f68af34b614',
            headers:{
                ContentType:'application/json',
                Authorization:'0NLxYYQIUJ6TNXrG7hQN',
                language:'hi',
            }            
        })
        .then((res)=>{
            console.log(res.data)
            this.setState({
                name:res.data.fullName,
                dob:res.data.dateOfBirth,
                mob:res.data.mobileNumber,
                vdo:res.data.introVideoUrl,
                work1:res.data.photoS3Url,
                work2:res.data.aadharS3Url,
                address:res.data.candidateLocations[0].location.locationName,
                exp:res.data.candidateExperience[0].experienceInMonth
            })
        })
        .catch((e)=>console.log(e))
    }

    render(){
        const {name,dob,mob,vdo,address,exp} =this.state
        return(
            <>
            <header id="header">
				<img class="image avatar" style={{width:100,height:100,borderRadius:"50%"}} src="https://static.toiimg.com/photo/76729750.cms" alt="" />
				<h1><strong>I am {name}</strong>, <br />My Dath of Birth is {dob}<br />
				I am having {exp} month experience in IT industries</h1>
			</header>
            <Main vdo={vdo} address={address} mob={mob}/>
            </>
        )
    }
}

export default Header