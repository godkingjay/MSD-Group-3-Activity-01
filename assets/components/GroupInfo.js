import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { group, appTheme } from "../js/objects";

export default function GroupInfo(){
  return(
    <View style={styles.wrapper}>
      <View style={styles.imageCtn}>
        <Image style={styles.image} source={group.logo}/>
      </View>
      <View style={ styles.infoCtn }>
        <View style={ styles.groupHeader }>
          <Text style={ styles.groupAlias }>{ group.alias }</Text>
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
  },
  imageCtn: {
    width: '100%',
    marginVertical: 12,
    marginTop: 'auto',
  },
  image: {
    width: '100%',
    height: 256,
    resizeMode: 'contain'
  },
  infoCtn: {
    width: '100%',
    maxWidth: 498,
    marginBottom: 'auto',
    paddingHorizontal: 24,
    paddingVertical: 12,
    alignItems: 'center',
    display: 'flex',
  },
  groupHeader: {
    backgroundColor: appTheme.card.header.bg,
    width: '100%',
    height: 64,
    borderWidth: 2,
    borderColor: appTheme.card.header.border,
    borderRadius: 100,
    elevation: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  groupAlias: {
    flex: 1,
    padding: 12,
    letterSpacing: 2,
    fontSize: 24,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    color: appTheme.card.alias.text
  },
});