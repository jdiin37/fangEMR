/*
jQWidgets v5.2.0 (2017-Sep)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
!function(e){e.extend(e.jqx._jqxGrid.prototype,{getcolumnindex:function(e){var o=this.getcolumn(e);return this.columns.records.indexOf(o)},setcolumnindex:function(o,r,t){if(!((h=this.getcolumn(o)).pinned||h.hidden||h.checkboxcolumn||h.grouped)){var n=this.columns.records.indexOf(h);this.columns.records.splice(n,1),this.columns.records.splice(r,0,h);var s=0,i=this.headerZIndex;this.columnsrow.children().detach();var d=this.toThemeProperty("jqx-grid-cell");d+=" "+this.toThemeProperty("jqx-grid-cell-pinned"),this.filterrow&&(e(this.filterrow.children()[0]).children().detach(),this.filterrow[0].cells=[]);var l=this,c=null;if(void 0!=l.filterrow)c=e(l.filterrow.children()[0]);this.columnsrow[0].cells=[];var u=!1;if(e.each(this.columns.records,function(o,r){var t=this.uielement;l.columnsrow.append(t),l.rtl?t.css("z-index",i++):t.css("z-index",i--);var n=this.width;if(t.css("left",s),l.columnsrow[0].cells[l.columnsrow[0].cells.length]=t[0],l.filterrow){var a=e('<div style="overflow: hidden; position: absolute; height: 100%;" class="'+d+'"></div>');c.append(a),a.css("left",s),a.css("z-index",i+1),a.width(this.width),a[0].left=s,a.append(this._filterwidget),l.filterrow[0].cells[l.filterrow[0].cells.length]=a[0]}this.hidden&&(u=!0),this.hidden&&this.hideable||(s+=n)}),this.groupable){var a=this.groups.length;a>0&&n-a>=0&&(n-=a,r-=a)}this.rowdetails&&n-1>=0&&(n--,r--),"checkbox"==this.selectionmode&&n-1>=0&&(n--,r--);var h=this._columns[n];this._columns.splice(n,1),this._columns.splice(r,0,h),this._raiseEvent(24,{columntext:h.text,datafield:h.datafield,oldindex:n,newindex:r}),0!=t&&(u||"checkbox"==h.columntype?(this.prerenderrequired=!0,this.rendergridcontent(!0,!1),this._updatecolumnwidths(),this._updatecellwidths()):(this._updatecolumnwidths(),this._updatecellwidths()),this._updatefilterrowui&&this.filterable&&this.showfilterrow&&this._updatefilterrowui(),this.showeverpresentrow&&this._updateaddnewrowui(),this._rendercolumngroups(),this._renderrows(this.virtualsizeinfo))}},_pinnedColumnsLength:function(){var o=0;return e.each(this.columns.records,function(){this.pinned&&o++,this.grouped&&o++}),"checkbox"==this.selectionmode&&o++,o},_handlecolumnsreorder:function(){var o=this,r=-1,t=!1;if(o.columnsreorder){var n="mousemove.reorder"+this.element.id,s="mousedown.reorder"+this.element.id,i="mouseup.reorder"+this.element.id,d=!1;this.isTouchDevice()&&!0!==this.touchmode&&(d=!0,n=e.jqx.mobile.getTouchEventName("touchmove")+".reorder"+this.element.id,s=e.jqx.mobile.getTouchEventName("touchstart")+".reorder"+this.element.id,i=e.jqx.mobile.getTouchEventName("touchend")+".reorder"+this.element.id),this.removeHandler(e(document),n),this.addHandler(e(document),n,function(e){if(o.resizing)return!0;if(null!=o.reordercolumn){var n=parseInt(e.pageX),s=parseInt(e.pageY);if(d){var i=o.getTouches(e)[0];void 0!=i&&(n=parseInt(i.pageX),s=parseInt(i.pageY))}var l=o.host.coord(),c=parseInt(l.left),u=parseInt(l.top);void 0!=o.dragmousedownoffset&&null!=o.dragmousedownoffset||(o.dragmousedownoffset={left:0,top:0});var a=parseInt(n)-parseInt(o.dragmousedownoffset.left),h=parseInt(s)-parseInt(o.dragmousedownoffset.top);if(o.reordercolumn.css({left:a+"px",top:h+"px"}),t=!1,n>=c&&n<=c+o.host.width()&&s>=u&&s<=u+o.host.height()&&(t=!0),r=-1,t){o.reordercolumnicon.removeClass(o.toThemeProperty("jqx-grid-dragcancel-icon")),o.reordercolumnicon.addClass(o.toThemeProperty("jqx-grid-drag-icon"));var m=o.columnsheader.coord(),p=m.top+o.columnsheader.height();null!=o.columnsdropline&&(s>=m.top&&s<=p?r=o._handlereordercolumnsdroplines(n):o.columnsdropline.fadeOut("slow"))}else null!=o.columnsdropline&&o.columnsdropline.fadeOut("slow"),o.reordercolumnicon.removeClass(o.toThemeProperty("jqx-grid-drag-icon")),o.reordercolumnicon.addClass(o.toThemeProperty("jqx-grid-dragcancel-icon"));if(d)return e.preventDefault(),e.stopPropagation(),!1}}),this.columnsbounds=new Array,this.removeHandler(e(document),s),this.addHandler(e(document),s,function(r){if(o.resizing)return!0;o.columnsbounds=new Array;var t=o.host.coord().left,n=o.host.coord().top;o.showtoolbar&&(n+=o.toolbarheight),o.groupable&&o.showgroupsheader&&(n+=o.groupsheaderheight);var s=0;e.each(o.columns.records,function(r){var i=this;if(i.hidden)return o.columnsbounds[o.columnsbounds.length]={top:n,column:i,left:t,width:0,height:2+o.rowsheight},!0;0==s&&(t=o.rtl?"hidden"!=o.hScrollBar.css("visibility")?parseInt(o.host.coord().left)-o.hScrollInstance.max+o.hScrollInstance.value:"hidden"==o.vScrollBar.css("visibility")?e(i.element).coord().left:e(i.element).coord().left-o.vScrollBar.width()-o.host.offset().left:parseInt(o.host.coord().left)-o.hScrollInstance.value),s++;var d=2+o.columnsheight;o.columnshierarchy&&(n=e(i.uielement).coord().top,d=e(i.uielement).height()),o.columnsbounds[o.columnsbounds.length]={top:n,column:i,left:t,width:i.width,height:d},t+=i.width})}),this.removeHandler(e(document),i),this.addHandler(e(document),i,function(n){if(o.resizing)return!0;o.__drag=!1,e(document.body).removeClass("jqx-disableselect");parseInt(n.pageX),parseInt(n.pageY);if(d){var s=o.getTouches(n)[0];parseInt(s.pageX),parseInt(s.pageY)}var i=o.host.coord();parseInt(i.left),parseInt(i.top),o.groupsheader.height();if(o.showtoolbar&&o.toolbarheight,o.columndragstarted=!1,o.dragmousedown=null,null!=o.reordercolumn){var l=e.data(o.reordercolumn[0],"reorderrecord"),c=o.columns.records.indexOf(o.getcolumn(l));o.reordercolumn.remove(),o.reordercolumn=null;var u=0;if(u+=o._pinnedColumnsLength(),null!=l){if(t&&-1!=r){var a=r.index;if(a>=u){var h=o.columns.records[a];if(void 0!=h){m=o.columns.records.indexOf(o.getcolumn(h.datafield));if(null==h.datafield)var m=o.columns.records.indexOf(o.getcolumnbytext(h.text));if(o.columngroups){var p=h;if(c<m&&"before"==r.position&&(p=o.columns.records[m-1]),p.columngroup!=o.getcolumn(l).columngroup)return void(null!=o.columnsdropline&&(o.columnsdropline.remove(),o.columnsdropline=null))}c<m?"before"==r.position?o.setcolumnindex(l,m-1):o.setcolumnindex(l,m):c>m&&o.setcolumnindex(l,m),o.autosavestate&&o.savestate&&o.savestate()}}}null!=o.columnsdropline&&(o.columnsdropline.remove(),o.columnsdropline=null)}}})}},getcolumnbytext:function(o){var r=null;return this.columns.records&&e.each(this.columns.records,function(){if(this.text==o)return r=this,!1}),r},_handlereordercolumnsdroplines:function(o){var r=this,t=-1,n=r._pinnedColumnsLength(),s=parseInt(r.host.coord().left)+r.host.width(),i="hidden"!=r.vScrollBar.css("visibility")?19:0;return r.rtl||(i=0),e.each(r.columnsbounds,function(e){if(e>=n){if(0==this.width)return!0;if(o<=this.left+this.width/2)return o>s?(r.columnsdropline.fadeOut(),!1):(r.columnsdropline.css("left",i+parseInt(this.left)+"px"),r.columnsdropline.css("top",parseInt(this.top)+"px"),r.columnsdropline.height(this.height),r.columnsdropline.fadeIn("slow"),t={index:e,position:"before"},!1);if(o>=this.left+this.width/2){if(this.left+this.width>s)return r.columnsdropline.fadeOut(),!1;r.columnsdropline.css("left",i+1+this.left+this.width),r.columnsdropline.css("top",this.top),r.columnsdropline.height(this.height),r.columnsdropline.fadeIn("slow"),t={index:e,position:"after"}}}}),t},_createreordercolumn:function(o,r,t){var n=this,s=r;n.reordercolumn&&n.reordercolumn.remove(),n.columnsdropline&&n.columnsdropline.remove(),n.reordercolumn=e("<div></div>");var i=o.clone();n.reordercolumn.css("z-index",999999),i.css("border-width","1px"),i.css("opacity","0.4");var d=e(i.find("."+n.toThemeProperty("jqx-grid-column-menubutton")));d.length>0&&d.css("display","none");var l=e(i.find(".jqx-icon-close"));l.length>0&&l.css("display","none"),n.reordercolumnicon=e('<div style="z-index: 9999; position: absolute; left: 100%; top: 50%; margin-left: -18px; margin-top: -7px;"></div>'),n.reordercolumnicon.addClass(n.toThemeProperty("jqx-grid-drag-icon")),n.reordercolumn.css("float","left"),n.reordercolumn.css("position","absolute");n.host.coord();i.width(o.width()+16),n.reordercolumn.append(i),n.reordercolumn.height(o.height()),n.reordercolumn.width(i.width()),n.reordercolumn.append(n.reordercolumnicon),e(document.body).append(n.reordercolumn),i.css("margin-left",0),i.css("left",0),i.css("top",0),n.reordercolumn.css("left",s.left+n.dragmousedown.left),n.reordercolumn.css("top",s.top+n.dragmousedown.top),void 0!=t&&t&&(n.columnsdropline=e('<div style="z-index: 9999; display: none; position: absolute;"></div>'),n.columnsdropline.width(2),n.columnsdropline.addClass(n.toThemeProperty("jqx-grid-group-drag-line")),e(document.body).append(n.columnsdropline))},_handlecolumnsdragreorder:function(o,r){this.reordercolumn&&this.reordercolumn.remove(),this.columnsdropline&&this.columnsdropline.remove(),this.dragmousedown=null,this.dragmousedownoffset=null,this.columndragstarted=!1,this.reordercolumn=null;var t=this,n=!1;this.isTouchDevice()&&!0!==this.touchmode&&(n=!0);var s="mousedown.drag",i="mousemove.drag";n?(s=e.jqx.mobile.getTouchEventName("touchstart")+".drag",i=e.jqx.mobile.getTouchEventName("touchmove")+".drag"):this.addHandler(r,"dragstart",function(e){return!1}),this.addHandler(r,s,function(r){if(0==o.draggable)return!0;if(t.resizing)return!0;t.__drag=!0;var s=r.pageX,i=r.pageY;if(n){var d=t.getTouches(r)[0];s=d.pageX,i=d.pageY}t.dragmousedown={left:s,top:i};var l=e(r.target).coord();return t.dragmousedownoffset={left:parseInt(s)-parseInt(l.left),top:parseInt(i-l.top)},!0}),this.addHandler(r,i,function(s){if(!o.draggable)return!0;if(void 0==o.datafield)return!0;if(o.pinned)return!0;if(t.resizing)return!0;if(t.dragmousedown){var d=s.pageX,l=s.pageY;if(n){var c=t.getTouches(s)[0];void 0!=c&&(d=c.pageX,l=c.pageY)}if(i={left:d,top:l},!t.columndragstarted&&null==t.reordercolumn){var u=Math.abs(i.left-t.dragmousedown.left),a=Math.abs(i.top-t.dragmousedown.top);(u>3||a>3)&&(t._createreordercolumn(r,i,!0),e(document.body).addClass("jqx-disableselect"),e.data(t.reordercolumn[0],"reorderrecord",o.datafield))}}})}})}(jqxBaseFramework);

