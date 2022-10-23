import globalStyles from './assets/styles/global';
import { ScrollView, Text, View } from 'react-native';
import { NativeBaseProvider, Spinner } from 'native-base';
import { group, appTheme } from './assets/js/objects';
import GroupInfo from './assets/components/GroupInfo';
import { useCallback, useEffect, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return(
    <View style={ globalStyles.screen } >
      <LinearGradient
        colors={ [ appTheme.bg01, appTheme.bg02 ] }
        style={ globalStyles.container }
      >
        <ScrollView style={ globalStyles.main }>
          <GroupInfo />
        </ScrollView>
      </LinearGradient>
    </View>
  );
}