import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Pressable } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import Checkbox from 'expo-checkbox';
import * as MailComposer from 'expo-mail-composer';
import validator from 'validator';

function ContactUs({ navigation }) {
    const [isChecked, setChecked] = useState(false);
    let clr = 'white'
    const [userName, setuserName] = useState("");
    const [Mobile, setMobile] = useState("");
    const [Mail, setMail] = useState("");
    const [Massage, setMassage] = useState("");
    var validator = require('validator');

   
    const submit = () => {
      
        if(validator.isMobilePhone(`${Mobile}`))
        {
        if(validator.isEmail(`${Mail}`))
        {
        MailComposer.composeAsync({
            recipients: ["info@redpositive.in"],
            subject: "Submitting data",
            body: 
            `Name : ${userName}\nMobile No : ${Mobile}\nEmail Id : ${Mail}\nMassage : ${Massage}`
                  
                  
          }).catch(() =>
            Alert.alert("Unable To Submit")
          );
        }
        else{
            Alert.alert("Email is not valid")
        }
    }
    else{
        Alert.alert("Mobile No is not valid")
    }

}
    return (
        <View style={styles.mainContainer}>
            <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.mainContainer2}>




                <View style={styles.header}>
                    <Text style={styles.headerTxt1}>
                        Login
                    </Text>

                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputText}>
                        Name
                    </Text>
                    <TextInput
                        style={styles.inputField}
                        value={userName}
                        onChangeText={setuserName}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputText}>
                        Mobile No
                    </Text>
                    <TextInput
                        style={styles.inputField}
                        // secureTextEntry={true}
                        value={Mobile}
                        onChangeText={setMobile}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputText}>
                        Gmail ID
                    </Text>
                    <TextInput
                        style={styles.inputField}
                        // secureTextEntry={true}
                        value={Mail}
                        onChangeText={setMail}
                       
                    />
                </View>
                <View style={styles.inputContainer}>
                    
                    <TextInput
                        style={styles.msgbox}
                        // secureTextEntry={true}
                        value={Massage}
                        onChangeText={setMassage}
                        placeholder='type your massage'
                    />
                </View>
                <View style={styles.chkContainer}>
                    <Checkbox
                        style={styles.chkbox}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? clr = 'orange' : undefined} />
                    <Text
                        style={{
                            color: `${clr}`,
                            fontSize: 15
                        }}>Agree term's and Condition</Text>
                </View>
                <TouchableOpacity style={[styles.btn, { backgroundColor: isChecked ? clr = 'orange' : 'gray' }]} disabled={!isChecked}
                    onPress={() => submit()}
                    >

                    <Text style={styles.btnText}>Login</Text>

                </TouchableOpacity>
                


            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        height: "100%",
        width:"100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // borderWidth: 3,
        // borderColor: "red"
    },
    mainContainer2: {

        paddingVertical: 30,

        // marginVertical: "50%",
        borderRadius: 10,
        width: "80%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    header: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

    },
    headerTxt1: {
        fontSize: 40,
        // fontWeight: 700,
        color: "orange",

    },

    inputContainer: {

        marginTop: 25,
        width: "80%"

    },
    inputText: {
        fontSize: 25,
        color: "white",
    },
    inputField: {
        marginTop: 10,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: "white",
        backgroundColor: "white",
        fontSize: 20,
        paddingLeft: 10,
    },
    msgbox :{
        marginTop: 10,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: "white",
        backgroundColor: "white",
        fontSize: 14,
        height:100,
        paddingLeft: 10,
    },
    chkContainer: {
        marginTop: 20,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "80%"

    },
    chkbox: {
        marginTop: 10,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: "white",
        backgroundColor: "white",
    },
    // chkText:{
    //     color:"orange",
    //     fontSize:15
    // },

    btn: {
        width: "80%",
        textAlign: "center",
        padding: 5,
        marginTop: 30,

        backgroundColor: "rgb(165,214,169)",
        borderRadius: 10,
        borderColor: "rgb(165,214,169)"

    },
    btnText: {
        color: "white",
        fontSize: 25,
        textAlign: "center",
        // fontWeight: 700,
    },
    last :{
        display:'flex',
        flexDirection:"row",
        // width:"100%"
        marginTop:15,
        justifyContent:"space-between"

    },
    last1:{
        color:"white"
    },
    last2:{
      
        color:"orange"
        
    }

})

export default ContactUs
