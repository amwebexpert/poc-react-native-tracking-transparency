import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Button, Provider as PaperProvider, Text, useTheme} from 'react-native-paper';
import {getTrackingStatus, requestTrackingPermission} from 'react-native-tracking-transparency';

const App = () => {
  const theme = useTheme();
  const [status, setStatus] = React.useState('');

  React.useEffect(() => {
    const retrieveCurrentStatus = async () => {
      const trackingStatus = await getTrackingStatus();
      setStatus(trackingStatus);
    };

    retrieveCurrentStatus();
  }, []);

  const requestPermission = async () => {
    const trackingStatus = await requestTrackingPermission();
    setStatus(trackingStatus);
  };

  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={styles.container}>
      <Text>Current tracking status:</Text>
      <Text style={styles.status}>[{status}]</Text>
        <Button disabled={status !== 'not-determined'} style={styles.action} mode="contained" onPress={requestPermission}>
          Request permission
        </Button>
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
  status: {
    color: 'red',
    marginBottom: 20,
  },
  action: {
    marginBottom: 20,
  },
});

export default App;
