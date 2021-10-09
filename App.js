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
     ShowOuput: false
    }
 }
 
 onEnterText = (TextInputValue) =>{
  if (isNaN(TextInputValue)){
   
    this.setState({TextInputValue : TextInputValue, ErrorStatus : false}) ;
     
   }else{
    this.setState({TextInputValue : TextInputValue, ErrorStatus : true}) ;
   
   }
 }
  primeNumberOrNot(num){
  for(var i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num > 1;
}
getNextPrimeNumber(num) {

   if(num <=1)
   return 2;
   else
   {
     
      var nextPrime= 0;
      num++;
    do {

      if(this.primeNumberOrNot(num)){
      nextPrime= num;
      
      }
    
      num++;
    }while (nextPrime == 0)

    return nextPrime;
    }
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
       this.setState({ShowOuput :true}) ;
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
             title="Is It Prime?" />
          

          <br></br>
          <br></br>
          { this.state.ShowOuput == true ?(
         
              <Text><p>Results :</p>
              <p>Number : {this.state.TextInputValue}</p></Text>
              ) : null  }


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
    
     backgroundColor: "#e5e5e5"
   },
   errorMessage: {
     fontSize: 20,
     color:"red",
     marginLeft:-80,
   }
 });