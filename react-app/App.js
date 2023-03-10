import React,{useState} from 'react';
import { StatusBar  } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, ScrollView,FlatList } from 'react-native';
// import { Button } from 'react-native-web';

export default function App() {
  const [people, setPeople] = useState ([
    { name: 'Sultan', id:'1'  },
    { name: 'ibrahim', id:'2' },
    { name: 'Syed', id:'3'    },
    { name: 'Sakib', id:'4'   },
    { name: 'Sulla',id:'5'   },
    { name: 'Majid', id:'6'   },
    { name: 'Aayush',id:'7'  },
    { name: 'Sahil', id:'8'   },
    { name: 'Quatib', id:'9'   },
    { name: 'Abhi', id:'9'   },
    ]);
  // const [age, setAge] = useState('30');

  return (
    <View style={styles.container}>
<FlatList
numColumns={5}
keyExtractor={(item) => item.id}

data={people}
renderItem={({ item}) => (
  <Text style={styles.item}>{item.name}</Text> 
)}
/>





      {/* <ScrollView>
      { people.map(item=> (
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text> 
          </View>
        ) 
      )}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:40,
    paddingHorizontal:20
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item : {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize :24,
    marginHorizontal:10,
    marginTop:24,
  }
});

