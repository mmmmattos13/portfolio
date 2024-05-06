import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,  
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
  header:{
    alignItems: 'center',
    marginBottom: 120,
  },
  name:{
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10, 
  },
  text:{
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonsContainer: {
    alignItems: 'center',
  },
  button:{
    backgroundColor: '#007bff',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 40,
    marginBottom: 20,
    width: '100%',
    alignItems: 'center', 
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  }
});
