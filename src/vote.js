import React from 'react';


const CM = (Party,vote) => {

    class NewCM extends React.Component{

        state = {voteCount: 0};
    
        voteHandler = () =>{
            this.setState({
            voteCount : this.state.voteCount +vote 
        })}

        render(){
            return(
                <React.Fragment>
                    <Party voteFor="CM"
                    hocVoteCount= {this.state.voteCount}
                    hocVoteHandler = {this.voteHandler}
                    {...this.props}
                    />
                </React.Fragment>
            );
        }

    }
    return  NewCM;
}
export default CM;