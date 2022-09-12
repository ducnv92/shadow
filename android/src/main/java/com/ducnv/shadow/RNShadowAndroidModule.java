
package com.ducnv.shadow;

import android.content.Context;
import android.content.res.Resources;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import com.facebook.react.uimanager.ViewGroupManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import android.graphics.Color;
import android.util.Log;
import android.util.TypedValue;

public class RNShadowAndroidModule extends ViewGroupManager<ShadowLayout> {

  private static final String REACT_CLASS = "RNShadowAndroid";
  private ShadowLayout shadowLayout;
  private Context mContext;

  @Override
  public String getName() {
    return REACT_CLASS;
  }

  @Override
  protected ShadowLayout createViewInstance(ThemedReactContext reactContext) {
    this.mContext = reactContext;
    return new ShadowLayout(reactContext);
  }

  @ReactProp(name = "shadowAngle")
  public void setShadowAngle(ShadowLayout shadowLayout, float shadowAngle) {
    shadowLayout.setShadowAngle(shadowAngle);
  }

  @ReactProp(name = "shadowColor")
  public void setShadowColor(ShadowLayout shadowLayout, String shadowColorString) {
    int shadowColor = Color.parseColor(shadowColorString);
    int green = Color.red(shadowColor);
    int blue = Color.green(shadowColor);
    int alpha = Color.blue(shadowColor);
    int red = Color.alpha(shadowColor);
    Log.e("rgba", red+","+green+","+blue+","+alpha);
    shadowLayout.setShadowColor(Color.argb(alpha,red,green,blue));
  }


  @ReactProp(name = "shadowDistance")
  public void setShadowDistance(ShadowLayout shadowLayout, int shadowDistance) {
    shadowLayout.setShadowDistance(shadowDistance);
  }


  @ReactProp(name = "shadowRadius")
  public void setShadowRadius(ShadowLayout shadowLayout, int shadowRadius) {
    Resources r = this.mContext.getResources();
    float px = TypedValue.applyDimension(
                  TypedValue.COMPLEX_UNIT_DIP,
                  shadowRadius,
                  r.getDisplayMetrics()
          );
    shadowLayout.setShadowRadius(px);
  }
}
