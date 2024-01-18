gdjs.Blank_32_40copy_41Code = {};
gdjs.Blank_32_40copy_41Code.GDbcObjects1= [];
gdjs.Blank_32_40copy_41Code.GDbcObjects2= [];
gdjs.Blank_32_40copy_41Code.GDblObjects1= [];
gdjs.Blank_32_40copy_41Code.GDblObjects2= [];
gdjs.Blank_32_40copy_41Code.GDT_9595BObjects1= [];
gdjs.Blank_32_40copy_41Code.GDT_9595BObjects2= [];
gdjs.Blank_32_40copy_41Code.GDT_9595B2Objects1= [];
gdjs.Blank_32_40copy_41Code.GDT_9595B2Objects2= [];
gdjs.Blank_32_40copy_41Code.GDetcObjects1= [];
gdjs.Blank_32_40copy_41Code.GDetcObjects2= [];
gdjs.Blank_32_40copy_41Code.GDsub_9595zoneObjects1= [];
gdjs.Blank_32_40copy_41Code.GDsub_9595zoneObjects2= [];
gdjs.Blank_32_40copy_41Code.GDexitObjects1= [];
gdjs.Blank_32_40copy_41Code.GDexitObjects2= [];


gdjs.Blank_32_40copy_41Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("exit"), gdjs.Blank_32_40copy_41Code.GDexitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Blank_32_40copy_41Code.GDexitObjects1.length;i<l;++i) {
    if ( gdjs.Blank_32_40copy_41Code.GDexitObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Blank_32_40copy_41Code.GDexitObjects1[k] = gdjs.Blank_32_40copy_41Code.GDexitObjects1[i];
        ++k;
    }
}
gdjs.Blank_32_40copy_41Code.GDexitObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "HUB", false);
}}

}


};

gdjs.Blank_32_40copy_41Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Blank_32_40copy_41Code.GDbcObjects1.length = 0;
gdjs.Blank_32_40copy_41Code.GDbcObjects2.length = 0;
gdjs.Blank_32_40copy_41Code.GDblObjects1.length = 0;
gdjs.Blank_32_40copy_41Code.GDblObjects2.length = 0;
gdjs.Blank_32_40copy_41Code.GDT_9595BObjects1.length = 0;
gdjs.Blank_32_40copy_41Code.GDT_9595BObjects2.length = 0;
gdjs.Blank_32_40copy_41Code.GDT_9595B2Objects1.length = 0;
gdjs.Blank_32_40copy_41Code.GDT_9595B2Objects2.length = 0;
gdjs.Blank_32_40copy_41Code.GDetcObjects1.length = 0;
gdjs.Blank_32_40copy_41Code.GDetcObjects2.length = 0;
gdjs.Blank_32_40copy_41Code.GDsub_9595zoneObjects1.length = 0;
gdjs.Blank_32_40copy_41Code.GDsub_9595zoneObjects2.length = 0;
gdjs.Blank_32_40copy_41Code.GDexitObjects1.length = 0;
gdjs.Blank_32_40copy_41Code.GDexitObjects2.length = 0;

gdjs.Blank_32_40copy_41Code.eventsList0(runtimeScene);

return;

}

gdjs['Blank_32_40copy_41Code'] = gdjs.Blank_32_40copy_41Code;
