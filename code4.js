gdjs.linkyCode = {};
gdjs.linkyCode.GDbcObjects1= [];
gdjs.linkyCode.GDbcObjects2= [];
gdjs.linkyCode.GDblObjects1= [];
gdjs.linkyCode.GDblObjects2= [];
gdjs.linkyCode.GDT_9595BObjects1= [];
gdjs.linkyCode.GDT_9595BObjects2= [];
gdjs.linkyCode.GDT_9595B2Objects1= [];
gdjs.linkyCode.GDT_9595B2Objects2= [];
gdjs.linkyCode.GDetcObjects1= [];
gdjs.linkyCode.GDetcObjects2= [];
gdjs.linkyCode.GDsub_9595zoneObjects1= [];
gdjs.linkyCode.GDsub_9595zoneObjects2= [];
gdjs.linkyCode.GDexitObjects1= [];
gdjs.linkyCode.GDexitObjects2= [];
gdjs.linkyCode.GDtktObjects1= [];
gdjs.linkyCode.GDtktObjects2= [];


gdjs.linkyCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("exit"), gdjs.linkyCode.GDexitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.linkyCode.GDexitObjects1.length;i<l;++i) {
    if ( gdjs.linkyCode.GDexitObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.linkyCode.GDexitObjects1[k] = gdjs.linkyCode.GDexitObjects1[i];
        ++k;
    }
}
gdjs.linkyCode.GDexitObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "HUB", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("tkt"), gdjs.linkyCode.GDtktObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.linkyCode.GDtktObjects1.length;i<l;++i) {
    if ( gdjs.linkyCode.GDtktObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.linkyCode.GDtktObjects1[k] = gdjs.linkyCode.GDtktObjects1[i];
        ++k;
    }
}
gdjs.linkyCode.GDtktObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://www.tiktok.com/@boyz.in.action?is_from_webapp=1&sender_device=pc", runtimeScene);
}}

}


};

gdjs.linkyCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.linkyCode.GDbcObjects1.length = 0;
gdjs.linkyCode.GDbcObjects2.length = 0;
gdjs.linkyCode.GDblObjects1.length = 0;
gdjs.linkyCode.GDblObjects2.length = 0;
gdjs.linkyCode.GDT_9595BObjects1.length = 0;
gdjs.linkyCode.GDT_9595BObjects2.length = 0;
gdjs.linkyCode.GDT_9595B2Objects1.length = 0;
gdjs.linkyCode.GDT_9595B2Objects2.length = 0;
gdjs.linkyCode.GDetcObjects1.length = 0;
gdjs.linkyCode.GDetcObjects2.length = 0;
gdjs.linkyCode.GDsub_9595zoneObjects1.length = 0;
gdjs.linkyCode.GDsub_9595zoneObjects2.length = 0;
gdjs.linkyCode.GDexitObjects1.length = 0;
gdjs.linkyCode.GDexitObjects2.length = 0;
gdjs.linkyCode.GDtktObjects1.length = 0;
gdjs.linkyCode.GDtktObjects2.length = 0;

gdjs.linkyCode.eventsList0(runtimeScene);

return;

}

gdjs['linkyCode'] = gdjs.linkyCode;
