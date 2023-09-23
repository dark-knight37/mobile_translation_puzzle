import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { RoundedWord } from './RoundedWord';
import { CheckButton } from './CheckButton';

interface DataObjectProps {
  eng: String[];
  ger: String[];
  missEngWord: String;
  missGerWord: String;
  selectWord: String[];
}

export default function App() {
  const [eng, setEng] = useState<String[]>([]);
  const [ger, setGer] = useState<String[]>([]);
  const [missEngWord, setMissEngWord] = useState<String>('');
  const [missGerWord, setMissGerWord] = useState<String>('');
  const [selectWord, setSelectWord] = useState<String[]>([]);
  const [status, setStatus] = useState<Number>(0);
  const [fillItem, setFillItem] = useState<Number>(0);
  const [answer, setAnswer] = useState<String>('');
  const [result, setResult] = useState<Number>(0);
  const [ind, setInd] = useState<number>(0);
  const [data, setData] = useState<DataObjectProps[]>([]);

  useEffect(() => {
    setData([
      {
        'eng': ['The', 'house', 'is', 'small'],
        'ger': ['Das', 'Hause', 'ist', 'klein'],
        'missEngWord': 'house',
        'missGerWord': 'Hause',
        'selectWord': ['folgen', 'Schaf', 'Bereiden', 'Hause'],
      },
      {
        'eng': ['The', 'bag', 'is', 'big'],
        'ger': ['Die', 'Tasche', 'ist', 'groß'],
        'missEngWord': 'big',
        'missGerWord': 'groß',
        'selectWord': ['folgen', 'Schaf', 'groß', 'Hause'],
      }
    ]);
    setInd(0);
  }, [])

  useEffect(() => {
    setEng(data[ind]['eng']);
    setGer(data[ind]['ger']);
    setMissEngWord(data[ind]['missEngWord']);
    setMissGerWord(data[ind]['missGerWord']);
    setSelectWord(data[ind]['selectWord']);
    setStatus(0);
    setFillItem(0);
    setAnswer('');
    setResult(0);    
  }, [ind])

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
            if (result == 0) {
              return (
                <React.Fragment key={index}>
                  {index !== 0 && '  '}
                  <React.Fragment key={index}>
                    <RoundedWord
                      backgroundColor='white'
                      color='#466B7F'
                      underline={0}
                      elevation={0}
                      onPress={() => {
                        setFillItem(0);
                        setStatus(0);
                      }}
                    >
                      {selectWord[fillItem as number - 1]}
                    </RoundedWord>
                  </React.Fragment> 
                </React.Fragment>
              );
            } else if (result == 1) {
              return (
                <React.Fragment key={index}>
                  {index !== 0 && '  '}
                  <React.Fragment key={index}>
                    <RoundedWord
                      backgroundColor='#6CE1E8'
                      color='white'
                      underline={0}
                      elevation={0}
                      onPress={() => {}}
                    >
                      {selectWord[fillItem as number - 1]}
                    </RoundedWord>
                  </React.Fragment> 
                </React.Fragment>
              );
            } else {
              return (
                <React.Fragment key={index}>
                  {index !== 0 && '  '}
                  <React.Fragment key={index}>
                    <RoundedWord
                      backgroundColor='#EE838B'
                      color='white'
                      underline={0}
                      elevation={0}
                      onPress={() => {}}
                    >
                      {selectWord[fillItem as number - 1]}
                    </RoundedWord>
                  </React.Fragment> 
                </React.Fragment>
              );
            }           
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
        {selectWord.map((word, index) => {
          if (result == 0) {
            if (index + 1 !== fillItem){
              return(
                <React.Fragment key={index}>
                  <RoundedWord
                    backgroundColor='white'
                    color='#466B7F'
                    underline={0}
                    elevation={2}
                    onPress={() => {
                      setFillItem(index + 1);
                      setStatus(1);
                      setAnswer(word);
                    }}
                  >
                    {word}
                  </RoundedWord>
                </React.Fragment>   
              )
            } else {
              return(
                <React.Fragment key={index}>
                  <RoundedWord
                    backgroundColor='#6D90A4'
                    color='#6D90A4'
                    underline={0}
                    elevation={2}
                    onPress={() => {}}
                  >
                    {word}
                  </RoundedWord>
                </React.Fragment>   
              )
            }
          } else {
            if (index + 1 !== fillItem){
              return(
                <React.Fragment key={index}>
                  <RoundedWord
                    backgroundColor='#A5B4BE'
                    color='#6D8392'
                    underline={0}
                    elevation={2}
                    onPress={() => {}}
                  >
                    {word}
                  </RoundedWord>
                </React.Fragment>   
              )
            } else {
              return(
                <React.Fragment key={index}>
                  <RoundedWord
                    backgroundColor='#6C91A5'
                    color='#6C91A5'
                    underline={0}
                    elevation={2}
                    onPress={() => {}}
                  >
                    {word}
                  </RoundedWord>
                </React.Fragment>   
              )
            }
          }                 
        })}
      </View>
      
      <CheckButton
        status={status}
        missGerWord={missGerWord}
        onPress={() => {
          if (status == 0){
            console.log('');
          } else if(status == 1) {
            if(answer === missGerWord) {
              setStatus(2);
              setResult(1);
            } else {
              setStatus(3);
              setResult(2);
            }
          } else {
            setStatus(0);
            setInd((ind + 1) % 2);
          }
        }} />
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
