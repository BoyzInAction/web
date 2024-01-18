gdjs.youtubeCode = {};
gdjs.youtubeCode.GDbcObjects1= [];
gdjs.youtubeCode.GDbcObjects2= [];
gdjs.youtubeCode.GDblObjects1= [];
gdjs.youtubeCode.GDblObjects2= [];
gdjs.youtubeCode.GDT_9595BObjects1= [];
gdjs.youtubeCode.GDT_9595BObjects2= [];
gdjs.youtubeCode.GDT_9595B2Objects1= [];
gdjs.youtubeCode.GDT_9595B2Objects2= [];
gdjs.youtubeCode.GDetcObjects1= [];
gdjs.youtubeCode.GDetcObjects2= [];
gdjs.youtubeCode.GDsub_9595zoneObjects1= [];
gdjs.youtubeCode.GDsub_9595zoneObjects2= [];
gdjs.youtubeCode.GDexitObjects1= [];
gdjs.youtubeCode.GDexitObjects2= [];
gdjs.youtubeCode.GDzavinacObjects1= [];
gdjs.youtubeCode.GDzavinacObjects2= [];
gdjs.youtubeCode.GDzavinac_9595znakObjects1= [];
gdjs.youtubeCode.GDzavinac_9595znakObjects2= [];
gdjs.youtubeCode.GD_95954kObjects1= [];
gdjs.youtubeCode.GD_95954kObjects2= [];
gdjs.youtubeCode.GDkameryObjects1= [];
gdjs.youtubeCode.GDkameryObjects2= [];
gdjs.youtubeCode.GD_959530_959560_9595fpsObjects1= [];
gdjs.youtubeCode.GD_959530_959560_9595fpsObjects2= [];
gdjs.youtubeCode.GD_959530_959560_9595fps_95952Objects1= [];
gdjs.youtubeCode.GD_959530_959560_9595fps_95952Objects2= [];
gdjs.youtubeCode.GDhdObjects1= [];
gdjs.youtubeCode.GDhdObjects2= [];
gdjs.youtubeCode.GD_959560_9595plus_9595fpsObjects1= [];
gdjs.youtubeCode.GD_959560_9595plus_9595fpsObjects2= [];
gdjs.youtubeCode.GD_959560_9595fps2Objects1= [];
gdjs.youtubeCode.GD_959560_9595fps2Objects2= [];
gdjs.youtubeCode.GDsubObjects1= [];
gdjs.youtubeCode.GDsubObjects2= [];
gdjs.youtubeCode.GDDNDObjects1= [];
gdjs.youtubeCode.GDDNDObjects2= [];
gdjs.youtubeCode.GDwrngObjects1= [];
gdjs.youtubeCode.GDwrngObjects2= [];
gdjs.youtubeCode.GDretryObjects1= [];
gdjs.youtubeCode.GDretryObjects2= [];


gdjs.youtubeCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("exit"), gdjs.youtubeCode.GDexitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.youtubeCode.GDexitObjects1.length;i<l;++i) {
    if ( gdjs.youtubeCode.GDexitObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.youtubeCode.GDexitObjects1[k] = gdjs.youtubeCode.GDexitObjects1[i];
        ++k;
    }
}
gdjs.youtubeCode.GDexitObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "HUB", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("sub"), gdjs.youtubeCode.GDsubObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.youtubeCode.GDsubObjects1.length;i<l;++i) {
    if ( gdjs.youtubeCode.GDsubObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.youtubeCode.GDsubObjects1[k] = gdjs.youtubeCode.GDsubObjects1[i];
        ++k;
    }
}
gdjs.youtubeCode.GDsubObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DND"), gdjs.youtubeCode.GDDNDObjects1);
gdjs.copyArray(runtimeScene.getObjects("retry"), gdjs.youtubeCode.GDretryObjects1);
gdjs.copyArray(runtimeScene.getObjects("wrng"), gdjs.youtubeCode.GDwrngObjects1);
{gdjs.evtTools.window.openURL("https://www.youtube.com/@boyz.in.action.official?sub_confirmation=1", runtimeScene);
}{for(var i = 0, len = gdjs.youtubeCode.GDDNDObjects1.length ;i < len;++i) {
    gdjs.youtubeCode.GDDNDObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.youtubeCode.GDwrngObjects1.length ;i < len;++i) {
    gdjs.youtubeCode.GDwrngObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.youtubeCode.GDretryObjects1.length ;i < len;++i) {
    gdjs.youtubeCode.GDretryObjects1[i].hide(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DND"), gdjs.youtubeCode.GDDNDObjects1);
gdjs.copyArray(runtimeScene.getObjects("retry"), gdjs.youtubeCode.GDretryObjects1);
gdjs.copyArray(runtimeScene.getObjects("wrng"), gdjs.youtubeCode.GDwrngObjects1);
{for(var i = 0, len = gdjs.youtubeCode.GDDNDObjects1.length ;i < len;++i) {
    gdjs.youtubeCode.GDDNDObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.youtubeCode.GDwrngObjects1.length ;i < len;++i) {
    gdjs.youtubeCode.GDwrngObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.youtubeCode.GDretryObjects1.length ;i < len;++i) {
    gdjs.youtubeCode.GDretryObjects1[i].hide();
}
}}

}


};

