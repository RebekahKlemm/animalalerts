import React, {Component} from 'react';
import { connect } from 'react-redux';
import NewAdmin from '../NewAdmin';
import {addUserRoleToDb} from '../../actions/users'

class NewAdminContainer extends Component{
    constructor(props){
        super(props)
        this.state = {
            admin: {},
            inputValue: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.addAdmin = this.addAdmin.bind(this);
    }

    handleInputChange(e){
        this.setState({
            inputValue: e.target.value
        });
    }

    render(){
        const inputValue = this.state.inputValue;
        const filteredUsers = this.props.allUsers.filter(user => user.firstName.match(inputValue))


        return (
            <div>
                <h3>Add Admin</h3>
                <NewAdmin allUsers={this.props.allUsers} handleInputChange={this.handleInputChange} addAdmin={this.addAdmin} {...this.state}/>
                {filteredUsers.map(function(user){
                    return(
                        <div className='userList' key={user.phone}>
                            <h4>{user.fullName}</h4>
                        </div>
                    )
                })
                }
            </div>
        )
    }

    addAdmin(e){
        e.preventDefault();
        const user = e.target.user.value
        const newRole = 'admin'

        this.props.addUserRoleToDb(user, newRole);
        this.setState({
            admin:{}
        })
    }

}


const mapStateToProps = (state, ownProps) => {
    console.log('*************state', state)
    return {
        // currentUser: state.users.currentUser,
        // allInterests: state.interests.allInterests
        allUsers: state.users.allUsers
    };
}



const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addUserRoleToDb: function(user, newRole){
            dispatch(addUserRoleToDb(user, newRole));
        },
        // updateCurrentAlerts: function(alert){
        //     dispatch(updateCurrentAlerts(alert));
        // }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewAdminContainer);



