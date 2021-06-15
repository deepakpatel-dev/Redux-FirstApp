class Counter extends Component {
    constructor (props){
    super (props)
    this.state={
        Count :0
    }
    const increNum=()=>{

    }
    const decreNum=()=>{

    }
    const Reset=()=>{

    }
    render ()
    retrun (
        <div>
        <h1>Count:{this.state.Count}</h1>
        <button onClick={increNum}>+1</button>
        <button onClick={decreNum}>-1</button>
        <button onClick={Reset}>Reset</button>
        </div>
    )

    
  }
}