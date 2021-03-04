import { connect } from 'react-redux'
import React from 'react'
import ReactDom from 'react-dom'
import './form.css'
import { Link } from 'react-router-dom'
// import { useDispatch } from 'react-redux';
import { addTodo } from "./actions/action";

import { FacebookFilled, InstagramFilled, LinkedinFilled, SkypeFilled } from "@ant-design/icons";
import store from './actions/store';
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
class Loginform extends React.Component {
    constructor(props) {
        super(props);
        this.state = { uservalue: "", userpassword: "" ,username:"talha",password:"talha123",file:null};
    }

    submit = () => {
        const data = {
            uservalue: this.state.uservalue,
            userpassword: this.state.userpassword,
            username: this.state.username,
            password: this.state.spassword,
            file:this.state.file

        }
        if(this.state.uservalue == this.state.username && this.state.userpassword == this.state.password)
         {
    
           this.props.history.push('/detail',data)
           store.dispatch(addTodo(data));
        }
         else{
    
       window.location="/Login"
       alert("wrong login detailss!")
    
        }
        
    }
    updateuser = uservalue => {
        this.setState({ uservalue });
    };
    updatepassword = userpassword => {
        this.setState({ userpassword });
    };
    //submit = () =>

    //  {
    //  const data={
    //  file: this.state.file,
    /////   uservalue:this.state.uservalue,
    // userpassword:this.state.userpassword,
    //  }
    // if(this.state.uservalue == this.state.username && this.state.userpassword == this.state.password)
    // {

    //    this.props.history.push('/detail',data)
    // }
    //  else{

    ////   window.location="/Login"

    //  }   
    //  }
     submitimage=(event)=>
   {
   this.setState({file:URL.createObjectURL(event.target.files[0])})
    }
    //this.state={
    //   username:'talha',
    //   password:'talha123', 
    //   uservalue:'',
    //   userpassword:'',
    //   file: null};
    render() {

        return (
            <div className="container-fluid back pt-5" style={{ height: "750px", textAlign: "center" }}>
                <h1 className="pt-5 text-center" style={{ color: "	#8B008B" }}>User Login</h1>
                <div className="row">
                    <div className=" col-sm-4 col-md-7 pt-2 offset-sm-4 offset-md-3 col-lg-4 offset-lg-4">

                        <img src="https://rakutenadvertising.com/wp-content/uploads/sites/2/2020/11/v2-rad-logo-110320-1.svg" width="400px" height="120px" /><br />
                        <form style={{ color: "#4B0082" }}>
                            <label>User Name</label><br />
                            <input type="text" placeholder="Username" className="a form-control" onChange={e => this.updateuser(e.target.value)} value={this.props.uservalue} style={{ borderRadius: "30px" }} /><br />
                            <p>{this.state.uservalue}</p>
                            <label>Password</label><br />
                            <input type="password" placeholder="Password" className="a form-control " onChange={e => this.updatepassword(e.target.value)} value={this.props.userpassword} style={{ borderRadius: "30px" }} /><br />
                            <p>{this.state.userpassword}</p>
                            <input type="file" className="text-center" onChange={this.submitimage} style={{ justify: "center" }} /><br />
                            <br />
                            <button className="btn btn-primary " onClick={this.submit}

                                style={{ backgroundColor: "#4B0082", borderRadius: "30px", width: "120px", fontSize: "20px" }} >Login</button><br/>
                        </form>
                        <div className=" col-sm-4 col-md-7 pt-3 offset-sm-4 offset-md-3 col-lg-4 offset-lg-4">
                            <Link to="./Form" className="link "style={{color:"#4B0082",fontSize:"20px"}}>Signup here</Link>
                        </div>
                      <br/>  <Link to="/"><FacebookFilled className="facebook" style={{ color: "#4B0082" }}/></Link>
                        <Link to="/"><LinkedinFilled className="facebook" style={{ color: "#4B0082" }}/></Link>
                        <Link to="/"> <SkypeFilled className="facebook" style={{ color: "#4B0082" }}/></Link>
                        <Link to="/"> <InstagramFilled className="facebook" style={{ color: "#4B0082" }} /></Link>
                    </div>
                </div>

            </div>
        );

    }

}
const mapStateToProps = (state) => {
}


export default connect(mapStateToProps, { addTodo })(Loginform);
