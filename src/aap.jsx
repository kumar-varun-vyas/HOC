import React from 'react';
import CM from './vote';
class AAP extends React.Component{

 

    render(){

        return(
            <React.Fragment>
            <h1>AAP {this.props.voteFor} Candidate {this.props.candidate} </h1>
            <h2 onMouseOver =  {this.props.hocVoteHandler}>total vote :{this.props.hocVoteCount} </h2>
            </React.Fragment>
         );
    }
}
export default CM(AAP,5);