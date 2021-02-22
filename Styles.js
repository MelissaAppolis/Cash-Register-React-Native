import { StyleSheet } from 'react-native';

export default Styles = StyleSheet.create({
    // Keypad screen
    keyPadScreenView: {
      flex: 1,
      backgroundColor: "#F7F9FC",
    },
    keypadDisplay: {
      flex: 1.5,
      flexDirection: "row",
      alignItems: "center",
      paddingLeft: 10,
    },
    priceDisplayView: {
      flex: 8,
      justifyContent: "center",
      alignItems: "flex-end",
      paddingRight: 20,
      backgroundColor: "#E8EDF4",
    },
    keypadDisplayText: {
      fontSize: 50,
    },
    clearButton: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      height: 40,
      borderColor: "#D3D3D3",
      borderWidth: 0.5,
      borderRadius: 50,
    },
    clearButtonText: {
      color: "#ff5946",
    },
    keypadInput: {
      flex: 6,
    },
    keypadInputRow: {
      flex: 2,
      flexDirection: "row",
    },
    keypadInputButton: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 0.5,
      borderColor: "#D3D3D3",
    },
    keypadInputButtonText: {
      fontSize: 30,
    },
    specialInputButtonText: {
      fontSize: 45,
      color: "#ff5946",
    },
    plusInputButton: {
      fontSize: 30,
      color: "#ff5946",
    },
    addToCartButton: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#545E75",
    },
    addToCartButtonText: {
      color: "white",
    },

    // Cart screen
    cartScreenView: {
      flex: 1,
      backgroundColor: "#545E75",
    },
    cartContainer: {
      flex: 7.5,
      justifyContent: "space-between",
      paddingBottom: 10,
    },
    receiptContainer: {
      flex: 1,
      justifyContent: "space-around",
    },
    receiptRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingLeft: 10,
      paddingRight: 10,
    },
    totalRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingLeft: 10,
      paddingRight: 10,
    },
    rowCaption: {
      fontSize: 20,
    },
    amountView: {
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center",
    },
    randSign: {
      fontSize: 20,
    },
    totalRowAmount: {
      fontSize: 30,
    },
    cashTenderedRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingLeft: 10,
      paddingRight: 10,
    },
    cashTenderedInput: {
      fontSize: 30,
    },
    calculateButtonView: {
      flex: 1,
      justifyContent: "flex-end",
      alignItems: "center",
    },
    calculateButton: {
      justifyContent: "center",
      alignItems: "center",
      borderColor: "#D3D3D3",
      borderWidth: 1,
      borderRadius: 50,      
      height: 70,
      width: 70,
    },
    calculateButtonText: {
      color: "#2d3142"      
    },
});