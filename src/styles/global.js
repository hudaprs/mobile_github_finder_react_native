import {StyleSheet} from 'react-native'

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: '#fff'
  },

  // Buttons
  btn: {
    backgroundColor: '#333333',
    padding: 10
  },
  btnLight: {
    backgroundColor: '#F6F6F6'
  },
  btnText: {
    color: '#fff',
    justifyContent: 'center',
    textAlign: 'center'
  },
  btnTextLight: {
    color: '#000'
  },

  // Box
  box: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderStyle: 'dotted',
    marginBottom: 13
  },
  boxItem: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  boxTitle: {
    fontWeight: 'bold',
    fontFamily: 'Roboto-Regular',
    fontSize: 16
  },

  // Backgrounds
  bgDanger: {
    backgroundColor: '#DC3545'
  },
  bgSuccess: {
    backgroundColor: '#28A745'
  },
  bgLight: {
    backgroundColor: '#F4F4F4'
  },
  bgDark: {
    backgroundColor: '#333333'
  },

  // Badge
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#CCC'
  },
  badgeText: {
    color: '#fff'
  },
  badgeTextDark: {
    color: '#000'
  }
})
