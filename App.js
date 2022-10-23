import globalStyles from './assets/styles/global';
import { ScrollView, View } from 'react-native';
import { appTheme } from './assets/js/objects';
import GroupInfo from './assets/components/GroupInfo';
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