scal.addMethods({_setupPlanner:function(_1){var _2={};_1.each(function(_3){var _4=_3.cls?_3.cls:"dayboxevent";if(Object.isString(_3.period)){var _5=new Date(_3.period);_2[_5]={cls:_4,val:_3.label};}else{_3.period.each(function(d){_2[d]={cls:_4,val:_3.label};});}});return _2;},_updatePlanner:function(_7,el){if(this.planner[_7]){var _9=this.planner[_7].cls?this.planner[_7].cls+" dayboxevent":"dayboxevent";this.planner[_7].val.each(function(_a){el.insert(new Element("p",{"class":_9}).update(_a));});}},_setPlanner:function(_b,_c,_d){if(this.planner[_d]){this.planner[_d].val.push(_c.join(","));if(arguments[3]&&(!this.planner[_d].cls.include(arguments[3]))){this.planner[_d].cls+=" "+arguments[3];}}else{this.planner[_d]={cls:_b,val:_c};}},_compareMonthYear:function(_e,_f){return Object.isUndefined(["getMonth","getFullYear"].find(function(n){return _e[n]()!=_f[n]();}));},getDatesByEvent:function(evt){var _12=[];for(var d in this.planner){var _14=this.planner[d].val.indexOf(evt);if(_14>=0){_12.push(new Date(d));}}return _12;},getEventsByDate:function(d){return this.planner[d]?this.planner[d].val:false;},getCurrentEvents:function(){var _16=arguments[0]?this.currentdate.getMonth():false;var _17=function(d){if(_16){return this.planner[d]&&(d.getMonth()==_16)?true:false;}else{return this.planner[d]?true:false;}}.bind(this);var _19=[];this.dateRange.each(function(d,i){if(_17(d)){_19.push({dt:d,target:this.cells[i]});}}.bind(this));return _19;},removeEventsByDate:function(d){if(this.planner[d]){var _1d=this._getCellIndexByDate(d);if(Object.isNumber(arguments[1])){var _1e=arguments[1];this.planner[d].val=this.planner[d].val.without(_1e);this.cells[_1d].select(".dayboxvalue p")[_1e].remove();}else{delete this.planner[d];this.cells[_1d].select(".dayboxvalue").invoke("remove");}}else{return false;}},getEventElementsByDate:function(d){return this.getElementByDate(d).select("p.dayboxevent");},getEventElementsByWeek:function(_20){return this.getElementsByWeek(_20).collect(function(e){return e.select("p.dayboxevent");});},getSelectedEvents:function(){return this.getSelectedElement().select("p.dayboxevent");},getTodaysEvents:function(){return this.getTodaysElement().select("p.dayboxevent");},updateDayValue:function(_22,day,_24){var _25="dayboxevent";if(arguments[3]){_25+=" "+arguments[3];}var _26=Object.isArray(_24)?_24:[_24];_22-=1;day-=1;this.dateRange.eachSlice(7,function(wk,i){if(i==_22){this._setPlanner(_25,_26,wk[day],arguments[3]);throw $break;}}.bind(this));var _29=".cal_day_"+_22+"_"+day+"_value";var el=this.element.select(_29)[0];_26.each(function(val){el.insert(new Element("p",{"class":_25}).update(_24));});return el;},setPlannerValue:function(_2c,_2d,day,_2f){var _30="dayboxevent";if(arguments[4]){_30+=" "+arguments[4];}var _31=Object.isArray(_2f)?_2f:[_2f];plannerdate=new Date().set({Hours:[0,0,0,0],Year:_2c,Month:_2d-1,Date:day});this._setPlanner(_30,_31,plannerdate,arguments[4]);if(!this._compareMonthYear(this.currentdate,plannerdate)){return;}var _32=this._getCellIndexByDate(plannerdate);var el=this.cells[_32].select(".dayboxvalue")[0];_31.each(function(val){el.insert(new Element("p",{"class":_30}).update(val));});return el;}});