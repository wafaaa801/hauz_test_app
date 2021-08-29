import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, Dimensions } from 'react-native';

export default function App() {
  const [numRows, setNumRows] = useState(0);
  const [numColumns, setNumColumns] = useState(0);
  const [oneZero, setOneZero] = useState([]);
  //const cols = 3;
  const data = [
    {key: "A"}, {key: "B"}, {key: "C"}, {key: "D"}, { key: 'E' }, 
    { key: 'F' }, { key: 'G' }, { key: 'H' }, { key: 'I' }, { key: 'J' },
  ];

  const oneOrZero = [
    {key: (Math.random() > 0.5 ? 1 : 0)},
    {key: (Math.random() > 0.5 ? 1 : 0)},
    {key: (Math.random() > 0.5 ? 1 : 0)},
    {key: (Math.random() > 0.5 ? 1 : 0)},
    {key: (Math.random() > 0.5 ? 1 : 0)},
    {key: (Math.random() > 0.5 ? 1 : 0)},
    {key: (Math.random() > 0.5 ? 1 : 0)},
    {key: (Math.random() > 0.5 ? 1 : 0)},
    {key: (Math.random() > 0.5 ? 1 : 0)}
  ];
  // kena loop based on user input for numColumns
  // count number of 1s 
  
  const randomNum = () => {
    for(let i = 0; i<numColumns; i++) {
      var rand = (Math.random() > 0.5 ? 1 : 0);
      setOneZero[i] = rand;
      return oneZero;
    }
    
  }
  console.log('rand:',randomNum());

  const renderItem = ({item, index}) => {
    return (
      <View
        style={styles.item}
      >
        <Text style={styles.itemText}>{item.key}</Text>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" /> */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Number of rows"
          onChangeText={numRows => setNumRows(numRows)}
          defaultValue={numRows}
        />
        <View style={{ height: 20 }}></View>
        <TextInput
          style={styles.input}
          placeholder="Number of columns"
          onChangeText={numColumns => setNumColumns(numColumns)}
          defaultValue={numColumns}
        />
      </View>
      <FlatList
        key={numColumns.concat(numRows)}
        numColumns={numColumns}
        numRows={numRows}
        data={oneOrZero}
        style={styles.gridContainer}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gridContainer: {
    flex: 1,
    marginVertical: 10,
    width: '80%',
    bottom: 150
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 7
  },
  inputContainer: {
    flex: 1,
    top: 20
    //bottom: 100
  },
  item: {
    backgroundColor: "#4D243D",
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 1,
    height: Dimensions.get('window').width / 5, // approximate a square
    width: 70
  },
  itemText: {
    color: '#fff',
  },
});
