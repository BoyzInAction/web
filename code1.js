gdjs.HUBCode = {};
gdjs.HUBCode.GDbcObjects1= [];
gdjs.HUBCode.GDbcObjects2= [];
gdjs.HUBCode.GDbcObjects3= [];
gdjs.HUBCode.GDblObjects1= [];
gdjs.HUBCode.GDblObjects2= [];
gdjs.HUBCode.GDblObjects3= [];
gdjs.HUBCode.GDT_9595BObjects1= [];
gdjs.HUBCode.GDT_9595BObjects2= [];
gdjs.HUBCode.GDT_9595BObjects3= [];
gdjs.HUBCode.GDT_9595B2Objects1= [];
gdjs.HUBCode.GDT_9595B2Objects2= [];
gdjs.HUBCode.GDT_9595B2Objects3= [];
gdjs.HUBCode.GDetcObjects1= [];
gdjs.HUBCode.GDetcObjects2= [];
gdjs.HUBCode.GDetcObjects3= [];
gdjs.HUBCode.GDsub_9595zoneObjects1= [];
gdjs.HUBCode.GDsub_9595zoneObjects2= [];
gdjs.HUBCode.GDsub_9595zoneObjects3= [];
gdjs.HUBCode.GDo_9595nas_9595txtObjects1= [];
gdjs.HUBCode.GDo_9595nas_9595txtObjects2= [];
gdjs.HUBCode.GDo_9595nas_9595txtObjects3= [];
gdjs.HUBCode.GDyoutube_9595txtObjects1= [];
gdjs.HUBCode.GDyoutube_9595txtObjects2= [];
gdjs.HUBCode.GDyoutube_9595txtObjects3= [];
gdjs.HUBCode.GDlinks_9595txtObjects1= [];
gdjs.HUBCode.GDlinks_9595txtObjects2= [];
gdjs.HUBCode.GDlinks_9595txtObjects3= [];
gdjs.HUBCode.GDo_9595nas_9595btnObjects1= [];
gdjs.HUBCode.GDo_9595nas_9595btnObjects2= [];
gdjs.HUBCode.GDo_9595nas_9595btnObjects3= [];
gdjs.HUBCode.GDyoutube_9595btnObjects1= [];
gdjs.HUBCode.GDyoutube_9595btnObjects2= [];
gdjs.HUBCode.GDyoutube_9595btnObjects3= [];
gdjs.HUBCode.GDlinks_9595btnObjects1= [];
gdjs.HUBCode.GDlinks_9595btnObjects2= [];
gdjs.HUBCode.GDlinks_9595btnObjects3= [];
gdjs.HUBCode.GDgames_9595txtObjects1= [];
gdjs.HUBCode.GDgames_9595txtObjects2= [];
gdjs.HUBCode.GDgames_9595txtObjects3= [];
gdjs.HUBCode.GDgames_9595btnObjects1= [];
gdjs.HUBCode.GDgames_9595btnObjects2= [];
gdjs.HUBCode.GDgames_9595btnObjects3= [];
gdjs.HUBCode.GDpapirObjects1= [];
gdjs.HUBCode.GDpapirObjects2= [];
gdjs.HUBCode.GDpapirObjects3= [];
gdjs.HUBCode.GDpapir_9595textObjects1= [];
gdjs.HUBCode.GDpapir_9595textObjects2= [];
gdjs.HUBCode.GDpapir_9595textObjects3= [];


gdjs.HUBCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("o_nas_btn"), gdjs.HUBCode.GDo_9595nas_9595btnObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HUBCode.GDo_9595nas_9595btnObjects2.length;i<l;++i) {
    if ( gdjs.HUBCode.GDo_9595nas_9595btnObjects2[i].IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.HUBCode.GDo_9595nas_9595btnObjects2[k] = gdjs.HUBCode.GDo_9595nas_9595btnObjects2[i];
        ++k;
    }
}
gdjs.HUBCode.GDo_9595nas_9595btnObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(8857884);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 50, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("youtube_btn"), gdjs.HUBCode.GDyoutube_9595btnObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HUBCode.GDyoutube_9595btnObjects2.length;i<l;++i) {
    if ( gdjs.HUBCode.GDyoutube_9595btnObjects2[i].IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.HUBCode.GDyoutube_9595btnObjects2[k] = gdjs.HUBCode.GDyoutube_9595btnObjects2[i];
        ++k;
    }
}
gdjs.HUBCode.GDyoutube_9595btnObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(8113164);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 50, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("links_btn"), gdjs.HUBCode.GDlinks_9595btnObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HUBCode.GDlinks_9595btnObjects2.length;i<l;++i) {
    if ( gdjs.HUBCode.GDlinks_9595btnObjects2[i].IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.HUBCode.GDlinks_9595btnObjects2[k] = gdjs.HUBCode.GDlinks_9595btnObjects2[i];
        ++k;
    }
}
gdjs.HUBCode.GDlinks_9595btnObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(8399780);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 50, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("games_btn"), gdjs.HUBCode.GDgames_9595btnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HUBCode.GDgames_9595btnObjects1.length;i<l;++i) {
    if ( gdjs.HUBCode.GDgames_9595btnObjects1[i].IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.HUBCode.GDgames_9595btnObjects1[k] = gdjs.HUBCode.GDgames_9595btnObjects1[i];
        ++k;
    }
}
gdjs.HUBCode.GDgames_9595btnObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(8176388);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 50, 1);
}}

}


};gdjs.HUBCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("o_nas_btn"), gdjs.HUBCode.GDo_9595nas_9595btnObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HUBCode.GDo_9595nas_9595btnObjects2.length;i<l;++i) {
    if ( gdjs.HUBCode.GDo_9595nas_9595btnObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.HUBCode.GDo_9595nas_9595btnObjects2[k] = gdjs.HUBCode.GDo_9595nas_9595btnObjects2[i];
        ++k;
    }
}
gdjs.HUBCode.GDo_9595nas_9595btnObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "o_nas", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("youtube_btn"), gdjs.HUBCode.GDyoutube_9595btnObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HUBCode.GDyoutube_9595btnObjects2.length;i<l;++i) {
    if ( gdjs.HUBCode.GDyoutube_9595btnObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.HUBCode.GDyoutube_9595btnObjects2[k] = gdjs.HUBCode.GDyoutube_9595btnObjects2[i];
        ++k;
    }
}
gdjs.HUBCode.GDyoutube_9595btnObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "youtube", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("links_btn"), gdjs.HUBCode.GDlinks_9595btnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HUBCode.GDlinks_9595btnObjects1.length;i<l;++i) {
    if ( gdjs.HUBCode.GDlinks_9595btnObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.HUBCode.GDlinks_9595btnObjects1[k] = gdjs.HUBCode.GDlinks_9595btnObjects1[i];
        ++k;
    }
}
gdjs.HUBCode.GDlinks_9595btnObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "linky", false);
}}

}


};gdjs.HUBCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9774940);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) < 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "y2mate.com - Sneaky Adventure  Gaming Background Music HD.mp3", true, 100, 1);
}}

}


};gdjs.HUBCode.eventsList3 = function(runtimeScene) {

{


gdjs.HUBCode.eventsList0(runtimeScene);
}


{


gdjs.HUBCode.eventsList1(runtimeScene);
}


{


gdjs.HUBCode.eventsList2(runtimeScene);
}


};

