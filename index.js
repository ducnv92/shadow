import React from 'react'
import {View, Platform } from 'react-native';
import RNShadowAndroid from './RNShadowAndroid';


class ShadowView extends React.Component{

    constructor (props){
        super(props)
        this.state = {
            width: 0,
            height: 0
        }
    }

    render(){
        return(
            <View
                style={[{}, this.props.style?(this.props.style.flex?{flex: this.props.style.flex}: {}):{}]}
            >
                {
                    Platform.OS==='android'?
                        <View
                            onLayout={(e)=>{
                                this.setState({
                                    width: e.nativeEvent.layout.width,
                                    height: e.nativeEvent.layout.height
                                })
                            }}
                            style={[{
                            },
                                this.props.style? (this.props.style.flex?{flex: this.props.style.flex} : {}):{},
                                this.props.style? (this.props.style.marginVerticalAndroid?{marginVertical: this.props.style.marginVerticalAndroid} : {}):{},
                                this.props.style? (this.props.style.marginHorizontal?{marginHorizontal: this.props.style.marginHorizontalAndroid} : {}):{},
                                this.props.style? (this.props.style.borderRadius?{borderRadius: this.props.style.borderRadius} : {}):{}
                            ]}
                        >
                            <RNShadowAndroid
                                style={[this.props.style,{
                                    backgroundColor: 'transparent',
                                     width: this.props.style.width?this.props.style.width:this.state.width,
                                    height: this.state.height,
                                    position: 'absolute'}]}
                                shadowAngle={this.props.style?(this.props.style.shadowAngle?this.props.style.shadowAngle:0):0}
                                shadowColor={this.props.style?(this.props.style.shadowColor.toString()):"#0000002b"}
                                shadowDistance={this.props.style?(this.props.style.shadowDistance?this.props.style.shadowDistance:0):0}
                                shadowRadius={this.props.style?(this.props.style.shadowRadius?this.props.style.shadowRadius:0):0}
                            >
                                <View style={{
                                    backgroundColor:'white',
                                    borderRadius:this.props.style.borderRadius,
                                    width: this.state.width,
                                    height: this.state.height,
                                }} />

                            </RNShadowAndroid>
                            <View style={[{ backgroundColor: 'transparent'}, this.props.style?(this.props.style.flex?{flex: this.props.style.flex}: {}):{}]}>
                                <View {...this.props} style={[{margin: this.props.style.shadowRadius, backgroundColor: 'transparent'}, this.props.style?(this.props.style.flex?{flex: this.props.style.flex}: {}):{}]}>
                                    {
                                        this.props.children
                                    }
                                </View>
                            </View>
                        </View>
                        :
                        <View style={[{margin: this.props.style.shadowRadius/2}, this.props.style?(this.props.style.flex?{flex: this.props.style.flex}: {}):{}]}>
                            <View {...this.props} style={[this.props.style,{margin: this.props.style.shadowRadius}]} />
                        </View>
                }

            </View>
        )
    }

}

export default ShadowView;
