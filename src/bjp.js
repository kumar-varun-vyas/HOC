import React from 'react';
import CM from './vote';

class BJP extends React.Component{
    
   
    
    render(){
        return(
            <React.Fragment>
                <h1>BJP {this.props.voteFor} Candidate {this.props.candidate}</h1>
                <h2 onMouseOver = {this.props.hocVoteHandler}>Total Vote:{this.props.hocVoteCount}</h2>
            </React.Fragment>
        );
    }
}
export default CM(BJP,10);