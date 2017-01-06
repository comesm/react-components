class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }
  onItemHover() {
    this.setState({
      hover: !this.state.hover
    });  
  }
  render() {
    var style = {
      fontWeight: this.state.hover ? 'bold' : 'normal'
    }
    return (
      <div style={style} onMouseOver={this.onItemHover.bind(this)}>{this.props.item}</div>
    );   
  }
 }; 

var GroceryList = (props) => {

  
  return (
    <div>
      <ul>
        {props.groceryItems.map(item => 
          <GroceryListItem item={item}/>
        )} 
      </ul>
    </div>
    );
};

// var Milk = () => (
//   <div>Milk</div>
// );


// var Sugar = () => (
//   <div>Sugar</div>
// );

ReactDOM.render(<GroceryList groceryItems={['tea', 'popcorn','honey']}/>, document.getElementById('app'));
// TODO

