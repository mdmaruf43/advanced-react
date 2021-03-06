import React, { Component } from 'react'

class WillRemove extends Component {
    componentDidMount() {
        console.log('Child: ComponentDidMount Called');
    }

    componentWillUnmount() {
        console.log('Child: Unmount Called');
    }

    render () {
        console.log('Child: Render Called')
        return (
            <div>
                <p>I will remove soon</p>
            </div>
        )
    }
}

class Lifecycle extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        }
        console.log('Constructor Called');
        this.divRef = React.createRef();
        this.btnRef = React.createRef();
    }

    componentDidMount() {
        console.log('ComponentDidMount Called');
        console.log('Mounted', this.divRef.current);
    }

    componentDidUpdate(preProps, prevState, snapshot) {
        console.log('ComponentDidUpdated called');
        console.log(snapshot);
    }

    static getDerivedStateFromProps(props, state) {
        console.log('GetDerivedStateFromProps Called');
        // if(props.count !== state.count) {
        //     return {
        //         count: props.count,
        //     }
        // }
        // return null;
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('ShouldComponentUpdate Called');
        // return nextState.count <=5;
        return true ;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        const btn = this.btnRef.current;
        return btn.offsetTop || null;
    }
    
    render() {
        console.log('Render Called');
        return (
            <div ref={this.divRef}>
                <h3>React Lifecycle Methods</h3>
                <p>Count: {this.state.count}</p>
                {this.state.count % 2 === 0 && <WillRemove />}
                <button
                    onClick={() => 
                        this.setState({count: this.state.count + 1})
                    }
                    ref={this.btnRef}
                >
                    Increment
                </button>
            </div>
        )
    }
}

export default Lifecycle
