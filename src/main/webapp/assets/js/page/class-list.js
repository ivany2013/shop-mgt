$(function(){
	loadTree();
	
	
});
function addNode(code,name){
	  var jsonData={
	    name:name,
		code:code
	  };
	  $.ajax({
				type : 'POST',
				url : "/class/list/add",
				data : jsonData,
				success : function(result) {
				  if(result=='处理成功'){
				   $.msg("增加成功");
				   setTimeout(function(){window.location.reload();},1000);
				  }else{
				   $.err(result);
				  }
				}
			});
	}

function deleteNode(id){
	  var jsonData={
				id:id
			  };
			  $.ajax({
						type : 'POST',
						url : "/class/list/delete",
						data : jsonData,
						success : function(result) {
						  if(result=='处理成功'){
						    $.msg("删除成功");
						    setTimeout(function(){window.location.reload();},1000);
						  }else{
							$.err(result);
						  }
						}
					});
}

function updateNode(id,code,name){
	 var jsonData={
			    id:id,
			    name:name,
				code:code
			  };
			  $.ajax({
						type : 'POST',
						url : "/class/list/update",
						data : jsonData,
						success : function(result) {
						  if(result=='处理成功'){
							$.msg("更新成功");
							setTimeout(function(){window.location.reload();},1000);
						  }else{
							$.err(result);
						  }
						}
					});
	
}
function loadTree(){

	 /* $.jstree.defaults.contextmenu.items={
			  "create":{
			   "label":"创建",
			   "_disabled":function(data){
//				   var id=$.jstree.reference(data.reference).get_node(data.reference).id;
//				   if(id=="0"){
//					   return false;
//				   }
				   var dom=$.jstree.reference(data.reference).get_node(data.reference);
				   if(dom.parents.length>=3){
					   return true;
				   }
				   return false;
			   },
			    "action":function(data){
				  var inst = $.jstree.reference(data.reference),
								obj = inst.get_node(data.reference);
							inst.create_node(obj, {}, "last", function (new_node) {
							 new_node.icon="glyphicon glyphicon-file";
							 var parentCode=new_node.parent;
							 inst.edit(new_node,null,function(data){
							   addNode(parentCode,data.text);
							 });
							 
							});
				}
			  },
			  "rename":{
	    		  "label":"重命名",
	    		  "_disabled":function(data){
					   var id=$.jstree.reference(data.reference).get_node(data.reference).id;
					   if(id=="0"){
						   return true;
					   }
					   return false;
				   },
	    		  "action":function(data){
	    		    	var inst = $.jstree.reference(data.reference),
	    							obj = inst.get_node(data.reference);
	    						inst.edit(obj,null,function(data){
	    							updateNode(data.data.id,data.id,data.text);
								});
	    		  }
			  
			  },
			  "remove":{
			   "label":"删除",
			   "_disabled":function(data){
				   var id=$.jstree.reference(data.reference).get_node(data.reference).id;
				   var childSize=$.jstree.reference(data.reference).get_node(data.reference).children.length;
				   if(id=="0"||childSize>0){
					   return true;
				   }
				   return false;
			   },
			     "action": function (data) {
							var inst = $.jstree.reference(data.reference),
								obj = inst.get_node(data.reference);
							if(inst.is_selected(obj)) {
								inst.delete_node(inst.get_selected());
							}
							else {
								inst.delete_node(obj);
							}
							console.log(obj.data.id);
							deleteNode(obj.data.id);
						}
			  
			  }
			}*/
$('#classTree').jstree({
						'core' : {
							'data' : treeData,
							'check_callback':true
						}
});
	  $("#classTree").on("show_contextmenu.jstree",function(e,data){
			var parentId=data.node.data.parentId;
			if($(".vakata-contextmenu-disabled").length==3){
			  $(".vakata-context").hide();
			}
			if(parentId!=0){
			 $(".vakata-contextmenu-disabled").hide();
			}
			  return true;
			});
	
}