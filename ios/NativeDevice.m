//
//  NativeDevice.m
//  Investec
//
//  Created by Sukumar Abhijeet on 19/09/20.
//

#import "NativeDevice.h"
#import <React/RCTLog.h>

@implementation NativeDevice

// To export a module named CalendarManager
RCT_EXPORT_MODULE();

- (BOOL) isEmulator {
    struct utsname systemInfo;
    uname(&systemInfo);
    NSString* deviceId = [NSString stringWithCString:systemInfo.machine
                                            encoding:NSUTF8StringEncoding];

    if ([deviceId isEqualToString:@"i386"] || [deviceId isEqualToString:@"x86_64"] ) {
        return YES;
    } else {
        return NO;
    }
}

RCT_EXPORT_METHOD(isEmulator:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject) {
    resolve(@(self.isEmulator));
}

// This would name the module AwesomeCalendarManager instead
// RCT_EXPORT_MODULE(AwesomeCalendarManager);

@end
