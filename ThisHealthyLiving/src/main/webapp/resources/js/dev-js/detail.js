"use strict"

document.addEventListener("DOMContentLoaded", function () {
    // init class
    function PostComment(id, name, msg, time) {
        this.id = id;
        this.name = name;
        this.msg = msg;
        this.time = time;
    }

    function InputForm(name, email, comment) {
        this.name = name;
        this.email = email;
        this.comment = comment;
    }

    // init component
    function CommentComponent(props) {
        const aComment = props.comment;
        return (<div className="single-comment">
            <div className="single-comment-container">
                <div className="main-comment">
                    <div className="comment-user">
                        <div className="user-avatar">
                            <i className="fa fa-user" aria-hidden="true"></i>
                        </div>
                        <div className="comment-name">{aComment.name}</div>
                        <div className="comment-date">{aComment.time}</div>
                    </div>
                    <div className="comment-content">
                        <p>{aComment.msg}</p>
                    </div>
                </div>
            </div>
        </div>);
    }

    function CommentForm(props) {
        return (<div id="comment-form-container">
            <div className="form-row">
                <div className="row">
                    <div className="col-xs-12">
                        <textarea className="healthy-input comment-input" placeholder="Write your comment here"
                                  maxLength="200" value={props.commentInput}
                                  onChange={(event) => props.commentOnChange(event)}></textarea>
                    </div>
                </div>
            </div>
            <div className="form-row">
                <div className="row">
                    <div className="col-xs-6">
                        <input type="text" className="healthy-input" placeholder="Name"
                               maxLength="20" value={props.nameInput} onChange={(event) => props.nameOnChange(event)}/>
                    </div>
                    <div className="col-xs-6">
                        <input type="text" className="healthy-input" placeholder="Email"
                               maxLength="200" value={props.emailInput}
                               onChange={(event) => props.emailOnChange(event)}/>
                    </div>
                </div>
            </div>
            <div className="form-row clearfix">
                <div className="comment-btn">
                    <input type="button" value="Post Comment" className="green-btn" onClick={props.postClick}/>
                </div>
            </div>
        </div>);
    }

    class CommentPanel extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                "comments": [],
                "commentForm": new InputForm(null, null, null)
            }

            this.nameChanged = this.nameChanged.bind(this);
            this.emailChanged = this.emailChanged.bind(this);
            this.commentChanged = this.commentChanged.bind(this);
            this.postComment = this.postComment.bind(this);
        }

        nameChanged(event) {
            let newName = event.target.value;
            this.setState((state, props) => {
                const commentForm = state.commentForm;

                return {
                    "commentForm": new InputForm(newName, commentForm.email, commentForm.comment)
                };
            });
        }

        emailChanged(event) {
            let newEmail = event.target.value;
            this.setState((state, props) => {
                const commentForm = state.commentForm;

                return {
                    "commentForm": new InputForm(commentForm.name, newEmail, commentForm.comment)
                };
            });
        }

        commentChanged(event) {
            let newComment = event.target.value;
            this.setState((state, props) => {
                const commentForm = state.commentForm;

                return {
                    "commentForm": new InputForm(commentForm.name, commentForm.email, newComment)
                };
            });
        }

        postComment() {
            this.setState((state, props) => {
                const commentForm = state.commentForm;
                const comments = state.comments;
                const currentTime = new Date().getMilliseconds();
                let newComment = new PostComment(currentTime, commentForm.name, commentForm.comment, currentTime);

                return {"comments": [...comments, newComment], "commentForm" : new InputForm(null, null, null)};
            });
        }

        shouldComponentUpdate(nextProps, nextState) {
            const commentForm = this.state.commentForm;
            const nxtForm = nextState.commentForm;
            const formChanged = (commentForm.name !== nxtForm.name || commentForm.email !== nxtForm.email || commentForm.comment !== nxtForm.comment);

            const comments = this.state.comments;
            const nxtComments = nextState.comments;
            const len = comments.length;
            let commentChanged = false;

            if (len !== nxtComments.length) {
                commentChanged = true;
            } else {
                for (let i = 0; i < len; i++) {
                    if (comments[i].id !== nxtComments[i].id) {
                        commentChanged = true;
                        break;
                    }
                }
            }

            return formChanged || commentChanged;
        };

        render() {
            const comments = this.state.comments;
            console.log("render");
            let commentComponent = null;
            const len = comments.length;
            if (len > 0) {
                commentComponent = comments.map((aComment) => {
                    return <CommentComponent key={aComment.id} comment={aComment}/>
                });
            } else {
                commentComponent = (<div id="no-comment">
                    <div className="tb">
                        <div className="tb-cell">
                            <div className="content">
                                <i className="fa fa-comments-o" aria-hidden="true"></i>
                                <div>No Comments Yet!</div>
                            </div>
                        </div>
                    </div>
                </div>);
            }

            const commentForm = this.state.commentForm;

            return (<div id="post-comment-container">
                <div className="post-label">Comments ({len})</div>

                <div id="list-comment">
                    {commentComponent}
                </div>

                <div id="comment-form">
                    <CommentForm commentInput={commentForm.comment} nameInput={commentForm.name}
                                 emailInput={commentForm.email} nameOnChange={this.nameChanged}
                                 emailOnChange={this.emailChanged}
                                 commentOnChange={this.commentChanged} postClick={this.postComment}/>
                </div>
            </div>);
        }
    }

    // render main grid
    ReactDOM.render(<CommentPanel/>, document.querySelector("#post-comment"));

});