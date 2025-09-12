import { View, FlatList, StyleSheet } from 'react-native';

import MealItem from './MealItem';

function MealsList({ items, navigation }) {
  function renderMealItem(itemData) {
    const item = itemData.item;

    function pressHandler() {
      navigation.navigate('MealsDetail', {
        mealId: item.id,
      });
    }

    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
      onPress: pressHandler,
    };
    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#3f2f25',
  },
});
