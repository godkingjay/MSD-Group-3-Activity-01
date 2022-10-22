import globalStyles from './assets/styles/global';
import { Text, View } from 'react-native';
import { group } from './assets/js/objects';
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
    return null;
  }

  return(
    <View
      style={globalStyles.screen}
      onLayout={onLayoutRootView}
    >
      <Text>Hello</Text>
    </View>
  );
}