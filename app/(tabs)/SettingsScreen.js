import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

export default function SettingsScreen() {
  const [selectedOption, setSelectedOption] = useState(null);

  // Define the screens for each setting option
  const renderSelectedScreen = () => {
    switch (selectedOption) {
      case "BankAccount":
        return <BankAccountScreen />;
      case "Notifications":
        return <NotificationsScreen />;
      case "Security":
        return <SecurityScreen />;
      case "Currency":
        return <CurrencyScreen />;
      case "ExpenseCategories":
        return <ExpenseCategoriesScreen />;
      case "Help":
        return <HelpScreen />;
      case "DeleteAccount":
        return <DeleteAccountScreen />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>⚙ Settings</Text>

      {/* Render the options if no screen is selected */}
      {!selectedOption && (
        <View style={styles.optionsContainer}>
          {/* Bank Account */}
          <Pressable
            style={styles.optionCard}
            onPress={() => setSelectedOption("BankAccount")}
          >
            <Text style={styles.optionText}>🏦 Bank Account</Text>
          </Pressable>

          {/* Notifications and Alerts */}
          <Pressable
            style={styles.optionCard}
            onPress={() => setSelectedOption("Notifications")}
          >
            <Text style={styles.optionText}>🔔 Notifications and Alerts</Text>
          </Pressable>

          {/* Security */}
          <Pressable
            style={styles.optionCard}
            onPress={() => setSelectedOption("Security")}
          >
            <Text style={styles.optionText}>🔒 Security</Text>
          </Pressable>

          {/* Currency Selection */}
          <Pressable
            style={styles.optionCard}
            onPress={() => setSelectedOption("Currency")}
          >
            <Text style={styles.optionText}>💰 Currency Selection</Text>
          </Pressable>

          {/* Expense Categories */}
          <Pressable
            style={styles.optionCard}
            onPress={() => setSelectedOption("ExpenseCategories")}
          >
            <Text style={styles.optionText}>📂 Expense Categories</Text>
          </Pressable>

          {/* Help */}
          <Pressable
            style={styles.optionCard}
            onPress={() => setSelectedOption("Help")}
          >
            <Text style={styles.optionText}>❓ Help</Text>
          </Pressable>

          {/* Delete Account and Data (Danger Button) */}
          <Pressable
            style={[styles.optionCard, styles.dangerCard]}
            onPress={() => setSelectedOption("DeleteAccount")}
          >
            <Text style={[styles.optionText, styles.dangerText]}>
              ❌ Delete Account and Data
            </Text>
          </Pressable>
        </View>
      )}

      {/* Render the selected screen */}
      {selectedOption && (
        <View style={styles.screenContainer}>
          {/* Back button to return to settings options */}
          <Pressable
            style={styles.backButton}
            onPress={() => setSelectedOption(null)}
          >
            <Text style={styles.backButtonText}>⬅ Back to Settings</Text>
          </Pressable>

          {/* Render the selected screen */}
          {renderSelectedScreen()}
        </View>
      )}
    </View>
  );
}

// Example screens for each setting option
const BankAccountScreen = () => (
  <View>
    <Text style={styles.screenHeader}>Bank Account Settings</Text>
    <Text>Manage your bank account details here.</Text>
  </View>
);

const NotificationsScreen = () => (
  <View>
    <Text style={styles.screenHeader}>Notifications and Alerts</Text>
    <Text>Configure your notification preferences.</Text>
  </View>
);

const SecurityScreen = () => (
  <View>
    <Text style={styles.screenHeader}>Security Settings</Text>
    <Text>Update your security settings here.</Text>
  </View>
);

const CurrencyScreen = () => (
  <View>
    <Text style={styles.screenHeader}>Currency Selection</Text>
    <Text>Choose your preferred currency.</Text>
  </View>
);

const ExpenseCategoriesScreen = () => (
  <View>
    <Text style={styles.screenHeader}>Expense Categories</Text>
    <Text>Manage your expense categories.</Text>
  </View>
);

const HelpScreen = () => (
  <View>
    <Text style={styles.screenHeader}>Help</Text>
    <Text>Get help and support.</Text>
  </View>
);

const DeleteAccountScreen = () => (
  <View>
    <Text style={styles.screenHeader}>Delete Account and Data</Text>
    <Text>Permanently delete your account and data.</Text>
  </View>
);

// Styles
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#121212" },
  header: { fontSize: 28, fontWeight: "bold", marginBottom: 30, textAlign: "center", color:"white" },
  optionsContainer: { marginTop: 10 },
  optionCard: {
    backgroundColor: "#222",
    padding: 15,
    marginBottom: 15,
    borderRadius: 12,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  dangerCard: { backgroundColor: "#ffe6e6" },
  optionText: { fontSize: 18, textAlign: "left", color:"white" },
  dangerText: { color: "red", fontWeight: "bold" },
  screenContainer: { flex: 1, padding: 20 },
  screenHeader: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  backButton: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#e0e0e0",
    borderRadius: 8,
    alignItems: "center",
  },
  backButtonText: { fontSize: 16, fontWeight: "bold" },
});