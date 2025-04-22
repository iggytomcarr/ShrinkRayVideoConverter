import "./App.css";
import React from "react";

class App extends React.Component {
    // constructor(props) {
    //     super(props);
    //
    //     this.branches = ["master", "debug"];
    //     this.state = {
    //         currentBranch: undefined,
    //         commits: [],
    //     };
    //
    //     this.selectBranch = this.selectBranch.bind(this);
    // }

    // componentWillMount() {
    //     this.selectBranch(this.branches[0]);
    // }

    // async selectBranch(branch) {
    //     this.setState({ currentBranch: branch });
    //     this.setState({ commits: await this.fetchCommits(branch) });
    // }
    //
    // async fetchCommits(branch) {
    //     const url = `${API_URL}${branch}`;
    //     return await (await fetch(url)).json();
    // }

    render() {
        return (
            <div id="content">
                <img src={`/logo1.webp`} 
                     alt="shrink ray logo"
                     style={{ width: '100px', height: '100px' }}
                />
                <h1>Shrink Ray Video Converter</h1>
                
                {/*<BranchSelector*/}
                {/*    options={this.branches}*/}
                {/*    value={this.state.currentBranch}*/}
                {/*    onChange={async (branch) => await this.selectBranch(branch)}*/}
                {/*/>*/}
                {/*<p>tryphotino/photino.NET @{this.state.currentBranch}</p>*/}
                {/*<CommitCards commits={this.state.commits} />*/}
            </div>
        );
    }
}

export default App;
