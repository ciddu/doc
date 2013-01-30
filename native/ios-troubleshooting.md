# Troubleshooting Issues on iOS

## Overview

When your game becomes unresponsive it may be due to a JavaScript exception.  Check the JavaScript logs (see below) to figure out what caused the problem.

## Using iOS Devices

General knowledge of how to use iOS devices is helpful while solving game problems:

### Uninstalling Games

To uninstall a game on iOS:

1. Navigate to the home screen.
2. Tap and hold on the game icon until the icon starts to shiver.
3. Tap the (X) that appears and tap [Delete].
4. Press the Home button to exit the delete mode.

### Force-Quitting Games

To force-quit a game on an iPad:

1. Tap the Home button to return to the home screen.
2. Double-tap the Home button, revealing an icon list at the bottom.
3. Tap and hold on the game icon in the revealed list at the bottom until the icon starts to shiver.
4. Tap the (-) that appears to force-quit the game.
5. Tap the Home button to exit the force-quit mode.
6. Tap the Home button again to return to the home screen.

## Watching JavaScript Logs

JavaScript logs are generated when you use `console.log` from within your code, and the Game Closure SDK will also write out helpful messages that may point you in the right direction.

When using the Test App, you will use the Native Tools tab console window to watch the logs for your game.  This also gives you the ability to set breakpoints and inspect running JavaScript.

When building with Xcode, the logs will scroll in the Debug area at the bottom of the Xcode project window in the right side tab.

When the Xcode debugger is detached you can still view the logs of a connected device using the Organizer, which may be accessed from the Window menu.  Select the devices tab in the Organizer and scroll down the list of devices to select the "Console" item under the device you have connected.

## Sound Problems

On iOS you cannot play .OGG audio, so ensure that your sound files are in .MP3 format as discussed in the [audio production guide](../guides/audio-assets.html).  With the Game Closure SDK, you can easily support both .OGG for Android and .MP3 for iOS by having two copies of each sound file.  When building, `basil` will take the .OGG version when it can be used on the target platform (Android for example) and will fall back to the .MP3 extension version if needed (iOS).  Inside your game, name your sound files with a .MP3 extension rather than .OGG.

On iOS devices there is a switch that can mute audio, so make sure that did not get flipped by accident.

There is also a hidden audio menu that you can access by double-tapping the Home button and swiping the bottom icon ribbon that appears to the right.  Verify that the audio controls do not have sound muted there.

## Device Communication Failures

Sometimes Xcode will be unable to communicate with the device.  First attempt to Stop the Xcode process and restart it.  Uninstall your game.  Then restart Xcode and try reinstalling.

If this doesn't help, rebooting the iOS device is sometimes the only option to restore communications.  This mainly seems to happen when breaking connection while using native breakpoints in Xcode.

## Advanced: Debugging Native Code

If the native SDK code is crashing and you want to help looking into the issue, then you will want to go into the Build Settings for the Xcode project and change some options to enable debugging:

+ Generate Debug Symbols: `Yes`
+ Link-Time Optimization: `Yes`
+ Optimization Level: `None [-O0]`
+ Unroll Loops: `No`

Thanks in advance!