import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import uuid from 'react-native-uuid';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [category, setCategory] = useState('Food');
  const [amount, setAmount] = useState('');
  const [expenses, setExpenses] = useState([]); // State to store expenses

  const addExpense = () => {
    if (!amount || isNaN(amount) || parseFloat(amount) <= 0) {
      console.error("Invalid amount entered");
      return;
    }

    const newExpense = {
      id: uuid.v4(),
      category,
      amount: parseFloat(amount),
      date: new Date().toISOString().split('T')[0], // Store date (YYYY-MM-DD)
    };

    // Update expenses list
    const updatedExpenses = [...expenses, newExpense];
    setExpenses(updatedExpenses);
    setAmount('');

    // ✅ Navigate to ExpensesScreen and ReportsScreen with updated expenses
    navigation.navigate('Expenses', { expenses: updatedExpenses });
    navigation.navigate('Reports', { expenses: updatedExpenses });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add Expense</Text>

      <Picker
        selectedValue={category}
        style={styles.picker}
        onValueChange={(itemValue) => setCategory(itemValue)}
      >
        <Picker.Item label="Food" value="Food" />
        <Picker.Item label="Transport" value="Transport" />
        <Picker.Item label="Shopping" value="Shopping" />
        <Picker.Item label="Bills" value="Bills" />
        <Picker.Item label="Other" value="Other" />
      </Picker>

      <TextInput 
        style={styles.input} 
        placeholder="Amount" 
        placeholderTextColor="#bbb"
        value={amount} 
        onChangeText={setAmount} 
        keyboardType="numeric" 
      />

      <Button title="Add Expense" onPress={addExpense} color="#1DB954" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#121212' },
  heading: { fontSize: 24, fontWeight: 'bold', color: '#04724D', marginBottom: 20, textAlign: 'center' },
  picker: { backgroundColor: '#179299', color: '#fff', marginBottom: 10 },
  input: { borderWidth: 1, borderColor: '#333', padding: 12, marginBottom: 10, borderRadius: 8, backgroundColor: '#222', color: '#fff' }
});

export default HomeScreen;
