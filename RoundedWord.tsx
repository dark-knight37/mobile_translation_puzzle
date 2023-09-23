import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

interface RoundedWordProps {
  children: React.ReactNode;
  backgroundColor: string;
  color: string;
  underline: Number;
  elevation: Number;
  onPress: () => void;
}

const RoundedWord: React.FC<RoundedWordProps> = ({ children, backgroundColor, color, underline, elevation, onPress }) => {
  const wordLength = String(children).length;
  const width = 10 + wordLength * 3;

  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, { backgroundColor: backgroundColor, width: `${width}%`, elevation: elevation as number }]}
    >
      {underline === 0 ?
        (<Text numberOfLines={2} adjustsFontSizeToFit style={[styles.textStyle, {color: color}]}>
            {children}
        </Text>):
        (<Text numberOfLines={2} adjustsFontSizeToFit style={[styles.textStyle, {color: color, textDecorationLine: 'underline'}]}>
            {children}
        </Text>)
      }
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '35%',
    height: 50,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.08,
    shadowRadius: 2.22,
    alignItems: 'center',
    paddingHorizontal: 20,
    flexDirection: 'row',
    marginVertical: 10,
  },
  textStyle: {
    fontSize: 15,
    fontWeight: 'bold',
    lineHeight: 25,
    flex: 1,
    textAlign: 'center',
  },
});

export { RoundedWord };
