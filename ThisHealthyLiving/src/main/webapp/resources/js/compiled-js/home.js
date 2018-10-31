"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
  function HealthyPackage(id, category, postDate, name, shortDescription) {
    this.id = id;
    this.category = category;
    this.postDate = formatMilli(postDate);
    this.name = name;
    this.shortDescription = shortDescription;
  }

  function PopularPost(id, category, name) {
    this.id = id;
    this.category = category;
    this.name = name;
  } // init components


  function GridPackage(props) {
    var pkg = props.pkg;
    return React.createElement("div", {
      className: "healthy-post"
    }, React.createElement("div", {
      className: "healthy-post-container"
    }, React.createElement("div", {
      className: "post-img"
    }, React.createElement("a", {
      href: "",
      title: ""
    }, React.createElement("div", {
      className: "img"
    }))), React.createElement("div", {
      className: "post-small-body"
    }, React.createElement("div", {
      className: "body-container"
    }, React.createElement("div", {
      className: "post-header"
    }, React.createElement("div", {
      className: "post-category-date clearfix"
    }, React.createElement("span", {
      className: "category"
    }, React.createElement("a", {
      href: "",
      title: ""
    }, React.createElement("h5", null, "[", pkg.category, "]"))), React.createElement("span", {
      className: "post-date fontGreyColor"
    }, pkg.postDate)), React.createElement("div", {
      className: "post-title"
    }, React.createElement("h3", null, React.createElement("a", {
      href: "",
      title: ""
    }, pkg.name)))), React.createElement("div", {
      className: "small-body-content"
    }, React.createElement("p", null, pkg.shortDescription))))));
  }

  var Grid =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(Grid, _React$Component);

    function Grid(props) {
      var _this;

      _classCallCheck(this, Grid);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Grid).call(this, props));
      _this.state = {
        "pkgs": []
      };
      _this.loaded = false;
      _this.startLoadGrid = _this.startLoadGrid.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      return _this;
    }

    _createClass(Grid, [{
      key: "startLoadGrid",
      value: function startLoadGrid() {
        var _this2 = this;

        loadHomeGrid(function (returnPkgs) {
          _this2.loaded = true;

          _this2.setState({
            "pkgs": returnPkgs
          });
        });
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        // after render then load grid
        this.startLoadGrid();
      }
    }, {
      key: "shouldComponentUpdate",
      value: function shouldComponentUpdate(nextProps, nextState) {
        // define when component is re-rendered
        var pkgs = this.state.pkgs;
        var nxtPkgs = nextState.pkgs;
        var len = pkgs.length;

        if (len !== nxtPkgs.length) {
          // different len
          return true;
        } else {
          // check different id or order of array
          for (var i = 0; i < len; i++) {
            if (pkgs[i].id !== nxtPkgs[i].id) {
              return true;
            }
          }
        }

        return false;
      }
    }, {
      key: "render",
      value: function render() {
        var returnComponent = React.createElement("div", null, "Loading..."); // if all packages is loaded

        if (this.loaded) {
          // then generate it's component
          var pkgs = this.state.pkgs;
          var postComponents = pkgs.map(function (aPkg) {
            return React.createElement("li", {
              key: aPkg.id
            }, React.createElement(GridPackage, {
              pkg: aPkg
            }));
          });
          returnComponent = React.createElement("div", {
            className: "posts-grid-container"
          }, React.createElement("div", {
            className: "healthy-grid"
          }, React.createElement("ul", {
            className: "clearfix"
          }, postComponents)));
        }

        return returnComponent;
      }
    }]);

    return Grid;
  }(React.Component);

  function PopuplarPost(props) {
    var post = props.post;
    return React.createElement("div", {
      className: "recent-post clearfix"
    }, React.createElement("div", {
      className: "recent-post-thumb"
    }, React.createElement("a", {
      href: "",
      title: ""
    }, React.createElement("div", {
      className: "thumb"
    }))), React.createElement("div", {
      className: "recent-post-header"
    }, React.createElement("div", {
      className: "recent-post-cate"
    }, React.createElement("h5", null, React.createElement("a", {
      href: "",
      alt: "",
      className: ""
    }, "[ ", post.category, " ]"))), React.createElement("h4", null, React.createElement("a", {
      href: "",
      title: ""
    }, post.name))));
  }

  var PopularGrid =
  /*#__PURE__*/
  function (_React$Component2) {
    _inherits(PopularGrid, _React$Component2);

    function PopularGrid(props) {
      _classCallCheck(this, PopularGrid);

      return _possibleConstructorReturn(this, _getPrototypeOf(PopularGrid).call(this, props));
    }

    _createClass(PopularGrid, [{
      key: "render",
      value: function render() {
        var posts = this.props.posts;
        var postComponents = posts.map(function (aPost) {
          return React.createElement(PopuplarPost, {
            key: aPost.id,
            post: aPost
          });
        });
        return postComponents;
      }
    }]);

    return PopularGrid;
  }(React.Component); // services


  function loadHomeGrid(updateGrid) {
    // ajax to load it from database
    var pkgs = []; // sample code

    for (var i = 0; i < 12; i++) {
      var aPkg = new HealthyPackage(i, 'Food', 1507309200000, 'CHIA SEED MANGO COCONUT PUDDING', 'Chia seeds are high in omega-3 fatty acids and contain alpha-linoleic acid (ALA) and linoleic acid (LA). They also ...');
      pkgs.push(aPkg);
    }

    updateGrid(pkgs);
  }

  function formatMilli(milli) {
    // convert milli to format dd/mm/yyyy
    var dateObj = new Date(milli);
    var dd = dateObj.getDate();
    var mm = dateObj.getMonth() + 1;
    var yyyy = dateObj.getFullYear();
    return (dd < 10 ? "0" + dd : "" + dd) + "/" + (mm < 10 ? "0" + mm : "" + mm) + "/" + yyyy;
  } // do not use ajax for seo content then get data from response


  var popularPost = [];
  popularPost.push(new PopularPost(0, 'Fitness', 'Yoga For Energy'));
  popularPost.push(new PopularPost(1, 'Mind', 'Five quick ways to beat strees'));
  popularPost.push(new PopularPost(2, 'Health', 'How to improve sleep')); // render main grid

  ReactDOM.render(React.createElement(Grid, null), document.querySelector("#healthy-posts-grid")); // render popuplar grid

  ReactDOM.render(React.createElement(PopularGrid, {
    posts: popularPost
  }), document.querySelector("#recents-box .sidebar-posts"));
});
