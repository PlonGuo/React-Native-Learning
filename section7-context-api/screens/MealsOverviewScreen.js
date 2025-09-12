import MealItem from '../components/MealsList/MealItem';
import { MEALS, CATEGORIES } from '../data/dummy-data';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useLayoutEffect } from 'react';
import MealsList from '../components/MealsList/MealsList';

function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  const displayMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  return <MealsList items={displayMeals} navigation={navigation} />;
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({});
