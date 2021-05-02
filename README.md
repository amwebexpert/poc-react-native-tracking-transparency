# POC ReactNative tracking-transparency

* npm [react-native-tracking-transparency](https://www.npmjs.com/package/react-native-tracking-transparency)
* Apple [App Tracking Transparency](https://developer.apple.com/documentation/apptrackingtransparency)


# Usage

```ts
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
        <Button
          onPress={requestPermission}
          disabled={status !== 'not-determined'}
          style={styles.action}
          mode="contained">
          Request permission
        </Button>
      </SafeAreaView>
    </PaperProvider>
  );
};
```

* see full code here: [App.tsx](./App.tsx)

# Demo screen capture for Android:

<div align="center">
  <img width="300px" src="docs/screen-captures/demo-tracking-transparency-android.jpg" />
</div>

## Demo screen captures for iOS:

<div align="center">
  <img width="300px" src="docs/screen-captures/demo-tracking-transparency-authorize.gif" />
  <img width="300px" src="docs/screen-captures/demo-tracking-transparency-deny.gif" />
</div>

# Setup instructions

- `npm install`
- `pod install --project-directory=ios`

# Execution instructions

- `npx react-native start`
- `npx react-native run-android`
- `npx react-native run-ios`

