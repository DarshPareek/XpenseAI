import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { PieChart, BarChart } from 'react-native-chart-kit';
import { useRoute } from '@react-navigation/native';

const ReportsScreen = () => {
  const route = useRoute();
  const expenses = route.params?.expenses || []; // Get expenses from HomeScreen

  // ✅ Group expenses by category
  const groupedExpenses = expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
    return acc;
  }, {});

  // ✅ Pie Chart Data
  const pieChartData = Object.keys(groupedExpenses).map((category, index) => ({
    name: category,
    amount: groupedExpenses[category],
    color: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#FF9800'][index % 5],
    legendFontColor: "#FFF",
    legendFontSize: 15,
  }));

  // ✅ Bar Chart Data
  const barChartData = {
    labels: Object.keys(groupedExpenses),
    datasets: [{ data: Object.values(groupedExpenses) }],
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Expense Reports</Text>

      {expenses.length > 0 ? (
        <>
          <PieChart
            data={pieChartData}
            width={Dimensions.get('window').width - 40}
            height={200}
            chartConfig={{
              backgroundColor: '#000',
              backgroundGradientFrom: '#222',
              backgroundGradientTo: '#444',
              decimalPlaces: 2,
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            }}
            accessor="amount"
            backgroundColor="transparent"
            paddingLeft="15"
          />

          <BarChart
            data={barChartData}
            width={Dimensions.get('window').width - 40}
            height={220}
            yAxisLabel="$"
            chartConfig={{
              backgroundGradientFrom: "#222",
              backgroundGradientTo: "#444",
              decimalPlaces: 2,
              color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            }}
            style={{ marginVertical: 8, borderRadius: 16 }}
          />
        </>
      ) : (
        <Text style={styles.empty}>No expenses to display</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#121212' },
  heading: { fontSize: 24, fontWeight: 'bold', color: '#1DB954', marginBottom: 20, textAlign: 'center' },
  empty: { color: '#bbb', textAlign: 'center', marginTop: 20 },
});

export default ReportsScreen;
