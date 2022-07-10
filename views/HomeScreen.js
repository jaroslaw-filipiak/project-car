import { Button, View, Text } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title='Go to Details //'
        onPress={() =>
          navigation.navigate('Details', {
            itemId: 45,
            otherParam: 'other param..',
          })
        }
      />
    </View>
  );
}

export default HomeScreen;
