//
//  Helper.m
//  gymnew
//
//  Created by Thanh Pham on 8/18/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import "Helper.h"
#import <React/RCTBridge.h>

@implementation Helper

@synthesize bridge = _bridge;

RCT_EXPORT_MODULE();
- (NSDictionary *)constantsToExport
{
  NSString *language = [[[NSBundle mainBundle] preferredLocalizations] objectAtIndex:0];
  
  NSLocale *locale = [NSLocale currentLocale];
  NSString *countryCode = [locale objectForKey: NSLocaleCountryCode];
  
  NSLocale *usLocale = [[NSLocale alloc] initWithLocaleIdentifier:@"en_US"];
  NSString *country = [usLocale displayNameForKey: NSLocaleCountryCode value: countryCode];
  
  
  return @{@"appVersion"  : [[NSBundle mainBundle] objectForInfoDictionaryKey:@"CFBundleShortVersionString"],
           @"buildVersion": [[NSBundle mainBundle] objectForInfoDictionaryKey:(NSString *)kCFBundleVersionKey],
           @"bundleIdentifier"  : [[NSBundle mainBundle] bundleIdentifier],
           @"locale": language,
           @"country": country,
           @"countryCode": countryCode
           };
  
}

+ (BOOL)requiresMainQueueSetup
{
  return YES;
}

- (void)loadBundle {
  [_bridge reload];
}

RCT_EXPORT_METHOD(restart) {
  exit(0);
}
@end
