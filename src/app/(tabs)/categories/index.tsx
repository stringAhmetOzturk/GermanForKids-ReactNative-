import { FlatList, StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import CategoryItem from '@/src/components/CategoryItem';
import categories  from '@/assets/data/categories';
import { useTranslation } from 'react-i18next';
export default function HomeScreen() {
  const { t } = useTranslation('categories');

  // Translate categories when the component mounts
  const translatedCategories = categories.map(category => ({
    ...category,
    categoryName: t(category.categoryName),
  }));
  return (
    <View style={styles.container}>
      <FlatList numColumns={2} keyExtractor={(item)=>item.id.toString()} contentContainerStyle={{gap:10,padding:10}} columnWrapperStyle={{gap:10}} data={translatedCategories} renderItem={({ item }) => <CategoryItem category={item} />}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
 
});
