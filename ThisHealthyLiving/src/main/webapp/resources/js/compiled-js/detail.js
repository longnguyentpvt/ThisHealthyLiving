"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

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
  } // init component


  function CommentComponent(props) {
    var aComment = props.comment;
    return React.createElement("div", {
      className: "single-comment"
    }, React.createElement("div", {
      className: "single-comment-container"
    }, React.createElement("div", {
      className: "main-comment"
    }, React.createElement("div", {
      className: "comment-user"
    }, React.createElement("div", {
      className: "user-avatar"
    }, React.createElement("i", {
      className: "fa fa-user",
      "aria-hidden": "true"
    })), React.createElement("div", {
      className: "comment-name"
    }, aComment.name), React.createElement("div", {
      className: "comment-date"
    }, aComment.time)), React.createElement("div", {
      className: "comment-content"
    }, React.createElement("p", null, aComment.msg)))));
  }

  function CommentForm(props) {
    return React.createElement("div", {
      id: "comment-form-container"
    }, React.createElement("div", {
      className: "form-row"
    }, React.createElement("div", {
      className: "row"
    }, React.createElement("div", {
      className: "col-xs-12"
    }, React.createElement("textarea", {
      className: "healthy-input comment-input",
      placeholder: "Write your comment here",
      maxLength: "200",
      value: props.commentInput,
      onChange: function onChange(event) {
        return props.commentOnChange(event);
      }
    })))), React.createElement("div", {
      className: "form-row"
    }, React.createElement("div", {
      className: "row"
    }, React.createElement("div", {
      className: "col-xs-6"
    }, React.createElement("input", {
      type: "text",
      className: "healthy-input",
      placeholder: "Name",
      maxLength: "20",
      value: props.nameInput,
      onChange: function onChange(event) {
        return props.nameOnChange(event);
      }
    })), React.createElement("div", {
      className: "col-xs-6"
    }, React.createElement("input", {
      type: "text",
      className: "healthy-input",
      placeholder: "Email",
      maxLength: "200",
      value: props.emailInput,
      onChange: function onChange(event) {
        return props.emailOnChange(event);
      }
    })))), React.createElement("div", {
      className: "form-row clearfix"
    }, React.createElement("div", {
      className: "comment-btn"
    }, React.createElement("input", {
      type: "button",
      value: "Post Comment",
      className: "green-btn",
      onClick: props.postClick
    }))));
  }

  var CommentPanel =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(CommentPanel, _React$Component);

    function CommentPanel(props) {
      var _this;

      _classCallCheck(this, CommentPanel);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(CommentPanel).call(this, props));
      _this.state = {
        "comments": [],
        "commentForm": new InputForm(null, null, null)
      };
      _this.nameChanged = _this.nameChanged.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      _this.emailChanged = _this.emailChanged.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      _this.commentChanged = _this.commentChanged.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      _this.postComment = _this.postComment.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      return _this;
    }

    _createClass(CommentPanel, [{
      key: "nameChanged",
      value: function nameChanged(event) {
        var newName = event.target.value;
        this.setState(function (state, props) {
          var commentForm = state.commentForm;
          return {
            "commentForm": new InputForm(newName, commentForm.email, commentForm.comment)
          };
        });
      }
    }, {
      key: "emailChanged",
      value: function emailChanged(event) {
        var newEmail = event.target.value;
        this.setState(function (state, props) {
          var commentForm = state.commentForm;
          return {
            "commentForm": new InputForm(commentForm.name, newEmail, commentForm.comment)
          };
        });
      }
    }, {
      key: "commentChanged",
      value: function commentChanged(event) {
        var newComment = event.target.value;
        this.setState(function (state, props) {
          var commentForm = state.commentForm;
          return {
            "commentForm": new InputForm(commentForm.name, commentForm.email, newComment)
          };
        });
      }
    }, {
      key: "postComment",
      value: function postComment() {
        this.setState(function (state, props) {
          var commentForm = state.commentForm;
          var comments = state.comments;
          var currentTime = new Date().getMilliseconds();
          var newComment = new PostComment(currentTime, commentForm.name, commentForm.comment, currentTime);
          return {
            "comments": _toConsumableArray(comments).concat([newComment])
          };
        });
      }
    }, {
      key: "shouldComponentUpdate",
      value: function shouldComponentUpdate(nextProps, nextState) {
        var commentForm = this.state.commentForm;
        var nxtForm = nextState.commentForm;
        var formChanged = commentForm.name !== nxtForm.name || commentForm.email !== nxtForm.email || commentForm.comment !== nxtForm.comment;
        var comments = this.state.comments;
        var nxtComments = nextState.comments;
        var len = comments.length;
        var commentChanged = false;

        if (len !== nxtComments.length) {
          commentChanged = true;
        } else {
          for (var i = 0; i < len; i++) {
            if (comments[i].id !== nxtComments[i].id) {
              commentChanged = true;
              break;
            }
          }
        }

        return formChanged || commentChanged;
      }
    }, {
      key: "render",
      value: function render() {
        var comments = this.state.comments;
        console.log("render");
        var commentComponent = null;
        var len = comments.length;

        if (len > 0) {
          commentComponent = comments.map(function (aComment) {
            return React.createElement(CommentComponent, {
              key: aComment.id,
              comment: aComment
            });
          });
        } else {
          commentComponent = React.createElement("div", {
            id: "no-comment"
          }, React.createElement("div", {
            className: "tb"
          }, React.createElement("div", {
            className: "tb-cell"
          }, React.createElement("div", {
            className: "content"
          }, React.createElement("i", {
            className: "fa fa-comments-o",
            "aria-hidden": "true"
          }), React.createElement("div", null, "No Comments Yet!")))));
        }

        var commentForm = this.state.commentForm;
        return React.createElement("div", {
          id: "post-comment-container"
        }, React.createElement("div", {
          className: "post-label"
        }, "Comments (", len, ")"), React.createElement("div", {
          id: "list-comment"
        }, commentComponent), React.createElement("div", {
          id: "comment-form"
        }, React.createElement(CommentForm, {
          commentInput: commentForm.comment,
          nameInput: commentForm.name,
          emailInput: commentForm.email,
          nameOnChange: this.nameChanged,
          emailOnChange: this.emailChanged,
          commentOnChange: this.commentChanged,
          postClick: this.postComment
        })));
      }
    }]);

    return CommentPanel;
  }(React.Component); // render main grid


  ReactDOM.render(React.createElement(CommentPanel, null), document.querySelector("#post-comment"));
});
