package com.investec;

// Support for bridge
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;

// Necessary packages
import android.annotation.SuppressLint;
import android.os.Build;
import java.util.Locale;

public class NativeDeviceModule extends ReactContextBaseJavaModule {
    private static ReactApplicationContext ReactContext;

    NativeDeviceModule(ReactApplicationContext context){
        super(context);
        ReactContext = context;
    }

    @Override
    public String getName(){
        return "NativeDeviceModule";
    }

    @ReactMethod
    public void isEmulator(Promise p) {
      p.resolve(checkEmulator());
    }

    @SuppressLint("HardwareIds")
  @ReactMethod(isBlockingSynchronousMethod = true)
  public boolean checkEmulator() {
    return Build.FINGERPRINT.startsWith("generic")
            || Build.FINGERPRINT.startsWith("unknown")
            || Build.MODEL.contains("google_sdk")
            || Build.MODEL.toLowerCase(Locale.ROOT).contains("droid4x")
            || Build.MODEL.contains("Emulator")
            || Build.MODEL.contains("Android SDK built for x86")
            || Build.MANUFACTURER.contains("Genymotion")
            || Build.HARDWARE.contains("goldfish")
            || Build.HARDWARE.contains("ranchu")
            || Build.HARDWARE.contains("vbox86")
            || Build.PRODUCT.contains("sdk")
            || Build.PRODUCT.contains("google_sdk")
            || Build.PRODUCT.contains("sdk_google")
            || Build.PRODUCT.contains("sdk_x86")
            || Build.PRODUCT.contains("vbox86p")
            || Build.PRODUCT.contains("emulator")
            || Build.PRODUCT.contains("simulator")
            || Build.BOARD.toLowerCase(Locale.ROOT).contains("nox")
            || Build.BOOTLOADER.toLowerCase(Locale.ROOT).contains("nox")
            || Build.HARDWARE.toLowerCase(Locale.ROOT).contains("nox")
            || Build.PRODUCT.toLowerCase(Locale.ROOT).contains("nox")
            || Build.SERIAL.toLowerCase(Locale.ROOT).contains("nox")
            || (Build.BRAND.startsWith("generic") && Build.DEVICE.startsWith("generic"));
  }

}