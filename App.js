import globalStyles from './assets/styles/global';
import { Text, View } from 'react-native';
import { NativeBaseProvider, Spinner } from 'native-base';
import { group } from './assets/js/objects';
import GroupInfo from './assets/components/GroupInfo';
import { useCallback, useEffect, useState } from 'react';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const getFonts = () => Font.loadAsync({
  'Varela': require('./assets/fonts/VarelaRound-Regular.ttf')
});

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  useEffect(() => {
    async function prepare() {
      try {
        await getFonts();
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch(e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
    setAppIsReady(true);
  }, []);

  const onLayoutRootView = useCallback( async () => {
    if(appIsReady){
      await SplashScreen.hideAsync();
    }
  } ,[appIsReady])

  if(!appIsReady) {
    return (
      <NativeBaseProvider>
        <View style={globalStyles.spinner}>
          <Spinner color="blue.500" size='lg'/>
        </View>
      </NativeBaseProvider>
    );
  }

  return(
    <View
      style={globalStyles.screen}
      onLayout={onLayoutRootView}
    >
      <GroupInfo />
    </View>
  );
}