gdjs.youtubeCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.youtubeCode.GDbcObjects1.length = 0;
gdjs.youtubeCode.GDbcObjects2.length = 0;
gdjs.youtubeCode.GDblObjects1.length = 0;
gdjs.youtubeCode.GDblObjects2.length = 0;
gdjs.youtubeCode.GDT_9595BObjects1.length = 0;
gdjs.youtubeCode.GDT_9595BObjects2.length = 0;
gdjs.youtubeCode.GDT_9595B2Objects1.length = 0;
gdjs.youtubeCode.GDT_9595B2Objects2.length = 0;
gdjs.youtubeCode.GDetcObjects1.length = 0;
gdjs.youtubeCode.GDetcObjects2.length = 0;
gdjs.youtubeCode.GDsub_9595zoneObjects1.length = 0;
gdjs.youtubeCode.GDsub_9595zoneObjects2.length = 0;
gdjs.youtubeCode.GDexitObjects1.length = 0;
gdjs.youtubeCode.GDexitObjects2.length = 0;
gdjs.youtubeCode.GDzavinacObjects1.length = 0;
gdjs.youtubeCode.GDzavinacObjects2.length = 0;
gdjs.youtubeCode.GDzavinac_9595znakObjects1.length = 0;
gdjs.youtubeCode.GDzavinac_9595znakObjects2.length = 0;
gdjs.youtubeCode.GD_95954kObjects1.length = 0;
gdjs.youtubeCode.GD_95954kObjects2.length = 0;
gdjs.youtubeCode.GDkameryObjects1.length = 0;
gdjs.youtubeCode.GDkameryObjects2.length = 0;
gdjs.youtubeCode.GD_959530_959560_9595fpsObjects1.length = 0;
gdjs.youtubeCode.GD_959530_959560_9595fpsObjects2.length = 0;
gdjs.youtubeCode.GD_959530_959560_9595fps_95952Objects1.length = 0;
gdjs.youtubeCode.GD_959530_959560_9595fps_95952Objects2.length = 0;
gdjs.youtubeCode.GDhdObjects1.length = 0;
gdjs.youtubeCode.GDhdObjects2.length = 0;
gdjs.youtubeCode.GD_959560_9595plus_9595fpsObjects1.length = 0;
gdjs.youtubeCode.GD_959560_9595plus_9595fpsObjects2.length = 0;
gdjs.youtubeCode.GD_959560_9595fps2Objects1.length = 0;
gdjs.youtubeCode.GD_959560_9595fps2Objects2.length = 0;
gdjs.youtubeCode.GDsubObjects1.length = 0;
gdjs.youtubeCode.GDsubObjects2.length = 0;
gdjs.youtubeCode.GDDNDObjects1.length = 0;
gdjs.youtubeCode.GDDNDObjects2.length = 0;
gdjs.youtubeCode.GDwrngObjects1.length = 0;
gdjs.youtubeCode.GDwrngObjects2.length = 0;
gdjs.youtubeCode.GDretryObjects1.length = 0;
gdjs.youtubeCode.GDretryObjects2.length = 0;

gdjs.youtubeCode.eventsList0(runtimeScene);

return;

}

gdjs['youtubeCode'] = gdjs.youtubeCode;
