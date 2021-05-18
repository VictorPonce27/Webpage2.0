import '../CSS/UserProfile.css';
import Navigation from "../Header/Navigation";

var arr = ["Name", "Last Name", "City", "Postal Code"];

function InputLabel(Props) {
    return (<div classname="input">
        <input type="text" required="required" placeholder={Props.value}></input>
        <label>{Props.value}</label>
        </div>)
}

function UserProfileBox() {
    return (
        <div>
                <div className="UserBoxTitle">
                    <h2>Edit Profile</h2>
                    <p>Complete your profile</p>
                </div>
                <div className="UserForm">
                    <div className="OutDiv">
                    {arr.map((val) => {
                        return(<InputLabel value={val}/>)
                    })}
                    </div>
                    <button type="button" class="btn btn-light">Update</button>
                </div>
        </div>
    )
}

function UserProfile() {
    return (
        <div>
            <Navigation state={true}  tab={1} />
            <UserProfileBox />
        </div>
    )
}

export default UserProfile;