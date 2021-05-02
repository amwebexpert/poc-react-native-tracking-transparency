import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { DefaultTheme, Provider as PaperProvider, Title, useTheme } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'red',
    accent: 'lightgrey',
  },
};

const App = () => {
  const theme = useTheme();

  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={styles.container}>
        <Title style={styles.title}>Welcome to unit tested app!</Title>
      </SafeAreaView>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: theme.colors.primary,
    backgroundColor: theme.colors.accent,
    borderWidth: 1,
    borderColor: theme.colors.primary,
    padding: 20,
  },
});

export default App;
