// KEYPAD Tab/Screen
import React, { Component } from 'react';
import {
    StatusBar,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import Styles from '../Styles';


export default class Keypad extends Component {

    constructor(props) {
        super(props);
        var initialPrice = (0).toFixed(2);
        
        this.state = {
            price: initialPrice,
            total: initialPrice
        }
    }

    onKeypadButtonPress(key) {
        switch (typeof key) {
            case 'number':
                return this.handleNumberInput(key);
            case 'string':
                return this.handleStringInput(key);
        }
    }

    handleStringInput(string) {
        switch (string) {
            case 'C':
                let price = (0).toFixed(2);
                this.setState({
                    price: price
                })
                break;
            case '+':
                this.addToTotal(this.state.price);
                this.handleStringInput('C');
                break;
        }
    }

    addToTotal(number) {
        let total = this.state.total;
        total = parseFloat(total) + parseFloat(this.state.price);
        total = total.toFixed(2);

        this.setState({
            total: total
        })
    }

    handleNumberInput(number) {
        let price = (this.state.price * 1000) + number;
        price = price / 100;
        price = price.toFixed(2);

        this.setState({
            price: price
        })
    }

    render() {
        const navigation = this.props.navigation;
        return (
            <View style={Styles.keyPadScreenView}>
                <StatusBar backgroundColor="#282828" barStyle="light-content"/>
                <TouchableOpacity style={Styles.addToCartButton}
                    onPress={() => navigation.navigate('Cart', {totalAmount: this.state.total})}>
                    <Text style={Styles.addToCartButtonText}>CHARGE R{this.state.total}</Text>
                </TouchableOpacity>
                <View style={Styles.keypadDisplay}>
                    <TouchableOpacity style={Styles.clearButton} onPress={() => this.onKeypadButtonPress('C')}>
                        <Text style={Styles.clearButtonText}>C</Text>
                    </TouchableOpacity>
                    <View style={Styles.priceDisplayView}>
                        <Text style={Styles.keypadDisplayText} numberOfLines={1}>{this.state.price}</Text>
                    </View>
                </View>
                <View style={Styles.keypadInput}>
                    <View style={Styles.keypadInputRow}>
                        <TouchableOpacity style={Styles.keypadInputButton} onPress={() => this.onKeypadButtonPress(1)}>
                            <Text style={Styles.keypadInputButtonText}>1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.keypadInputButton} onPress={() => this.onKeypadButtonPress(2)}>
                            <Text style={Styles.keypadInputButtonText}>2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.keypadInputButton} onPress={() => this.onKeypadButtonPress(3)}>
                            <Text style={Styles.keypadInputButtonText}>3</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={Styles.keypadInputRow}>
                        <TouchableOpacity style={Styles.keypadInputButton} onPress={() => this.onKeypadButtonPress(4)}>
                            <Text style={Styles.keypadInputButtonText}>4</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.keypadInputButton} onPress={() => this.onKeypadButtonPress(5)}>
                            <Text style={Styles.keypadInputButtonText}>5</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.keypadInputButton} onPress={() => this.onKeypadButtonPress(6)}>
                            <Text style={Styles.keypadInputButtonText}>6</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={Styles.keypadInputRow}>
                        <TouchableOpacity style={Styles.keypadInputButton} onPress={() => this.onKeypadButtonPress(7)}>
                            <Text style={Styles.keypadInputButtonText}>7</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.keypadInputButton} onPress={() => this.onKeypadButtonPress(8)}>
                            <Text style={Styles.keypadInputButtonText}>8</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.keypadInputButton} onPress={() => this.onKeypadButtonPress(9)}>
                            <Text style={Styles.keypadInputButtonText}>9</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={Styles.keypadInputRow}>
                        <TouchableOpacity style={Styles.keypadInputButton}>
                            <Text style={Styles.keypadInputButtonText}></Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.keypadInputButton} onPress={() => this.onKeypadButtonPress(0)}>
                            <Text style={Styles.keypadInputButtonText}>0</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.keypadInputButton} onPress={() => this.onKeypadButtonPress("+")}>
                            <Text style={Styles.plusInputButton}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}