gdjs.HUBCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.HUBCode.GDbcObjects1.length = 0;
gdjs.HUBCode.GDbcObjects2.length = 0;
gdjs.HUBCode.GDbcObjects3.length = 0;
gdjs.HUBCode.GDblObjects1.length = 0;
gdjs.HUBCode.GDblObjects2.length = 0;
gdjs.HUBCode.GDblObjects3.length = 0;
gdjs.HUBCode.GDT_9595BObjects1.length = 0;
gdjs.HUBCode.GDT_9595BObjects2.length = 0;
gdjs.HUBCode.GDT_9595BObjects3.length = 0;
gdjs.HUBCode.GDT_9595B2Objects1.length = 0;
gdjs.HUBCode.GDT_9595B2Objects2.length = 0;
gdjs.HUBCode.GDT_9595B2Objects3.length = 0;
gdjs.HUBCode.GDetcObjects1.length = 0;
gdjs.HUBCode.GDetcObjects2.length = 0;
gdjs.HUBCode.GDetcObjects3.length = 0;
gdjs.HUBCode.GDsub_9595zoneObjects1.length = 0;
gdjs.HUBCode.GDsub_9595zoneObjects2.length = 0;
gdjs.HUBCode.GDsub_9595zoneObjects3.length = 0;
gdjs.HUBCode.GDo_9595nas_9595txtObjects1.length = 0;
gdjs.HUBCode.GDo_9595nas_9595txtObjects2.length = 0;
gdjs.HUBCode.GDo_9595nas_9595txtObjects3.length = 0;
gdjs.HUBCode.GDyoutube_9595txtObjects1.length = 0;
gdjs.HUBCode.GDyoutube_9595txtObjects2.length = 0;
gdjs.HUBCode.GDyoutube_9595txtObjects3.length = 0;
gdjs.HUBCode.GDlinks_9595txtObjects1.length = 0;
gdjs.HUBCode.GDlinks_9595txtObjects2.length = 0;
gdjs.HUBCode.GDlinks_9595txtObjects3.length = 0;
gdjs.HUBCode.GDo_9595nas_9595btnObjects1.length = 0;
gdjs.HUBCode.GDo_9595nas_9595btnObjects2.length = 0;
gdjs.HUBCode.GDo_9595nas_9595btnObjects3.length = 0;
gdjs.HUBCode.GDyoutube_9595btnObjects1.length = 0;
gdjs.HUBCode.GDyoutube_9595btnObjects2.length = 0;
gdjs.HUBCode.GDyoutube_9595btnObjects3.length = 0;
gdjs.HUBCode.GDlinks_9595btnObjects1.length = 0;
gdjs.HUBCode.GDlinks_9595btnObjects2.length = 0;
gdjs.HUBCode.GDlinks_9595btnObjects3.length = 0;
gdjs.HUBCode.GDgames_9595txtObjects1.length = 0;
gdjs.HUBCode.GDgames_9595txtObjects2.length = 0;
gdjs.HUBCode.GDgames_9595txtObjects3.length = 0;
gdjs.HUBCode.GDgames_9595btnObjects1.length = 0;
gdjs.HUBCode.GDgames_9595btnObjects2.length = 0;
gdjs.HUBCode.GDgames_9595btnObjects3.length = 0;
gdjs.HUBCode.GDpapirObjects1.length = 0;
gdjs.HUBCode.GDpapirObjects2.length = 0;
gdjs.HUBCode.GDpapirObjects3.length = 0;
gdjs.HUBCode.GDpapir_9595textObjects1.length = 0;
gdjs.HUBCode.GDpapir_9595textObjects2.length = 0;
gdjs.HUBCode.GDpapir_9595textObjects3.length = 0;

gdjs.HUBCode.eventsList3(runtimeScene);

return;

}

gdjs['HUBCode'] = gdjs.HUBCode;
