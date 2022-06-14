import React, { useState } from "react";
import styles from './styles'
import { View, Text, Image, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import PercentageChange from "../../components/PercentageChange";
import CoinPriceGraph from "../../components/CoinPriceGraph";
import { useNavigation } from "@react-navigation/native";

const historyString = JSON.stringify( [
    346327.66395342200,
550800.13690590700,
1002743.37729193000,
556088.96914149800,
782398.39051057400,
2165549.48059170000,
886054.99781961600,
1783348.98330363000,
1450012.4084436600,
2335624.7763672500,
2213323.29700659000,
3602338.40147409000,
1727438.91664366000,
2404068.26121343000,
1419644.36262488000,
2489101.85824161000,
1681288.04230973000,
2191192.77459183000,
687920.53738969100,
742260.53216364900,
1083478.66414651000,
1128950.453979670,
902700.06317683100,
1005977.34112932000,
814015.84098261500,
1900651.23807017000,
2576477.21953467000,
1154593.74718169000,
2169203.47419809000,
343814.87370230600,
239746.14415659300,
520022.28025141800,
316143.29473516600,
228621.99736197500,
815281.97121578900,
441398.97795482400,
194624.96156735900,
335809.73273907100,
376642.56827790500,
267932.49627239600,
    8635.46122628281,
437169.22716777100,
395242.85501382100,
393717.30228374300,
159400.5544715170,
282719.95215175400,
394525.2272965620,
290393.67520670300,
302122.81285980600,
438662.34986744300,
646985.05896472800,
808682.97421350700,
728448.95015058700,
1011643.71787627000,
914147.40670949000,
143173.87741810400,
133155.22425142100,
286111.27419199700,
517928.15937086900,
187035.9302932320,
554218.99528626000,
742031.80804366300,
537738.73885240000,
322571.54475494300,
318561.14441120100,
593715.32534194800,
1467762.5128992500,
410588.18263143600,
407037.37304606900,
549765.7396527120,
768289.37344841000,
866895.78668327200,
1941173.64489666000,
3101064.2334216200,
1766469.69428774000,
2618853.47604485000,
830478.96680642500,
1468096.70305090000,
2371830.50195780000,
1821275.62702876000,
518925.64885306300,
525971.85615025600,
653643.03744905200,
859585.29715011500,
1247152.84472460000,
318771.84952526000,
323442.56085770700,
393752.009415414,
459201.26505434700,
550878.38040719700,
396520.18066236300,
312978.04868995200,
897951.33188405700,
825969.36318105000,
473699.15470920100,
232541.1440073830,
366492.06592191900,
288679.13042140900,
259270.89838700600,
287409.43291743500,
540151.15678474100
])


const CoinDetailsScreen = (props) => {

    const [coinData, setCoinData] = useState({
        id: '1',
        name: 'BTC',
        image: 'https://cdn-icons-png.flaticon.com/512/1490/1490849.png',
        symbol: 'BTC',
        valueChange: -2.12,
        valueChange1D: -3.12,
        valueChange7D: 1.12,
        price: 8888,
        amount: 82.88,
    })


    const navigation =  useNavigation();

    const onBuy = () => {
        navigation.navigate('CoinExchange', { isBuy : true, coinData})
        
    }
    const onSell = () => {
        navigation.navigate('CoinExchange', { isBuy : false, coinData})
    }
    return (
        <View style={styles.root}>
            <View style={styles.topContainer}>
                <View style={styles.left}>
                    <Image style={styles.image} source={{ uri: coinData.image}}/>
                    <View >
                        <Text style={styles.name}>{coinData.name}</Text>
                        <Text style={styles.symbol}>{coinData.symbol}</Text>
                    </View>
                </View>
                <View style={{alignItems: 'flex-end'}}>
                    <AntDesign name={'staro'} size={30} color={'#2f95dc'}/>
                </View>
            </View>
            <View style={styles.row}>
                <View>
                    <Text style={styles.label}>Current Price</Text>
                    <Text style={styles.value}>{coinData.price}</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <View style={styles.valueContainer}>
                        <Text style={styles.label}>1 hour</Text>
                        <PercentageChange value={coinData.valueChange}/>
                    </View>
                    <View style={styles.valueContainer}>
                        <Text style={styles.label}>1 day</Text>
                        <PercentageChange value={coinData.valueChange1D}/>                    
                    </View>
                    <View style={styles.valueContainer}>
                        <Text style={styles.label}>7 days</Text>
                        <PercentageChange value={coinData.valueChange7D}/>                    
                    </View>
                </View>
            </View>

            <CoinPriceGraph dataString={historyString}/>

            <View style={styles.row}>
                <Text>Position</Text>
                <Text>{coinData.symbol} {coinData.amount} 
                {' '}
                (${coinData.price * coinData.amount})</Text>
            </View>


            <View style={[styles.row, {marginTop: 'auto'}]}>
                <Pressable style={[styles.button, {backgroundColor: '#20b100'}]} onPress={onBuy}>
                    <Text style={styles.buttonText}>Buy</Text>
                </Pressable>
                <Pressable style={[styles.button, {backgroundColor: '#ff0000'}]} onPress={onSell}>
                <Text style={styles.buttonText}>Sell</Text>
                </Pressable>
            </View>
        </View>
        );
}
 
export default CoinDetailsScreen;