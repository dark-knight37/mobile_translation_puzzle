import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface CheckButtonProps {
  status: Number,
  missGerWord: String,
  onPress: () => void;
}

const CheckButton: React.FC<CheckButtonProps> = ({ status, missGerWord, onPress }) => {
  let color;
  let buttonColor;
  let wordColor;
  let word = '';
  let notification = '';
  if (status == 0) {
    color = '#466B7F';
    buttonColor = '#6D90A4';
    wordColor = 'white';
    word = 'CONTINUE';
    notification = '';
  } else if (status == 1) {
    color = '#466B7F';
    buttonColor = '#6CE1E8';
    wordColor = 'white';
    word = 'CHECK ANSWER';
    notification = '';
  } else if (status == 2) {
    color = '#6CE1E8';
    buttonColor = 'white';
    wordColor = '#6CE1E8';
    word = 'CONTINUE';
    notification = 'Great Job!';
  } else if (status == 3) {
    color = '#EE838B';
    buttonColor = 'white';
    wordColor = '#EE838B';
    word = 'CONTINUE';
    notification = 'Answer: ' + missGerWord;
  }

  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <View style={styles.notifcontainer}>
        <Text style={styles.notification}>{notification}</Text>
        {status === 2 || status === 3 ? (
          <MaterialIcons name="flag" size={24} color="white" style={styles.flag}/>
          ): null
        }
      </View>
      <Pressable
        onPress={onPress}
        style={[styles.button, { backgroundColor: buttonColor }]}
      >
        <Text adjustsFontSizeToFit style={[styles.textStyle, {color: wordColor}]}>
          {word}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 180,
    borderRadius: 30,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    alignItems: 'center',
  },
  notifcontainer: {
    width: '80%',    
    flexDirection: 'row',
  },
  notification: {
    flex: 1,
    textAlign: 'left',
    color: 'white',
    marginVertical: 15,
    marginLeft: 5,
    fontSize: 20,
    fontWeight: 'bold',
  },
  flag: {
    marginVertical: 15,
    marginRight: 5,
  },
  button: {
    width: '80%',
    height: 60,
    borderRadius: 60,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.08,
    shadowRadius: 2.22,
    elevation: 2,
    alignItems: 'center',
    paddingHorizontal: 20,
    flexDirection: 'row',
    marginBottom: 40,
  },
  textStyle: {
    fontSize: 15,
    lineHeight: 25,
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export { CheckButton };
