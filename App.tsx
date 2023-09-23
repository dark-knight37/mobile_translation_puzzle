import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { RoundedWord } from './RoundedWord';
import { CheckButton } from './CheckButton';

export default function App() {
  const [eng, setEng] = useState<String[]>([]);
  const [ger, setGer] = useState<String[]>([]);
  const [missEngWord, setMissEngWord] = useState<String>('');
  const [missGerWord, setMissGerWord] = useState<String>('');
  const [selectWord, setSelectWord] = useState<String[]>([]);
  const [status, setStatus] = useState<Number>(0);
  const [fillItem, setFillItem] = useState<Number>(0);
  const [answer, setAnswer] = useState<String>('');

  useEffect(() => {
    setEng(['The', 'house', 'is', 'small']);
    setGer(['Das', 'Hause', 'ist', 'klein']);
    setMissEngWord('house');
    setMissGerWord('Hause');
    setSelectWord(['folgen', 'Schaf', 'Bereiden', 'Hause']);
    setStatus(0);
    setFillItem(0);
    setAnswer('');
  }, [])

  useEffect(() => {
    console.log(fillItem);
  }, [fillItem])

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Fill in the missing word</Text>

      <Text style={styles.eng}>
        {eng.map((word, index) => (
          <React.Fragment key={index}>
            {index !== 0 && ' '}
            {word === missEngWord ? (
              <Text style={{ fontWeight: 'bold', textDecorationLine: 'underline' }}>
                {word}
              </Text>
            ) : (
              word
            )}
          </React.Fragment>
        ))}
      </Text>

      <Text style={styles.ger}>
        {ger.map((word, index) => {
          if (word === missGerWord && fillItem) {
            return (
              <React.Fragment key={index}>
                {index !== 0 && '  '}
                <React.Fragment key={index}>
                  <RoundedWord
                    backgroundColor='white' color='#466B7F' underline={0} elevation={0} onPress={() => console.log('ok')}>{selectWord[fillItem as number - 1]}</RoundedWord>
                </React.Fragment> 
              </React.Fragment>
            );
          } else if (word === missGerWord && fillItem === 0){
            return (
              <React.Fragment key={index}>
                {index !== 0 && '  '}
                <React.Fragment key={index}>
                  <RoundedWord backgroundColor='#466B7F' color='' underline={1} elevation={0} onPress={() => console.log()}>{'                        '}</RoundedWord>
                </React.Fragment>
              </React.Fragment>
            );
          } else {
            return (
              <React.Fragment key={index}>
                {index !== 0 && '  '} 
                <React.Fragment key={index}>
                  <RoundedWord backgroundColor='#466B7F' color='white' underline={1} elevation={0} onPress={() => console.log()}>{word}</RoundedWord>
                </React.Fragment>
              </React.Fragment>
            );
          }
        })}
      </Text>
      
      <View style={styles.select}>
        {selectWord.map((word, index) => (        
            <React.Fragment key={index}>
              <RoundedWord
                backgroundColor='white'
                color='#466B7F'
                underline={0}
                elevation={2}
                onPress={() => {
                  setFillItem(index + 1);
                  setStatus(1);
                }}
              >
                {word}
              </RoundedWord>
            </React.Fragment>        
        ))}
      </View>
      
      <CheckButton status={status} answer={missGerWord} onPress={() => console.log('ok')} />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#466B7F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex: 1,
    color: 'white',
    alignItems: 'center',
    marginTop: 80,
  },
  eng: {
    flex: 1,
    color: 'white',
    alignItems: 'center',
    marginBottom: 40,
    fontSize: 25,
  },
  ger: {
    color: 'white',
    alignItems: 'center',
    marginBottom: 35,
    fontSize: 20,
    gap: 0,
  },
  select: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    rowGap: 10,
    columnGap: 30,
    marginBottom: 150
  },
});
