import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { TouchableOpacity } from "react-native";
import { FlatList, Image, Linking, StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";
import { group, appTheme } from "../js/objects";

export default function GroupInfo(){
  let mem = 1;
  return(
    <View style={styles.wrapper}>
      <View style={styles.imageCtn}>
        <Image style={styles.image} source={group.logo}/>
      </View>
      <View style={ styles.infoCtn }>
        <View style={ styles.groupHeader }>
          <Text style={ styles.groupAlias }>{ group.alias }</Text>
        </View>
        <View style={ styles.groupNumberCtn }>
          <Text style={ styles.groupNumberLabel }>Group No.</Text>
          <Text style={ styles.groupNumberValue }>{ group.number }</Text>
        </View>
        <View style={ styles.membersCtn }>
          <View style={ styles.memberHeader }>
            <Text style={ styles.memberHeaderText }>Members</Text>
          </View>
          { group.members.map((name, value) => {
            return(
              <View key={mem - 1} style={ styles.memberCard }>
                <Text style={ styles.memberNum }>{ mem++ }</Text>
                <Text style={ styles.memberName }>{ name }</Text>
              </View>
            )
          })}
        </View>
        <View style={ styles.projectInfoCtn }>
          <View style={ styles.projectInfo }>
            <Text style={ styles.projectInfoLabel }>Project Title</Text>
            <TouchableOpacity activeOpacity={0.75} style={ styles.projectTitleCtn } onPress={() => Linking.openURL('https://github.com/godkingjay/Expo-Pinoy-Foods')}>
              <Icon type="material-icons" name="link" color={ appTheme.card.projectInfo.title.link }/>
              <Text style={ styles.projectTitle }>{ group.projectTitle }</Text>
            </TouchableOpacity>
          </View>
          <View style={ styles.projectCategoryCtn }>
            <Text style={ styles.projectCategoryLabel }>Project Category</Text>
            <Text style={ styles.projectCategory }>{ group.projectCategory }</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    padding: 32,
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageCtn: {
    width: '100%',
    marginVertical: 12,
    flex: 1,
  },
  image: {
    marginTop: 'auto',
    width: '100%',
    height: 256,
    resizeMode: 'contain'
  },
  infoCtn: {
    flex: 1.5,
    width: '100%',
    maxWidth: 498,
    paddingHorizontal: 24,
    paddingVertical: 8,
    alignItems: 'center',
    display: 'flex',
  },
  groupHeader: {
    backgroundColor: appTheme.card.header.bg,
    width: '100%',
    height: 56,
    borderWidth: 2,
    borderColor: appTheme.card.header.border,
    borderRadius: 100,
    elevation: 8,
  },
  groupAlias: {
    flex: 1,
    letterSpacing: 2,
    fontSize: 28,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    color: appTheme.card.header.alias.text,
  },
  groupNumberCtn: {
    display: 'flex',
    flexDirection: 'row',
    height: 28,
    maxHeight: 28,
    alignItems: 'center',
    marginVertical: 8,
    backgroundColor: appTheme.card.number.bg,
    borderRadius: 64,
    borderWidth: 1,
    borderColor: appTheme.card.number.border,
    elevation: 8
  },
  groupNumberLabel: {
    fontSize: 12,
    paddingHorizontal: 8,
    paddingLeft: 12,
    color: appTheme.card.number.label,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    textAlignVertical: 'center',
  },
  groupNumberValue: {
    aspectRatio: 1,
    height: '100%',
    backgroundColor: appTheme.card.number.value.bg,
    color: appTheme.card.number.value.text,
    borderRadius: 32,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  membersCtn: {
    marginTop: 16,
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: 32,
    alignItems: 'center',
  },
  memberHeader: {
    width: '100%',
    backgroundColor: appTheme.card.member.bg,
    borderRadius: 128,
    paddingVertical: 4,
    borderWidth: 2,
    borderColor: appTheme.card.member.border,
    elevation: 8,
    marginBottom: 4
  },
  memberHeaderText: {
    fontSize: 20,
    textTransform: 'uppercase',
    letterSpacing: 1,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    color: appTheme.card.member.text,
  },
  memberCard: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 4,
    elevation: 8,
    backgroundColor: 'white',
    borderRadius: 100,
    width: '90%',
    height: 28,
    alignItems: 'center',
    backgroundColor: appTheme.card.member.members.bg,
    borderWidth: 1,
    borderColor: appTheme.card.member.members.border
  },
  memberNum: {
    aspectRatio: 1,
    height: '100%',
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: appTheme.card.member.members.number.bg,
    borderRadius: 100,
    color: appTheme.card.member.members.number.text,
    fontWeight: 'bold',
    fontSize: 16
  },
  memberName: {
    paddingHorizontal: 8,
    fontSize: 16,
    color: appTheme.card.member.members.text,
    flex: 1,
    textAlignVertical: 'center'
  },
  projectInfoCtn: {
    marginVertical: 12,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  projectInfo: {
    display: 'flex',
    marginVertical: 12,
    marginBottom: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  projectInfoLabel: {
    textTransform: 'uppercase',
    fontSize: 20,
    fontWeight: 'bold',
    color: appTheme.card.projectInfo.label,
    marginBottom: 4
  },
  projectTitleCtn: {
    backgroundColor: appTheme.card.projectInfo.title.bg,
    borderWidth: 2,
    borderColor: appTheme.card.projectInfo.title.border,
    paddingVertical: 4,
    borderRadius: 100,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12
  },
  projectTitle: {
    color: appTheme.card.projectInfo.title.text,
    fontSize: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: 'bold',
    paddingLeft: 8
  },
  projectCategoryCtn: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: appTheme.card.projectInfo.category.bg,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 172,
    borderWidth: 1,
    borderColor: appTheme.card.projectInfo.category.border,
  },
  projectCategoryLabel: {
    flex: 1,
    paddingHorizontal: 8,
    paddingVertical: 2,
    fontWeight: 'bold',
    color: appTheme.card.projectInfo.category.label.text,
    backgroundColor: appTheme.card.projectInfo.category.label.bg,
    borderTopLeftRadius: 100,
    borderBottomLeftRadius: 100,
    textAlign: 'center',
    textAlignVertical: 'center',
    textTransform: 'uppercase',
    fontSize: 10,
  },
  projectCategory: {
    flex: 1.75,
    textAlign: 'center',
    textAlignVertical: 'center',
    height: '100%',
    color: appTheme.card.projectInfo.category.text,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 16,
  }
});