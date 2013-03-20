var prjName = $.prjName = document.location.pathname.substring(0,document.location.pathname.replace(new RegExp('^/', 'g'),'').indexOf('/')+1);
$(function(){
	var grid = $('#shownews').datagrid({
				fit: true, nowrap: false,
				striped: true, url:$.prjName+"/admin/newsAction_selectAllNews",
				sortName: 'uploadTime', sortOrder: 'desc', idField:'photoName',pageSize: 15,
				pageList: [10, 15, 20, 25, 30, 35, 40, 45, 50],
				frozenColumns:[[
		                {field:'ck',checkbox:true}
		                
				]],
				columns:[[
						{field:'notagTitle',title:'新闻标题',width:150,sortable:true,align:'left'/*, formatter: function(value, rec){
		                	
		                }*/},
				        {field:'nsSubtitle',title:'基本内容',width:420},
						{field:'nsAddtime',title:'上传时间',width:140,sortable:true}
						/*{field:'photoWidth',title:'宽度',width:150},
						{field:'photoHeight',title:'高度',width:100,align:'center',
							formatter:function(value,rec){
								return '<span style="color:red">Edit Delete</span>';
							}
						}*/
				]],
				pagination:true, rownumbers:true, singleSelect:false,
				toolbar: [{
					text:'添加新闻', iconCls:'icon-add',
					handler: function(){
						formObjs.openAddnews();
					}
				},{
					text:'删除新闻', iconCls:'icon-remove',
					handler: function(){
						//提示是否删除
						$.messager.confirm('删除确认', '你真的要删除选中的记录吗?', function(isDel){
							if(isDel){
								//提取待删除的数据编号
								var delIds = getSelections();
								//发现服务器
								$.post("/handsonws/admin/newsAction_delNews",
								{nsid: delIds},
								function(result, textStatus){
									if(result.content){
										$('#shownews').datagrid('reload');
									}else{
										$.messager.alert('错误消息', '消息类型错误！', 'error');
									}
								},
								"json");
							}
						});
					}
				},'-',{
					text:'修改新闻', iconCls:'icon-edit',
					handler: function(){
						formObjs.openEditNews();
					}
				}],
				onSortColumn:function(sort,order){}
	});
});
/**
 * 定制表单对象
 * @type object
 */
var formObjs = {
	//打开添加新闻表单
	openAddnews: function(){
		if(!top.$.addnewsdlg ){
		top.$.addnewsdlg = top.$("#addnews").dialog({iconCls: 'icon-add', width:850, height: 450, modal:false,
			href: $.prjName+'/admin/newsAction_initNews',maximizable: true, title:"添加新闻",
			buttons:{
				'保存':function(){
					//让标题栏重新获得焦点
					parent.$("#newsTitle").focus();
					//var queryString = top.$('#newsForm').formSerialize();alert(queryString);
					var options = {
						url: $.prjName+'/admin/newsAction_addNews',
						dataType: 'json',
						success: function(data) { 
							parent.$.messager.alert(data.title,data.content,"success");
						},
						error: function(data){
							parent.$.messager.alert(data.title,data.content,"error");
						}};
					top.$('#newsForm').ajaxSubmit(options);
					/*top.$('#newsForm').submit();*/
				},
				'撤销':function(){
					if(top != null)
					$(this).dialog({closed:true});
					else
					$(this).dialog({closed: true});
				}
			}
		});
		}else{
			top.$('#addnews').dialog({closed:false, showType:null});
		}
	},
	openEditNews: function(){
		var rowObj = getSelected();
		if(rowObj == null){
			top.$.messager.alert("错误消息","请选中一条新闻","error");
			return;
		}
		//if(!top.$.addnewsdlg ){
		top.$.addnewsdlg = top.$("#addnews").dialog({iconCls: 'icon-edit', width:850, height: 450, modal:false,
			href: $.prjName+'/admin/newsAction_initUpdateNewsPage?nsid='+rowObj.nsId, maximizable: true,
			title: "修改新闻",
			buttons:{
			}
		});
		/*}else{
			top.$('#addnews').dialog({closed:false, showType:null});
		}*/
	}
};

function getSelected(){
	var selected = $('#shownews').datagrid('getSelected');
	return selected;
}

function getSelections(){
		var ids = [];
		var rows = $('#shownews').datagrid('getSelections');
		for(var i=0;i<rows.length;i++){
			ids.push(rows[i].nsId);
		}
		return ids.join(',');
	}