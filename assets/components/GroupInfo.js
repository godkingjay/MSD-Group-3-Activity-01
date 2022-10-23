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
        <View style={ styles.groupNumberCtn }>
          <Text style={ styles.groupNumberLabel }>Group No.</Text>
          <Text style={ styles.groupNumberValue }>{ group.number }</Text>
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
  },
  groupAlias: {
    flex: 1,
    letterSpacing: 2,
    fontSize: 32,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    color: appTheme.card.header.alias.text,
  },
  groupNumberCtn: {
    display: 'flex',
    flexDirection: 'row',
    height: 32,
    maxHeight: 32,
    alignItems: 'center',
    marginVertical: 8,
    backgroundColor: appTheme.card.number.bg,
    borderRadius: 64,
    borderWidth: 1,
    borderColor: appTheme.card.number.border,
    elevation: 8
  },
  groupNumberLabel: {
    fontSize: 16,
    paddingHorizontal: 8,
    paddingLeft: 16,
    paddingVertical: 2,
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
    fontSize: 20,
  }  
});