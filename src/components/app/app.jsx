import React,{Component} from "react";
import CommentAdd from "../comment-add/comment-list";
import CommentList from "../comment-list/comment-list";
export default class App extends Component{
    state = {
        comments:[
            {username:'Tom',content:'评论1'},
            {username:'Jack',content:'评论2'}
        ]
    }
    render() {
        const {comments} = this.state
        return(
            <div>
                <header className="site-header jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <h1>请发表对React的评论</h1>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container">
                    <CommentAdd/>
                    <CommentList comments = {comments}/>
                </div>
            </div>
        )
    }
}
