gdjs.o_95nasCode = {};
gdjs.o_95nasCode.GDbcObjects1= [];
gdjs.o_95nasCode.GDbcObjects2= [];
gdjs.o_95nasCode.GDblObjects1= [];
gdjs.o_95nasCode.GDblObjects2= [];
gdjs.o_95nasCode.GDT_9595BObjects1= [];
gdjs.o_95nasCode.GDT_9595BObjects2= [];
gdjs.o_95nasCode.GDT_9595B2Objects1= [];
gdjs.o_95nasCode.GDT_9595B2Objects2= [];
gdjs.o_95nasCode.GDetcObjects1= [];
gdjs.o_95nasCode.GDetcObjects2= [];
gdjs.o_95nasCode.GDsub_9595zoneObjects1= [];
gdjs.o_95nasCode.GDsub_9595zoneObjects2= [];
gdjs.o_95nasCode.GDexitObjects1= [];
gdjs.o_95nasCode.GDexitObjects2= [];
gdjs.o_95nasCode.GDTXTObjects1= [];
gdjs.o_95nasCode.GDTXTObjects2= [];
gdjs.o_95nasCode.GDLINEObjects1= [];
gdjs.o_95nasCode.GDLINEObjects2= [];
gdjs.o_95nasCode.GDjsmeObjects1= [];
gdjs.o_95nasCode.GDjsmeObjects2= [];
gdjs.o_95nasCode.GD_9595KryspakObjects1= [];
gdjs.o_95nasCode.GD_9595KryspakObjects2= [];
gdjs.o_95nasCode.GD_9595MarsObjects1= [];
gdjs.o_95nasCode.GD_9595MarsObjects2= [];
gdjs.o_95nasCode.GD_9595DVDObjects1= [];
gdjs.o_95nasCode.GD_9595DVDObjects2= [];
gdjs.o_95nasCode.GDTXT2Objects1= [];
gdjs.o_95nasCode.GDTXT2Objects2= [];
gdjs.o_95nasCode.GDTXT3Objects1= [];
gdjs.o_95nasCode.GDTXT3Objects2= [];


gdjs.o_95nasCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("exit"), gdjs.o_95nasCode.GDexitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.o_95nasCode.GDexitObjects1.length;i<l;++i) {
    if ( gdjs.o_95nasCode.GDexitObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.o_95nasCode.GDexitObjects1[k] = gdjs.o_95nasCode.GDexitObjects1[i];
        ++k;
    }
}
gdjs.o_95nasCode.GDexitObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "HUB", false);
}}

}


};

gdjs.o_95nasCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.o_95nasCode.GDbcObjects1.length = 0;
gdjs.o_95nasCode.GDbcObjects2.length = 0;
gdjs.o_95nasCode.GDblObjects1.length = 0;
gdjs.o_95nasCode.GDblObjects2.length = 0;
gdjs.o_95nasCode.GDT_9595BObjects1.length = 0;
gdjs.o_95nasCode.GDT_9595BObjects2.length = 0;
gdjs.o_95nasCode.GDT_9595B2Objects1.length = 0;
gdjs.o_95nasCode.GDT_9595B2Objects2.length = 0;
gdjs.o_95nasCode.GDetcObjects1.length = 0;
gdjs.o_95nasCode.GDetcObjects2.length = 0;
gdjs.o_95nasCode.GDsub_9595zoneObjects1.length = 0;
gdjs.o_95nasCode.GDsub_9595zoneObjects2.length = 0;
gdjs.o_95nasCode.GDexitObjects1.length = 0;
gdjs.o_95nasCode.GDexitObjects2.length = 0;
gdjs.o_95nasCode.GDTXTObjects1.length = 0;
gdjs.o_95nasCode.GDTXTObjects2.length = 0;
gdjs.o_95nasCode.GDLINEObjects1.length = 0;
gdjs.o_95nasCode.GDLINEObjects2.length = 0;
gdjs.o_95nasCode.GDjsmeObjects1.length = 0;
gdjs.o_95nasCode.GDjsmeObjects2.length = 0;
gdjs.o_95nasCode.GD_9595KryspakObjects1.length = 0;
gdjs.o_95nasCode.GD_9595KryspakObjects2.length = 0;
gdjs.o_95nasCode.GD_9595MarsObjects1.length = 0;
gdjs.o_95nasCode.GD_9595MarsObjects2.length = 0;
gdjs.o_95nasCode.GD_9595DVDObjects1.length = 0;
gdjs.o_95nasCode.GD_9595DVDObjects2.length = 0;
gdjs.o_95nasCode.GDTXT2Objects1.length = 0;
gdjs.o_95nasCode.GDTXT2Objects2.length = 0;
gdjs.o_95nasCode.GDTXT3Objects1.length = 0;
gdjs.o_95nasCode.GDTXT3Objects2.length = 0;

gdjs.o_95nasCode.eventsList0(runtimeScene);

return;

}

gdjs['o_95nasCode'] = gdjs.o_95nasCode;
