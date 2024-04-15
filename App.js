import { useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, TextInput, Button, Image} from 'react-native';

export default function App() {
  const [name, setName] = useState('')
  const [nameField, setNameField] = useState('')

  const handleSendName = () => {
    setName(nameField)
  }

  const handleClear = () => {
    setName('')
    setNameField('')
  }

  return (
    <SafeAreaView style={styles.container}>
    <SafeAreaView style={{flex:1}}>
    <SafeAreaView style={[styles.central,{flex:1,} ]}>
    {name == '' &&
        <>
         <Image  source={require('./assets/user.png')} style={{width: 100, height: 100}}/>

          <TextInput 
            style={styles.input}
            placeholder='Digite seu CPF'
            placeholderTextColor='#999'
            value={nameField}
            onChangeText={text => setNameField(text)}
          />
          <Button  title='Logar' onPress={handleSendName} color='#000000'/>
        </>
      }

      {name != '' &&
        <>
          <Image  source={require('./assets/boneco.png')} style={{width: 100, height: 100}}/>
          <Text style={styles.luismar}>Você está logado com CPF: 000.000.000-00</Text>
          <Button color={'#000000'} title={`CPF NÃO É 000.000.000-00`} onPress={handleClear} />
        </>
      }
      </SafeAreaView>
    </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#eee',
    padding: 10,
    margin: 20,
    display:'flex',
    width:300,

  },

  central:{
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center',
    
  },
  container:{
    flex: 1,
    padding:20,
  },

  luismar:{
    margin: 15,
  }

})