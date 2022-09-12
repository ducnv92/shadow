
# react-native-shadow-android

## Getting started

`$ npm install react-native-shadow-android --save`

### Mostly automatic installation

`$ react-native link react-native-shadow-android`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-shadow-android` and add `RNShadowAndroid.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNShadowAndroid.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNShadowAndroidPackage;` to the imports at the top of the file
  - Add `new RNShadowAndroidPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-shadow-android'
  	project(':react-native-shadow-android').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-shadow-android/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-shadow-android')
  	```

#### Windows
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `RNShadowAndroid.sln` in `node_modules/react-native-shadow-android/windows/RNShadowAndroid.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using Shadow.Android.RNShadowAndroid;` to the usings at the top of the file
  - Add `new RNShadowAndroidPackage()` to the `List<IReactPackage>` returned by the `Packages` method


## Usage
```javascript
import RNShadowAndroid from 'react-native-shadow-android';

// TODO: What to do with the module?
RNShadowAndroid;
```
  