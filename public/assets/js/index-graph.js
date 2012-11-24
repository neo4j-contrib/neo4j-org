jsPlumb.bind('ready',function(){

	var color = "#00546A";

	jsPlumb.importDefaults({
		// notice the 'curviness' argument to this Bezier curve.  the curves on this page are far smoother
		// than the curves on the first demo, which use the default curviness value.
        RenderMode : jsPlumb.SVG,
		Connector : [ "Bezier", { curviness:90 } ],
		//DragOptions : { cursor: "pointer", zIndex:2000 },
		PaintStyle : { strokeStyle:color, lineWidth:10 },
		EndpointStyle : "Blank" // { radius: 10, fillStyle: "blue" }
		// HoverPaintStyle : {strokeStyle:"#ec9f2e" },
		// EndpointHoverStyle : {fillStyle:"#ec9f2e" },
		// Anchors :  [ "BottomCenter", "TopCenter" ,"LeftMiddle","RightMiddle"]
	});
	
	// declare some common values:
	var arrowCommon = { foldback:0.6, fillStyle:color, width:34, length: 44 },
		// use three-arg spec to create two different arrows with the common values:
		overlays = [
			[ "Arrow", { location:0.98 }, arrowCommon ]
			//[ "Arrow", { location:0.3, direction:-1 }, arrowCommon ]
		];

	jsPlumb.connect({source:"learn", target:"create",detachable:false,anchors:["RightMiddle","LeftMiddle"], overlays:overlays}); // , detachable:true, reattach:true
	jsPlumb.connect({source:"learn", target:"download",detachable:false,anchors:["TopCenter","LeftMiddle"], overlays:overlays});
    jsPlumb.connect({source:"create", target:"participate",detachable:false,anchors:["RightMiddle","LeftMiddle"], overlays:overlays});
    jsPlumb.connect({source:"download", target:"create",detachable:false,anchors:["BottomCenter","TopCenter"], overlays:overlays});
    jsPlumb.connect({source:"download", target:"participate",detachable:false,anchors:["RightMiddle","TopCenter"], overlays:overlays});

	jsPlumb.draggable(jsPlumb.getSelector(".node"));
});
