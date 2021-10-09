/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import { Platform, StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
 
 
 export default class App extends Component {
 
 constructor(props) {
   super(props)
   this.state = {
     TextInputValue: '',
     ErrorStatus : true,
     Output1:'',
     Output2:'',
    }
 }
 
 onEnterText = (TextInputValue) =>{
  if (isNaN(TextInputValue)){
   
    this.setState({TextInputValue : TextInputValue, ErrorStatus : false}) ;
     
   }else{
    this.setState({TextInputValue : TextInputValue, ErrorStatus : true}) ;
   
   }
 }
 primeNumberOrNot = (num) =>{
  for(var i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num > 1;
}
getNextPrimeNumber = (num) =>{

  var nextPrime= 0;
   num++;
 do {
 console.log(num);
  if(this.primeNumberOrNot(num)){
  nextPrime= num;
  break;
  }
 
  num++;
}while (nextPrime == 0)
console.log(nextPrime);
 return nextPrime;
}
 buttonClickListener = () =>{
       const { TextInputValue }  = this.state ;
       
       if (isNaN(TextInputValue)){
        this.setState({TextInputValue : TextInputValue, ErrorStatus : false}) ;
       }
       else{
        this.setState({TextInputValue : TextInputValue, ErrorStatus : true}) ;
        if(this.primeNumberOrNot(TextInputValue))
        this.setState({Output1 :"True"}) ;
        else
        this.setState({Output1 :"False"}) ;
        this.setState({Output2 :this.getNextPrimeNumber((TextInputValue))}) ;
        
       }
   }
 
   render() {
     return (
         <View style={styles.container}>
   <Text>
               <h1>Fun with Prime Number</h1>
              </Text>
           <TextInput
             style={{height: 45,width: "40%",borderColor: "gray",borderWidth: 2}}
             placeholder=" Enter A Number"
             onChangeText={TextInputValue => this.onEnterText(TextInputValue)}
           />
 
 
           { this.state.ErrorStatus == false ? (
              <Text style={styles.errorMessage}>
                * Please Enter Number to Proceed.
              </Text>
             ) : null  }
 
           <View style={{ width: "40%", margin: 15 }}>
             <Button
             onPress={this.buttonClickListener}
             title="Submit" />
          
          <Text>
              <br></br>
              <br></br>
              </Text>
             
          { this.state.Output1 !='' ?(
              <Text>
               <Text>Output1 : </Text>
                {this.state.Output1}
              </Text> ) : null  }

              
              { this.state.Output2 !='' ?(
              <Text>
                  <Text>Output2 : </Text>
              {this.state.Output2}
              </Text> ) : null  }
              
          
           </View>
 
         </View>
       );
   }
 }
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent: "center",
     alignItems: "center",
     backgroundColor: "#e5e5e5"
   },
   errorMessage: {
     fontSize: 20,
     color:"red",
     marginLeft:-80,
   }
 });