import React from 'react';
import { Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

class App extends React.Component {
  state = {
    text: "",
    todo:[]
  }

  addTodo=()=>{
    var newTodo=this.state.text;
    var arr=this.state.todo;
    arr.push(newTodo);
    this.setState({text:"",todo:arr});
  }

  deleteTodo=(t)=>{
    var arr=this.state.todo;
    var position=arr.indexOf(t);
    arr.splice(position,1);
    this.setState({todo:arr});
  }
  
  renderTodos=()=>{
    return this.state.todo.map(t=>{
      return (
        <TouchableOpacity key={t} >
        <Text style={styles.todo}
        onPress={()=>{this.deleteTodo(t)}}
        > {t} </Text>
        </TouchableOpacity>
      )
    })
  }

  render() {
    return (
      <View style={styles.wholeStyle}>
      <View style={styles.viewStyle}>
        <Text style={styles.header}>Notes App</Text>
        <Text> Save your important todos</Text>
        <TextInput
          style={styles.inputStyle}
          onChangeText={text => this.setState({text:text })}
          value={this.state.text}
        />
        <Button title="Add Todo" color="blue" 
        onPress={this.addTodo}
        />
        <View style={{marginTop:100}}></View>
        {this.renderTodos()}
      </View>
      </View>
    );
  }
}

const styles = {
  wholeStyle:{
    backgroundColor:"#E0E0E0",
    flex:1,
  },
  viewStyle: {
    marginTop:30,
    justifyContent: 'center',
    margin:50
  },
  inputStyle: {
    height: 40,
    borderColor: 'blue',
    borderWidth: 1,
  },
  header:{
    fontSize:30,
    color:"blue",
    fontWeight:"bold",
    align:"center"
  },
  todo:{
    fontSize:18,
    color:'green'
  }
};

export default App;
