import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

const ExpensesScreen = () => {
  const route = useRoute();
  const expenses = route.params?.expenses || []; // Get expenses from HomeScreen

  // ✅ Sort expenses (Latest first)
  const sortedExpenses = [...expenses].sort((a, b) => new Date(b.date) - new Date(a.date));

  // ✅ Calculate total spending per category
  const categoryTotals = sortedExpenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
    return acc;
  }, {});

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Expenses List</Text>

      {/* ✅ Total Spending Section */}
      {Object.keys(categoryTotals).length > 0 && (
        <View style={styles.totalContainer}>
          <Text style={styles.totalHeading}>Total Spending</Text>
          {Object.keys(categoryTotals).map((category) => (
            <View key={category} style={styles.totalItem}>
              <Text style={styles.categoryText}>{category}</Text>
              <Text style={styles.totalAmount}>Rs{categoryTotals[category].toFixed(2)}</Text>
            </View>
          ))}
        </View>
      )}

     {/* ✅ Expense List */}
{sortedExpenses.length > 0 ? (
  <FlatList
    data={sortedExpenses} // ✅ Use reversed sorted expenses
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => (
      <View style={styles.expenseItem}>
        <Text style={styles.text}>{item.category}</Text>
        <Text style={styles.amount}>Rs{item.amount.toFixed(2)}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
    )}
  />
) : (
  <Text style={styles.empty}>No expenses added yet.</Text>
)}
</View>
  )
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#121212' },
  heading: { fontSize: 24, fontWeight: 'bold', color: '#1DB954', marginBottom: 20, textAlign: 'center' },
  
  // ✅ Total Spending Styles
  totalContainer: { backgroundColor: '#222', padding: 15, borderRadius: 10, marginBottom: 20 },
  totalHeading: { fontSize: 20, fontWeight: 'bold', color: '#1DB954', marginBottom: 10, textAlign: 'center' },
  totalItem: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 5 },
  categoryText: { color: '#fff', fontSize: 16 },
  totalAmount: { color: '#1DB954', fontWeight: 'bold', fontSize: 16 },

  // ✅ Expense List Styles
  expenseItem: { flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderBottomWidth: 1, borderBottomColor: '#333' },
  text: { color: '#fff' },
  amount: { color: '#1DB954', fontWeight: 'bold' },
  date: { color: '#bbb', fontSize: 12 },
  empty: { color: '#bbb', textAlign: 'center', marginTop: 20 },
});

export default ExpensesScreen;
