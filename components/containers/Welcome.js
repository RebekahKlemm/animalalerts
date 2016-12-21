import {Link} from 'react-router';
import React, {Component} from 'react';
import { connect } from 'react-redux';



class Welcome extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log('-------------->this.params', this.props.params.id)
        return (
            <div className="successfulSignup">
                <p>Congratulations on a Successful Signup</p>
                <Link to={'/user/'+ this.props.params.id}>Click here to go to your User Homepage</Link>
            </div>
        )
    }


}

const mapStateToProps = (state, ownProps) => {
    console.log('-----------> Welcome state', state)
    return {
        currentView: state.currentView,
        allInterests: state.interests.allInterests
    };
}



const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        // addUToDb: function(user){
        //     dispatch(addUToDb(user));
        // },
        // changeView: function(view){
        //     dispatch(changeView(view));
        // },
        // addLatLongToDb: function(user, lat, long){
        //     dispatch(addLatLongToDb(user, lat, long))
        // }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);







