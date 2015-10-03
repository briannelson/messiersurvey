// Created by iWeb 2.0.2 local-build-20080101

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-5,5,10,324),url:'Contact_files/stroke.png'},{rect:new IWRect(-5,-5,10,10),url:'Contact_files/stroke_1.png'},{rect:new IWRect(5,-5,250,10),url:'Contact_files/stroke_2.png'},{rect:new IWRect(255,-5,10,10),url:'Contact_files/stroke_3.png'},{rect:new IWRect(255,5,10,324),url:'Contact_files/stroke_4.png'},{rect:new IWRect(255,329,10,11),url:'Contact_files/stroke_5.png'},{rect:new IWRect(5,329,250,11),url:'Contact_files/stroke_6.png'},{rect:new IWRect(-5,329,10,11),url:'Contact_files/stroke_7.png'}],new IWSize(260,335))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Contact_files/ContactMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');Widget.onload();fixAllIEPNGs('Media/transparent.gif');fixupAllIEPNGBGs();applyEffects()}
function onPageUnload()
{Widget.onunload();}
