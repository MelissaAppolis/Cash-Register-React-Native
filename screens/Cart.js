// Cart Tab/Screen
import React, { Component } from 'react';
import {
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import Styles from '../Styles';

export default class Cart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cashTendered: "",
            change: (0.00).toFixed(2)
        };
    }

    render() {
        const totalAmount = this.props.navigation.state.params.totalAmount;
        const navigation = this.props.navigation;
        return (
            <View style={Styles.cartScreenView}>
                <TouchableOpacity style={Styles.addToCartButton}
                    onPress={() => navigation.goBack()}>
                    <Text style={Styles.addToCartButtonText}>GO BACK TO KEYPAD</Text>
                </TouchableOpacity>
                <View style={Styles.cartContainer}>
                    <View style={Styles.receiptContainer}>
                        <View style={Styles.receiptRow}>
                            <Text style={Styles.rowCaption}>total</Text>
                            <View style={Styles.amountView}>
                                <Text style={Styles.randSign}>R</Text>
                                <Text style={Styles.totalRowAmount}>{totalAmount}</Text>
                            </View>
                        </View>
                        {/*<View style={Styles.receiptRow}>
                            <Text style={Styles.rowCaption}>cash tendered</Text>
                            <View style={Styles.amountView}>
                                <Text style={Styles.dollarSign}>$</Text>
                                <TextInput
                                    style={Styles.cashTenderedInput}
                                    keyboardType="numeric"
                                    onChangeText={(cashTendered) => this.setState({cashTendered})}
                                    value={this.state.cashTendered}>
                                </TextInput>
                            </View>
                        </View>
                        <View style={Styles.receiptRow}>
                            <Text style={Styles.rowCaption}>change</Text>
                            <View style={Styles.amountView}>
                                <Text style={Styles.dollarSign}>$</Text>
                                <Text style={Styles.totalRowAmount}>{this.state.change}</Text>
                            </View>
                        </View>*/}
                    </View>
                    {/*<View style={Styles.calculateButtonView}>
                        <TouchableOpacity style={Styles.calculateButton}>
                            <Text style={Styles.calculateButtonText}>&#10004;</Text>
                        </TouchableOpacity>
                    </View>*/}
                </View>
            </View>
        );
    }
}