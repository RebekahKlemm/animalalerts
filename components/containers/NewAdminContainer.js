import React, {Component} from 'react';
import { connect } from 'react-redux';
import NewAdmin from '../NewAdmin';
import {addUserRoleToDb} from '../../actions/users'

class NewAdminContainer extends Component{
    constructor(props){
        super(props)
        this.state={
            user: {},
            showConfirmation: false
        }

        this.addAdmin = this.addAdmin.bind(this);
    }

    render(){
        return (
            <div>
                <h3>Add Admin</h3>
                <NewAdmin allUsers={this.props.allUsers} handleInputChange={this.handleInputChange} addAdmin={this.addAdmin} {...this.state}/>
                { this.state.showConfirmation ? <p>{this.state.user.firstName} is now an Admin</p> : null }

            </div>
        )
    }

    addAdmin(user){
        const newRole = 'admin'
        this.props.addUserRoleToDb([user, newRole]);
        this.setState({user:user, showConfirmation:true})

    }

}


const mapStateToProps = (state, ownProps) => {
    return {
        allUsers: state.users.allUsers
    };
}



const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addUserRoleToDb: function(user, newRole){
            dispatch(addUserRoleToDb(user, newRole));
        },

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewAdminContainer);




// {filteredUsers.map(function(user){
//     return(
//         <div className='userList' key={user.phone}>
//             <h4>{user.fullName}</h4>
// {/*</div>*/}
// {/*)*/}
// {/*})*/}
// {/*}*/}

