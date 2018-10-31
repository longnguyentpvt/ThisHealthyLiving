"use strict"

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
    }

    // init components
    function GridPackage(props) {
        const pkg = props.pkg;
        return (<div className="healthy-post">
            <div className="healthy-post-container">
                <div className="post-img">
                    <a href="" title="">
                        <div className="img"></div>
                    </a>
                </div>

                <div className="post-small-body">
                    <div className="body-container">
                        <div className="post-header">
                            <div className="post-category-date clearfix">
                                <span className="category">
                                    <a href="" title="">
                                        <h5>[{pkg.category}]</h5>
                                    </a>
                                </span>
                                <span className="post-date fontGreyColor">
                                    {pkg.postDate}
                                </span>
                            </div>
                            <div className="post-title">
                                <h3>
                                    <a href="" title="">{pkg.name}</a>
                                </h3>
                            </div>
                        </div>

                        <div className="small-body-content">
                            <p>{pkg.shortDescription}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
    }

    class Grid extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                "pkgs": []
            }
            this.loaded = false;
            this.startLoadGrid = this.startLoadGrid.bind(this);
        }

        startLoadGrid() {
            loadHomeGrid((returnPkgs) => {
                this.loaded = true;
                this.setState({"pkgs": returnPkgs});
            });
        }

        componentDidMount() {
            // after render then load grid
            this.startLoadGrid();
        }

        shouldComponentUpdate(nextProps, nextState) {
            // define when component is re-rendered
            const pkgs = this.state.pkgs;
            const nxtPkgs = nextState.pkgs;
            const len = pkgs.length;
            if (len !== nxtPkgs.length) {
                // different len
                return true;
            } else {
                // check different id or order of array
                for (let i = 0; i < len; i++) {
                    if (pkgs[i].id !== nxtPkgs[i].id) {
                        return true;
                    }
                }
            }
            return false;
        }

        render() {
            let returnComponent = <div>Loading...</div>;
            // if all packages is loaded
            if (this.loaded) {
                // then generate it's component
                const pkgs = this.state.pkgs;
                let postComponents = pkgs.map((aPkg) => {
                    return (<li key={aPkg.id}>
                        <GridPackage pkg={aPkg}/>
                    </li>)
                });

                returnComponent = (<div className="posts-grid-container">
                    <div className="healthy-grid">
                        <ul className="clearfix">
                            {postComponents}
                        </ul>
                    </div>
                </div>);
            }

            return returnComponent;
        }
    }

    function PopuplarPost(props) {
        const post = props.post;
        return (<div className="recent-post clearfix">

            <div className="recent-post-thumb">
                <a href="" title="">
                    <div className="thumb"></div>
                </a>
            </div>

            <div className="recent-post-header">
                <div className="recent-post-cate">
                    <h5>
                        <a href="" alt="" className="">[ {post.category} ]</a>
                    </h5>
                </div>
                <h4>
                    <a href="" title="">{post.name}</a>
                </h4>
            </div>

        </div>);
    }

    class PopularGrid extends React.Component {
        constructor(props) {
            super(props);
        }

        render(){
            const posts = this.props.posts;
            const postComponents = posts.map((aPost) => {
                return <PopuplarPost key={aPost.id} post={aPost}/>
            });
            return postComponents;
        }
    }

    // services
    function loadHomeGrid(updateGrid) {
        // ajax to load it from database
        let pkgs = [];

        // sample code
        for (let i = 0; i < 12; i++) {
            let aPkg = new HealthyPackage(i, 'Food', 1507309200000, 'CHIA SEED MANGO COCONUT PUDDING', 'Chia seeds are high in omega-3 fatty acids and contain alpha-linoleic acid (ALA) and linoleic acid (LA). They also ...');
            pkgs.push(aPkg);
        }

        updateGrid(pkgs);
    }

    function formatMilli(milli) {
        // convert milli to format dd/mm/yyyy
        const dateObj = new Date(milli);

        let dd = dateObj.getDate();
        let mm = dateObj.getMonth() + 1;
        let yyyy = dateObj.getFullYear();

        return (dd < 10 ? "0" + dd : "" + dd) + "/" + (mm < 10 ? "0" + mm : "" + mm) + "/" + yyyy;
    }

    // do not use ajax for seo content then get data from response
    const popularPost = [];
    popularPost.push(new PopularPost(0, 'Fitness', 'Yoga For Energy'));
    popularPost.push(new PopularPost(1, 'Mind', 'Five quick ways to beat strees'));
    popularPost.push(new PopularPost(2, 'Health', 'How to improve sleep'));

    // render main grid
    ReactDOM.render(<Grid/>, document.querySelector("#healthy-posts-grid"));
    // render popuplar grid
    ReactDOM.render(<PopularGrid posts={popularPost}/>, document.querySelector("#recents-box .sidebar-posts"));
});