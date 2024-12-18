import {View, Text, StyleSheet, Button} from 'react-native'

export const Contacts = ({navigation}) => {
    return <View style={styles.container}>
        <Text>Pantalla de contactos modificada por el tutor</Text>
        <Button
            title='HOME'
            onPress={()=>{
                navigation.navigate('WellcomeNav');
            }}
        />
    </View>

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  